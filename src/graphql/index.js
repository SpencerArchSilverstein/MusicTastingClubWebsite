
// import { ApolloServer } from '@apollo/server';
// import { startStandaloneServer } from '@apollo/server/standalone';
// // A schema is a collection of type definitions (hence "typeDefs")
// // that together define the "shape" of queries that are executed against
// // your data.
// const typeDefs = `#graphql
//   # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

//   type Quarter {
//     quarterID: Int!
//     quarterYear: String!
//     weekNum: [Week]
//   }

//   type Week {
//     weekID: Int!
//     weekName: String!
//     quarter: Quarter!
//     picks: [Pick]
//   }

//   type Pick{
//     pickID: Int!
//     pickType: String!
//     albumOrSongPick: String!
//     artistName: String!
//     memberName: String!
//     albumArtPath: String!
//   }

//   type PrevGenre{
//     genreId: Int!
//     genreName: String!
//     colorName: String!
//   }


//   # The "Query" type is special: it lists all of the available queries that
//   # clients can execute, along with the return type for each. In this
//   # case, the "books" query returns an array of zero or more Books (defined above).
//   type Query {
//     getAllData: [Quarter]
//     getAllWeeks: [Week]
//     getAllPicks: [Pick]
//     getAllPrevGenre: [PrevGenre]
//     getQuarter(id: Int!): Quarter
//     getWeek(id: Int!): Week
//     getPick(id: Int!): Pick
//     getPrevGenre(id: Int!): PrevGenre
//   }

//   type Mutation {
//     addWeek(weekID: Int!, weekName: String!, quarterID: Int!): Week
//     addPick(pickID: Int!, memberID: Int!, weekID: Int!, pickType: String!, albumOrSongPick: String!, artistName: String!, albumArtPath: String!): Pick
//     addPrevGenre(genreId: Int!, genreName: String!, colorName: String!): PrevGenre
//   }
// `;


// const quarterDat = [
//     { quarterID: 1, quarterYear: 'Winter 2024' },
//     { quarterID: 2, quarterYear: 'Spring 2024' },
//     { quarterID: 3, quarterYear: 'Fall 2024' }
// ];

// const weekDat = [
//     { weekID: 1, weekName: "Week 1", quarter: 1 },
//     { weekID: 2, weekName: "Week 2", quarter: 1 },
//     { weekID: 3, weekName: "Week 3", quarter: 1 },
//     { weekID: 4, weekName: "Week 4", quarter: 1},
//     { weekID: 5, weekName: "Week 5", quarter: 1},
//     { weekID: 6, weekName: "Week 6", quarter: 1},
//     { weekID: 7, weekName: "Week 7", quarter: 1},
//     { weekID: 8, weekName: "Week 8", quarter: 1},
//     { weekID: 9, weekName: "Week 9", quarter: 1},

//     { weekID: 10, weekName: "Week 1", quarter: 2},
//     { weekID: 11, weekName: "Week 2", quarter: 2},
//     { weekID: 12, weekName: "Week 3", quarter: 2},
//     { weekID: 13, weekName: "Week 4", quarter: 2},
//     { weekID: 14, weekName: "Week 5", quarter: 2},
//     { weekID: 15, weekName: "Week 6", quarter: 2},
//     { weekID: 16, weekName: "Week 7", quarter: 2},
//     { weekID: 17, weekName: "Week 8", quarter: 2},
// ];

// const pickDat = [
//     { pickId: 1, weekID: 1, pickType: "Album of the Week", albumName: "SAWAYAMA", artistName: "Rina Sawayama", memberName: "Daniel", albumArtPath: "./WQ24_aa/WQ24_W1_AotW.png" },
//     { pickId: 2, weekID: 1, pickType: "Runner Up Album of the Week", albumName: "N/A", artistName: "N/A", memberName: "N/A", albumArtPath: "" },
//     { pickId: 3, weekID: 1, pickType: "Song of the Week", albumName: "N/A", artistName: "N/A", memberName: "N/A", albumArtPath: "" },
//     { pickId: 4, weekID: 1, pickType: "Runner Up Song of the Week", albumName: "N/A", artistName: "N/A", memberName: "N/A", albumArtPath: "" },
    
