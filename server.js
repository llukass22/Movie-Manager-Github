const http = require('http');
const fs = require('fs');
const path = require('path');

const root = __dirname;
const port = Number(process.env.PORT || 4173);
const mimeTypes = { '.html':'text/html; charset=utf-8', '.js':'text/javascript; charset=utf-8', '.css':'text/css; charset=utf-8', '.webmanifest':'application/manifest+json; charset=utf-8', '.png':'image/png', '.svg':'image/svg+xml' };
const normalizeTitle = value => value.toLowerCase().replace(/^the\s+/, '').replace(/[^a-z0-9]/g, '');
const posterCache = new Map();
const posterCacheDirectory = path.join(root, '.poster-cache');
fs.mkdirSync(posterCacheDirectory, { recursive:true });
const posterCachePath = (imdbId, extension) => path.join(posterCacheDirectory, `${imdbId}.${extension}`);

function sendJson(response, status, body) {
  response.writeHead(status, { 'Content-Type':'application/json; charset=utf-8', 'Cache-Control':'no-store' });
  response.end(JSON.stringify(body));
}

async function searchImdb(title, desiredYear) {
  const initial = encodeURIComponent(title.charAt(0).toLowerCase());
  const response = await fetch(`https://v3.sg.media-imdb.com/suggestion/${initial}/${encodeURIComponent(title)}.json`, { signal:AbortSignal.timeout(15000) });
  if (!response.ok) throw new Error('IMDb search is unavailable. Please try again.');
  const suggestions = await response.json();
  const seen = new Set();
  return (suggestions.d || []).filter(item => {
    if (!/^tt\d+$/.test(item.id || '') || !item.l || seen.has(item.id) || (desiredYear && item.y !== desiredYear)) return false;
    seen.add(item.id); return true;
  }).map(item => ({ imdbId:item.id, title:item.l, year:item.y ?? null, type:item.q || '' }));
}

async function lookupImdb(imdbId) {
  const query = `query { title(id: "${imdbId}") { titleText { text } releaseYear { year } ratingsSummary { aggregateRating } genres { genres { text } } plot { plotText { plainText } } primaryImage { url } } }`;
  const metadata = await fetch('https://api.graphql.imdb.com/', { method:'POST', signal:AbortSignal.timeout(15000), headers:{ 'content-type':'application/json', 'origin':'https://www.imdb.com', 'x-imdb-client-name':'imdb-web-next-localized', 'user-agent':'Movie Manager local lookup' }, body:JSON.stringify({ query }) }).then(result => result.json());
  const item = metadata.data?.title;
  if (!item?.titleText?.text) throw new Error('IMDb metadata is unavailable for this title.');
  return { imdbId, title:item.titleText.text, year:item.releaseYear?.year || '—', rating:item.ratingsSummary?.aggregateRating ?? null, genre:(item.genres?.genres || []).slice(0,2).map(entry => entry.text).join(' / ') || 'Unclassified', description:item.plot?.plotText?.plainText || 'IMDb does not currently provide a short plot summary for this title.', poster:item.primaryImage?.url || null };
}

async function lookupPoster(imdbId) {
  if (!/^tt\d+$/.test(imdbId || '')) throw new Error('Invalid IMDb title ID.');
  if (posterCache.has(imdbId)) return { poster:posterCache.get(imdbId) };
  try {
    const saved = JSON.parse(fs.readFileSync(posterCachePath(imdbId, 'json'), 'utf8'));
    if (saved.poster) { posterCache.set(imdbId, saved.poster); return saved; }
  } catch { /* The poster has not been cached yet. */ }
  const query = `query { title(id: "${imdbId}") { primaryImage { url } } }`;
  const metadata = await fetch('https://api.graphql.imdb.com/', { method:'POST', headers:{ 'content-type':'application/json', 'origin':'https://www.imdb.com', 'x-imdb-client-name':'imdb-web-next-localized', 'user-agent':'Movie Manager local lookup' }, body:JSON.stringify({ query }) }).then(result => result.json());
  const poster = metadata.data?.title?.primaryImage?.url;
  if (!poster) throw new Error('No poster is available for this IMDb title.');
  posterCache.set(imdbId, poster);
  const saved = { poster };
  fs.writeFile(posterCachePath(imdbId, 'json'), JSON.stringify(saved), () => {});
  return saved;
}

http.createServer(async (request, response) => {
  const url = new URL(request.url, `http://${request.headers.host}`);
  if (url.pathname === '/api/imdb/search') {
    const title = url.searchParams.get('title')?.trim(); const year = Number(url.searchParams.get('year')) || null;
    if (!title) return sendJson(response, 400, { error:'A movie title is required.' });
    try { return sendJson(response, 200, { results:await searchImdb(title, year) }); }
    catch (error) { return sendJson(response, 502, { error:error.message || 'IMDb lookup failed.' }); }
  }
  if (url.pathname === '/api/imdb') {
    const imdbId = url.searchParams.get('id');
    if (!/^tt\d+$/.test(imdbId || '')) return sendJson(response, 400, { error:'Select a movie from the search results first.' });
    try { return sendJson(response, 200, await lookupImdb(imdbId)); }
    catch (error) { return sendJson(response, 502, { error:error.message || 'IMDb lookup failed.' }); }
  }
  if (url.pathname === '/api/poster') {
    try { return sendJson(response, 200, await lookupPoster(url.searchParams.get('id'))); }
    catch (error) { return sendJson(response, 404, { error:error.message || 'Poster lookup failed.' }); }
  }
  if (url.pathname === '/api/poster-image') {
    try {
      const imdbId = url.searchParams.get('id');
      if (!/^tt\d+$/.test(imdbId || '')) throw new Error('Invalid IMDb title ID.');
      const cachedImagePath = posterCachePath(imdbId, 'img');
      try {
        const bytes = await fs.promises.readFile(cachedImagePath);
        response.writeHead(200, { 'Content-Type':'image/jpeg', 'Cache-Control':'public, max-age=2592000, immutable' });
        return response.end(bytes);
      } catch { /* Fetch and store the image below. */ }
      const { poster } = await lookupPoster(imdbId);
      const image = await fetch(poster); if (!image.ok) throw new Error('Poster image could not be retrieved.');
      const bytes = Buffer.from(await image.arrayBuffer());
      fs.writeFile(cachedImagePath, bytes, () => {});
      response.writeHead(200, { 'Content-Type':image.headers.get('content-type') || 'image/jpeg', 'Cache-Control':'public, max-age=2592000, immutable' });
      return response.end(bytes);
    } catch (error) { response.writeHead(404); return response.end('Poster unavailable'); }
  }
  const requested = url.pathname === '/' ? 'index.html' : decodeURIComponent(url.pathname).replace(/^[/\\]+/, '');
  const filePath = path.resolve(root, requested);
  if (!filePath.startsWith(root + path.sep) && filePath !== path.join(root, 'index.html')) { response.writeHead(403); return response.end('Forbidden'); }
  fs.readFile(filePath, (error, data) => { response.writeHead(error ? 404 : 200, { 'Content-Type':mimeTypes[path.extname(filePath)] || 'application/octet-stream', 'Cache-Control':'no-store' }); response.end(error ? 'Not found' : data); });
}).listen(port, '0.0.0.0', () => console.log(`Movie Manager: http://localhost:${port}`));
