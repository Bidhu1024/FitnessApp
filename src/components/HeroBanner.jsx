import React from 'react'
import {Box,Stack,Typography,Button} from '@mui/material'
import Heroban from '../assets/images/banner.png'
const HeroBanner = () => {
  return (
  <Box sx={{
mt:{lg:'212px', xs:'70px'},
ml:{sm:'50px'}
  }}
  position='relative'
  p='1.25rem'
  >
    <Typography color='#FF2625' fontWeight='600' fontSize='1.6rem'>
        Fitness Club
    </Typography>
    <Typography fontWeight={700} mb='23px' mt= '30px' sx={{fontSize:{
    lg:'44px', 
    xs:'40px',

},

    }}
    
    >
        Sweat, Smile, <br/>
        and Repeat
    </Typography>
    <Typography fontSize='22px' lineHeight='2.2rem' mb={3}>
       Checkout the most effective Exercise
    </Typography>
    <Button variant='contained' color='error' href="#excercises">Explore Exercises</Button>
    <Typography fontWeight={600} color='#ff2625' sx={{opacity:'0.1', display:{
        lg:'block', xs:'none'
    },
    fontSize:'12.5rem'
    }}
    
    >Exercise</Typography>
    <img src={Heroban} alt="" className='hero-banner-img'/>
  </Box>
  )
}

export default HeroBanner