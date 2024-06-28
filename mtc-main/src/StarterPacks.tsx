import * as React from 'react';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import startPackDataList from './starterPackData.js';
import './mission.css'

interface AlbumArtist { [album: string]: string; }
interface GenreData { [genre: string]: AlbumArtist; }
const data: GenreData = startPackDataList;


export default function CollapsibleAccordion() {
  return (
    <div className='cont'>
 <Box sx={{ width: '100%' }}>
      {Object.keys(startPackDataList).map((genre, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography style={{fontWeight:"bold"}}>{genre}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TableContainer component={Paper}>
              <Table aria-label="albums and artists table">
                <TableHead>
                  <TableRow>
                    <TableCell><b>Album</b></TableCell>
                    <TableCell><b>Artist</b></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                {Object.entries(data[genre]).map(([album, artist], idx) => (
                    <TableRow key={idx}>
                      <TableCell>{album}</TableCell>
                      <TableCell>{artist}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
    </div>
   
  );
}
