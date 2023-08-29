import { Link, Typography } from '@mui/material';
import React from 'react';

// Material UI Components
const Copyright = () => {
  return (
    <Typography variant='body2' color={'GrayText'} align='center'>
      {'© '}
      { new Date().getFullYear() }
      {' '}
      <Link color={'inherit'}  href='https://google.com'>
        ChereDev.
      </Link>
      {' All rights reserved.'}
    </Typography>
  );
}

export default Copyright;
