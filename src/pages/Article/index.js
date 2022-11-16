import React, { useContext, useState,useEffect } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  FormGroup,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { Container } from "@mui/material";
import { useLocation } from "react-router-dom";
import { Contexts } from "../../contexts";
import { Helmet } from "react-helmet";
import parse from "html-react-parser";
import { Box } from "@mui/system";
import { toast } from 'react-toastify';
import { useCookies } from "react-cookie";



const Article = () => {
  const { articles, setArticles } = useContext(Contexts);
  const location = useLocation();
  const [comment, setComment] = useState("");
  const [currentArticle, setCurrentArticle] = useState({});
const[cookie]=useCookies("token")
  const pathNormalName = location.pathname.slice(14);

  useEffect(() => {
    const actualArticle = articles.filter(
      (article) => article.normalName === pathNormalName
    );
    setCurrentArticle(actualArticle[0]);
  }, []);

  const handleLikeArticle = () => {
    const updateArticle = articles.map((article) => {
      if (article.normalName === pathNormalName) {
        const likedArticle = {
          ...article,
          like: article.like + 1,
          youLike: true,
        };
        setCurrentArticle(likedArticle);
        return likedArticle;
      } else {
        return article;
      }
    });
    setArticles(updateArticle);
  };

  const handleCommentArticle = () => {
    if (!cookie.token)
    return toast.warn("you must be logged in to add comment");
  if (!comment) return toast.warn("you must type somethin to sen comment ");
  const newComment = {
    name: localStorage.getItem("user") || "unknown user ...",
    comment,
  };
  const updatedArticles = articles.map((article) => {
    if (article.normalName === pathNormalName) {
      const commentedArticle = {
        ...article,
        comments: [...article.comments, newComment],
      };
      setCurrentArticle(commentedArticle);
      return commentedArticle;
    } else {
      return article;
    }
  });
  setArticles(updatedArticles);
  setComment("");
  };

  return (
    <>
        <Helmet>
        <meta name="keywords" content={currentArticle?.tags} />
        <title>{currentArticle.title}</title>
      </Helmet>
      <Container>
        <Card sx={{ my: "2rem" }}>
          <CardHeader title={currentArticle.title} />
          <CardMedia
            sx={{ objectFit: "cover" }}
            component="img"
            height="650vh"
            image={currentArticle.img}
            alt="green iguana"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {currentArticle.summary}
              <hr />
              {parse(currentArticle.article || " ")}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            {currentArticle.youLike ? (
              <IconButton aria-label="add to favorites">
                <FavoriteIcon sx={{ fill: "tomato" }} />
                {currentArticle.like}
              </IconButton>
            ) : (
              <IconButton
                onClick={handleLikeArticle}
                aria-label="add to favorites"
              >
                <FavoriteIcon />
                {currentArticle.like}
              </IconButton>
            )}

            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
        <FormGroup>
          <TextField
            type="text"
            variant="outlined"
            name="title"
            placeholder="enter your comments..."
            onChange={(e) => setComment(e.target.value)}
            value={comment}
          ></TextField>
          <Button
            onClick={handleCommentArticle}
            sx={{ my: "1rem" }}
            variant="contained"
          >
            Send
          </Button>
        </FormGroup>
        <hr />
        <Box p="2rem">
          {currentArticle?.comments?.map((comment) => (
            <Box>
              <Typography variant="h4">{comment.name}</Typography>
              <Typography>{comment.comment}</Typography>
              <hr />
            </Box>
          ))}
        </Box>
      </Container>
    </>
  );
};

export default Article;
