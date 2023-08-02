
document.body.onload = () => {
	window.setTimeout(() => { document.querySelector("#audio1").play(); }, 2000);
};

$(() => {
        'use strict';
        var supportsAudio = !!document.createElement('audio').canPlayType;
        if (supportsAudio) {
            // initialize plyr
            var player = new Plyr('#audio1', {
                controls: [
                    'restart',
                    'play',
                    'progress',
                    'current-time',
                    'duration',
                    'mute',
                    'volume',
                    'download'
                ]
            });
            // initialize playlist and controls
            var index = 0,
                playing = false,
                mediaPath = 'https://archive.org/download/ed-sheeran-nothing-on-you-feat.-paulo-londra-dave-sbtv-256kbps-cbr/',
                extension = '',
                tracks = [{
                	"track": 1,
                    "name": "Ayeshman Khurrana - Pani Da",
                    "duration": "04:05",
                    "file": "Pani Da"
                }, {
                	"track": 2,
                    "name": "Ayushman Khurrana - Saadi Gali",
                    "duration": "03:52",
                    "file": "Saadi Gali"
                }, {
                	"track": 3,
                    "name": "Alan Walker - Faded",
                    "duration": "03:33",
                    "file": "Alan Walker - Faded"
                }, {
                	"track": 4,
                    "name": "Rahat Fateh Ali Kahn - Teri Meri",
                    "duration": "02:40",
                    "file": "Teri Meri"
                }, {
                	"track": 5,
                    "name": "Alan Walker, K391 - End of Time",
                    "duration": "03:05",
                    "file": "K391, Alan Walker, Ahrix - End of Time"
                }, {
                	"track": 6,
                    "name": "Alan Walker - The Drum",
                    "duration": "03:07",
                    "file": "Alan Walker - The Drum"
                }, {
                	"track": 7,
                    "name": "Annie Khalid - Mahiya",
                    "duration": "04:45",
                    "file": "Annie Khalid - Mahiya"
                }, {
                	"track": 8,
                    "name": "Rahat - Dil To Bacha Hai",
                    "duration": "05:13",
                    "file": "Rahat - Dil To Bacha Hai"
                }, {
                	"track": 9,
                    "name": "Adnan Sami - Bheegi Bheegi",
                    "duration": "03:02",
                    "file": "Bheegi Bheegi"
                }, {
                	"track": 10,
                    "name": "Adnan Sami - Teri Yaad",
                    "duration": "04:31",
                    "file": "Adnan Sami - Teri Yaad"
                }, {
                	"track": 11,
                    "name": "Zara Zara (Unofficial Male Version)",
                    "duration": "03:26",
                    "file": "Zara Zara (Unofficial Male Version)"
                }, {
                	"track": 12,
                    "name": "Zara Zara (Deep House)",
                    "duration": "05:17",
                    "file": "Zara Zara (Deep House)"
                }, {
                	"track": 13,
                    "name": "Ruth B. - Dandelions",
                    "duration": "03:55",
                    "file": "Ruth B. - Dandelions"
                }, {
                	"track": 14,
                    "name": "Aviva - Princesses Don’t Cry",
                    "duration": "03:33",
                    "file": "Aviva - Princesses Don't Cry"
                }, {
                	"track": 15,
                    "name": "Linkin Park - In The End (EDM Mix)",
                    "duration": "03:38",
                    "file": "In the End"
                }, {
                	"track": 16,
                    "name": "David Guetta - Titanium ft Sia",
                    "duration": "04:05",
                    "file": "David Guetta - Titanium ft Sia"
                }, {
                	"track": 17,
                    "name": "K391 - Aurora",
                    "duration": "02:44",
                    "file": "K391 - Aurora"
                }, {
                	"track": 18,
                    "name": "K391 - Lighthouse",
                    "duration": "04:05",
                    "file": "K391 - Lighthouse"
                }, {
                	"track": 19,
                    "name": "K-391, Xillions - Out Of My Mind",
                    "duration": "03:32",
                    "file": "K-391, Xillions - Out Of My Mind"
                }, {
                	"track": 20,
                    "name": "Alan Walker, Steve Aoki - Are You Lonely (Unofficial Extended Version)",
                    "duration": "06:20",
                    "file": "Alan Walker, Steve Aoki - Are You Lonely (Unofficial, Extended Version)"
                }, {
                    "track": 21,
                    "name": "Benny - Little Game",
                    "duration": "03:58",
                    "file": "Benny - Little Game"
                }, {
                    "track": 22,
                    "name": "Alan Walker & Ava Max - Alone, Pt. II",
                    "duration": "04:05",
                    "file": "Alan Walker _ Ava Max - Alone_ Pt. II"
                }, {
                    "track": 23,
                    "name": "Alan Walker ‒ Lost Control ft. Sorana",
                    "duration": "03:42",
                    "file": "Alan Walker ‒ Lost Control ft. Sorana"
                }, {
                    "track": 24,
                    "name": "Alan Walker, Alok - Headlights",
                    "duration": "02:41",
                    "file": "Alan Walker, Alok - Headlights feat. KIDDO"
                }, {
                    "track": 25,
                    "name": "Alan Walker, Sabrina - On My Way",
                    "duration": "03:36",
                    "file": "Alan Walker, Sabrina Carpenter, Farruko  - On My Way"
                }, {
                    "track": 26,
                    "name": "Alan Walker, Ingrosso - Man On The Moon",
                    "duration": "03:02",
                    "file": "Alan Walker, Benjamin Ingrosso - Man On The Moon"
                }, {
                    "track": 27,
                    "name": "Alan Walker, K391 - Paradise",
                    "duration": "03:23",
                    "file": "Alan Walker, K391 - Paradise"
                }, {
                    "track": 28,
                    "name": "Vicetone - Walk Thru Fire",
                    "duration": "03:14",
                    "file": "Vicetone - Walk Thru Fire"
                }, {
                    "track": 29,
                    "name": "Vicetone - Nevada",
                    "duration": "03:28",
                    "file": "Vicetone - Nevada"
                }, {
                    "track": 30,
                    "name": "Axwell, Ingrosso - More Than You Know",
                    "duration": "03:23",
                    "file": "Axwell, Ingrosso - More Than You Know"
                }, {
                    "track": 31,
                    "name": "Zedd - Happy Now",
                    "duration": "03:26",
                    "file": "Zedd - Happy Now"
                }, {
                    "track": 32,
                    "name": "Arash - Broken Angel",
                    "duration": "03:22",
                    "file": "Arash - Broken Angel"
                }, {
                    "track": 33,
                    "name": "Arash x Helena - Dooset Haram (I Love You)",
                    "duration": "03:47",
                    "file": "Arash x Helena - Dooset Haram (I Love You)"
                }, {
                    "track": 34,
                    "name": "Arash x Helena - One Day",
                    "duration": "03:46",
                    "file": "Arash x Helena - One Day"
                }, {
                    "track": 35,
                    "name": "Arash x Helena - Angels Lullaby",
                    "duration": "02:42",
                    "file": "Arash x Helena - Angels Lullaby"
                }, {
                    "track": 36,
                    "name": "Porter Robinson - Sad Machine",
                    "duration": "04:18",
                    "file": "Porter Robinson - Sad Machine"
                }, {
                    "track": 37,
                    "name": "Ava Max - Kings & Queens",
                    "duration": "02:42",
                    "file": "Ava Max - Kings & Queens"
                }, {
                    "track": 38,
                    "name": "Ava Max - Salt",
                    "duration": "03:01",
                    "file": "Ava Max - Salt"
                }, {
                    "track": 39,
                    "name": "Ava Max - So Am I",
                    "duration": "03:14",
                    "file": "Ava Max - So Am I"
                }, {
                    "track": 40,
                    "name": "Ava Max - Torn",
                    "duration": "03:21",
                    "file": "Ava Max - Torn"
                }, {
                    "track": 41,
                    "name": "Ava Max - Who's Laughing Now",
                    "duration": "03:16",
                    "file": "Ava Max - Who's Laughing Now"
                }, {
                    "track": 42,
                    "name": "Avicii - SOS (Fan Memories song) ft. Aloe Blacc",
                    "duration": "02:38",
                    "file": "Avicii - SOS (Fan Memories Song) ft. Aloe Blacc"
                }, {
                    "track": 43,
                    "name": "Avicii - Waiting For Love",
                    "duration": "3:50",
                    "file": "Avicii - Waiting For Love"
                }, {
                    "track": 44,
                    "name": "Avicii - Wake Me Up",
                    "duration": "4:32",
                    "file": "Avicii - Wake Me Up"
                }, {
                    "track": 45,
                    "name": "Bazzi feat. Camila Cabello - Beautiful",
                    "duration": "3:15",
                    "file": "Bazzi feat. Camila Cabello - Beautiful"
                }, {
                    "track": 46,
                    "name": "Bebe Rexha - I'm A Mess",
                    "duration": "03:22",
                    "file": "Bebe Rexha - I'm A Mess"
                }, {
                    "track": 47,
                    "name": "Bebe Rexha - Last Hurrah",
                    "duration": "02:31",
                    "file": "Bebe Rexha - Last Hurrah"
                }, {
                    "track": 48,
                    "name": "Bebe Rexha - Meant to Be (feat. Florida Georgia Line)",
                    "duration": "02:58",
                    "file": "Bebe Rexha - Meant to Be (feat. Florida Georgia Line)"
                }, {
                    "track": 49,
                    "name": "Calvin Harris & Disciples - How Deep Is Your Love",
                    "duration": "04:21",
                    "file": "Calvin Harris & Disciples - How Deep Is Your Love"
                }, {
                    "track": 50,
                    "name": "Calvin Harris, John Newman - Blame",
                    "duration": "03:31",
                    "file": "Calvin Harris, John Newman - Blame"
                }, {
                    "track": 51,
                    "name": "Calvin Harris, Ellie Goulding - Outside",
                    "duration": "03:45",
                    "file": "Calvin Harris, Ellie Goulding - Outside"
                }, {
                    "track": 52,
                    "name": "Calvin Harris - This Is What You Came For (ft. Rihanna)",
                    "duration": "03:59",
                    "file": "Calvin Harris - This Is What You Came For (ft. Rihanna)"
                }, {
                    "track": 53,
                    "name": "Camila Cabello - My Oh My",
                    "duration": "02:52",
                    "file": "Camila Cabello - My Oh My"
                }, {
                    "track": 54,
                    "name": "Camila Cabello - Havana ft. Young Thug",
                    "duration": "03:39",
                    "file": "Camila_Cabello_-_Havana_ft._Young_Thug"
                }, {
                    "track": 55,
                    "name": "Charlie Puth - Attention",
                    "duration": "03:52",
                    "file": "Charlie Puth - Attention"
                }, {
                    "track": 56,
                    "name": "Charlie Puth - One Call Away",
                    "duration": "04:02",
                    "file": "Charlie Puth - One Call Away"
                }, {
                    "track": 57,
                    "name": "Charlie Puth - We Don't Talk Anymore (ft. Selena Gomez)",
                    "duration": "03:51",
                    "file": "Charlie Puth - We Don't Talk Anymore (feat. Selena Gomez)"
                }, {
                    "track": 58,
                    "name": "Charlie Puth - How Long",
                    "duration": "03:30",
                    "file": "Charlie Puth - _How Long"
                }, {
                    "track": 59,
                    "name": "Chris Brown - Beat It",
                    "duration": "04:16",
                    "file": "Chris Brown - Beat It"
                }, {
                    "track": 60,
                    "name": "Chris Brown - Don't Check On Me (ft. Justin Bieber, Kid Ink)",
                    "duration": "03:27",
                    "file": "Chris Brown - Don't Check On Me ft. Justin Bieber, Ink"
                }, {
                    "track": 61,
                    "name": "Chris Brown - Indigo",
                    "duration": "03:14",
                    "file": "Chris Brown - Indigo"
                }, {
                    "track": 62,
                    "name": "Chris Brown - Loyal (Explicit) ft. Lil Wayne, Tyga",
                    "duration": "4:30",
                    "file": "Chris Brown - Loyal (Explicit) ft. Lil Wayne, Tyga"
                }, {
                    "track": 63,
                    "name": "Chris Brown - Zero",
                    "duration": "04:43",
                    "file": "Chris Brown - Zero"
                }, {
                    "track": 64,
                    "name": "Chris Brown, Young Thug - Go Crazy",
                    "duration": "03:30",
                    "file": "Chris Brown, Young Thug - Go Crazy"
                }, {
                    "track": 65,
                    "name": "Chris brown - Ayo ft. Tyga",
                    "duration": "6:00",
                    "file": "Chris brown - Ayo ft. tyga"
                }, {
                    "track": 66,
                    "name": "Chris_Brown - Marijuana_ft_ScHoolboy",
                    "duration": "4:16",
                    "file": "Chris_Brown - Marijuana_ft_ScHoolboy"
                }, {
                    "track": 67,
                    "name": "Clean Bandit - Symphony feat. Zara Larsson",
                    "duration": "04:06",
                    "file": "Clean Bandit - Symphony feat. Zara Larsson"
                }, {
                    "track": 68,
                    "name": "Clean Bandit - Rockabye (feat. Sean Paul & Anne-Marie)",
                    "duration": "04:14",
                    "file": "Clean Bandit - Rockabye (feat. Sean Paul & Anne-Marie) [Official Video]"
                }, {
                    "track": 69,
                    "name": "Coldplay - Paradise",
                    "duration": "04:20",
                    "file": "Coldplay - Paradise"
                }, {
                    "track": 70,
                    "name": "DJ Khaled - Celebrate ft. Travis Scott, Post Malone",
                    "duration": "03:28",
                    "file": "DJ Khaled - Celebrate ft. Travis Scott, Post Malone"
                }, {
                    "track": 71,
                    "name": "David Guetta, Bebe Rexha & J Balvin - Say My Name",
                    "duration": "03:30",
                    "file": "David Guetta, Bebe Rexha & J Balvin - Say My Name"
                }, {
                    "track": 72,
                    "name": "Deorro x Chris Brown - Five More Hours",
                    "duration": "04:47",
                    "file": "Deorro x Chris Brown - Five More Hours"
                }, {
                    "track": 73,
                    "name": "Dua Lipa - New Rules",
                    "duration": "03:45",
                    "file": "Dua Lipa - New Rules"
                }, {
                    "track": 74,
                    "name": "Ed Sheeran, Justin Bieber - I Don't Care",
                    "duration": "03:37",
                    "file": "Ed Sheeran & Justin Bieber - I Don't Care"
                }, {
                    "track": 75,
                    "name": "Ed Sheeran - Beautiful People (feat. Khalid)",
                    "duration": "03:48",
                    "file": "Ed Sheeran - Beautiful People (feat. Khalid)"
                }, {
                    "track": 76,
                    "name": "Ed Sheeran - Give Me Love",
                    "duration": "04:23",
                    "file": "Ed Sheeran - Give Me Love"
                }, {
                    "track": 77,
                    "name": "Ed Sheeran - Nothing On You (feat. Paulo Londra & Dave)",
                    "duration": "03:22",
                    "file": "Ed Sheeran - Nothing On You (feat. Paulo Londra & Dave) _SBTV, ( 256kbps cbr )"
                }, {
                    "track": 78,
                    "name": "Ed Sheeran - Perfect",
                    "duration": "04:25",
                    "file": "Ed Sheeran - Perfect"
                }, {
                    "track": 79,
                    "name": "Ed Sheeran - Put It All On Me (feat. Ella Mai)",
                    "duration": "03:38",
                    "file": "Ed Sheeran - Put It All On Me (feat. Ella Mai)"
                }, {
                    "track": 80,
                    "name": "Ed Sheeran - Shape Of You",
                    "duration": "04:23",
                    "file": "Ed Sheeran - Shape of You"
                }, {
                    "track": 81,
                    "name": "Ed Sheeran - South of the Border (feat...",
                    "duration": "3:24",
                    "file": "Ed Sheeran - South of the Border (feat. Camila Cabello & Cardi B) _Official Lyric Video, ( 160kbps )"
                }, {
                    "track": 82,
                    "name": "El Perdón (Forgiveness) Nicky Jam Enrique Iglesias (English Version)",
                    "duration": "3:42",
                    "file": "El Perdón (Forgiveness) Nicky Jam & Enrique Iglesias (English Version)"
                }, {
                    "track": 83,
                    "name": "Ed Sheeran - Thinking Out Loud",
                    "duration": "04:57",
                    "file": "Ed Sheeran - Thinking Out Loud"
                }, {
                    "track": 84,
                    "name": "Ellie Goulding - Love Me Like You Do",
                    "duration": "04:09",
                    "file": "Ellie Goulding - Love_Me_Like_You_Do"
                }, {
                    "track": 85,
                    "name": "Harry Styles - Adore You",
                    "duration": "03:39",
                    "file": "Harry Styles - Adore You"
                }, {
                    "track": 86,
                    "name": "Arash - Boro Boro ",
                    "duration": "2:46",
                    "file": "Arash - Boro Boro"
                }, {
                    "track": 87,
                    "name": "Arash x Helena - One Night In Dubai",
                    "duration": "2:40",
                    "file": "Arash x Helena - One Night In Dubai"
                }, {
                    "track": 88,
                    "name": "Arash x Helena - Pure Love",
                    "duration": "4:11",
                    "file": "Arash x Helena - Pure Love"
                }, {
                    "track": 89,
                    "name": "Arash - Temptation",
                    "duration": "3:41",
                    "file": "Arash - Temptation"
                }, {
                    "track": 90,
                    "name": "Vicetone - Barcelona Nights",
                    "duration": "3:00",
                    "file": "Vicetone - Barcelona Nights"
                }, {
                    "track": 91,
                    "name": "Sia - Chandelier",
                    "duration": "3:35",
                    "file": "Sia - Chandelier"
                }, {
                    "track": 92,
                    "name": "Sia - Cheap Thrills",
                    "duration": "3:33",
                    "file": "Sia - Cheap Thrills"
                }, {
                    "track": 93,
                    "name": "Kid Ink - Main Chick (Explicit) ft. Chris Brown & Tyga",
                    "duration": "3:13",
                    "file": "Kid Ink - Main Chick (Explicit) ft. Chris Brown & Tyga"
                }, {
                    "track": 94,
                    "name": "Lewis Capaldi - Before You Go",
                    "duration": "4:06",
                    "file": "Lewis Capaldi - Before You Go"
                }, {
                    "track": 95,
                    "name": "Lewis Capaldi - Someone You Loved",
                    "duration": "3:07",
                    "file": "Lewis Capaldi - Someone You Loved"
                }, {
                    "track": 96,
                    "name": "Maroon 5 - Animals",
                    "duration": "3:50",
                    "file": "Maroon 5 - Animals"
                }, {
                    "track": 97,
                    "name": "Maroon 5 - Girls Like You ft. Cardi B",
                    "duration": "4:31",
                    "file": "Maroon 5 - Girls Like You ft. Cardi B"
                }, {
                    "track": 98,
                    "name": "Maroon 5 - Memories",
                    "duration": "3:15",
                    "file": "Maroon 5 - Memories"
                }, {
                    "track": 99,
                    "name": "Maroon 5 - Nobody's Love",
                    "duration": "3:49",
                    "file": "Maroon 5 - Nobody's Love"
                }, {
                    "track": 100,
                    "name": "Maroon 5 - Sugar",
                    "duration": "5:01",
                    "file": "Maroon 5 - Sugar"
                }, {
                    "track": 101,
                    "name": "Marshmello - Alone",
                    "duration": "3:19",
                    "file": "Marshmello - Alone"
                }, {
                    "track": 102,
                    "name": "Marshmello & Halsey - Be Kind",
                    "duration": "3:04",
                    "file": "Marshmello & Halsey & Be Kind"
                }, {
                    "track": 103,
                    "name": "Martin Garrix & Bebe Rexha - In The Name Of Love",
                    "duration": "3:25",
                    "file": "Martin Garrix & Bebe Rexha - In The Name Of Love"
                }, {
                    "track": 104,
                    "name": "Mike Posner - I Took A Pill In Ibiza (Seeb Remix) (Explicit)",
                    "duration": "3:56",
                    "file": "Mike Posner - I Took A Pill In Ibiza (Seeb Remix) (Explicit)"
                }, {
                    "track": 105,
                    "name": "Post Malone - A Thousand Bad Times",
                    "duration": "3:42",
                    "file": "Post Malone - A Thousand Bad Times"
                }, {
                    "track": 106,
                    "name": "Post Malone - Circles",
                    "duration": "3:46",
                    "file": "Post Malone - Circles"
                }, {
                    "track": 107,
                    "name": "Post Malone - Die For Me ft. Future, Halsey",
                    "duration": "4:06",
                    "file": "Post Malone - Die For Me ft. Future, Halsey"
                }, {
                    "track": 108,
                    "name": "Post Malone - Goodbyes ft. Young Thug",
                    "duration": "3:28",
                    "file": "Post Malone - Goodbyes ft. Young Thug"
                }, {
                    "track": 109,
                    "name": "Post Malone - Hollywood's Bleeding",
                    "duration": "2:37",
                    "file": "Post Malone - Hollywood's Bleeding"
                }, {
                    "track": 110,
                    "name": "Post Malone - On The Road ft. Meek Mill",
                    "duration": "3:39",
                    "file": "Post Malone - On The Road ft.Meek Mill"
                }, {
                    "track": 111,
                    "name": "Post Malone - Saint-Tropez",
                    "duration": "2:37",
                    "file": "Post Malone - Saint-Tropez"
                }, {
                    "track": 112,
                    "name": "Post Malone - Take What You Want ft. Ozzy",
                    "duration": "3:51",
                    "file": "Post Malone - Take What You Want ft. Ozzy"
                }, {
                    "track": 113,
                    "name": "Post Malone - Rockstar ft. 21 Savage",
                    "duration": "4:02",
                    "file": "Post Malone - rockstar ft. 21 Savage"
                }, {
                    "track": 114,
                    "name": "Post Malone, Swae Lee - Sunflower (Spider-Man, Into the Spider-Verse)",
                    "duration": "2:42",
                    "file": "Post Malone, Swae Lee - Sunflower (Spider-Man, Into the Spider-Verse)"
                }, {
                    "track": 115,
                    "name": "Sam Smith - I'm Not The Only One",
                    "duration": "4:40",
                    "file": "Sam Smith - I'm Not The Only One"
                }, {
                    "track": 116,
                    "name": "Sam Smith - Too Good At Goodbyes",
                    "duration": "4:24",
                    "file": "Sam Smith - Too Good At Goodbyes"
                }, {
                    "track": 117,
                    "name": "Sam Smith, Normani - Dancing With A Stranger",
                    "duration": "3:16",
                    "file": "Sam Smith, Normani - Dancing With A Stranger"
                }, {
                    "track": 118,
                    "name": "Selena Gomez & The Scene - Love You Like A Love Song",
                    "duration": "3:40",
                    "file": "Selena Gomez & The Scene - Love You Like A Love Song"
                }, {
                    "track": 119,
                    "name": "Selena Gomez - A Sweeter Place",
                    "duration": "4:24",
                    "file": "Selena Gomez - A Sweeter Place"
                }, {
                    "track": 120,
                    "name": "Selena Gomez - Feel Me",
                    "duration": "3:45",
                    "file": "Selena Gomez - Feel Me"
                }, {
                    "track": 121,
                    "name": "Selena Gomez - Lose You To Love Me",
                    "duration": "3:27",
                    "file": "Selena Gomez - Lose You To Love Me"
                }, {
                    "track": 122,
                    "name": "Selena Gomez - Rare",
                    "duration": "3:41",
                    "file": "Selena Gomez - Rare"
                }, {
                    "track": 123,
                    "name": "Selena Gomez - She",
                    "duration": "2:53",
                    "file": "Selena Gomez - She"
                }, {
                    "track": 124,
                    "name": "Selena Gomez - Souvenir",
                    "duration": "2:43",
                    "file": "Selena Gomez - Souvenir"
                }, {
                    "track": 125,
                    "name": "Selena Gomez - The Heart Wants What It Wants",
                    "duration": "4:35",
                    "file": "Selena Gomez - The Heart Wants What It Wants"
                }, {
                    "track": 126,
                    "name": "Selena Gomez - Vulnerable",
                    "duration": "3:12",
                    "file": "Selena Gomez - Vulnerable"
                }, {
                    "track": 127,
                    "name": "Shawn Mendes - If I Can't Have You",
                    "duration": "3:12",
                    "file": "Shawn Mendes - If I Can't Have You"
                }, {
                    "track": 128,
                    "name": "Shawn Mendes - Stitches",
                    "duration": "4:00",
                    "file": "Shawn Mendes - Stitches"
                }, {
                    "track": 129,
                    "name": "Shawn Mendes - There's Nothing Holdin' Me Back",
                    "duration": "3:57",
                    "file": "Shawn Mendes - There's Nothing Holdin' Me Back"
                }, {
                    "track": 130,
                    "name": "Shawn Mendes - Treat You Better",
                    "duration": "4:16",
                    "file": "Shawn Mendes - Treat You Better"
                }, {
                    "track": 131,
                    "name": "Shawn Mendes, Zedd - Lost In Japan (Remix)",
                    "duration": "3:20",
                    "file": "Shawn Mendes, Zedd - Lost In Japan (Remix)"
                }, {
                    "track": 132,
                    "name": "Shawn Mendes, Camila Cabello - Señorita",
                    "duration": "3:25",
                    "file": "Shawn Mendes, Camila Cabello - Señorita"
                }, {
                    "track": 133,
                    "name": "Paper Crown by Alec Benjamin",
                    "duration": "3:20",
                    "file": "Alec Benjamin - Paper Crown"
                }, {
                    "track": 134,
                    "name": "Taylor Swift - Bad Blood ft. Kendrick Lamar",
                    "duration": "4:05",
                    "file": "Taylor Swift - Bad Blood ft. Kendrick Lamar"
                }, {
                    "track": 135,
                    "name": "Taylor Swift - Blank Space",
                    "duration": "4:32",
                    "file": "Taylor Swift - Blank space"
                }, {
                    "track": 136,
                    "name": "Taylor Swift - Christmas Tree Farm",
                    "duration": "3:45",
                    "file": "Taylor Swift - Christmas Tree Farm"
                }, {
                    "track": 137,
                    "name": "Taylor Swift - Cornelia Street",
                    "duration": "4:48",
                    "file": "Taylor Swift - Cornelia Street"
                }, {
                    "track": 138,
                    "name": "Taylor Swift - Cruel Summer",
                    "duration": "2:59",
                    "file": "Taylor Swift - Cruel Summer"
                }, {
                    "track": 139,
                    "name": "Taylor Swift - Daylight",
                    "duration": "4:54",
                    "file": "Taylor Swift - Daylight"
                }, {
                    "track": 140,
                    "name": "Taylor Swift - End Game ft. Ed Sheeran, Future",
                    "duration": "4:11",
                    "file": "Taylor Swift - End Game ft. Ed Sheeran, Future"
                }, {
                    "track": 141,
                    "name": "Taylor Swift - I Forgot That You Existed",
                    "duration": "2:52",
                    "file": "Taylor Swift - I Forgot That You Existed"
                }, {
                    "track": 142,
                    "name": "Taylor Swift - I Knew You Were Trouble",
                    "duration": "3:39",
                    "file": "Taylor Swift - I Knew You Were Trouble"
                }, {
                    "track": 143,
                    "name": "Taylor Swift - London Boy",
                    "duration": "3:11",
                    "file": "Taylor Swift - London Boy"
                }, {
                    "track": 144,
                    "name": "Taylor Swift - Lover",
                    "duration": "3:58",
                    "file": "Taylor Swift - Lover"
                }, {
                    "track": 145,
                    "name": "Taylor Swift - Miss Americana & The Heartbreak Prince",
                    "duration": "3:55",
                    "file": "Taylor Swift - Miss Americana & The Heartbreak Prince (Official Audio) ( 160kbps )"
                }, {
                    "track": 146,
                    "name": "Taylor Swift - Paper Rings",
                    "duration": "3:43",
                    "file": "Taylor Swift - Paper Rings"
                }, {
                    "track": 147,
                    "name": "Taylor Swift - Soon You’ll Get Better ft. Dixie Chicks",
                    "duration": "3:23",
                    "file": "Taylor Swift - Soon You’ll Get Better ft. Dixie Chicks"
                }, {
                    "track": 148,
                    "name": "Taylor Swift - The Archer",
                    "duration": "3:39",
                    "file": "Taylor Swift - The Archer"
                }, {
                    "track": 149,
                    "name": "Taylor Swift - The Man",
                    "duration": "3:11",
                    "file": "Taylor Swift - The Man"
                }, {
                    "track": 150,
                    "name": "Taylor Swift - You Need To Calm Down",
                    "duration": "3:30",
                    "file": "Taylor Swift - You Need To Calm Down"
                }, {
                    "track": 151,
                    "name": "The Americanos - In my foreign ft. Ty Dolla $ign, Nicky Jam, Lil Yatchy & French Montana",
                    "duration": "3:50",
                    "file": "The Americanos - In my foreign ft. Ty Dolla $ign, Nicky Jam, Lil Yatchy & French Montana"
                }, {
                    "track": 152,
                    "name": "The Chainsmokers - Don't_Let_Me_Down ft. Daya",
                    "duration": "3:38",
                    "file": "The Chainsmokers - Don't_Let_Me_Down ft. Daya"
                }, {
                    "track": 153,
                    "name": "The Chainsmokers, ILLENIUM - Takeaway",
                    "duration": "3:49",
                    "file": "The Chainsmokers, ILLENIUM - Takeaway"
                }, {
                    "track": 154,
                    "name": "The Chainsmokers - Closer ft. Halsey",
                    "duration": "4:22",
                    "file": "The Chainsmokers_-_Closer_ft._Halsey"
                }, {
                    "track": 155,
                    "name": "The Weeknd - Blinding Lights",
                    "duration": "3:23",
                    "file": "The Weeknd - Blinding Lights"
                }, {
                    "track": 156,
                    "name": "The Weeknd - In Your Eyes",
                    "duration": "3:59",
                    "file": "The Weeknd - In Your Eyes"
                }, {
                    "track": 157,
                    "name": "The Weeknd - Save Your Tears",
                    "duration": "3:37",
                    "file": "The Weeknd - Save Your Tears"
                }, {
                    "track": 158,
                    "name": "The Weeknd - Scared To Live",
                    "duration": "3:12",
                    "file": "The Weeknd - Scared To Live"
                }, {
                    "track": 159,
                    "name": "Wiz Khalifa - See You Again ft. Charlie Puth (Furious 7 Soundtrack)",
                    "duration": "3:57",
                    "file": "Wiz Khalifa - See You Again ft. Charlie Puth (Furious 7 Soundtrack)"
                }, {
                    "track": 160,
                    "name": "Xxxtentacion - Moonlight",
                    "duration": "2:17",
                    "file": "XXXTENTACION - MOONLIGHT"
                }, {
                    "track": 161,
                    "name": "Xxxtentacion - Sad!",
                    "duration": "2:47",
                    "file": "XXXTENTACION - SAD!"
                }, {
                    "track": 162,
                    "name": "XXXTENTACION - Changes",
                    "duration": "2:02",
                    "file": "XXXTENTACION - changes"
                }, {
                    "track": 163,
                    "name": "Young Thug, 2 Chainz, Wiz Khalifa & PnB Rock – Gang Up (The Fate of the Furious- The Album)",
                    "duration": "3:55",
                    "file": "Young Thug, 2 Chainz, Wiz Khalifa & PnB Rock – Gang Up (The Fate of the Furious- The Album)"
                }, {
                    "track": 164,
                    "name": "ZAYN & Taylor Swift - I Don’t Wanna Live Forever (Fifty Shades Darker)",
                    "duration": "4:17",
                    "file": "ZAYN & Taylor Swift - I Don’t Wanna Live Forever (Fifty Shades Darker)"
                }, {
                    "track": 165,
                    "name": "ZAYN - Dusk Till Dawn ft. Sia",
                    "duration": "5:37",
                    "file": "ZAYN - Dusk Till Dawn ft. Sia"
                }, {
                    "track": 166,
                    "name": "ZAYN, Zhavia Ward - A Whole New World (End Title) (From Aladdin)",
                    "duration": "4:03",
                    "file": "ZAYN, Zhavia Ward - A Whole New World (End Title) (From _Aladdin)"
                }],
                buildPlaylist = $.each(tracks, function (key, value) {
                    var trackNumber = value.track,
                        trackName = value.name,
                        trackDuration = value.duration;
                    if (trackNumber.toString().length === 1) {
                        trackNumber = '0' + trackNumber;
                    }
                    $('#plList').append('<li> \
                    <div class="plItem"> \
                        <span class="plNum">' + trackNumber + '.</span> \
                        <span class="plTitle">' + trackName + '</span> \
                        <span class="plLength">' + trackDuration + '</span> \
                    </div> \
                </li>');
                }),
                trackCount = tracks.length,
                npAction = $('#npAction'),
                npTitle = $('#npTitle'),
                audio = $('#audio1').on('play', function () {
                    playing = true;
                    npAction.text('Now Playing...');
                }).on('pause', function () {
                    playing = false;
                    npAction.text('Paused...');
                }).on('ended', function () {
                    npAction.text('Paused...');
                    if ((index + 1) < trackCount) {
                        index++;
                        loadTrack(index);
                        audio.play();
                    } else {
                        audio.pause();
                        index = 0;
                        loadTrack(index);
                    }
                }).get(0),
                btnPrev = $('#btnPrev').on('click', function () {
                    if ((index - 1) > -1) {
                        index--;
                        loadTrack(index);
                        if (playing) {
                            audio.play();
                        }
                    } else {
                        audio.pause();
                        index = 0;
                        loadTrack(index);
                    }
                }),
                btnNext = $('#btnNext').on('click', function () {
                    if ((index + 1) < trackCount) {
                        index++;
                        loadTrack(index);
                        if (playing) {
                            audio.play();
                        }
                    } else {
                        audio.pause();
                        index = 0;
                        loadTrack(index);
                    }
                }),
                li = $('#plList li').on('click', function () {
                    var id = parseInt($(this).index());
                    if (id !== index) {
                        playTrack(id);
                    }
                }),
                loadTrack = function (id) {
                    $('.plSel').removeClass('plSel');
                    $('#plList li:eq(' + id + ')').addClass('plSel');
                    npTitle.text(tracks[id].name);
                    index = id;
                    audio.src = mediaPath + tracks[id].file + extension;
                    updateDownload(id, audio.src);
                },
                updateDownload = function (id, source) {
                    player.on('loadedmetadata', function () {
                        $('a[data-plyr="download"]').attr('href', source);
                    });
                },
                playTrack = function (id) {
                    loadTrack(id);
                    audio.play();
                };
            extension = audio.canPlayType('audio/mpeg') ? '.mp3' : audio.canPlayType('audio/ogg') ? '.ogg' : '';
            loadTrack(index);
        } else {
            // no audio support
            $('.column').addClass('hidden');
            var noSupport = $('#audio1').text();
            $('.container').append('<p class="no-support">' + noSupport + '</p>');
        }
    });
