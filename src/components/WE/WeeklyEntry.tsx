import * as React from 'react';
import {
  Tabs, Tab, Box, Collapse, IconButton, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, InputLabel, MenuItem, FormControl, Select, useMediaQuery
} from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import picksData from './picksData2.json';
import { useState, useEffect } from 'react';
import '../SP/mission.css';
import MemberPicksOrNotPicks from './PickChips';
import { pickOrNotListFall24 } from './PickChipsData';
import PrizeWheel from './NameWheel';
import ThisWeeksPicks from '../SP/ThisWeeksPicks';
import NameWheelData from './NameWheelData.json';

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

export default function WeeklyEntry() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [value, setValue] = React.useState(0);
  const [pick, setPick] = useState('Album of the Week');
  const [wheelOptions, setWheelOptions] = useState<string[]>([]);
  const [openRow, setOpenRow] = useState<number | null>(null);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
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

  const handlePickChange = (event: SelectChangeEvent) => {
    const selectedPick = event.target.value as string;
    setPick(selectedPick);
  };

  const handleRowClick = (index: number) => {
    setOpenRow(openRow === index ? null : index);
  };

  const renderRows = (weeks: any) => {
    return weeks.map((week: any, index: number) => (
      <React.Fragment key={week.weekId}>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => handleRowClick(index)}
            >
              {openRow === index ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell align="left">
            <b>{week.weekName} PICKS {week.weekDate}</b>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={openRow === index} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 2 }}>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell><b>Pick Type</b></TableCell>
                      <TableCell><b>Pick Name</b></TableCell>
                      <TableCell align="right"><b>Artist</b></TableCell>
                      <TableCell align="right"><b>Member</b></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {week.picks.map((pick: any) => (
                      <TableRow key={pick.pickId}>
                        <TableCell component="th" scope="row">
                          {pick.pickType}
                        </TableCell>
                        <TableCell>{pick.songOrAlbumName}</TableCell>
                        <TableCell align="right">{pick.artistName}</TableCell>
                        <TableCell align="right">{pick.memberName}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    ));
  };

  return (
    <React.Fragment>
      {isMobile ? (<br></br>) : null}
      <div className="cont">
        <h3 style={{ fontSize: 35, textAlign: "center", marginBottom: 15 }}>PREVIOUS PICKS</h3>
        <Box>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              {picksData.map((quarter, index) => (
                <Tab key={quarter.quarterId} label={`${quarter.quarterName} Picks`} {...a11yProps(index)} sx={{ width: '33%' }} />
              ))}
            </Tabs>
          </Box>
          {picksData.map((quarter, index) => (
            <CustomTabPanel key={quarter.quarterId} value={value} index={index}>
              <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                  <TableBody>
                    {renderRows(quarter.weeks)}
                  </TableBody>
                </Table>
              </TableContainer>
              {index === 1 && (
                <MemberPicksOrNotPicks pickOrNotList={pickOrNotListFall24} colors={colors}></MemberPicksOrNotPicks>
              )}
            </CustomTabPanel>
          ))}
        </Box>
      </div>
      <div style={{ marginTop: 40 }}>
        <ThisWeeksPicks></ThisWeeksPicks>
      </div>
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
                    onChange={handlePickChange}
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
        <br></br><br></br>
      </div>
    </React.Fragment>
  );
}