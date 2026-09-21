Architecture

Browser UI
  → local Node.js server (server.js)
  → IMDb suggestion API + IMDb GraphQL API
  → local Node.js server
  → Browser UI

- index.html defines the UI.
- styles.css handles responsive layout, dark mode, expanded rows, and poster styling.
- app.js manages the movie list, search/filtering/sorting, local storage, modal form, and DOM updates.
- server.js is a Node.js HTTP server bound to port 4173.

For a manually added title:

1. app.js sends a same-origin request to:
   /api/imdb?title=Arrival&year=2016
2. server.js calls IMDb’s title-suggestion endpoint to resolve the title to an IMDb ID, such as tt2543164.
3. server.js sends an IMDb GraphQL request using that ID and retrieves:
   - titleText
   - releaseYear
   - ratingsSummary.aggregateRating
   - genres
   - plot.plotText
   - primaryImage.url
4. The server returns normalized JSON to the browser.
5. app.js creates the movie object, renders it, and persists manual additions in localStorage under after-hours-manual-movies.
Poster delivery uses a local proxy endpoint:
/api/poster-image?id=tt2543164

The Node server fetches IMDb’s primaryImage.url, returns the JPEG from the same local origin, and sets a long-lived HTTP cache header. This avoids phone-side cross-origin/hotlink issues. Browser caching retains poster responses; the server also maintains an in-memory IMDb-ID-to-poster-URL cache while it runs.
Other persisted browser state uses localStorage:
- after-hours-posters — poster URL cache
- after-hours-removed — removed title IDs
- after-hours-manual-movies — user-added titles
- after-hours-theme — dark/light preference


For newly added movies, it works like this:
1. You type a movie title.
2. Your phone/computer asks the local Movie Manager server.
3. That server searches IMDb to find the correct title.
4. It asks IMDb for the movie’s genre, year, rating, synopsis, IMDb ID, and poster image.
5. The server sends those details back to the website.
6. The movie is added to your list and saved in your browser.

For posters:
- Each movie row asks the local server for its IMDb poster.
- The local server fetches the image from IMDb and passes it to the website.
- Your browser caches that image, so it loads faster next time.
- If IMDb has no usable poster, the app shows a title-based fallback tile instead.

One important detail: the original 116 movies' text details are stored in the app already. 
New movies use the live IMDb lookup automatically.