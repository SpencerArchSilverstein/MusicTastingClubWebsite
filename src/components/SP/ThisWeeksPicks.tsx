import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './mission.css';
import { useMediaQuery } from '@mui/material';


function createData2(
    pickId: number, pickType: string, songOrAlbumName: string, artistName: string, memberName: string
  ) {
    return {
    pickId, pickType, songOrAlbumName, artistName, memberName
    };
  }

const rows = [
    createData2(-1,"Album of the Week","albumName","ArtistName","MemberName"),
    createData2(-2,"Runner Up Album of the Week", "albumName", "ArtistName","MemberName"),
    createData2(-3,"Song of the Week","songName","ArtistName","MemberName"),
    createData2(-4,"Runner Up Song of the Week", "songName", "ArtistName","MemberName"),
];

export default function ThisWeeksPicks() {
  const isMobile =  useMediaQuery('(max-width: 768px)');

  return (
    <div className={isMobile ? "cont2" : "cont"}>
      <h3 style={{fontSize:35, textAlign:"center"}}>NEXT MEETING'S PICKS (09/XX/24)</h3>
      <h3 style={{fontSize:20, textAlign:"center", marginBottom:15}}>WE MEET EVERY [DAY] AT [TIME] IN [LOCATION]</h3>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell><b>Pick Type</b></TableCell>
              <TableCell><b>Album/Song Name</b></TableCell>
              <TableCell align="right"><b>Artist</b></TableCell>
              <TableCell align="right"><b>Member</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.pickId}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="left">{row.pickType}</TableCell>
                <TableCell align="left">{row.songOrAlbumName}</TableCell>
                <TableCell align="right">{row.artistName}</TableCell>
                <TableCell align="right">{row.memberName}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
