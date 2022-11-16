import React, { useContext } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { useStyles } from "./style.article";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import HomeCardArticle from "../../components/HomeCardArticle";
import { Contexts } from "../../contexts/index";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const Articles = () => {
  const { articles } = useContext(Contexts);
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <>
    <Helmet>
      <title>Article pages</title>

    </Helmet>
      <Container>
        <Grid
          sx={{ marginTop: "3rem" }}
          spacing={3}
          container
          className={classes.root}
        >
          {articles.map((article) => (
            <HomeCardArticle
            key={article.id}
            img={article.img}
            title={article.title}
            summary={article.summary}
            fullArticle={article.fullArticle}
            icon={<FavoriteIcon />}
            icon1={<ShareIcon />}
            onClick={() => {
              navigate(`/card-article/${article.normalName}`);
            }}
            />
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Articles;
