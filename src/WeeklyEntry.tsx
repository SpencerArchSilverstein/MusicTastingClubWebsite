import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import picksData from './picksData.js';
import {useState, useEffect} from 'react';
import './mission.css';
import MemberPicksOrNotPicks from './PickChips';
import { pickOrNotListFall24, colors } from './PickChipsData';

function createData2(
  name: string,
  picks: Array<{pickId: number, pickType: string, albumName: string, artistName: string, memberName: string}>
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

function Row(props: { row: ReturnType<typeof createData2> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>

        <TableCell align="left">
          <b>{row.name}</b>
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 2 }}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell><b>Pick Type</b></TableCell>
                    <TableCell><b>Album/Song Name</b></TableCell>
                    <TableCell align="right"><b>Artist</b></TableCell>
                    <TableCell align="right"><b>Member</b></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                {row.picks.map((historyRow) => (
                    <TableRow key={historyRow.pickType}>
                      <TableCell component="th" scope="row">
                        {historyRow.pickType}
                      </TableCell>
                    <TableCell>{historyRow.albumName}</TableCell>
                      <TableCell align="right">{historyRow.artistName}</TableCell>
                      <TableCell align="right"> 
                        {historyRow.memberName}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

function makeRows(dates:Array<string>, quarterIndex:number){
  var rows = [];
  for (var i = 0; i < dates.length; i++){
    rows.push(createData2('WEEK ' + (i+1) + ' PICKS ' + dates[i],picksData[quarterIndex][i]));
  }
  return rows;
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  
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
  }, [value])

  return (
    <div className="cont">
<Box >
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="WQ24 Picks" {...a11yProps(0)} sx={{width:'33%'}}/>
          <Tab label="SQ24 Picks" {...a11yProps(1)} sx={{width:'33%'}}/>
          <Tab label="FQ24 Picks" {...a11yProps(2)} sx={{width:'33%'}}/>
          {/* <Tab label="THIS WEEK'S PICKS" {...a11yProps(3)} /> */}
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
      <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableBody>
          {makeRows(["(1/11/24)","(1/18/24)","(1/25/24)","(2/1/24)","(2/8/24)","(2/15/24)","(2/22/24)","(2/29/24)","(3/7/24)"],0).map((row) => (
            <Row key={row.name} row={row} />
          ))}         
        </TableBody>
      </Table>    
    </TableContainer>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableBody>
          {makeRows(["(4/1/24)","(4/8/24)","(4/15/24)","(4/22/24)","(4/29/24)","(5/6/24)","(5/13/24)","(5/20/24)"],1).map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <MemberPicksOrNotPicks pickOrNotList={pickOrNotListFall24} colors={colors}></MemberPicksOrNotPicks>
      </CustomTabPanel>
    </Box>
    </div>
    
  );
}