//     { pickId: 5, weekID: 2, pickType: "Album of the Week", albumName: "Ys", artistName: "Joanna Newsom", memberName: "Lolo", albumArtPath: "./WQ24_aa/WQ24_W2_AotW.png" },
//     { pickId: 6, weekID: 2, pickType: "Runner Up Album of the Week", albumName: "KiCk i", artistName: "Arca", memberName: "Alex", albumArtPath: "./WQ24_aa/WQ24_W2_RUAotW.png" },
//     { pickId: 7, weekID: 2, pickType: "Song of the Week", albumName: "Voy Pa'lla", artistName: "Los Aventureros", memberName: "Natalia", albumArtPath: "./WQ24_aa/WQ24_W2_SotW.png" },
//     { pickId: 8, weekID: 2, pickType: "Runner Up Song of the Week", albumName: "Night Cruising (Live Version)", artistName: "Fishmans", memberName: "Ryan", albumArtPath: "./WQ24_aa/WQ24_W2_RUSotW.png" },
    
//     { pickId: 9, weekID: 3, pickType: "Album of the Week", albumName: "Quebec", artistName: "Ween", memberName: "Ryan", albumArtPath: "./WQ24_aa/WQ24_W3_AotW.png" },
//     { pickId: 10, weekID: 3, pickType: "Runner Up Album of the Week", albumName: "Figure 8", artistName: "Elliot Smith", memberName: "Nathan", albumArtPath: "./WQ24_aa/WQ24_W3_RUAotW.png" },
//     { pickId: 11, weekID: 3, pickType: "Song of the Week", albumName: "Garbage Pale Kids", artistName: "JPEGMAFIA/Danny Brown", memberName: "Archie", albumArtPath: "./WQ24_aa/WQ24_W3_SotW.png" },
//     { pickId: 12, weekID: 3, pickType: "Runner Up Song of the Week", albumName: "Hero", artistName: "Neu!", memberName: "Vincent", albumArtPath: "./WQ24_aa/WQ24_W3_RUSotW.png" },
    
//     { pickId: 13, weekID: 4, pickType: "Album of the Week", albumName: "SCARING THE HOES", artistName: "JPEGMAFIA/ Danny Brown", memberName: "Archie", albumArtPath: "./WQ24_aa/WQ24_W4_AotW.png" },
//     { pickId: 14, weekID: 4, pickType: "Runner Up Album of the Week", albumName: "Antisocialites", artistName: "Alvvays", memberName: "Reed", albumArtPath: "./WQ24_aa/WQ24_W4_RUAotW.png" },
//     { pickId: 15, weekID: 4, pickType: "Song of the Week", albumName: "Rubber Ball (Space Kitchen)", artistName: "Underworld", memberName: "Daniel", albumArtPath: "./WQ24_aa/WQ24_W4_SotW.png" },
//     { pickId: 16, weekID: 4, pickType: "Runner Up Song of the Week", albumName: "Bodys", artistName: "Car Seat Headrest", memberName: "Nathan", albumArtPath: "./WQ24_aa/WQ24_W4_RUSotW.png" },
    
//     { pickId: 17, weekID: 5, pickType: "Album of the Week", albumName: "Hurry Up We're Dreaming", artistName: "M83", memberName: "Andrew", albumArtPath: "./WQ24_aa/WQ24_W5_AotW.png" },
//     { pickId: 18, weekID: 5, pickType: "Runner Up Album of the Week", albumName: "Moenie Kitchi", artistName: "Gregori and the Hawk", memberName: "Daniel", albumArtPath: "./WQ24_aa/WQ24_W5_RUAotW.png" },
//     { pickId: 19, weekID: 5, pickType: "Song of the Week", albumName: "UMI Says", artistName: "Mos Def", memberName: "Reed", albumArtPath: "./WQ24_aa/WQ24_W5_SotW.png" },
//     { pickId: 20, weekID: 5, pickType: "Runner Up Song of the Week", albumName: "Texas Flood", artistName: "Stevie Ray Vaughan", memberName: "Natalie", albumArtPath: "./WQ24_aa/WQ24_W5_RUSotW.png" },
   
