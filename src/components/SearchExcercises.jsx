import React, {useState, useEffect} from 'react'
import {Box, Button, Stack, TextField, Typography} from '@mui/material'

const SearchExcercises = () => {
  return (
   <Stack alignItems='center' m='37px' justifyContent='center' p='20px'>
<Typography sx={{fontWeight:'700', fontSize:{
    lg:'44x', xs:'30px'
}}} mb='50px' textAlign='center'>
    Awesome Exercises you <br/> should know
</Typography>
<Box sx={{position:'relative', mb:'72px'}}>
<TextField height = '76px' value ="" onChange ={(e)=>{}} 
placeholder= 'Search'
type='text'
sx={{input:{
    fontWeight:'700',
    border:'none',
    borderRadius:'4px'
},
width:{
    lg:'1000px', xs:'350px',
},
backgroundColor:'#ffffff',
borderRadius:'40px'
}}
/>
<Button className='search-btn'
sx={{bgcolor:'#FF2625',
color:'#fff',
textTransform:'none',
width:{
    lg:'175px', xs:'80px'
},
fontSize:{lg:'20px', xs:'14px'},
height:'56px',
position:'absolute',
right:'0'
}}
>Search</Button>

</Box>
   </Stack>
  )
}

export default SearchExcercises