const picksData = [
  [[
    { pickId: 1, pickType: "Album of the Week", albumName: "SAWAYAMA", artistName: "Rina Sawayama", memberName: "Daniel" },
    { pickId: 2, pickType: "Runner Up Album of the Week", albumName: "N/A", artistName: "N/A", memberName: "N/A" },
    { pickId: 3, pickType: "Song of the Week", albumName: "N/A", artistName: "N/A", memberName: "N/A" },
    { pickId: 4, pickType: "Runner Up Song of the Week", albumName: "N/A", artistName: "N/A", memberName: "N/A" },
  ],
  [
    { pickId: 5, pickType: "Album of the Week", albumName: "Ys", artistName: "Joanna Newsom", memberName: "Lolo" },
    { pickId: 6, pickType: "Runner Up Album of the Week", albumName: "KiCk i", artistName: "Arca", memberName: "Alex" },
    { pickId: 7, pickType: "Song of the Week", albumName: "Voy Pa'lla", artistName: "Los Aventureros", memberName: "Natalia" },
    { pickId: 8, pickType: "Runner Up Song of the Week", albumName: "Night Cruising (Live Version)", artistName: "Fishmans", memberName: "Ryan" },
  ],
  [
    { pickId: 9, pickType: "Album of the Week", albumName: "Quebec", artistName: "Ween", memberName: "Ryan" },
    { pickId: 10, pickType: "Runner Up Album of the Week", albumName: "Figure 8", artistName: "Elliot Smith", memberName: "Nathan" },
    { pickId: 11, pickType: "Song of the Week", albumName: "Garbage Pale Kids", artistName: "JPEGMAFIA/Danny Brown", memberName: "Archie" },
    { pickId: 12, pickType: "Runner Up Song of the Week", albumName: "Hero", artistName: "Neu!", memberName: "Vincent" },
  ],
  [
    { pickId: 13, pickType: "Album of the Week", albumName: "SCARING THE HOES", artistName: "JPEGMAFIA/ Danny Brown", memberName: "Archie" },
    { pickId: 14, pickType: "Runner Up Album of the Week", albumName: "Antisocialites", artistName: "Alvvays", memberName: "Reed" },
    { pickId: 15, pickType: "Song of the Week", albumName: "Rubber Ball (Space Kitchen)", artistName: "Underworld", memberName: "Daniel" },
    { pickId: 16, pickType: "Runner Up Song of the Week", albumName: "Bodys", artistName: "Car Seat Headrest", memberName: "Nathan" },
  ],
  [
    { pickId: 17, pickType: "Album of the Week", albumName: "Hurry Up We're Dreaming", artistName: "M83", memberName: "Andrew" },
    { pickId: 18, pickType: "Runner Up Album of the Week", albumName: "Moenie Kitchi", artistName: "Gregori and the Hawk", memberName: "Daniel" },
    { pickId: 19, pickType: "Song of the Week", albumName: "UMI Says", artistName: "Mos Def", memberName: "Reed" },
    { pickId: 20, pickType: "Runner Up Song of the Week", albumName: "Texas Flood", artistName: "Stevie Ray Vaughan", memberName: "Natalie" },
  ],
  [
    { pickId: 21, pickType: "Album of the Week", albumName: "Midnight Marauders", artistName: "A Tribe Called Quest", memberName: "Natalie" },
    { pickId: 22, pickType: "Runner Up Album of the Week", albumName: "The Forever Story", artistName: "JID", memberName: "Danny" },
    { pickId: 23, pickType: "Song of the Week", albumName: "Demolisher", artistName: "Slaughter To Prevail", memberName: "Andrew" },
    { pickId: 24, pickType: "Runner Up Song of the Week", albumName: "Dance Now", artistName: "DJ Sabrina the Teenage DJ", memberName: "Reed" },
  ],
  [
    { pickId: 25, pickType: "Album of the Week", albumName: "Purple Rain", artistName: "Prince", memberName: "Danny" },
    { pickId: 26, pickType: "Runner Up Album of the Week", albumName: "Magnolia Electric Co", artistName: "Songs:Ohia", memberName: "Ryan" },
    { pickId: 27, pickType: "Song of the Week", albumName: "Some Are Lakes", artistName: "Land of Talk", memberName: "Natalie" },
    { pickId: 28, pickType: "Runner Up Song of the Week", albumName: "N/A", artistName: "N/A", memberName: "N/A" },
  ],
  [
    { pickId: 29, pickType: "Album of the Week", albumName: "Max&Match", artistName: "Loona Odd Eye Circle", memberName: "Reed" },
    { pickId: 30, pickType: "Runner Up Album of the Week", albumName: "IGOR", artistName: "Tyler, The Creator", memberName: "Archie" },
    { pickId: 31, pickType: "Song of the Week", albumName: "La Luna y El Torro", artistName: "El Matador", memberName: "Danny" },
    { pickId: 32, pickType: "Runner Up Song of the Week", albumName: "N/A", artistName: "N/A", memberName: "N/A" },
  ],
  [
    { pickId: 33, pickType: "Album of the Week", albumName: "Neo Wax Bloom", artistName: "Iglooghost", memberName: "Daniel" },
    { pickId: 34, pickType: "Runner Up Album of the Week", albumName: "Bachata Rosa", artistName: "Juan Luis Guerra 4.40", memberName: "Danny" },
    { pickId: 35, pickType: "Song of the Week", albumName: "Mac Arthur Park Suite", artistName: "Donna Summer", memberName: "Ryan" },
    { pickId: 36, pickType: "Runner Up Song of the Week", albumName: "Next Hype", artistName: "TempaT", memberName: "Reed" },
  ],],
  [
    [
      { pickId: 37, pickType: "Album of the Week", albumName: "SuperGood", artistName: "Duckwrth", memberName: "Danny" },
      { pickId: 38, pickType: "Runner Up Album of the Week", albumName: "Violent Femmes", artistName: "Violent Femmes", memberName: "Ryan" },
      { pickId: 39, pickType: "Song of the Week", albumName: "When You Were Mine", artistName: "Joy Crookes", memberName: "Susanna" },
      { pickId: 40, pickType: "Runner Up Song of the Week", albumName: "Hide And Seek", artistName: "Imogen Heap", memberName: "Andrew" },
    ],
    [
      { pickId: 41, pickType: "Album of the Week", albumName: "Everybody Else Is Doing It, So Why Can't We?", artistName: "The Cranberries", memberName: "Corey" },
      { pickId: 42, pickType: "Runner Up Album of the Week", albumName: "Nurture", artistName: "Porter Robinson", memberName: "Aidan" },
      { pickId: 43, pickType: "Song of the Week", albumName: "Woman", artistName: "Free", memberName: "Natalie" },
      { pickId: 44, pickType: "Runner Up Song of the Week", albumName: "The End", artistName: "The Doors", memberName: "Grace" },
    ],
    [
      { pickId: 45, pickType: "Album of the Week", albumName: "3 Feet High and Rising Studio Album", artistName: "De La Soul", memberName: "Ryan" },
      { pickId: 46, pickType: "Runner Up Album of the Week", albumName: "In the Court of the Crimson King", artistName: "King Crimson", memberName: "Natalie" },
      { pickId: 47, pickType: "Song of the Week", albumName: "Dead in the Water", artistName: "Ellie Goulding", memberName: "Andrew" },
      { pickId: 48, pickType: "Runner Up Song of the Week", albumName: "Restless Song", artistName: "Shadow Community", memberName: "Reed" },
    ],
    [
      { pickId: 49, pickType: "Album of the Week", albumName: "Feather River Canyon Blues", artistName: "Pigeon Pit", memberName: "Simon" },
      { pickId: 50, pickType: "Runner Up Album of the Week", albumName: "NOVA", artistName: "RL Grime", memberName: "Vicky + Marisabel" },
      { pickId: 51, pickType: "Song of the Week", albumName: "Northern Downpour", artistName: "Panic! At The Disco", memberName: "Rogelio" },
      { pickId: 52, pickType: "Runner Up Song of the Week", albumName: "The Hissing of Summer Lawn", artistName: "Joni Mitchell", memberName: "Ella" },
    ],
    [
      { pickId: 53, pickType: "Album of the Week", albumName: "Kaputt", artistName: "Destroyer", memberName: "Reed" },
      { pickId: 54, pickType: "Runner Up Album of the Week", albumName: "Open Mouth, Open Heart", artistName: "Destroy Boys", memberName: "Corey" },
      { pickId: 55, pickType: "Song of the Week", albumName: "Fronteir Psychiatrist", artistName: "The Avalanches", memberName: "Ryan" },
      { pickId: 56, pickType: "Runner Up Song of the Week", albumName: "A Quick One While He's Away", artistName: "The Who", memberName: "Grace" },
    ],
    [
      { pickId: 57, pickType: "Album of the Week", albumName: "Let's Get Out of This Country", artistName: "Camera Obscura", memberName: "Grace" },
      { pickId: 58, pickType: "Runner Up Album of the Week", albumName: "Translucence", artistName: "Poly Styrene", memberName: "Ella" },
      { pickId: 59, pickType: "Song of the Week", albumName: "Out Like a Light", artistName: "Ricky Montgomery & The Honeysticks", memberName: "Aidan" },
      { pickId: 60, pickType: "Runner Up Song of the Week", albumName: "PROM/KING", artistName: "Saba", memberName: "Danny" },
    ],
    [
      { pickId: 61, pickType: "Album of the Week", albumName: "Friends That Break Your Heart", artistName: "James Blake", memberName: "Susanna" },
      { pickId: 62, pickType: "Runner Up Album of the Week", albumName: "Lavender Days", artistName: "Caamp", memberName: "Andrew" },
      { pickId: 63, pickType: "Song of the Week", albumName: "American Lawn", artistName: "Blake Rouse", memberName: "Simon" },
      { pickId: 64, pickType: "Runner Up Song of the Week", albumName: "Jackie", artistName: "Yves Tumor", memberName: "Daniel" },
    ],
    [
      { pickId: 65, pickType: "Album of the Week", albumName: "Zapper", artistName: "NANORAY", memberName: "Daniel" },
      { pickId: 66, pickType: "Runner Up Album of the Week", albumName: "No Pressure", artistName: "Logic", memberName: "Archie" },
      { pickId: 67, pickType: "Song of the Week", albumName: "Graphic Bleed Outs", artistName: "Quelle Chris and Chris Keys", memberName: "Reed" },
      { pickId: 68, pickType: "Runner Up Song of the Week", albumName: "Ondulé", artistName: "Mathieu Boogaerts", memberName: "Natalie" },
    ],
  ],
  [[],],
  [[],],
];
export default picksData;