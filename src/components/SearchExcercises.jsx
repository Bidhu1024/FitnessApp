import React, { useState, useEffect } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { excerciseOptions,fetchData } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";
const SearchExcercises = () => {
    
  const [search, setSearch] = useState("");
  const [exercise, setExercises] = useState([]);
    const [bodyParts, setBodyParts] = useState([]);

  useEffect(()=>{
const fetchExerciseData = async () =>{
    const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', excerciseOptions);
    setBodyParts(['all', ...bodyPartsData])
}
fetchExerciseData();
  },[])
  const handleSearch = async ()=>{
if(search){
    const excerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', excerciseOptions );
   const searchedExercises = excerciseData.filter((exercise)=>exercise.name.toLowerCase().includes(search)
   || exercise.target.toLowerCase().includes(search)
   || exercise.equipment.toLowerCase().includes(search)
   || exercise.bodyPart.toLowerCase().includes(search)
   ) ;
   setSearch('');
   setExercises(searchedExercises);
}
  }
  return (
    <Stack alignItems="center" m="37px" justifyContent="center" p="20px">
      <Typography
        sx={{
          fontWeight: "700",
          fontSize: {
            lg: "44x",
            xs: "30px",
          },
        }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercises you <br /> should know
      </Typography>
      <Box sx={{ position: "relative", mb: "72px" }}>
        <TextField
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search"
          type="text"
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "4px",
            },
            width: {
              lg: "1000px",
              xs: "350px",
            },
            backgroundColor: "#ffffff",
            borderRadius: "40px",
          }}
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: {
              lg: "175px",
              xs: "80px",
            },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: "0",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
        <Box sx={{position:'absolute', width:'100%', p:'20px'}}>
            <HorizontalScrollbar data={bodyParts}/>
        </Box>
      </Box>
    </Stack>
  );
};

    export default SearchExcercises;
