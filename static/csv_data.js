//------------------------PARSING CSV-----------------------------------------

var data = "Number,Song title,Artist,Release year\n" +
"1,Strange Things Happening Every Day ,Sister Rosetta Tharpe ,1944\n" +
"2,Rocket 88, Jackie Brenston and his Delta Cats ,1951\n" +
"3,Tutti Frutti ,Little Richard,1955\n"+
"4,Mystery Train ,Elvis Presley,1955\n" +
"5,Blue Suede Shoes ,Carl Perkins ,1955\n" +
"6,Whole Lotta Shakin' Goin On ,Jerry Lee Lewis,1957\n" +
"7,Oh Boy!, The Crickets ,1957\n" +
"8,Rave On ,Buddy Holly ,1958\n" +
"9,Johnny B Goode ,Chuck Berry,1958\n" +
"10,No Particular Place to Go, Chuck Berry,1964\n" +
"11,The Last Time ,The Rolling Stones ,1965\n" +
"12,Get Off of My Cloud ,The Rolling Stones ,1965\n"+
"18,Like a Rolling Stone, Bob Dylan ,1965\n" +
"19,Desolation Row ,Bob Dylan ,1965\n" +
"13,Steppin' Out ,John Mayall and The Bluesbreakers with Eric Clapton ,1966\n" +
"15,She Said She Said, The Beatles ,1966\n" +
"16,Tomorrow Never Knows ,The Beatles ,1966\n" +
"17,A Day in the Life ,The Beatles ,1967\n" +
"20,Are You Experienced? ,The Jimi Hendrix Experience,1967\n" +
"26,Break on Through (to the Other Side) ,The Doors ,1967\n" +  
"29,Nights in White Satin, The Moody Blues ,1967\n" + 
"45,Ball and Chain (live at Monterey) ,Big Brother and the Holding Company ,1967\n" + 
"14,Steppin' Out ,Cream ,1968\n" + 
"21,Crosstown Traffic ,The Jimi Hendrix Experience,1968\n" + 
"22,My Clown ,July ,1968\n" + 
"23,Pictures of Matchstick Men ,Status Quo ,1968\n" + 
"24,Communication Breakdown ,Led Zeppelin ,1969\n" + 
"28,I'm Free ,The Who,1969\n" + 
"30,Stand!, Sly and the Family Stone,1969\n" + 
"31,I Want to Take You Higher, Sly and the Family Stone,1969\n" + 
"33,Live at Woodstock ,Jimi Hendrix ,1969\n" + 
"34,Soul Sacrifice (live at Woodstock) ,Santana ,1969\n" + 
"35,I-Feel-Like-I'm-Fixin-To-Die-Rag (live at Woodstock), Country Joe and the Fish,1969\n" + 
"38,Suite: Judy Blue Eyes ,Crosby Stills & Nash ,1969\n" + 
"51,Dark Star (live) ,The Grateful Dead ,1969\n" + 
"52,Who Do You Love? ,Quicksilver Messenger Service,1969\n" + 
"53,Wooden Ships ,Jefferson Airplane ,1969\n" + 
"32,Iron Man, Black Sabbath ,1970\n" + 
"36,Jumpin' Jack Flash (live) ,The Rolling Stones ,1970\n" + 
"37,Midnight Rambler (live) ,The Rolling Stones,1970\n" + 
"39,Big Yellow Taxi ,Joni Mitchell ,1970\n" + 
"40,After the Gold Rush, Neil Young ,1970\n" + 
"41,Let it Be ,The Beatles,1970\n" + 
"42,Mother ,John Lennon ,1970\n" + 
"43,My Sweet Lord ,George Harrison ,1970\n" + 
"27,LA Woman, The Doors ,1971\n" + 
"46,I Feel the Earth Move ,Carole King,1971\n" + 
"47,It's Too Late ,Carole King ,1971\n" + 
"48,Maggot Brain, Funkadelic,1971\n" + 
"49,Maggie May, Rod Stewart ,1971\n" + 
"50,Mandolin Wind ,Rod Stewart ,1971\n" + 
"54,Virginia Plain, Roxy Music ,1972\n" + 
"44,Band on the Run ,Paul McCartney and Wings,1973\n" + 
"55,Do the Strand ,Roxy Music ,1973\n" + 
"56,Us and Them, Pink Floyd ,1973\n" + 
"60,Hey Joe, Patti Smith ,1974\n" + 
"25,Kashmir, Led Zeppelin ,1975\n" + 
"57,Shine on You Crazy Diamond Parts I-V ,Pink Floyd ,1975\n" + 
"58,Born to Run, Bruce Springsteen ,1975\n" + 
"61,Land ,Patti Smith ,1975\n" + 
"62,Bohemian Rhapsody, Queen,1975\n" + 
"66,Be My Wife ,David Bowie ,1977\n" + 
"67,Heroes ,David Bowie,1977\n" + 
"68,Go Your Own Way, Fleetwood Mac,1977\n" + 
"59,Racing in the Street, Bruce Springsteen,1978\n" + 
"63,Don't Stop Me Now, Queen ,1978\n" + 
"70,Wuthering Heights ,Kate Bush ,1978\n" + 
"72,Down Payment Blues, AC/DC ,1978\n" + 
"69,Tusk ,Fleetwood Mac ,1979\n" + 
"73,Back in Black ,AC/DC ,1980\n" + 
"76,Romeo and Juliet, Dire Straits ,1980\n" + 
"97,Don't Stop Believing, Journey ,1980\n" + 
"64,Unchained, Van Halen,1981\n" + 
"78,Gloria ,U2 ,1981\n" + 
"74,Tonight I'm Gonna Rock You Tonight ,Spinal Tap,1984\n" + 
"79,Bad ,U2 ,1984\n" + 
"77,Money for Nothing, Dire Straits,1985\n" + 
"81,Walk This Way ,Run DMC ,1986\n" + 
"65,Kickstart My Heart,Motley Crue,1989\n" + 
"71,This Woman's Work ,Kate Bush ,1989\n" + 
"80,One ,U2 ,1991\n" + 
"85,Smells Like Teen Spirit, Nirvana ,1991\n" + 
"86,Alive ,Pearl Jam ,1991\n" + 
"88,Country Feedback ,REM ,1991\n" + 
"87,Them Bones, Alice in Chains ,1992\n" + 
"89,Everybody Hurts ,REM,1992\n" + 
"90,Basket Case ,Green Day ,1994\n" + 
"98,Street Spirit (Fade Out) ,Radiohead ,1995\n" + 
"99,Paranoid Android ,Radiohead,1997\n" + 
"91,Pretty Fly (For a White Guy) ,The Offspring,1998\n" + 
"82,Break Stuff ,Limp Bizkit,2000\n" + 
"83,Things Have Changed ,Bob Dylan,2000\n" + 
"92,Yellow ,Coldplay,2000\n" + 
"84,Sugar Baby ,Bob Dylan ,2001\n" + 
"95,Hotel Yorba  ,The White Stripes,2001\n" + 
"93,Clocks ,Coldplay,2002\n" + 
"75,I Believe in a Thing Called Love,The Darkness ,2003\n" + 
"96,Seven Nation Army  ,The White Stripes,2003\n" + 
"94,Chasing Cars  ,Snow Patrol,2006\n" + 
"100,House of Cards  ,Radiohead,2007"
