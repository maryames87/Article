import React, { useContext } from "react";
import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const Loader = () => {
  
  return (
    <Box
      backgroundColor="rgba(0,0,0,0.75)"
      height="100vh"
      width="100vw"
      display="flex"
      justifyContent="center"
      position="fixed"
zIndex={500}
      alignItems="center"
    >
      <CircularProgress disableShrink />
    </Box>
  );
};

export default Loader;
