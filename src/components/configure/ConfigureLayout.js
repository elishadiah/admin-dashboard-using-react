import { Divider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
const ConfigureLayout = ({ children }) => {
  return (
    <>
      <Typography
        variant='h6'
        sx={{
          textTransform: 'uppercase',
        }}
        component={'h1'}
      >
        Configure Pupdates
      </Typography>

      <Box as='div' sx={{ mt: '15px', pb: '0' }}>
        <Box
          as='div'
          sx={{
            display: 'flex',
            gap: '20px',
            flexWrap: 'wrap',
            fontFamily: `Lato`,
            fontWeight: 300,
            letterSpacing: 1,
          }}
        >
          <LinkItem text='Messages & Sounds' url='/configure/messages-sounds' />
          <LinkItem text='Streams' url='/configure/streams' />
          <LinkItem text='Displays' url='/configure/displays' />
          <LinkItem text='Slide Show' url='/configure/slide-show' />
          <LinkItem text='Marketplace' url='/configure/marketplace' />
        </Box>
      </Box>
      <Divider sx={{ width: '80%' }} />
      <div>{children}</div>
    </>
  );
};

const LinkItem = ({ url, text }) => {
  const { pathname } = useLocation();

  return (
    <Box
      as={Link}
      sx={{
        display: 'block',
        textDecoration: 'none',
        color: pathname === url ? '#81b1d9' : '#4f4f4f',
        fontSize: '20px',
        transition: 'all 0.5s',
        '&:hover': {
          color: '#81b1d9',
        },
      }}
      to={url}
    >
      {text}
    </Box>
  );
};

export default ConfigureLayout;
