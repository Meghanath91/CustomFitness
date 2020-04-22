import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import CssBaseline from "@material-ui/core/CssBaseline";
import axios from "axios";
import CustomPlan from "../components/Trainer/Customplan/Customplan";
import TrainerAppSideBar from "../components/Trainer/Dashboard/TrainerAppSidebar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: "-1",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",

    marginTop: "5%",
  },
}));

const drawerWidth = 240;

export default function Exercise(props) {
  const classes = useStyles();

  const [state, setState] = useState([]);
  useEffect(() => {
    axios.get("/exercises").then((res) => {
      const exercises = res.data;
      setState(exercises);
    });
  }, []);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <TrainerAppSideBar trainerData={props.trainerData} />
      <main className={classes.content}>
        <Grid item xs={12} md={12} lg={20}>
          <CustomPlan
            exerciseData={state}
            myStudents={props.myStudents}
            trainerData={props.trainerData}
          />
        </Grid>
      </main>
    </div>
  );
}
