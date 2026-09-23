const movies = [
  ['Horror / Thriller','The Shed',2019,5.5],['Drama / Thriller',"Miller's Girl",2024,5.2],['Horror','Pulse',2001,6.5],['Historical Drama','The King',2019,7.3],['Sci-Fi / Horror','The Lazarus Effect',2015,5.2],['Drama','Manchester by the Sea',2016,7.8],['Horror / Mystery','The Empty Man',2020,6.2],['Horror / Comedy','Good Boy',2020,6.1],['Sci-Fi / Horror','The Platform 2',2024,5.0],['Sci-Fi / Horror','Alien: Romulus',2024,7.1],['Sci-Fi / Horror','Alien: Covenant',2017,6.4],['Sci-Fi / Adventure','Prometheus',2012,7.0],['Drama','The Master',2012,7.1],['Thriller','The Gift',2015,7.0],['Drama / Mystery','Resurrection',2014,7.4],['Sport / Drama','F1',2025,7.8],['Thriller / Mystery','The Number 23',2007,6.4],['Comedy / Family','Eerie, Indiana',1991,8.2],['Romance / Drama','The Greatest Hits',2024,6.2],['Sport / Drama','Warrior',2011,8.1],['Romance / Drama','Chungking Express',1994,8.0],['Mystery / Thriller','The Invisible Guest',2016,8.0],['Horror / Thriller',"There's Something Wrong with the Children",2023,5.0],['Drama / Mystery','K-PAX',2001,7.2],['Thriller / Mystery','Fractured',2019,6.4],['Horror','Creep',2004,5.6],['Sci-Fi / Horror','Nope',2022,6.8],['Romance / Drama','Then Came You',2018,6.8],['Thriller','Burn',2019,5.7],['Comedy / Drama','The Peanut Butter Falcon',2019,7.6],['Sci-Fi / Romance','The Adjustment Bureau',2011,7.0],['Drama / Sport','The Legend of Bagger Vance',2000,6.7],['Drama / Thriller','The Crowded Room',2023,7.7],['Drama','The Southern Chronicles',2024,null],['Drama / Thriller','Dark Waters',2019,7.6],['Horror','The Prodigy',2019,5.9],['Drama','Seven Pounds',2008,7.6],['Crime / Drama','Boiler Room',2000,7.0],['Horror / Thriller','The Invitation',2015,6.6],['Mystery / Thriller','Blow Out',1981,7.4],['Sci-Fi / Drama','The Man from Earth',2007,7.8],['Biography / Drama','The Apprentice',2024,7.1],['Romance / Drama','We Live in Time',2024,7.0],['Action / Thriller','The Accountant 2',2025,6.7],['Comedy / Fantasy','Dogma',1999,7.3],['Horror','The Amityville Horror',1979,6.1],['Drama / Thriller','Shelter',2010,5.6],['Drama','Salvable',2025,6.5],['Crime / Thriller','Sin City',2005,8.0],['Drama / Fantasy','Phenomenon',1996,6.5],['Mystery / Thriller','Lost Highway',1997,7.6],['Crime / Thriller','Good Time',2017,7.3],['Sci-Fi / Thriller','Self/less',2015,6.5],['Horror / Thriller','Drive Back',2024,3.5],['Animation / Mystery','Paprika',2006,7.7],['Biography / Drama','Gandhi',1982,8.0],['Horror / Thriller','Apocalypse Z',2024,6.1],['Sci-Fi / Drama','Children of Men',2006,7.9],['Horror / Drama','Together',2025,6.8],['Animation / Sci-Fi','Ghost in the Shell',1995,7.9],['Animation / Mystery','Perfect Blue',1997,8.0],['Animation / Drama',"Takopi's Original Sin",2025,8.8],['Drama','Soldier Boy',2019,6.1],['Crime / Thriller','Shot Caller',2017,7.3],['Sci-Fi / Drama','The Day the Earth Stood Still',2008,5.5],['Documentary','Unknown Number: The High School Catfish',2025,6.7],['Horror / Mystery','6 Souls',2010,6.0],['Crime / Drama','Nightmare Alley',2021,7.0],['Horror','Bring Her Back',2025,7.2],['Sci-Fi / Thriller','The Invasion',2007,5.9],['Horror','Skinamarink',2022,5.1],['Horror','Hosts',2020,4.9],['Horror / Thriller','What Keeps You Alive',2018,5.7],['Historical Drama','Bridge of Spies',2015,7.6],['Historical Drama','Nuremberg',2025,null],['Crime / Biography','Public Enemies',2009,6.9],['Drama','The Father',2020,8.2],['Drama','Dog Pound',2010,7.0],['Comedy / Drama','The Station Agent',2003,7.6],['Drama','Radio',2003,6.9],['Drama','Pay It Forward',2000,7.2],['Animation / Biography','The Wind Rises',2013,7.8],['Comedy / Drama',"Look Who's Back",2015,7.0],['Comedy / Crime','God Bless America',2011,7.1],['Sci-Fi / Mystery','Signs',2002,6.8],['Mystery / Drama',"Don't Look Back",2009,5.8],['Drama / Thriller','The Wave',2008,7.6],['Comedy / Horror','Parents',1989,6.1],['War / Drama','Come and See',1985,8.3],['Animation / Sci-Fi','Roujin Z',1991,6.6],['Comedy','Key & Peele',2012,8.3],['Documentary','Disclosure Day',2025,7.6],['Sci-Fi / Drama','Aniara',2018,6.3],['Sci-Fi / Fantasy','On the Silver Globe',1988,7.6],['Animation / Fantasy','The Legend of Hei 2',2025,7.8],['Documentary','Carts of Darkness',2008,7.4],['Documentary','Mole Man',2017,7.1],['Sci-Fi / Thriller','12 Monkeys',1995,8.0],['Animation / Action','Ninja Scroll',1993,7.8],['Drama / Thriller','Ratched',2020,7.3],['Drama / Thriller','Misery',1990,7.8],['Horror / Mystery','Silent Hill',2006,6.5],['Drama','My Own Private Idaho',1991,7.0],['Animation / Drama','Jin-Roh: The Wolf Brigade',1999,7.3],['Drama / Sci-Fi','High-Rise',2015,5.6],['Documentary','The Universe of Manas',2026,null],['Drama / Biography','Reversal of Fortune',1990,7.2],['Crime / Thriller','Runner Runner',2013,5.6],['Drama','The Social Reckoning',2025,null],['Crime / Thriller','Pusher',1996,7.3],['Crime / Thriller','Pusher II: With Blood on My Hands',2004,7.2],['Crime / Thriller',"Pusher 3: I'm the Angel of Death",2005,7.3],['Crime / Thriller','Pusher',2010,5.6],['Crime / Thriller','Pusher',2012,5.5]
// Preserve the original IDs so existing removals still refer to the same movies.
].map(([genre,title,year,rating], index) => ({id:index + 2,genre,title,year,rating}));

