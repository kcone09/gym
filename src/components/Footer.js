import React from 'react'
import { Box, Typography, Stack } from '@mui/material'

import Logo from '../assets/images/Logo-1.png'

const Footer = () => {
  return (
    <Box mt='80px' bgcolor='#fff3f4'>
      <Stack gap='40px' alignItems='center' px='40px' pt='24px'>
        <img src={Logo} alt='logo' width='200px' height='40px' />
      <Typography variant='h5' pd='40px' mt='20px'>
        Made with ❤️ by <a href="https://github.com/kcone09" target="_blank" rel="noreferrer">Enock</a>
      </Typography>
      </Stack>

    </Box>
  )
}

export default Footer