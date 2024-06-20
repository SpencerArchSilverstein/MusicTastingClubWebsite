import * as React from 'react';
import {Chip, Stack, Box, Divider} from '@mui/material';


// const pickOrNotList = [
//   ["HAVE Picked", ["Member1","Member2","Member3","Member3.5"]],
//   ["Have NOT Picked", ["Member4","Member5","Member6","Member6.5"]],
//   ["Prev Album Genres", ["Genre1","Genre2","Genre3","Genre4","Genre5","Genre6","Genre7","Genre8","Genre9","Genre10"]]];
//   const colors = [
//     'rgba(255, 99, 132, 0.5)',
//     'rgba(54, 162, 235, 0.5)',
//     'rgba(255, 206, 86, 0.5)',
//     'rgba(75, 192, 192, 0.5)',
//     'rgba(153, 102, 255, 0.5)',
//     'rgba(255, 159, 64, 0.5)',
//     'rgba(199, 199, 199, 0.5)',
//     'rgba(83, 102, 255, 0.5)',
//     'rgba(104, 159, 56, 0.5)'
//   ];

type PickOrNotList = [string, string[]][];
type Colors = string[];

interface MemberPicksOrNotPicksProps {
  pickOrNotList: PickOrNotList;
  colors: Colors;
}
const MemberPicksOrNotPicks: React.FC<MemberPicksOrNotPicksProps> = ({ pickOrNotList, colors }) => {
  return (
    <Box display="flex" flexWrap="wrap">
      {pickOrNotList.map((item1,index1) => (
        
      <Box key={index1} textAlign="center" width={index1 < 2 ? '50%' : '100%'} mt={2} p={2}>
        <h3 style={{marginTop:index1 < 2 ? 0:5}}>{item1[0]}</h3>
       
      <Stack direction="row" spacing={1} flexWrap="wrap" justifyContent="center">
        {(item1[1] as string[]).map((number, idx) => (
          <Chip key={idx} label={number} style={{ backgroundColor: colors[idx], marginTop:10}}/>
        ))}
    </Stack>
    </Box>
      ))}
    </Box>   
  );
}

export default MemberPicksOrNotPicks;