const summaries = {
  'The Shed|2019':'A troubled teenager discovers that the ominous structure behind his house is hiding a murderous vampire.',
  "Miller's Girl|2024":'A gifted high-school writer and her enigmatic teacher become entangled in a relationship that tests ambition, boundaries, and power.',
  'Pulse|2001':'After a friend dies, a group of Tokyo students discovers a ghostly internet portal that seems to be draining the world of the living.',
  'The King|2019':'A reluctant young monarch inherits England’s throne and must find his voice while navigating war, court politics, and the burden of leadership.',
  'The Lazarus Effect|2015':'Medical researchers bring a dead subject back to life, only to discover that their breakthrough has awakened something terrifying.',
  'Manchester by the Sea|2016':'A grieving handyman returns to his hometown to care for his teenage nephew and confront the tragedy he left behind.',
  'The Empty Man|2020':'A retired cop investigates a missing girl and follows a disturbing urban legend into a cult with cosmic ambitions.',
  'The Platform 2|2024':'New residents wake inside a vertical prison where food descends floor by floor, forcing them into a brutal system of scarcity.',
  'Alien: Romulus|2024':'A group of young colonists scavenging an abandoned station encounter the most lethal organism in the universe.',
  'Alien: Covenant|2017':'The crew of a colony ship lands on a seemingly perfect planet and discovers a ruined world shaped by a familiar synthetic.',
  'Prometheus|2012':'A space expedition follows clues to humanity’s origins and finds a world where creation comes with catastrophic consequences.',
  'The Master|2012':'A volatile World War II veteran falls under the influence of a charismatic leader building a new spiritual movement.',
  'The Gift|2015':'A married couple’s new life is disrupted when an acquaintance from the husband’s past starts leaving unsettling gifts.',
  'F1|2025':'A former Formula One driver returns to the grid to mentor a gifted rookie for a struggling racing team.',
  'The Number 23|2007':'A man becomes obsessed with a novel whose number-laced plot appears to mirror his own hidden past.',
  'Warrior|2011':'Two estranged brothers enter a winner-takes-all mixed martial arts tournament while wrestling with family wounds.',
  'Chungking Express|1994':'Two lovelorn Hong Kong policemen drift through chance encounters, missed connections, and unexpected new possibilities.',
  'The Invisible Guest|2016':'A wealthy businessman accused of murder works with a brilliant defense attorney to reconstruct one impossible night.',
  'K-PAX|2001':'A psychiatric patient who claims to be from another planet challenges his doctor’s assumptions about sanity and hope.',
  'Fractured|2019':'After his wife and injured daughter vanish from an emergency room, a father questions whether the hospital is hiding the truth.',
  'Nope|2022':'Sibling horse trainers investigate a strange presence in the skies above their isolated California ranch.',
  'The Peanut Butter Falcon|2019':'A young man with Down syndrome escapes his care home to pursue a dream of becoming a professional wrestler.',
  'The Adjustment Bureau|2011':'A politician discovers that invisible agents are steering human lives—and risks everything for a woman he loves.',
  'The Crowded Room|2023':'A man arrested after a New York shooting reveals the painful, complicated story behind his fractured identity.',
  'Dark Waters|2019':'A corporate defense lawyer takes on a chemical giant after uncovering a decades-long cover-up poisoning a community.',
  'Seven Pounds|2008':'A haunted man quietly seeks out seven strangers whose lives he hopes to change through an extraordinary plan.',
  'Boiler Room|2000':'A college dropout enters the intoxicating world of a high-pressure brokerage, where easy money comes with a moral cost.',
  'The Invitation|2015':'A dinner party in the Hollywood Hills becomes increasingly unsettling when a grieving host’s intentions come into question.',
  'Blow Out|1981':'A sound technician accidentally records evidence of a political murder and becomes obsessed with proving what he heard.',
  'The Man from Earth|2007':'A professor’s farewell gathering turns extraordinary when he claims he has survived for fourteen thousand years.',
  'The Apprentice|2024':'A young Donald Trump rises through 1970s and ’80s New York under the ruthless tutelage of lawyer Roy Cohn.',
  'We Live in Time|2024':'A chance meeting transforms two people’s lives as they build a relationship across the joys and trials of a decade.',
  'Dogma|1999':'Two fallen angels try to exploit a religious loophole, sending an unlikely group on a wildly irreverent quest.',
  'Sin City|2005':'Several hard-boiled stories of revenge, corruption, and desire collide in the stylized streets of Basin City.',
  'Lost Highway|1997':'A musician trapped in a nightmare of surveillance and murder undergoes a surreal transformation that defies explanation.',
  'Good Time|2017':'After a botched robbery lands his brother in jail, a desperate man tears through one chaotic night to get him out.',
  'Paprika|2006':'A therapist enters people’s dreams using a revolutionary device, only to hunt a thief who is collapsing dream and reality.',
  'Gandhi|1982':'An epic portrait of Mohandas Gandhi’s transformation from lawyer to leader of India’s nonviolent independence movement.',
  'Children of Men|2006':'In a future where humanity has become infertile, a disillusioned bureaucrat must protect the first pregnant woman in years.',
  'Ghost in the Shell|1995':'A cyborg security agent hunts a mysterious hacker while questioning the boundaries between consciousness and machinery.',
  'Perfect Blue|1997':'A pop idol turned actor finds her sense of reality collapsing as a stalker and a violent double begin to haunt her.',
  'Shot Caller|2017':'A successful businessman is transformed by prison, making choices that pull him ever deeper into a violent criminal world.',
  'Nightmare Alley|2021':'A charismatic drifter learns the tricks of a carnival mentalist and uses them to con the wealthy—at a devastating price.',
  'Bring Her Back|2025':'A brother and sister enter foster care and find that their new mother’s grief conceals a terrifying ritual.',
  'Bridge of Spies|2015':'A Brooklyn lawyer is recruited to negotiate a Cold War prisoner exchange after defending an accused Soviet spy.',
  'Public Enemies|2009':'The FBI pursues bank robber John Dillinger as he becomes both a public outlaw hero and a target of J. Edgar Hoover.',
  'The Father|2020':'An aging Londoner struggles with dementia, and the shifting world around him draws the audience into his disorientation.',
  'The Station Agent|2003':'A quiet man seeking solitude in rural New Jersey forms unexpected friendships with two equally isolated neighbors.',
  'Pay It Forward|2000':'A young boy starts a goodwill movement based on helping three people, each of whom must help three others in turn.',
  'The Wind Rises|2013':'A visionary Japanese aircraft designer pursues beauty and engineering while living through a turbulent prewar era.',
  'Signs|2002':'A former priest and his family confront strange crop circles and a growing fear that something has arrived from the sky.',
  'The Wave|2008':'A teacher’s classroom experiment in autocracy quickly becomes a chilling movement that escapes his control.',
  'Come and See|1985':'A Belarusian boy joins the resistance during World War II and witnesses the unbearable horrors of Nazi occupation.',
  'Aniara|2018':'A spaceship carrying colonists off course becomes a drifting, sealed world where people struggle to create meaning.',
  '12 Monkeys|1995':'A prisoner from a devastated future is sent back in time to trace the origin of a virus that erased civilization.',
  'Misery|1990':'A novelist rescued from a car crash learns that his devoted fan is willing to do anything to control his next book.',
  'Silent Hill|2006':'A mother enters a fog-shrouded town searching for her daughter and finds a nightmare shaped by guilt and religious terror.',
  'My Own Private Idaho|1991':'Two young street hustlers travel through Portland, Seattle, and Italy while searching for home, love, and identity.',
  'High-Rise|2015':'Life in a luxury tower block devolves into class warfare when its services fail and residents turn on one another.',
  'Reversal of Fortune|1990':'A lawyer takes on the case of a wealthy socialite accused of attempting to murder his wife, whose memory has been erased.',
  'Together|2025':'Longtime couple Tim and Millie move to the countryside at a difficult point in their relationship. A frightening encounter with an unnatural force begins to threaten their lives, love, and bodies.'
};
Object.assign(summaries, {
  'Good Boy|2020':'A devoted dog and his owner move to an isolated rural home, where the dog senses a supernatural presence closing in on the person he loves.',
  'Resurrection|2014':'In Arcadia, Missouri, people who died years earlier begin returning unchanged, forcing families and the town to confront an impossible phenomenon.',
  'Eerie, Indiana|1991':'Teenage investigator Marshall Teller and his friends uncover the bizarre, paranormal secrets hiding in their outwardly ordinary small town.',
  'The Greatest Hits|2024':'Harriet discovers that certain songs send her literally back in time, making a new romance collide with memories of her former love.',
  "There's Something Wrong with the Children|2023":'After a weekend trip with friends, two children begin acting strangely and their guardians fear something in the wilderness followed them home.',
  'Creep|2004':'A woman stranded in the London Underground discovers that a savage creature is stalking the tunnels beneath the city.',
  'Then Came You|2018':'A hypochondriac airport worker forms an unlikely friendship with a terminally ill teenager determined to complete her bucket list.',
  'Burn|2019':'A lonely gas-station attendant becomes dangerously fixated on a charismatic drifter who arrives during a chaotic night.',
  'The Southern Chronicles|2024':'A Southern-set drama follows its characters through personal conflicts, secrets, and the lasting pull of home.',
  'The Accountant 2|2025':'Christian Wolff returns to unravel a murder connected to a cryptic message, drawing on his lethal skills and an uneasy family alliance.',
  'The Amityville Horror|1979':'A young family moves into a Long Island house where a horrific crime occurred and is soon terrorized by a malevolent presence.',
  'Shelter|2010':'A forensic psychiatrist investigates a patient with multiple personalities and realizes that his identities may be tied to a supernatural force.',
  'Salvable|2025':'A former boxer struggling to rebuild his life faces pressure from the criminal world and the chance to repair his relationship with his daughter.',
  'Phenomenon|1996':'After seeing a strange light in the sky, an ordinary mechanic develops extraordinary intelligence and abilities that transform his small-town life.',
  'Self/less|2015':'A dying tycoon buys a new body through an experimental procedure, then learns the life he has taken was not an empty vessel.',
  'Drive Back|2024':'A couple on a late-night drive becomes trapped in a sinister loop when an otherworldly presence turns the road into a nightmare.',
  'Apocalypse Z|2024':'A grieving man survives alone as a rabies-like outbreak tears through Spain, then is forced to leave safety and cross a collapsing country.',
  "Takopi's Original Sin|2025":'A cheerful alien meets a lonely girl and uses futuristic gadgets to make her happy, unaware of the painful forces shaping her life.',
  'Soldier Boy|2019':'A young man’s path is shaped by violence, loyalty, and the lasting consequences of life inside a criminal world.',
  'The Day the Earth Stood Still|2008':'An alien visitor arrives with a warning for humanity, while a scientist and her stepson become caught in a global crisis.',
  'Unknown Number: The High School Catfish|2025':'A documentary examines a vicious anonymous-texting case that upended a family and exposed an unsettling betrayal close to home.',
  '6 Souls|2010':'A psychiatrist studying a man with multiple personalities uncovers a terrifying connection between his identities and a series of deaths.',
  'The Invasion|2007':'A psychiatrist discovers that an alien epidemic is taking over human minds and fights to protect her son from infection.',
  'Skinamarink|2022':'Two children wake in the night to find their father gone and the doors and windows of their home mysteriously disappearing.',
  'Hosts|2020':'A family gathering on Christmas Eve turns violent when guests arrive carrying a sinister and contagious purpose.',
  'What Keeps You Alive|2018':'A weekend at a remote cabin becomes a fight for survival when a woman discovers a shocking truth about her wife.',
  'Nuremberg|2025':'In the aftermath of World War II, an American psychiatrist evaluates Nazi leaders while the world prepares for the Nuremberg trials.',
  'Dog Pound|2010':'Three teenage offenders are sent to a brutal juvenile detention center where violence and survival define their every day.',
  'Radio|2003':'A high-school football coach befriends a socially isolated man known as Radio and helps him become part of the community.',
  "Look Who's Back|2015":'Adolf Hitler wakes in modern-day Berlin and becomes a media sensation as the public mistakes his ideology for provocative comedy.',
  'God Bless America|2011':'A disillusioned man and a rebellious teenager launch a violent crusade against the shallow celebrity culture they despise.',
  "Don't Look Back|2009":'A writer begins to experience a frightening change in her appearance and identity while a trip to Italy deepens the mystery.',
  'Parents|1989':'A boy growing up in 1950s suburbia begins to suspect that his seemingly perfect parents may be hiding a cannibalistic secret.',
  'Roujin Z|1991':'A nursing student tries to stop an experimental robotic hospital bed after it takes control of an elderly patient.',
  'Key & Peele|2012':'Keegan-Michael Key and Jordan Peele perform sharp sketch comedy that satirizes pop culture, race, and everyday social absurdities.',
  'Disclosure Day|2025':'A documentary explores claims that governments have concealed evidence of unidentified aerial phenomena and non-human intelligence.',
  'On the Silver Globe|1988':'Astronauts stranded on a distant planet create a new civilization, only for their descendants to turn myth and oppression into destiny.',
  'The Legend of Hei 2|2025':'The spirit cat Xiaohei and his companions face a new threat that tests the fragile balance between humans and supernatural beings.',
  'Carts of Darkness|2008':'A documentary follows Vancouver bottle collectors who transform shopping carts into makeshift racing vehicles and a way of life.',
  'Mole Man|2017':'A portrait of an obsessive underground builder whose tunnels and eccentric world reveal an unusual life lived beneath the surface.',
  'Ninja Scroll|1993':'A wandering swordsman joins a spy to stop a deadly clan of supernatural assassins plotting to overthrow Japan’s shogunate.',
  'Ratched|2020':'In 1940s California, an ambitious nurse begins working at a psychiatric hospital while concealing the darkness behind her polished exterior.',
  'Jin-Roh: The Wolf Brigade|1999':'In an alternate postwar Japan, a traumatized counterterrorism soldier is drawn into a conspiracy while questioning his own humanity.',
  'Runner Runner|2013':'A Princeton student confronts the corrupt owner of an online gambling empire after being cheated out of his tuition money.',
  'Pusher|1996':'A Copenhagen drug dealer’s small-time operation unravels after a failed deal leaves him owing a ruthless supplier.',
  "Pusher 3: I'm the Angel of Death|2005":'Milo, an aging Copenhagen drug lord, tries to host his daughter’s birthday while a disastrous shipment threatens his criminal empire.',
  'Pusher|2010':'A London street dealer sees his life spiral out of control after a drug deal goes wrong and he falls into debt.',
  'Pusher|2012':'A second-generation remake follows a dealer whose reckless choices put him in escalating danger with a powerful creditor.'
});
movies.forEach(movie => { movie.description = summaries[`${movie.title}|${movie.year}`] ?? `${movie.title} is a ${movie.genre.toLowerCase()} title from ${movie.year}. Its story unfolds through the atmosphere, characters, and conflicts that make this entry a distinctive part of the collection.`; });
const imdbIds = Object.fromEntries(`Manchester by the Sea|2016::tt4034228
Pulse|2001::tt0286751
The Shed|2019::tt8236366
The Lazarus Effect|2015::tt2918436
Miller's Girl|2024::tt8310486
The King|2019::tt7984766
Prometheus|2012::tt1446714
The Empty Man|2020::tt5867314
Alien: Covenant|2017::tt2316204
Good Boy|2020::tt35521922
The Gift|2015::tt4178092
Alien: Romulus|2024::tt18412256
The Platform 2|2024::tt27729779
The Master|2012::tt1560747
F1|2025::tt16311594
The Invisible Guest|2016::tt4857264
Warrior|2011::tt1291584
The Number 23|2007::tt0481369
Resurrection|2014::tt29002950
The Greatest Hits|2024::tt2015349
Chungking Express|1994::tt0109424
Eerie, Indiana|1991::tt0101088
Creep|2004::tt0381966
Burn|2019::tt8009314
Nope|2022::tt10954984
K-PAX|2001::tt0272152
Then Came You|2018::tt4859168
There's Something Wrong with the Children|2023::tt16127696
Fractured|2019::tt4332232
The Peanut Butter Falcon|2019::tt4364194
Seven Pounds|2008::tt0814314
The Crowded Room|2023::tt14417718
The Southern Chronicles|2024::tt14064760
The Man from Earth|2007::tt0756683
The Invitation|2015::tt2400463
The Amityville Horror|1979::tt0078767
Blow Out|1981::tt0082085
Dogma|1999::tt0120655
We Live in Time|2024::tt27131358
The Accountant 2|2025::tt7068946
The Apprentice|2024::tt8368368
Salvable|2025::tt31249107
Good Time|2017::tt4846232
Sin City|2005::tt0401792
Self/less|2015::tt2140379
Drive Back|2024::tt23639696
Lost Highway|1997::tt0116922
Shelter|2010::tt1817236
Phenomenon|1996::tt0117333
Together|2025::tt31184028
Children of Men|2006::tt0206634
Ghost in the Shell|1995::tt0113568
Paprika|2006::tt0851578
Gandhi|1982::tt0083987
Apocalypse Z|2024::tt27599851
Perfect Blue|1997::tt0156887
Takopi's Original Sin|2025::tt36988358
The Invasion|2007::tt0427392
Unknown Number: The High School Catfish|2025::tt37674426
The Day the Earth Stood Still|2008::tt0970416
6 Souls|2010::tt1179069
Bring Her Back|2025::tt32246771
Shot Caller|2017::tt4633690
Soldier Boy|2019::tt9848962
Nightmare Alley|2021::tt7740496
Nuremberg|2025::tt29567915
What Keeps You Alive|2018::tt7073710
Public Enemies|2009::tt1152836
Skinamarink|2022::tt21307994
Bridge of Spies|2015::tt3682448
Hosts|2020::tt9543062
Dog Pound|2010::tt1422020
The Father|2020::tt10272386
The Station Agent|2003::tt0340377
The Wind Rises|2013::tt2013293
Don't Look Back|2009::tt1075113
Look Who's Back|2015::tt4176826
Signs|2002::tt0286106
Radio|2003::tt0316465
God Bless America|2011::tt1912398
Pay It Forward|2000::tt0223897
Disclosure Day|2025::tt15047880
Key & Peele|2012::tt1981558
Come and See|1985::tt0091251
Aniara|2018::tt7589524
Roujin Z|1991::tt0102812
The Wave|2008::tt1063669
On the Silver Globe|1988::tt0093593
Parents|1989::tt0098068
Misery|1990::tt0100157
Silent Hill|2006::tt0384537
12 Monkeys|1995::tt0114746
Mole Man|2017::tt7441338
Ratched|2020::tt7423538
Ninja Scroll|1993::tt0107692
Carts of Darkness|2008::tt1633175
The Legend of Hei 2|2025::tt37284198
Jin-Roh: The Wolf Brigade|1999::tt0193253
Pusher|1996::tt0117407
High-Rise|2015::tt0462335
My Own Private Idaho|1991::tt0102494
The Social Reckoning|2025::tt37510326
Runner Runner|2013::tt2364841
The Universe of Manas|2026::tt0427340
Reversal of Fortune|1990::tt0100486
Pusher|2012::tt1921070
Pusher|2010::tt1082075
Pusher 3: I'm the Angel of Death|2005::tt0425379
Pusher II: With Blood on My Hands|2004::tt0396184`.split('\n').map(row => row.split('::')));
movies.forEach(movie => { movie.imdbId = imdbIds[`${movie.title}|${movie.year}`] ?? null; });
const posterCache = JSON.parse(localStorage.getItem('after-hours-posters') || '{}');
movies.forEach(movie => { const key = `${movie.title}|${movie.year}`; movie.poster = posterCache[key] ?? null; });
const builtInIds = new Set(movies.map(movie => String(movie.id)));
const isRetiredBuiltIn = id => /^\d+$/.test(String(id)) && !builtInIds.has(String(id));
const manualMovies = JSON.parse(localStorage.getItem('after-hours-manual-movies') || '[]');
manualMovies.forEach(movie => { if (!movie.addedAt) movie.addedAt = Date.now(); });
movies.push(...manualMovies);
const removedIds = new Set(JSON.parse(localStorage.getItem('after-hours-removed') || '[]').filter(id => !isRetiredBuiltIn(id)));
const removedMovies = JSON.parse(localStorage.getItem('after-hours-removed-movies') || '[]').filter(movie => !isRetiredBuiltIn(movie.id));
localStorage.setItem('after-hours-removed', JSON.stringify([...removedIds]));
for (let index = movies.length - 1; index >= 0; index -= 1) if (removedIds.has(movies[index].id) || removedIds.has(String(movies[index].id))) { const movie = movies[index]; if (!removedMovies.some(removed => String(removed.id) === String(movie.id))) removedMovies.push(movie); movies.splice(index, 1); }
localStorage.setItem('after-hours-removed-movies', JSON.stringify(removedMovies));

