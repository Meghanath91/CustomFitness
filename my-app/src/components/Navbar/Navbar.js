import React, { useState } from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { purple } from "@material-ui/core/colors";
import axios from "axios";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "rgba(255, 255, 255, 0)"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  button: {
    color: purple
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "1.5rem",
    fontFamily: "Raleway , Sans-serif",
    fontWeight: "700",
    padding: "1%",
    "&:hover": {
      color: "#ABFFC7"
    }
  },

  logo: {
    textDecoration: "none",
    color: "white",
    fontSize: "3rem",
    fontFamily: "Berkshire Swash, cursive",
    fontWeight: "700",
    padding: "1%",
    "&:hover": {
      color: "#ABFFC7"
    }
  }
}));

export default function Navbar(props) {
  let user = "";

  const handleLogout = evt => {
    evt.preventDefault();
  
    
    axios.post(`http://localhost:8080/logout`, { user_id: props.trainerData.id })
      .then(res => {
        // console.log({headers: res.headers})
        user = "";
        console.log("i get to this point with user from======>>>", res.data);
      });
  };

  if (props.trainerData.name) {
    debugger;
    user = props.trainerData.name;
  }
  if (props.studentData.name) {
    debugger;
    user = props.studentData.name;
  }
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        color="inherit"
        border="none"
        style={{
          backgroundColor: "rgba(40, 40, 40, 0.62)"
        }}
      >
        <Toolbar>
          <Typography variant="h6" className={classes.title} to="/">
            <Link className={classes.logo} to="/">
              CustomFitness
            </Link>
          </Typography>
          {user ? (
            <div>
              {" "}
              <Typography className={classes.link}>
                Loggedin as : {user}
              </Typography>
              <Link  onSubmit={()=>handleLogout} className={classes.link} to="/home">
                Logout
              </Link>{" "}
            </div>
          ) : (
            <div>
              <Link className={classes.link} to="/login">
                Login
              </Link>
              <Link className={classes.link} to="/register">
                Register
              </Link>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
