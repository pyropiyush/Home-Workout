import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => (
  <Box mt="10px" bgcolor="black">
    <Stack gap="10px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px" color='red'>
      <h1>NEW BEGINING AWAITS</h1>
      <p>For Further Info Contact-9794433220</p>
      <p>Near Gla university,Mathura</p>
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px"><p>For Further Info Contact-9794433220</p>
      <p>Near Gla university,Mathura</p></Typography>
  </Box>
);

export default Footer;
