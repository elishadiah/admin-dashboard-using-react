import { Box, Button, Divider, Paper, Stack, Typography } from '@mui/material';
import React from 'react';
import { FaCaretRight } from 'react-icons/fa';

const Create = () => {
  return (
    <Box
      as={Paper}
      sx={{
        boxSizing: 'border-box',
        px: '10px',
        borderRadius: '10px',
        mt: '30px',
      }}
    >
      <Stack
        direction='row'
        alignItems={'center'}
        justifyContent='space-between'
        flexWrap={'wrap'}
      >
        <Box
          sx={{
            py: '15px',
            pl: '10px',
            width: {
              xs: '95%',
              sm: '40%',
            },
            borderTop: '3px solid #5f7686',
          }}
        >
          <Typography
            variant='body1'
            sx={{ textTransform: 'uppercase' }}
            component={'h2'}
          >
            Create
          </Typography>
        </Box>
        <Button
          sx={{
            mb: {
              xs: '10px',
            },
          }}
          color={'secondary'}
          variant='outlined'
          size='small'
        >
          Suggested <FaCaretRight />
        </Button>
      </Stack>
      <Divider />
      <Box sx={{ height: '300px', boxSizing: 'border-box', p: '10px' }}>
        <h2>Data</h2>
      </Box>
    </Box>
  );
};

export default Create;