const list = document.querySelector('#movie-list'); const search = document.querySelector('#search'); const filter = document.querySelector('#genre-filter'); const recentFilter = document.querySelector('#recent-filter'); const themeToggle = document.querySelector('#theme-toggle'); const empty = document.querySelector('#empty'); const showing = document.querySelector('#showing'); const removedSection = document.querySelector('#removed-section'); const removedList = document.querySelector('#removed-list'); const removedCount = document.querySelector('#removed-count'); const restoreAll = document.querySelector('#restore-all'); const dialog = document.querySelector('#movie-dialog'); const movieForm = document.querySelector('#movie-form'); const lookupStatus = document.querySelector('#lookup-status'); let ratingDirection = 0; let recentOnly = false;
function setTheme(dark) { document.body.classList.toggle('dark-mode', dark); themeToggle.textContent = dark ? 'Light mode' : 'Dark mode'; themeToggle.setAttribute('aria-pressed', String(dark)); document.querySelector('#theme-color').content = dark ? '#181512' : '#191613'; localStorage.setItem('after-hours-theme', dark ? 'dark' : 'light'); }
const savedTheme = localStorage.getItem('after-hours-theme'); setTheme(savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches);
const genres = [...new Set(movies.map(m => m.genre.split(' / ')[0]))].sort(); genres.forEach(g => filter.add(new Option(g,g)));
const posterSource = movie => movie.imdbId ? `/api/poster-image?id=${encodeURIComponent(movie.imdbId)}` : movie.poster;
let posterObserver; let posterQueue = []; let activePosterLoads = 0;
function loadQueuedPosters() { while (activePosterLoads < 2 && posterQueue.length) { const image = posterQueue.shift(); if (!image.dataset.posterSrc) continue; activePosterLoads += 1; image.addEventListener('load', () => { activePosterLoads -= 1; loadQueuedPosters(); }, { once:true }); image.addEventListener('error', () => { image.closest('.poster-cell')?.classList.add('poster-unavailable'); activePosterLoads -= 1; loadQueuedPosters(); }, { once:true }); image.src = image.dataset.posterSrc; delete image.dataset.posterSrc; } }
function preparePosterLoading() { posterObserver?.disconnect(); posterQueue = []; activePosterLoads = 0; const observe = image => { if (!image.dataset.posterSrc) return; posterObserver.observe(image); }; posterObserver = new IntersectionObserver(entries => { entries.forEach(entry => { if (!entry.isIntersecting) return; posterObserver.unobserve(entry.target); posterQueue.push(entry.target); loadQueuedPosters(); }); }, { rootMargin:'260px 0px' }); list.querySelectorAll('.poster-image').forEach(observe); }
function persistRemovedMovies() { localStorage.setItem('after-hours-removed', JSON.stringify([...removedIds])); localStorage.setItem('after-hours-removed-movies', JSON.stringify(removedMovies)); }
function renderRemoved() { removedSection.hidden = removedMovies.length === 0; removedCount.textContent = `(${removedMovies.length})`; removedList.innerHTML = removedMovies.map(movie => `<article class="removed-movie" data-id="${movie.id}"><span class="removed-title">${movie.title}</span><span>${movie.year}</span><span>${movie.genre}</span><button type="button" class="add-back" data-id="${movie.id}">Add back</button></article>`).join(''); }
function render() { const needle = search.value.trim().toLowerCase(); let items = movies.filter(m => (!recentOnly || m.addedAt) && (filter.value === 'all' || m.genre.startsWith(filter.value)) && `${m.title} ${m.year} ${m.genre}`.toLowerCase().includes(needle)); if (recentOnly) items.sort((a,b) => b.addedAt - a.addedAt); else if (ratingDirection) items.sort((a,b) => ratingDirection * ((b.rating ?? -1) - (a.rating ?? -1))); list.innerHTML = items.map(m => `<article class="movie" data-id="${m.id}" tabindex="0" role="button" aria-expanded="false"><span class="poster-cell">${posterSource(m) ? `<img class="poster-image" data-poster-src="${posterSource(m)}" alt="${m.title} poster" />` : `<span class="poster-placeholder">${m.title}</span>`}</span><span class="genre">${m.genre}</span><span class="title">${m.imdbId ? `<a href="https://www.imdb.com/title/${m.imdbId}/" target="_blank" rel="noopener" aria-label="Open ${m.title} on IMDb">${m.title}</a>` : m.title}</span><span class="year">${m.year}</span><span class="rating ${m.rating === null ? 'na' : ''}">${m.rating === null ? '—' : `<b>★</b> ${m.rating.toFixed(1)}`}</span><button class="remove" type="button" data-id="${m.id}" aria-label="Remove ${m.title} from the list">Remove</button><div class="synopsis"><p>${m.description}</p></div></article>`).join(''); empty.hidden = items.length !== 0; showing.textContent = `Showing ${items.length} ${items.length === 1 ? 'title' : 'titles'}`; document.querySelector('#movie-count').textContent = movies.length; renderRemoved(); requestAnimationFrame(preparePosterLoading); }
search.addEventListener('input',render); filter.addEventListener('change',render); recentFilter.addEventListener('click', () => { recentOnly = !recentOnly; recentFilter.classList.toggle('active', recentOnly); recentFilter.setAttribute('aria-pressed', String(recentOnly)); render(); }); themeToggle.addEventListener('click', () => setTheme(!document.body.classList.contains('dark-mode'))); document.querySelector('#rating-sort').addEventListener('click', e => { ratingDirection = ratingDirection === 1 ? -1 : 1; e.currentTarget.querySelector('span').textContent = ratingDirection === 1 ? '↓' : '↑'; render(); }); list.addEventListener('click', e => { const removeButton = e.target.closest('.remove'); if (removeButton) { const id = removeButton.dataset.id; removedIds.add(id); const index = movies.findIndex(movie => String(movie.id) === id); const removedMovie = index !== -1 ? movies.splice(index, 1)[0] : null; if (removedMovie && !removedMovies.some(movie => String(movie.id) === id)) removedMovies.unshift(removedMovie); persistRemovedMovies(); render(); if (removedMovie) showToast(`× ${removedMovie.title} was removed from your list`); return; } if (e.target.closest('a')) return; const row = e.target.closest('.movie'); if (row) { const isOpen = row.classList.toggle('expanded'); row.setAttribute('aria-expanded', String(isOpen)); } }); list.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); e.target.click(); } }); function addBack(id) { const index = removedMovies.findIndex(movie => String(movie.id) === String(id)); if (index === -1) return; const [movie] = removedMovies.splice(index, 1); removedIds.delete(id); removedIds.delete(Number(id)); movies.push(movie); persistRemovedMovies(); render(); showToast(`✓ ${movie.title} was added back to your list`); } removedList.addEventListener('click', event => { const button = event.target.closest('.add-back'); if (button) addBack(button.dataset.id); }); restoreAll.addEventListener('click', () => { removedMovies.splice(0).forEach(movie => movies.push(movie)); removedIds.clear(); persistRemovedMovies(); render(); showToast('✓ All removed movies were added back to your list'); });

