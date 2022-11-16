import React, { useContext } from "react";
import {
  Box,
  Button,
  Container,
  FormGroup,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useStyles } from "./style.auth";
import LoginIcon from "@mui/icons-material/Login";
import * as Yup from "yup";
import { Formik } from "formik";
import axios from "axios";
import useCookie from "react-use-cookie";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Contexts } from "./../../contexts/index";
const Auth = () => {
  const classes = useStyles();
  const [cookies, setCookie, removeCookie] = useCookie("token");
  const navigate = useNavigate();

  const SignupSchema = Yup.object({
    email: Yup.string().email("ایمیل خودرا درست وارد کنید").required(),
    password: Yup.string().required(),
  });
  const { setLoader } = useContext(Contexts);
  return (
    <>
      <Container>
        <Grid container spacing={2} className={classes.root}>
          <Grid item xs={6}>
            <Typography variant="h3">Login For Enjoy....</Typography>
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={SignupSchema}
              onSubmit={async (values) => {
                try {
                  setLoader(true);
                  const res = await axios.post(
                    "https://reqres.in/api/login",
                    values
                  );
                  setCookie("token", res.data.token, {
                    maxAge: 60 * 60 * 24,
                  });
                  localStorage.setItem("user",values.email)
                  setLoader(false);
                  navigate("/");
                } catch (error) {
                  setLoader(false);
                  toast.warn(
                    "something wrong please check your email or password"
                  );
                }
              }}
            >
              {(handlers) => (
                <Box component="form" onSubmit={handlers.handleSubmit}>
                  <FormGroup className={classes.formGroup}>
                    {handlers.errors.email}
                    <TextField
                      type="email"
                      placeholder="enter your email.."
                      variant="outlined"
                      name="email"
                      onChange={handlers.handleChange}
                      onBlur={handlers.handleBlur}
                      value={handlers.values.email}
                    ></TextField>
                    {handlers.errors.password}
                    <TextField
                      type="password"
                      placeholder="enter your password.."
                      variant="outlined"
                      name="password"
                      onChange={handlers.handleChange}
                      onBlur={handlers.handleBlur}
                      value={handlers.values.password}
                    ></TextField>
                    <Button type="submit" variant="contained">
                      Submit
                    </Button>
                  </FormGroup>
                </Box>
              )}
            </Formik>
          </Grid>
          <Grid item xs={6} className={classes.authPic}>
            <LoginIcon />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Auth;
