import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useLocation, useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const location=useLocation()
  const handlePrev = () => {
    navigate(-1);

  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              onClick={handlePrev}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              {location.pathname!=="/"&& <ArrowBackIcon />}
         
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
