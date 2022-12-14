import { Box, ListItemIcon, Typography } from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import React from 'react';
import { FaAngleRight, FaRegQuestionCircle, FaUserAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { logout } from '../../features/login/authSlice';
import { removeToken } from '../../utils/token';
import Item from './Item';

function UserMenu() {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    removeToken();
    dispatch(logout());
  };

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '100%',
      }}
    >
      <MenuList>
        <Item url='/admin' text={'Admin'} icon={<FaUserAlt />} />
        <Help />
        <Item
          onClick={logoutHandler}
          text={'Log Out'}
          icon={<FaAngleRight />}
        />
      </MenuList>
    </Box>
  );
}

const Help = () => (
  <Box
    as={'a'}
    href='https://campercamsupport.zendesk.com/hc/en-us'
    target={'_blank'}
    rel='noreferrer'
    sx={{ display: 'block', textDecoration: 'none' }}
  >
    <MenuItem>
      <ListItemIcon sx={{ mr: '10px', fontSize: '29px', color: '#fff' }}>
        <FaRegQuestionCircle />
      </ListItemIcon>
      <ListItemText
        sx={{
          display: {
            xs: 'none',
            md: 'block',
          },
        }}
      >
        <Typography sx={{ fontSize: '25px', color: '#fff' }}>
          Help Center
        </Typography>
      </ListItemText>
    </MenuItem>
  </Box>
);

export default UserMenu;
