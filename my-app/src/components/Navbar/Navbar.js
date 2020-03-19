import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { purple } from "@material-ui/core/colors";

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

export default function Navbar() {
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
          <Link className={classes.link} to="/login">
            Login
          </Link>
          <Link className={classes.link} to="/register">
            Register
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
