import React, { useState } from "react";
import clsx from 'clsx';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TrainerAppSideBar from "./Dashboard/TrainerAppSidebar"
import Box from '@material-ui/core/Box';

// import Avatar from '@material-ui/core/Avatar';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles({
  root: {
    minWidth: 200
  },

  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  pic: {
    width: 400
  },
  desc: {
    width: 400
  }
});

export default function TrainerProfile(props) {
  console.log(props);

  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);


  return (
    <div className={classes.root} >
      <CssBaseline /> 
      <TrainerAppSideBar />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Trainer Profile */}
            <Grid item xs={10} md={10} lg={10}>
              <Paper className={fixedHeightPaper}>
                      <Card className={classes.root} variant="outlined">
                <CardContent>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    Trainer profile
                  </Typography>
                  <Typography variant="h5" component="h2" color="primary" align="left">
                    {props.trainerData.name}
                  </Typography>
          
                  <img
                    className={classes.pic}
                    src={props.trainerData.avatar}
                    alt="Smiley face"
                  />
          
                  {/* <Avatar aria-label="recipe" className={classes.avatar}></Avatar> */}
          
                  <Typography className={classes.pos} variant="h5" color="Secondary">
                    Focus: {props.trainerData.about}
                  </Typography>
                  <Typography className={classes.desc} variant="body2" component="p">
                    {props.trainerData.experience}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">update profile</Button>
                </CardActions>
              </Card>
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
      
    </div>
    )
  }

