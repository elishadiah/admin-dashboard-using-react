import { Box } from '@mui/system';
import React from 'react';
import LobbyLayout from './Lobby/LobbyLayout';
import PUpdateLayout from './PUpdates/PUpdateLayout';

const DisplaysContainer = () => {
  return (
    <Box sx={{ mt: '30px', fontFamily: `'Lato' , sans-serif` }}>
      <LobbyLayout />
      <PUpdateLayout />
    </Box>
  );
};

export default DisplaysContainer;
