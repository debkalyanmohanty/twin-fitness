import React from 'react';
import { Link } from 'react-router-dom';
import { Button , Stack , Typography } from '@mui/material';

const ExerciseCard = ({key , exercise}) => {
  return (
    <Link to={`/exercise/${exercise.id}`} style={{textDecoration:'none'}}>
        <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' />
        <Stack
         direction={'row'}
        >
         <Button sx={{ ml: '21px', color: '#fff', background: '#FFA9A9', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
        {exercise.bodyPart}
      </Button>
      <Button sx={{ ml: '21px', color: '#fff', background: '#FCC757', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
        {exercise.target}
      </Button>
        </Stack>
        <Typography
          ml="21px"
          color="#fff"
          fontWeight={'bold'}
          mt="11px"
          pb="10px"
          textTransform="capitalize"
          fontSize="22px"
        >{exercise.name}</Typography>
    </Link>
  )
}

export default ExerciseCard