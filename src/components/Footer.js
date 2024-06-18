import React from 'react'
import { Box, Typography, Stack } from '@mui/material'

const Footer = () => {
  return (
    <Box mt='80px' bgcolor='#fff3f4'>
      <Stack gap='40px' alignItems='center' px='40px' pb='24px'>
      <Typography variant='h5' pd='40px' mt='20px'>
        Made  by <a href="https://github.com/kcone09" target="_blank" rel="noreferrer" className='footer-link'>E. C.</a>
      </Typography>
      </Stack>

    </Box>
  )
}

export default Footer