//     { pickId: 21, weekID: 6, pickType: "Album of the Week", albumName: "Midnight Marauders", artistName: "A Tribe Called Quest", memberName: "Natalie", albumArtPath: "./WQ24_aa/WQ24_W6_AotW.png" },
//     { pickId: 22, weekID: 6, pickType: "Runner Up Album of the Week", albumName: "The Forever Story", artistName: "JID", memberName: "Danny", albumArtPath: "./WQ24_aa/WQ24_W6_RUAotW.png" },
//     { pickId: 23, weekID: 6, pickType: "Song of the Week", albumName: "Demolisher", artistName: "Slaughter To Prevail", memberName: "Andrew", albumArtPath: "./WQ24_aa/WQ24_W6_SotW.png" },
//     { pickId: 24, weekID: 6, pickType: "Runner Up Song of the Week", albumName: "Dance Now", artistName: "DJ Sabrina the Teenage DJ", memberName: "Reed", albumArtPath: "./WQ24_aa/WQ24_W6_RUSotW.png" },
    
//     { pickId: 25, weekID: 7, pickType: "Album of the Week", albumName: "Purple Rain", artistName: "Prince", memberName: "Danny", albumArtPath: "./WQ24_aa/WQ24_W7_AotW.png" },
//     { pickId: 26, weekID: 7, pickType: "Runner Up Album of the Week", albumName: "Magnolia Electric Co", artistName: "Songs:Ohia", memberName: "Ryan", albumArtPath: "./WQ24_aa/WQ24_W7_RUAotW.png" },
//     { pickId: 27, weekID: 7, pickType: "Song of the Week", albumName: "Some Are Lakes", artistName: "Land of Talk", memberName: "Natalie", albumArtPath: "./WQ24_aa/WQ24_W7_SotW.png" },
//     { pickId: 28, weekID: 7, pickType: "Runner Up Song of the Week", albumName: "N/A", artistName: "N/A", memberName: "N/A", albumArtPath: "" },
    
//     { pickId: 29, weekID: 8, pickType: "Album of the Week", albumName: "Max&Match", artistName: "Loona Odd Eye Circle", memberName: "Reed", albumArtPath: "./WQ24_aa/WQ24_W8_AotW.png" },
//     { pickId: 30, weekID: 8, pickType: "Runner Up Album of the Week", albumName: "IGOR", artistName: "Tyler, The Creator", memberName: "Archie", albumArtPath: "./WQ24_aa/WQ24_W8_RUAotW.png" },
//     { pickId: 31, weekID: 8, pickType: "Song of the Week", albumName: "La Luna y El Torro", artistName: "El Matador", memberName: "Danny", albumArtPath: "./WQ24_aa/WQ24_W8_SotW.png" },
//     { pickId: 32, weekID: 8, pickType: "Runner Up Song of the Week", albumName: "N/A", artistName: "N/A", memberName: "N/A", albumArtPath: "" },
   
//     { pickId: 33, weekID: 9, pickType: "Album of the Week", albumName: "Neo Wax Bloom", artistName: "Iglooghost", memberName: "Daniel", albumArtPath: "./WQ24_aa/WQ24_W9_AotW.png" },
//     { pickId: 34, weekID: 9, pickType: "Runner Up Album of the Week", albumName: "Bachata Rosa", artistName: "Juan Luis Guerra 4.40", memberName: "Danny", albumArtPath: "./WQ24_aa/WQ24_W9_RUAotW.png" },
//     { pickId: 35, weekID: 9, pickType: "Song of the Week", albumName: "Mac Arthur Park Suite", artistName: "Donna Summer", memberName: "Ryan", albumArtPath: "./WQ24_aa/WQ24_W9_SotW.png" },
//     { pickId: 36, weekID: 9, pickType: "Runner Up Song of the Week", albumName: "Next Hype", artistName: "TempaT", memberName: "Reed", albumArtPath: "./WQ24_aa/WQ24_W9_RUSotW.png" },
    
