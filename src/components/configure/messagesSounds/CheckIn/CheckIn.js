import { Box, TextField } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import Card from '../../Card';
import SelectSound from './SelectSound';
const CheckIn = () => {
  return (
    <div>
      <Card title={'Check IN'} color='#82da73'>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          gap={4}
          sx={{ py: '12px' }}
        >
          <Box>
            <Box sx={{ flex: 1 }}>
              <TextField
                InputLabelProps={{
                  shrink: true,
                }}
                label='Default Text'
                variant='outlined'
                placeholder='Input here'
                defaultValue={'- is here to play'}
                fullWidth
              />
            </Box>
          </Box>
          <div>
            <Box sx={{ flex: 1, width: { xs: '100%', sm: '200px' } }}>
              <SelectSound />
            </Box>
          </div>
          <div>
            <Box sx={{ flex: 1 }}>
              <TextField
                InputLabelProps={{
                  shrink: true,
                }}
                type='number'
                label='Duration'
                variant='outlined'
                placeholder={'input here'}
                defaultValue={90}
                value={90}
                fullWidth
              />
            </Box>
          </div>
        </Stack>
      </Card>
    </div>
  );
};

export default CheckIn;
