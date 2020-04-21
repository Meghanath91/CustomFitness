import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CustomizedRadios from "./Radio-button";
import axios from "axios";
import { Redirect, Route } from "react-router-dom";
import Login from "../Login/Login";
import AlertDialog from "./AlertDialog";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        CustomFitness
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function Register() {
  const classes = useStyles();
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [experience, setExperience] = useState("");
  const [about, setAbout] = useState("");
  const [age, setAge] = useState(0);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [goal, setGoal] = useState("");
  const [expertise, setExpertise] = useState("");
  const [focus, setFocus] = useState("");

  const handleRegister = evt => {
    evt.preventDefault();

    if (user === "trainer") {
      axios
        .post(`/trainers/register`, {
          name: fullName,
          email: email,
          password: password,
          phone: phone,
          experience: experience,
          about: about,
          expertise: expertise
        })
        .then(res => {
          return <Redirect to="/login" />;
        });
    } else {
      axios
        .post(`/students/register`, {
          name: fullName,
          email: email,
          password: password,
          phone: phone,
          age: age,
          height: height,
          weight: weight,
          goal: goal,
          focus: focus
        })
        .then(res => {
          return (
            <Route path="/login">
              <Login />
              <Redirect to="/login" />
            </Route>
          );
        });
    }
  };

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <form onSubmit={handleRegister} className={classes.form} noValidate>
          <Grid container spacing={6}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly"
              }}
            >
              <div
                style={{
                  width: "100%",
                  paddingTop: "4%"
                }}
              >
                <Grid item xs={12}>
                  <TextField
                    autoComplete="name"
                    name="name"
                    value={fullName}
                    onChange={evt => setFullname(evt.target.value)}
                    variant="outlined"
                    required
                    fullWidth
                    id="name"
                    label="Full Name"
                    autoFocus
                    style={{
                      paddingBottom: "2%"
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    value={email}
                    onChange={evt => setEmail(evt.target.value)}
                    autoComplete="email"
                    style={{
                      paddingBottom: "2%"
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    value={password}
                    onChange={evt => setPassword(evt.target.value)}
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    style={{
                      paddingBottom: "2%"
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="phone"
                    value={phone}
                    onChange={evt => setPhone(evt.target.value)}
                    label="Phone Number"
                    type="phone"
                    id="phone"
                    autoComplete="phone"
                    style={{
                      paddingBottom: "2%"
                    }}
                  />
                </Grid>
              </div>
              <Grid>
                <CustomizedRadios
                  setUser={setUser}
                  setExperience={setExperience}
                  setAbout={setAbout}
                  setAge={setAge}
                  setHeight={setHeight}
                  setWeight={setWeight}
                  setGoal={setGoal}
                  setExpertise={setExpertise}
                  setFocus={setFocus}
                />
              </Grid>
            </div>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            to="./login"
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            <AlertDialog style={{ width: "100%" }} />
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