//     { pickId: 37, weekID: 10, pickType: "Album of the Week", albumName: "SuperGood", artistName: "Duckwrth", memberName: "Danny", albumArtPath: "./SQ24_aa/SQ24_W1_AotW.png" },
//     { pickId: 38, weekID: 10, pickType: "Runner Up Album of the Week", albumName: "Violent Femmes", artistName: "Violent Femmes", memberName: "Ryan", albumArtPath: "./SQ24_aa/SQ24_W1_RUAotW.png" },
//     { pickId: 39, weekID: 10, pickType: "Song of the Week", albumName: "When You Were Mine", artistName: "Joy Crookes", memberName: "Susanna", albumArtPath: "./SQ24_aa/SQ24_W1_SotW.png" },
//     { pickId: 40, weekID: 10, pickType: "Runner Up Song of the Week", albumName: "Hide And Seek", artistName: "Imogen Heap", memberName: "Andrew", albumArtPath: "./SQ24_aa/SQ24_W1_RUSotW.png" },
    
//     { pickId: 41, weekID: 11, pickType: "Album of the Week", albumName: "Everybody Else Is Doing It, So Why Can't We?", artistName: "The Cranberries", memberName: "Corey", albumArtPath: "./SQ24_aa/SQ24_W2_AotW.png" },
//     { pickId: 42, weekID: 11, pickType: "Runner Up Album of the Week", albumName: "Nurture", artistName: "Porter Robinson", memberName: "Aidan", albumArtPath: "./SQ24_aa/SQ24_W2_RUAotW.png" },
//     { pickId: 43, weekID: 11, pickType: "Song of the Week", albumName: "Woman", artistName: "Free", memberName: "Natalie", albumArtPath: "./SQ24_aa/SQ24_W2_SotW.png" },
//     { pickId: 44, weekID: 11, pickType: "Runner Up Song of the Week", albumName: "The End", artistName: "The Doors", memberName: "Grace", albumArtPath: "./SQ24_aa/SQ24_W2_RUSotW.png" },
    
//     { pickId: 45, weekID: 12, pickType: "Album of the Week", albumName: "3 Feet High and Rising Studio Album", artistName: "De La Soul", memberName: "Ryan", albumArtPath: "./SQ24_aa/SQ24_W3_AotW.png" },
//     { pickId: 46, weekID: 12, pickType: "Runner Up Album of the Week", albumName: "In the Court of the Crimson King", artistName: "King Crimson", memberName: "Natalie", albumArtPath: "./SQ24_aa/SQ24_W3_RUAotW.png" },
//     { pickId: 47, weekID: 12, pickType: "Song of the Week", albumName: "Dead in the Water", artistName: "Ellie Goulding", memberName: "Andrew", albumArtPath: "./SQ24_aa/SQ24_W3_SotW.png" },
//     { pickId: 48, weekID: 12, pickType: "Runner Up Song of the Week", albumName: "Restless Song", artistName: "Shadow Community", memberName: "Reed", albumArtPath: "./SQ24_aa/SQ24_W3_RUSotW.png" },
    
//     { pickId: 49, weekID: 13, pickType: "Album of the Week", albumName: "Feather River Canyon Blues", artistName: "Pigeon Pit", memberName: "Simon", albumArtPath: "./SQ24_aa/SQ24_W4_AotW.png" },
//     { pickId: 50, weekID: 13, pickType: "Runner Up Album of the Week", albumName: "NOVA", artistName: "RL Grime", memberName: "Vicky + Marisabel", albumArtPath: "./SQ24_aa/SQ24_W4_RUAotW.png" },
//     { pickId: 51, weekID: 13, pickType: "Song of the Week", albumName: "Northern Downpour", artistName: "Panic! At The Disco", memberName: "Rogelio", albumArtPath: "./SQ24_aa/SQ24_W4_SotW.png" },
//     { pickId: 52, weekID: 13, pickType: "Runner Up Song of the Week", albumName: "The Hissing of Summer Lawns", artistName: "Joni Mitchell", memberName: "Ella", albumArtPath: "./SQ24_aa/SQ24_W4_RUSotW.png" },
    
