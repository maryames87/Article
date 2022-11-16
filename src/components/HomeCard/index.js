import React from "react";
import { ButtonBase } from "@mui/material";
import { Typography } from "@mui/material";
import { useStyles } from "./style.homeCard";
import { Link } from "react-router-dom";

const HomeCard = ({ icon, title,href="#",onClick }) => {
  const classes = useStyles();
  return (
    <>
      <ButtonBase onClick={onClick} className={classes.cardBox} >
    <Link to={href}>
        {icon}
        <Typography>{title}</Typography>
    </Link>
      </ButtonBase>
    </>
  );
};

export default HomeCard;
