import * as React from 'react';
import {Chip, Stack, Box, Divider} from '@mui/material';

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
        
      <Box key={index1} textAlign="center" width={'100%'} mt={2} p={2}>
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