//     { pickId: 53, weekID: 14, pickType: "Album of the Week", albumName: "Kaputt", artistName: "Destroyer", memberName: "Reed", albumArtPath: "./SQ24_aa/SQ24_W5_AotW.png" },
//     { pickId: 54, weekID: 14, pickType: "Runner Up Album of the Week", albumName: "Open Mouth, Open Heart", artistName: "Destroy Boys", memberName: "Corey", albumArtPath: "./SQ24_aa/SQ24_W5_RUAotW.png" },
//     { pickId: 55, weekID: 14, pickType: "Song of the Week", albumName: "Frontier Psychiatrist", artistName: "The Avalanches", memberName: "Ryan", albumArtPath: "./SQ24_aa/SQ24_W5_SotW.png" },
//     { pickId: 56, weekID: 14, pickType: "Runner Up Song of the Week", albumName: "A Quick One While He's Away", artistName: "The Who", memberName: "Grace", albumArtPath: "./SQ24_aa/SQ24_W5_RUSotW.png" },
    
//     { pickId: 57, weekID: 15, pickType: "Album of the Week", albumName: "Let's Get Out of This Country", artistName: "Camera Obscura", memberName: "Grace", albumArtPath: "./SQ24_aa/SQ24_W6_AotW.png" },
//     { pickId: 58, weekID: 15, pickType: "Runner Up Album of the Week", albumName: "Translucence", artistName: "Poly Styrene", memberName: "Ella", albumArtPath: "./SQ24_aa/SQ24_W6_RUAotW.png" },
//     { pickId: 59, weekID: 15, pickType: "Song of the Week", albumName: "Out Like a Light", artistName: "Ricky Montgomery & The Honeysticks", memberName: "Aidan", albumArtPath: "./SQ24_aa/SQ24_W6_SotW.png" },
//     { pickId: 60, weekID: 15, pickType: "Runner Up Song of the Week", albumName: "PROM/KING", artistName: "Saba", memberName: "Danny", albumArtPath: "./SQ24_aa/SQ24_W6_RUSotW.png" },
    
//     { pickId: 61, weekID: 16, pickType: "Album of the Week", albumName: "Friends That Break Your Heart", artistName: "James Blake", memberName: "Susanna", albumArtPath: "./SQ24_aa/SQ24_W7_AotW.png" },
//     { pickId: 62, weekID: 16, pickType: "Runner Up Album of the Week", albumName: "Lavender Days", artistName: "Caamp", memberName: "Andrew", albumArtPath: "./SQ24_aa/SQ24_W7_RUAotW.png" },
//     { pickId: 63, weekID: 16, pickType: "Song of the Week", albumName: "American Lawn", artistName: "Blake Rouse", memberName: "Simon", albumArtPath: "./SQ24_aa/SQ24_W7_SotW.png" },
//     { pickId: 64, weekID: 16, pickType: "Runner Up Song of the Week", albumName: "Jackie", artistName: "Yves Tumor", memberName: "Daniel", albumArtPath: "./SQ24_aa/SQ24_W7_RUSotW.png" },
    
//     { pickId: 65, weekID: 17, pickType: "Album of the Week", albumName: "Zapper", artistName: "NANORAY", memberName: "Daniel", albumArtPath: "./SQ24_aa/SQ24_W8_AotW.png" },
//     { pickId: 66, weekID: 17, pickType: "Runner Up Album of the Week", albumName: "No Pressure", artistName: "Logic", memberName: "Archie", albumArtPath: "./SQ24_aa/SQ24_W8_RUAotW.png" },
//     { pickId: 67, weekID: 17, pickType: "Song of the Week", albumName: "Graphic Bleed Outs", artistName: "Quelle Chris and Chris Keys", memberName: "Reed", albumArtPath: "./SQ24_aa/SQ24_W8_SotW.png" },
//     { pickId: 68, weekID: 17, pickType: "Runner Up Song of the Week", albumName: "Ondulé", artistName: "Mathieu Boogaerts", memberName: "Natalie", albumArtPath: "./SQ24_aa/SQ24_W8_RUSotW.png" }
// ];

