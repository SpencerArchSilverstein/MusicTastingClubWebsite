import * as React from 'react';
import {
  Tabs, Tab, Box, Collapse, IconButton, Table, TableBody, TableCell, TableContainer, 
  TableHead, TableRow, Paper, InputLabel, MenuItem, FormControl, Select, useMediaQuery 
} from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import picksData from './picksData';
import {useState, useEffect} from 'react';
import '../SP/mission.css';
import MemberPicksOrNotPicks from './PickChips';
import { pickOrNotListFall24 } from './PickChipsData';
import PrizeWheel from './NameWheel';
import ThisWeeksPicks from '../SP/ThisWeeksPicks';
import NameWheelData from './NameWheelData.json';
import picksData2 from './picksData2.json';


const colors: string[] = [
  'rgba(255, 99, 132, 0.5)',
  'rgba(54, 162, 235, 0.5)',
  'rgba(255, 206, 86, 0.5)',
  'rgba(75, 192, 192, 0.5)',
  'rgba(153, 102, 255, 0.5)',
  'rgba(255, 159, 64, 0.5)',
  'rgba(199, 199, 199, 0.5)',
  'rgba(83, 102, 255, 0.5)',
  'rgba(104, 159, 56, 0.5)'
];

function createData2(
  name: string,
  picks: Array<{pickId: number, pickType: string, songOrAlbumName: string, artistName: string, memberName: string}>
) {
  return {
    name,
    picks,
  };
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface PickMap {
  pickId:number;
  pickData:string;
  pickType:string;
  songOrAlbumName:string;
  artistName:string;
  memberName:string;
}

interface WeekMap {
  weekId: number;
  weekName: string;
  weekDate: string;
  picks: PickMap[];
}

interface QuarterMap{
  quarterId: number;
  quarterName: string;
  weeks: WeekMap[];
}


function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >

      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}

    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const WeeklyEntry2: React.FC = () => {
  // The dropdown's open or not
  const [open, setOpen] = React.useState(false);

  // To keep track of the value that you clicked on the tabs
  const [value, setValue] = React.useState(0);

  // Handles Tab changes
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const [pick, setPick] = useState('Album of the Week');
  const [wheelOptions, setWheelOptions] = useState<string[]>([]);

  const handleChange2 = (event: SelectChangeEvent) => {
    const selectedPick = event.target.value as string;
    setPick(selectedPick);
  };

  // Checks if the user is using mobile
  const isMobile = useMediaQuery('(max-width: 768px)');

  // For my reference as to what useEffect does
  useEffect(() => {
    switch (value){
      case 0:
        console.log("Tab: WQ24");
        break;
      case 1:
        console.log("Tab: SQ24");
        break;
      case 2:
        console.log("Tab: FQ24");
        break;
    }
  }, [value]);

  useEffect(() => {
    let options: string[] = [];
    switch (pick) {
      case "Album of the Week":
        options = NameWheelData["AotW"];
        break;
      case "Runner Up Album of the Week":
        options = NameWheelData["RUAotW"];
        break;
      case "Song of the Week":
        options = NameWheelData["SotW"];
        break;
      case "Runner Up Song of the Week":
        options = NameWheelData["RUSotW"];
        break;
      default:
        options = NameWheelData["AotW"];
    }
    setWheelOptions(options);
  }, [pick]);

type ActualQuarterMap = {
  quarterId: number;
  quarterName: string;
  weeks: {
    weekId: number;
    weekName: string;
    weekDate: string;
    picks: {
      pickId: number;
      pickData: {
        pickType: string;
        songOrAlbumName: string;
        artistName: string;
        memberName: string;
      };
    }[];
  }[];
};
const picksData2Parsed: ActualQuarterMap[] = picksData2 as ActualQuarterMap[];


  // Parsing the 
  return (
    <React.Fragment>
      {isMobile ? (<br />) : null}
      <div className="cont">
        <h3 style={{fontSize:35, textAlign:"center", marginBottom:15}}>PREVIOUS PICKS</h3>
        <Box >

          <React.Fragment>
          {/* TITLE AND SECTION SELECTORS */}
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            {picksData2Parsed.map((quarterMap:QuarterMap, titleIndex:number) => {
    <Tab key={titleIndex} label={quarterMap.quarterName} {...a11yProps(titleIndex)} sx={{width:'33%'}}/>
  })}
            </Tabs>      
          </Box>
          

          {/* Mapping Quarter */}
          {picksData2.map((quarterMap:any, quarterIndex:number) => {
            <CustomTabPanel key={quarterIndex} value={value} index={quarterIndex}>
              <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                  <TableBody>

                    {/* Mapping Week */}
                    {quarterMap.weeks.map((weekMap:any, weekIndex:number) => {
                    <React.Fragment key={weekIndex}>

                      {/* Mapping Week */}
                      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                        <TableCell>
                          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                          </IconButton>
                        </TableCell>
                        <TableCell align="left"><b>{weekMap.weekName} PICKS {weekMap.weekDate}</b></TableCell>
                      </TableRow>

                      
                      {/* Mapping Picks */}
                      {weekMap.picks.map((pickMap:any, pickIndex: number) => {
                      <TableRow key={pickIndex}>
                        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                          <Collapse in={open} timeout="auto" unmountOnExit>
                            <Box sx={{ margin: 2 }}>
                              <Table size="small" aria-label="purchases">

                                {/* Table Header */}
                                <TableHead><TableRow>
                                  <TableCell><b>Pick Type</b></TableCell>
                                  <TableCell><b>Album/Song Name</b></TableCell>
                                  <TableCell align="right"><b>Artist</b></TableCell>
                                  <TableCell align="right"><b>Member</b></TableCell>
                                </TableRow></TableHead>


                                {/* Putting Data In Table */}
                                <TableBody>
                                  <TableRow key={pickMap.pickId}>
                                    <TableCell component="th" scope="row">{pickMap.pickData.pickType}</TableCell>
                                    <TableCell>{pickMap.pickData.songOrAlbumName}</TableCell>
                                    <TableCell align="right">{pickMap.pickData.picks.artistName}</TableCell>
                                    <TableCell align="right">{pickMap.pickData.memberName}</TableCell>
                                  </TableRow>           
                                </TableBody>

                        </Table></Box></Collapse></TableCell></TableRow>
                        })}
                    </React.Fragment>
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            <MemberPicksOrNotPicks pickOrNotList={pickOrNotListFall24} colors={colors}></MemberPicksOrNotPicks>
            </CustomTabPanel>  
          })}
        </React.Fragment>
        </Box>
       
      </div>
      <div style={{ marginTop: 40 }}><ThisWeeksPicks></ThisWeeksPicks></div>
      <div style={{ margin: 0, padding: 0 }}>
        {isMobile ? null : (
          <div style={{ marginTop: 60 }}>
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" sx={{ backgroundColor: 'white', minWidth: 300, textAlign: "center", fontSize: 10 }}>
              <div style={{ marginBottom: 0, minWidth: 400 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Pick</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={pick}
                    label="Pick"
                    onChange={handleChange2}
                  >
                    <MenuItem value={"Album of the Week"}>Album of the Week</MenuItem>
                    <MenuItem value={"Runner Up Album of the Week"}>Runner Up Album of the Week</MenuItem>
                    <MenuItem value={"Song of the Week"}>Song of the Week</MenuItem>
                    <MenuItem value={"Runner Up Song of the Week"}>Runner Up Song of the Week</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <PrizeWheel options={wheelOptions} title={pick} />
            </Box>
          </div>
        )}
        <br /><br />
      </div> 
    </React.Fragment>
  );
}


export default function WeeklyEntry() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  
  

  const [pick, setPick] = useState('Album of the Week');
  const separateOptions = (str: string): string[] => {
    return str.split(/(?=[A-Z])/);
  };

  const [wheelOptions, setWheelOptions] = useState<string[]>([]);

  const handleChange2 = (event: SelectChangeEvent) => {
    const selectedPick = event.target.value as string;
    setPick(selectedPick);
  };

  useEffect(() => {
    let options: string[] = [];
    switch (pick) {
      case "Album of the Week":
        options = NameWheelData["AotW"];        
        break;
      case "Runner Up Album of the Week":
        options = NameWheelData["RUAotW"];
        break;
      case "Song of the Week":
        options = NameWheelData["SotW"];
        break;
      case "Runner Up Song of the Week":
        options = NameWheelData["RUSotW"];
        break;
      default:
        options = NameWheelData["AotW"];
    }
   setWheelOptions(options);
  }, [pick]);
  // const picksData2Parsed = JSON.parse(`${picksData2}`);
  return (

    <React.Fragment>
        {isMobile ? (<br></br>) : null} 

    <div className="cont">
      <h3 style={{fontSize:35, textAlign:"center", marginBottom:15}}>PREVIOUS PICKS</h3>
<Box >
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="WQ24 Picks" {...a11yProps(0)} sx={{width:'33%'}}/>
          <Tab label="SQ24 Picks" {...a11yProps(1)} sx={{width:'33%'}}/>
          <Tab label="FQ24 Picks" {...a11yProps(2)} sx={{width:'33%'}}/>
          {/* <Tab label="THIS WEEK'S PICKS" {...a11yProps(3)} /> */}
        </Tabs>
      </Box>

      {/* <CustomTabPanel value={value} index={1}>
        <TableContainer component={Paper}>
      <Table aria-label="collapsible table"> */}
        {/* <TableBody>
          {makeRows(["(4/1/24)","(4/8/24)","(4/15/24)","(4/22/24)","(4/29/24)","(5/6/24)","(5/13/24)","(5/20/24)"],1).map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody> */}
      {/* </Table>
    </TableContainer> */}
    <MemberPicksOrNotPicks pickOrNotList={pickOrNotListFall24} colors={colors}></MemberPicksOrNotPicks>
      {/* </CustomTabPanel> */}
    </Box>
    </div>
    <div style={{marginTop:40}}>
    <ThisWeeksPicks></ThisWeeksPicks> 
    </div>
     
     <div style={{ margin: 0, padding: 0 }}>

     {isMobile ? null : (
    <div style={{marginTop:60}}>
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" sx={{ backgroundColor: 'white', minWidth: 300, textAlign: "center", fontSize: 10 }}>
     
        <div style={{marginBottom:0, minWidth:400}}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Pick</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={pick}
            label="Pick"
            onChange={handleChange2}
          >
            <MenuItem value={"Album of the Week"}>Album of the Week</MenuItem>
            <MenuItem value={"Runner Up Album of the Week"}>Runner Up Album of the Week</MenuItem>
            <MenuItem value={"Song of the Week"}>Song of the Week</MenuItem>
            <MenuItem value={"Runner Up Song of the Week"}>Runner Up Song of the Week</MenuItem>
          </Select>
        </FormControl>
        </div>
      <PrizeWheel options={wheelOptions} title={pick} />
    </Box>
    </div>)}
      <br></br><br></br>   
</div>
    </React.Fragment>
    
  );
}


// import * as React from 'react';
// import {
//   Tabs, Tab, Box, Collapse, IconButton, Table, TableBody, TableCell, TableContainer, 
//   TableHead, TableRow, Paper, InputLabel, MenuItem, FormControl, Select, useMediaQuery 
// } from '@mui/material';
// import { SelectChangeEvent } from '@mui/material/Select';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import picksData from './picksData';
// import { useState, useEffect } from 'react';
// import '../SP/mission.css';
// import MemberPicksOrNotPicks from './PickChips';
// import { pickOrNotListFall24 } from './PickChipsData';
// import PrizeWheel from './NameWheel';
// import ThisWeeksPicks from '../SP/ThisWeeksPicks';
// import NameWheelData from './NameWheelData.json';
// import picksData2 from './picksData2.json';

// const colors: string[] = [
//   'rgba(255, 99, 132, 0.5)',
//   'rgba(54, 162, 235, 0.5)',
//   'rgba(255, 206, 86, 0.5)',
//   'rgba(75, 192, 192, 0.5)',
//   'rgba(153, 102, 255, 0.5)',
//   'rgba(255, 159, 64, 0.5)',
//   'rgba(199, 199, 199, 0.5)',
//   'rgba(83, 102, 255, 0.5)',
//   'rgba(104, 159, 56, 0.5)'
// ];

// interface TabPanelProps {
//   children?: React.ReactNode;
//   index: number;
//   value: number;
// }

// function CustomTabPanel(props: TabPanelProps) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
//     </div>
//   );
// }

// function a11yProps(index: number) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`,
//   };
// }

// function WeeklyEntry() {
//   const isMobile = useMediaQuery('(max-width: 768px)');
//   const [value, setValue] = useState(0);
//   const [open, setOpen] = useState(false);
//   const [pick, setPick] = useState('Album of the Week');
//   const [wheelOptions, setWheelOptions] = useState<string[]>([]);

//   const handleChange = (event: React.SyntheticEvent, newValue: number) => {
//     setValue(newValue);
//   };

//   const handleChange2 = (event: SelectChangeEvent) => {
//     const selectedPick = event.target.value as string;
//     setPick(selectedPick);
//   };

//   useEffect(() => {
//     let options: string[] = [];
//     switch (pick) {
//       case "Album of the Week":
//         options = NameWheelData["AotW"];
//         break;
//       case "Runner Up Album of the Week":
//         options = NameWheelData["RUAotW"];
//         break;
//       case "Song of the Week":
//         options = NameWheelData["SotW"];
//         break;
//       case "Runner Up Song of the Week":
//         options = NameWheelData["RUSotW"];
//         break;
//       default:
//         options = NameWheelData["AotW"];
//     }
//     setWheelOptions(options);
//   }, [pick]);

//   const createData2 = (name: string, picks: Array<{ pickId: number, pickType: string, songOrAlbumName: string, artistName: string, memberName: string }>) => {
//     return {
//       name,
//       picks,
//     };
//   };

//   const rows = (dates: string[], quarterIndex: number) => {
//     return dates.map((date, i) => createData2('WEEK ' + (i + 1) + ' PICKS ' + date, picksData[quarterIndex][i]));
//   };

//   const picksData2Parsed = JSON.parse(`${picksData2}`);

//   return (
//     <React.Fragment>
//       {isMobile ? (<br />) : null}
//       <div className="cont">
//         <h3 style={{ fontSize: 35, textAlign: "center", marginBottom: 15 }}>PREVIOUS PICKS</h3>
//         <Box>
//           <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//             <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
//               {picksData2Parsed.map((quarterMap: any, titleIndex: number) => (
//                 <Tab key={titleIndex} label={quarterMap.quarterName} {...a11yProps(titleIndex)} sx={{ width: '33%' }} />
//               ))}
//             </Tabs>
//           </Box>

//           {picksData2Parsed.map((quarterMap: any, quarterIndex: number) => (
//             <CustomTabPanel key={quarterIndex} value={value} index={quarterIndex}>
//               <TableContainer component={Paper}>
//                 <Table aria-label="collapsible table">
//                   <TableBody>
//                     {quarterMap.weeks.map((weekMap: any, weekIndex: number) => (
//                       <React.Fragment key={weekIndex}>
//                         <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
//                           <TableCell>
//                             <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
//                               {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
//                             </IconButton>
//                           </TableCell>
//                           <TableCell align="left"><b>{weekMap.weekName}</b></TableCell>
//                         </TableRow>
//                         {weekMap.picks.map((pickMap: any, pickIndex: number) => (
//                           <TableRow key={pickIndex}>
//                             <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
//                               <Collapse in={open} timeout="auto" unmountOnExit>
//                                 <Box sx={{ margin: 2 }}>
//                                   <Table size="small" aria-label="purchases">
//                                     <TableHead>
//                                       <TableRow>
//                                         <TableCell><b>Pick Type</b></TableCell>
//                                         <TableCell><b>Album/Song Name</b></TableCell>
//                                         <TableCell align="right"><b>Artist</b></TableCell>
//                                         <TableCell align="right"><b>Member</b></TableCell>
//                                       </TableRow>
//                                     </TableHead>
//                                     <TableBody>
//                                       <TableRow key={pickMap.pickId}>
//                                         <TableCell component="th" scope="row">{pickMap.pickData.pickType}</TableCell>
//                                         <TableCell>{pickMap.pickData.songOrAlbumName}</TableCell>
//                                         <TableCell align="right">{pickMap.pickData.artistName}</TableCell>
//                                         <TableCell align="right">{pickMap.pickData.memberName}</TableCell>
//                                       </TableRow>
//                                     </TableBody>
//                                   </Table>
//                                 </Box>
//                               </Collapse>
//                             </TableCell>
//                           </TableRow>
//                         ))}
//                       </React.Fragment>
//                     ))}
//                   </TableBody>
//                 </Table>
//               </TableContainer>
//               <MemberPicksOrNotPicks pickOrNotList={pickOrNotListFall24} colors={colors}></MemberPicksOrNotPicks>
//             </CustomTabPanel>
//           ))}
//         </Box>
//       </div>
//       <div style={{ marginTop: 40 }}>
//         <ThisWeeksPicks></ThisWeeksPicks>
//       </div>
//       <div style={{ margin: 0, padding: 0 }}>
//         {isMobile ? null : (
//           <div style={{ marginTop: 60 }}>
//             <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" sx={{ backgroundColor: 'white', minWidth: 300, textAlign: "center", fontSize: 10 }}>
//               <div style={{ marginBottom: 0, minWidth: 400 }}>
//                 <FormControl fullWidth>
//                   <InputLabel id="demo-simple-select-label">Pick</InputLabel>
//                   <Select
//                     labelId="demo-simple-select-label"
//                     id="demo-simple-select"
//                     value={pick}
//                     label="Pick"
//                     onChange={handleChange2}
//                   >
//                     <MenuItem value={"Album of the Week"}>Album of the Week</MenuItem>
//                     <MenuItem value={"Runner Up Album of the Week"}>Runner Up Album of the Week</MenuItem>
//                     <MenuItem value={"Song of the Week"}>Song of the Week</MenuItem>
//                     <MenuItem value={"Runner Up Song of the Week"}>Runner Up Song of the Week</MenuItem>
//                   </Select>
//                 </FormControl>
//               </div>
//               <PrizeWheel options={wheelOptions} title={pick} />
//             </Box>
//           </div>
//         )}
//         <br /><br />
//       </div>
//     </React.Fragment>
//   );
// }

// export default WeeklyEntry;
