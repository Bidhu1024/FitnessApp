import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";
const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
sx={{borderTop: bodyPart === item ? '4px solid #ff2625' : '',
            backgroundColor: "#fff",
              borderBottomLeftRadius: "1.25rem",
              width: "270px",
              height: "280px",
              gap: "47px",
}}
onClc=
    >
      <img
        src={Icon}
        alt="dumb"
        style={{ width: "2.5rem", height: "2.5rem" }}
      />
      <Typography fontSize='1.5rem' fontWeight = 'bold' color= "3A1212" textTransform='capitalize'>{item}</Typography>
    </Stack>
  );
};

export default BodyPart;
