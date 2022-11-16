import React, { useContext, useState } from "react";
import {
  Button,
  Container,
  FormGroup,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { v4 } from "uuid";
import { useStyles } from "./style.addArticle";
import PostAddIcon from "@mui/icons-material/PostAdd";
import { Formik } from "formik";
import { Box } from "@mui/system";
import * as Yup from "yup";
import { Contexts } from "./../../contexts/index";
import convertToBase64 from "./../../utils/convertToBase64";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const AddArticle = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const { articles, setArticles } = useContext(Contexts);
  const [picture, setPicture] = useState("");
  const [article, setArticle] = useState("");
  const [tags, setTags] = useState("");

  const SignupSchema = Yup.object({
    title: Yup.string().required(),
    picture: Yup.mixed().required(),
    text: Yup.string().required(),
  });

  const addNewArticle = async (value) => {
    const img = await convertToBase64(picture);
    const splitTitle = value.title.split(" ");
    const normalName = splitTitle.join("_");

    const newArticle = {
      id: v4(),
      img,
      title: value.title,
      summary: value.text.slice(0, 50),
      fullARticle: value.fullArticle,
      normalName,
      tags,
      article,
      like: 0,
      youLike:false,
      comments:[],
    };
    const articlesList = [...articles, newArticle];
    window.localStorage.setItem("articles", JSON.stringify(articlesList));
    setArticles(articlesList);
    toast.success("your article successfully added");
    navigate("/");
  };

  return (
    <>
      <Container>
        <Grid container spacing={2} className={classes.root}>
          <Grid item xs={8}>
            <Typography my={5} variant="h3">Add your Article....</Typography>
            <Formik
              initialValues={{ title: "", picture: "", text: "" }}
              validationSchema={SignupSchema}
              onSubmit={addNewArticle}
            >
              {(handlers) => (
                <Box component="form" onSubmit={handlers.handleSubmit}>
                  <FormGroup className={classes.formGroup}>
                    {handlers.errors.title}
                    <TextField
                      type="text"
                      variant="outlined"
                      name="title"
                      placeholder="enter your title..."
                      onChange={handlers.handleChange}
                      onBlur={handlers.handleBlur}
                      value={handlers.values.title}
                    ></TextField>
                    {handlers.errors.picture}
                    <TextField
                      type="file"
                      placeholder="add your file..."
                      variant="outlined"
                      name="picture"
                      onChange={handlers.handleChange}
                      onChangeCapture={(e) => {
                        setPicture(e.target.files[0]);
                      }}
                      onBlur={handlers.handleBlur}
                      value={handlers.values.picture}
                    ></TextField>
                    {handlers.errors.text}
                    <TextField
                      type="text"
                      placeholder="enter your text..."
                      variant="outlined"
                      name="text"
                      onChange={handlers.handleChange}
                      onBlur={handlers.handleBlur}
                      value={handlers.values.text}
                    ></TextField>
                    <CKEditor
                      editor={ClassicEditor}
                      data="<p>Hello from CKEditor 5!</p>"
                      onChange={(event, editor) => {
                        const data = editor.getData();
                        setArticle(data);
                      }}
                    />
                    <TextField
                      type="text"
                      placeholder="enter tags or key about your article.."
                      variant="outlined"
                      name="text"
                      onChange={(e) => setTags(e.target.value)}
                      value={tags}
                    ></TextField>
                    <Button type="submit" variant="contained">
                      Submit
                    </Button>
                  </FormGroup>
                </Box>
              )}
            </Formik>
          </Grid>
          <Grid item xs={4} className={classes.authIcon}>
            <PostAddIcon />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default AddArticle;