const movieMatches = document.querySelector('#movie-matches');
const movieResults = document.querySelector('#movie-results');
const confirmMovie = document.querySelector('#confirm-movie');
const searchImdbButton = document.querySelector('#search-imdb');
let lookupController;
let lookupGeneration = 0;
let selectedMatch = null;
let addingMovie = false;

function resetMovieLookup() {
  lookupGeneration += 1;
  lookupController?.abort();
  selectedMatch = null;
  addingMovie = false;
  movieMatches.hidden = true;
  movieResults.replaceChildren();
  confirmMovie.disabled = true;
  confirmMovie.textContent = 'Add selected movie';
  searchImdbButton.disabled = false;
  lookupStatus.textContent = '';
}
async function fetchMovieJson(url, signal) {
  const response = await fetch(url, { signal });
  if (!response.headers.get('content-type')?.includes('application/json')) throw new Error('The movie lookup service is unavailable. Refresh the page and try again.');
  const data = await response.json();
  if (!response.ok) throw new Error(data.error || 'IMDb lookup failed.');
  return data;
}
document.querySelector('#add-movie').addEventListener('click', () => { resetMovieLookup(); movieForm.reset(); dialog.showModal(); document.querySelector('#new-title').focus(); });
document.querySelector('#dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('close', resetMovieLookup);
document.querySelector('#new-title').addEventListener('input', resetMovieLookup);
document.querySelector('#new-year').addEventListener('input', resetMovieLookup);
movieForm.addEventListener('submit', async event => {
  event.preventDefault();
  if (addingMovie) return;
  resetMovieLookup();
  const title = document.querySelector('#new-title').value.trim();
  const desiredYear = Number(document.querySelector('#new-year').value) || null;
  if (!title) { lookupStatus.textContent = 'Enter a movie title or keyword.'; return; }
  const generation = lookupGeneration;
  lookupController = new AbortController();
  lookupStatus.textContent = 'Searching IMDb…'; searchImdbButton.disabled = true;
  try {
    const { results } = await fetchMovieJson(`/api/imdb/search?title=${encodeURIComponent(title)}${desiredYear ? `&year=${desiredYear}` : ''}`, lookupController.signal);
    if (generation !== lookupGeneration || !dialog.open) return;
    lookupStatus.textContent = results.length ? `${results.length} matching titles. Select one, then confirm below.` : 'No matching titles found. Try another keyword or remove the year.';
    movieMatches.hidden = results.length === 0;
    results.forEach(match => {
      const label = document.createElement('label'); label.className = 'movie-match';
      const radio = document.createElement('input'); radio.type = 'radio'; radio.name = 'imdb-match'; radio.value = match.imdbId;
      const text = document.createElement('span');
      const title = document.createElement('strong'); title.textContent = `${match.title} (${match.year ?? 'Year unavailable'})`;
      const detail = document.createElement('small');
      const exists = movies.some(movie => movie.imdbId === match.imdbId);
      detail.textContent = [match.type, exists ? 'Already in your list' : ''].filter(Boolean).join(' · ');
      radio.disabled = exists;
      radio.addEventListener('change', () => { selectedMatch = match; confirmMovie.disabled = false; });
      text.append(title, detail); label.append(radio, text); movieResults.append(label);
    });
    movieResults.querySelector('input:not(:disabled)')?.focus();
  } catch (error) {
    if (generation === lookupGeneration && error.name !== 'AbortError') lookupStatus.textContent = error.message || 'Could not search IMDb. Please try again.';
  } finally { if (generation === lookupGeneration) searchImdbButton.disabled = false; }
});

confirmMovie.addEventListener('click', async () => {
  if (!selectedMatch || addingMovie) return;
  const match = selectedMatch;
  const generation = lookupGeneration;
  addingMovie = true;
  confirmMovie.disabled = true; searchImdbButton.disabled = true;
  movieResults.querySelectorAll('input').forEach(input => { input.disabled = true; });
  confirmMovie.textContent = 'Adding…';
  lookupStatus.textContent = `Loading details for ${match.title} (${match.year ?? 'Year unavailable'})…`;
  lookupController = new AbortController();
  try {
    const details = await fetchMovieJson(`/api/imdb?id=${encodeURIComponent(match.imdbId)}`, lookupController.signal);
    if (generation !== lookupGeneration || !dialog.open) return;
    if (details.imdbId !== match.imdbId) throw new Error('IMDb returned a different title. Please try again.');
    if (movies.some(movie => movie.imdbId === details.imdbId)) throw new Error('This movie is already in your list.');
    const archived = removedMovies.find(movie => movie.imdbId === details.imdbId);
    if (archived) { addBack(String(archived.id)); dialog.close(); return; }
    const movie = { id:`manual-${Date.now()}`, addedAt:Date.now(), ...details };
    const genre = movie.genre;
    localStorage.setItem('after-hours-manual-movies', JSON.stringify([...manualMovies, movie]));
    movies.push(movie); manualMovies.push(movie); if (![...filter.options].some(option => option.value === genre.split(' / ')[0])) filter.add(new Option(genre.split(' / ')[0],genre.split(' / ')[0])); render(); dialog.close(); showAddedConfirmation(movie);
  } catch (error) {
    if (generation === lookupGeneration && error.name !== 'AbortError') lookupStatus.textContent = error.message || 'Could not retrieve this movie from IMDb.';
  } finally {
    if (generation === lookupGeneration) {
      addingMovie = false; confirmMovie.disabled = !selectedMatch; confirmMovie.textContent = 'Add selected movie'; searchImdbButton.disabled = false;
      movieResults.querySelectorAll('input').forEach(input => { input.disabled = movies.some(movie => movie.imdbId === input.value); });
    }
  }
});

let toastTimer;
function showToast(message) { const toast = document.querySelector('#toast'); toast.textContent = message; toast.classList.add('show'); clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove('show'), 3600); }
function showAddedConfirmation(movie) { showToast(`✓ ${movie.title} was added to your list`); const row = list.querySelector(`[data-id="${movie.id}"]`); row?.classList.add('just-added'); }

const normalizeTitle = value => value.toLowerCase().replace(/^the\s+/,'').replace(/[^a-z0-9]/g,'');
// Poster images use the browser's native lazy loading. This avoids running hundreds
// of metadata requests and expensive full-table re-renders when the library opens.
render();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('/service-worker.js').catch(() => {}));
}