// const prevGenreDat = [
//     { genreId: 1, genreName: "Rock", color: 'rgba(255, 99, 132, 0.5)' },
//     { genreId: 2, genreName: "Pop", color: 'rgba(54, 162, 235, 0.5)' },
//     { genreId: 3, genreName: "Jazz", color: 'rgba(255, 206, 86, 0.5)' },
//     { genreId: 4, genreName: "KPOP", color: 'rgba(75, 192, 192, 0.5)' },
//     { genreId: 5, genreName: "Hip-Hop", color: 'rgba(153, 102, 255, 0.5)' },
//     { genreId: 6, genreName: "Electronic", color: 'rgba(255, 159, 64, 0.5)' },
//     { genreId: 7, genreName: "Folk", color: 'rgba(199, 199, 199, 0.5)' },
//     { genreId: 8, genreName: "Blues", color: 'rgba(83, 102, 255, 0.5)' },
//     { genreId: 9, genreName: "Country", color: 'rgba(104, 159, 56, 0.5)' },
//     { genreId: 10, genreName: "Metal", color: 'rgba(255, 99, 71, 0.5)' }
// ];


// const execBoardDat = [
//     { name: "Arch Silverstein", chairPos: "President", desc: "Leads weekly meetings, makes weekly slides", imgRoute: "myimg" },
//     { name: "Daniel Rivero", chairPos: "Vice President", desc: "Makes weekly slides, leads every 4th meeting", imgRoute: "myimg" },
//     { name: "Andrew Watson", chairPos: "Treasurer", desc: "Is in charge of the finances, Deals with SOFO", imgRoute: "myimg" },
//     { name: "Reed Malcolm", chairPos: "DJ", desc: "Controls music during meetings, makes weekly playlists", imgRoute: "myimg" },
//     { name: "Danny Ramirez", chairPos: "Social Media Chair", desc: "Posts to our social media platforms", imgRoute: "myimg" },
//     { name: "Corey Dubin", chairPos: "Print Media Chair", desc: "Writes for the MTC Blog, Send out the listservs", imgRoute: "myimg" },
//     { name: "Simon Olshan-Cantin", chairPos: "In-Club Activity Chair", desc: "Coordinates in-club activities (games/presentations)", imgRoute: "myimg" },
//     { name: "Susanna Bobbs", chairPos: "Event Planning Chair", desc: "Plans trips and album-listening parties", imgRoute: "myimg" }
// ];

// const membersNotPickedYetDat = [
// {name: "Arch", pickedAotW: 0, pickedRUAotW: 0, pickedSotW: 0, pickedRUSotW: 0},
// {name: "Daniel", pickedAotW: 0, pickedRUAotW: 0, pickedSotW: 0, pickedRUSotW: 0},
// {name: "Andrew", pickedAotW: 0, pickedRUAotW: 0, pickedSotW: 0, pickedRUSotW: 0},
// {name: "Reed", pickedAotW: 0, pickedRUAotW: 0, pickedSotW: 0, pickedRUSotW: 0},
// {name: "Danny", pickedAotW: 0, pickedRUAotW: 0, pickedSotW: 0, pickedRUSotW: 0},
// {name: "Corey", pickedAotW: 0, pickedRUAotW: 0, pickedSotW: 0, pickedRUSotW: 0},
// {name: "Simon", pickedAotW: 0, pickedRUAotW: 0, pickedSotW: 0, pickedRUSotW: 0},
// {name: "Susanna", pickedAotW: 0, pickedRUAotW: 0, pickedSotW: 0, pickedRUSotW: 0},
// {name: "Ryan", pickedAotW: 0, pickedRUAotW: 0, pickedSotW: 0, pickedRUSotW: 0},
// {name: "Natalie", pickedAotW: 0, pickedRUAotW: 0, pickedSotW: 0, pickedRUSotW: 0},
// {name: "Grace", pickedAotW: 0, pickedRUAotW: 0, pickedSotW: 0, pickedRUSotW: 0},
// {name: "Aidan", pickedAotW: 0, pickedRUAotW: 0, pickedSotW: 0, pickedRUSotW: 0},
// {name: "Ella", pickedAotW: 0, pickedRUAotW: 0, pickedSotW: 0, pickedRUSotW: 0},
// ];

