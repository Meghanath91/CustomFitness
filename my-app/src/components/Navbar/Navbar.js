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
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { purple } from "@material-ui/core/colors";
import Login from "../Login/Login";
import Register from "../Register/Register";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
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
    fontSize: "1.1rem",
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
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title} to="/">
              <Link className={classes.link} to="/">
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
