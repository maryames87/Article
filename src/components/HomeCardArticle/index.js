import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import CardContent from "@mui/material/CardContent";
import { CardMedia, Grid, Typography } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import { useStyles } from "./style.homeCardArticle";


const HomeCardArticle = ({summary,onClick,title, icon, icon1, img }) => {
  const classes = useStyles();
  return (
    <>
    
    <Grid onClick={onClick}  item  lg={3} className={classes.root}>
   

        <Card>
          <CardHeader title={title} />
          <CardMedia
            component="img"
            height="250vh"
            image={img}
            alt="green iguana"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {summary}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">{icon}</IconButton>
            <IconButton aria-label="share">{icon1}</IconButton>
          </CardActions>
        </Card>
      
        </Grid>
    
      
   
    
    </>
  );
};

export default HomeCardArticle;
