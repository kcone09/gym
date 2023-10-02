import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'

const SimilarExercises = ({ targetMusclesExercise, equipmentExercise}) => {
  return (
    <Box
    id='exercises'
    sx={{ mt: { lg: '100px', xs: '0' } }}
    mt='50px'
    p='20px'
    >
        <Typography variant='h3' mb='46px'>
            Similar Muscle Exercises
        </Typography>
        <Stack direction='row' sx={{ p:'2', position: 'relative' }} >
            {targetMusclesExercise.length ?
             <HorizontalScrollbar data={targetMusclesExercise}/>
             : <Loader/>
            }
        </Stack>
        <Typography variant='h3' mb='46px'>
            Similar Equipment Exercises
        </Typography>
        <Stack direction='row' sx={{ p:'2', position: 'relative' }} >
            {equipmentExercise.length ?
             <HorizontalScrollbar data={equipmentExercise}/>
             : <Loader/>
            }
        </Stack>
    </Box>
  )
}

export default SimilarExercises