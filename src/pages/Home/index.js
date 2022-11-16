import React from "react";
import { Box, Container } from "@mui/material";
import { useStyles } from "./style.home";
import ArticleIcon from "@mui/icons-material/Article";
import LoginIcon from "@mui/icons-material/Login";
import HomeCard from "../../components/HomeCard";
import PostAddIcon from "@mui/icons-material/PostAdd";
import LogoutIcon from "@mui/icons-material/Logout";
import { useCookies } from 'react-cookie';




const Home = () => {
  const classes = useStyles();
  const [cookies,setCookie,removeCookie] = useCookies("token");

  return (
    <>
      <Box className={classes.root}>
        <Container>
          <Box className={classes.homeCard}>
            {cookies.token ? (
              <HomeCard
                onClick={() => {
                  removeCookie("token");
                  window.location.reload()
                }}
                icon={<LogoutIcon />}
                title="LogOut"
              />
            ) : (
              <HomeCard href="/signup" icon={<LoginIcon />} title="Login" />
            )}

            <HomeCard
              href="/my-article"
              icon={<ArticleIcon />}
              title="Articles"
            />
            <HomeCard
              href={cookies.token ?"/add-article":"/signup"}
              icon={<PostAddIcon />}
              title="AddArticle"
            />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Home;
