import { Box, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import Card from '../../Card';
import RotationTimer from '../PhotoImages/RotationTimer';
import Add from './Add';
import Item from './Item';
const PHOTOS_BASE_URL =
  'https://dev.preschoolreports.com/admin/timthumb.php?src=admin/photo_slides/';

const PhotoImages = () => {
  const { photos } = useSelector((state) => state.slide);

  const formatePhotos = useMemo(() => {
    if (photos.length === 0) return [];
    return photos.reduce((acc, cur) => {
      acc.push({ ...cur, file_name: PHOTOS_BASE_URL + cur.file_name });
      return acc;
    }, []);
  }, [photos]);

  return (
    <div>
      <Card title='Photo Images'>
        <Stack direction={'row'} gap={2} flexWrap={'wrap'}>
          {formatePhotos.map((item) => (
            <Item key={item.id} id={item.id} image={item.file_name} />
          ))}
          <Add />
        </Stack>
      </Card>
      <Box sx={{ fontSize: '14px', mt: '8px', ml: '10px' }}>
        *Suggested image size of x * x
      </Box>
      <Stack
        direction={{
          xs: 'column',
          sm: 'row',
        }}
        gap={{ xs: 0, sm: 2 }}
        alignItems={'center'}
        justifyContent={{ xs: 'center', sm: 'end' }}
        sx={{ mb: '50px', mt: { xs: '20px', sm: '0' } }}
      >
        <div>
          <Typography variant='h6'>Display Add timer:</Typography>
        </div>
        <RotationTimer />
      </Stack>
    </div>
  );
};

export default PhotoImages;
