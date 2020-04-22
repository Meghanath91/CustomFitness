import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import StudentTable from "./WeightTable/WeightTable";
import Graph from "./Graph/Graph";
import WeightForm from "./WeightForm/WeightForm";
import StudentAppSideBar from "./SideBar/StudentAppSideBar";
import axios from "axios";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © Custom Fitness "}

      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed,
    backgroundColor: "#c7d4d69c",
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),

    background: "#c7d4d6",
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

export default function StudentDashboard(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`/student/${props.studentData.id}/weights`)

      .then((res) => {
        const datafromdb = res.data;
        const formattedData = datafromdb.map(
          ({ id, student_id, created_at, ...item }) => item
        );

        setData(formattedData);
      });
  }, [props.studentData.id]);

  const classes = useStyles();

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <StudentAppSideBar studentData={props.studentData} />
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
            {/* Chart on weight */}
            <Grid
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
              }}
            >
              <Paper
                className={fixedHeightPaper}
                style={{
                  width: "98%",
                  marginRight: "4%",
                }}
              >
                <Graph
                  data={data}
                  style={{
                    width: "60rem",
                  }}
                />
              </Paper>
              <WeightForm studentData={props.studentData} />
            </Grid>
            <Grid
              item
              xs={12}
              style={{
                padding: "12px 0px",
              }}
            >
              <Paper className={classes.paper}>
                <StudentTable studentData={props.studentData} data={data} />
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}
