import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import Box from "@material-ui/core/Box";

import Typography from "@material-ui/core/Typography";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import TrainerAppSideBar from "../Sidebar/TrainerAppSidebar";
import StudentTable from "./StudentTable/StudentTable";
import Graph from "./Graph/Graph";
import StudentRequest from "./Notification/StudentRequests";
import axios from "axios";
function Copyright() {
  return (
    <Typography variant="body2" style={{ color: "white" }} align="center">
      {"Copyright ©  Custom Fitness "}

      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
    height: "100vh",
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
    zIndex: theme.zIndex.drawer - 10,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: "rgb(0, 11, 14)",
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
    width: "100%",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function TrainerDashboard(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    // axios fetch here
    setData([
      { time: "Monday", amount: 0 },
      { time: "Tuesday", amount: 300 },
      { time: "Wednesday", amount: 600 },
      { time: "Thursday", amount: 1500 },
      { time: "Friday", amount: 1000 },
      { time: "Saturday", amount: 0 },
      { time: "Sunday", amount: 100 },
    ]);
  }, []);

  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    axios.get(`/trainer/${props.trainerData.id}/subscriptions`).then((res) => {
      const subscriptions = res.data;

      setSubscriptions(subscriptions);
    });
  }, [props.trainerData.id]);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <TrainerAppSideBar
        trainerData={props.trainerData}
        subscriptions={subscriptions}
      />
      <main
        className={classes.content}
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          backgroundBlendMode: "overlay",

          backgroundImage: "url('https://wallpapercave.com/wp/wp2639536.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid
              item
              xs={12}
              md={8}
              lg={10}
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Paper className={fixedHeightPaper} style={{ width: "100%" }}>
                <Graph data={data} />
              </Paper>
              <StudentRequest
                subscriptions={subscriptions}
                style={{
                  marginLeft: "10%",
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <StudentTable myStudents={props.myStudents} />
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright style={{ color: "white" }} />
          </Box>
        </Container>
      </main>
    </div>
  );
}