// const thisWeeksPicksDat = [{ pickId: -1, weekID: 1, pickType: "Album of the Week", albumName: "SAWAYAMA", artistName: "Rina Sawayama", memberName: "Daniel", albumArtPath: "" },
// { pickId: -2, weekID: 1, pickType: "Runner Up Album of the Week", albumName: "N/A", artistName: "N/A", memberName: "N/A", albumArtPath: "" },
// { pickId: -3, weekID: 1, pickType: "Song of the Week", albumName: "N/A", artistName: "N/A", memberName: "N/A", albumArtPath: "" },
// { pickId: -4, weekID: 1, pickType: "Runner Up Song of the Week", albumName: "N/A", artistName: "N/A", memberName: "N/A", albumArtPath: "" },
// ];


// // Resolvers define how to fetch the types defined in your schema.
// // This resolver retrieves books from the "books" array above.
// const resolvers = {
//     Query: {
//         getAllData: () => quarterDat,
//         getAllWeeks: () => weekDat,
//         getAllPicks: () => pickDat,
//         getAllPrevGenre: () => prevGenreDat,
//         getQuarter: (parent, args) => quarterDat.find(quart => quart.quarterID === args.id),
//         getWeek: (parent, args) => weekDat.find(wee => wee.weekID === args.id),
//         getPick: (parent, args) => pickDat.find(pic => pic.pickID === args.id),
//         getPrevGenre: (parent, args) => prevGenreDat.find(pgd => pgd.genreId === args.id),
//     },
//     Quarter: {
//         weekNum: (parent) => weekDat.filter(wek => wek.quarter === parent.quarterID),
//     },
//     Week: {
//         quarter: (parent) => quarterDat.find(quart => quart.quarterID === parent.quarterID),
//         picks: (parent) => pickDat.filter(pic => pic.weekID === parent.weekID),
//     },
    
//     // Pick: {
//     //     member: (parent) => memberDat.find(mem => mem.memberID === parent.memberID),
//     // },
//     Mutation: {
//         // addMember: (parent, args) => {
//         //     const newMem = {
//         //         memberID: args.memberID,
//         //         memberName: args.memberName,
//         //     };
//         //     memberDat.push(newMem);
//         //     return newMem;
//         // },
//         addWeek: (parent, args) => {
//             const newWeek = { weekID: args.weekID, weekName: args.weekName, quarter: args.quarter, };
//             weekDat.push(newWeek);
//             return newWeek;
//         },
//         addPick: (parent, args) => {
//             const newPick = {
//                 pickID: args.pickID,
//                 member: args.member,
//                 weekID: args.weekID,
//                 pickType: args.pickType,
//                 albumOrSongPick: args.albumOrSongPick,
//                 artistName: args.artistName,
//                 albumArtPath: args.albumArtPath
//             };
//             pickDat.push(newPick);
//             return newPick;
//         },
//         addPrevGenre: (parent, args) => {
//             const newPrevGenre = {
//                 genreId: args.genreId,
//                 genreName: args.genreName, 
//                 colorName: args.colorName
//             }
//             prevGenreDat.push(newPrevGenre);
//             return newPrevGenre;
//         }
//     },
// };
// // The ApolloServer constructor requires two parameters: your schema
// // definition and your set of resolvers.
// const server = new ApolloServer({
//     typeDefs,
//     resolvers,
// });
// // Passing an ApolloServer instance to the `startStandaloneServer` function:
// //  1. creates an Express app
// //  2. installs your ApolloServer instance as middleware
// //  3. prepares your app to handle incoming requests
// const { url } = await startStandaloneServer(server, {
//     listen: { port: 4000 },
// });
// console.log(`🚀  Server ready at: ${url}`);
