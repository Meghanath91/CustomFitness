import React from "react";
import clsx from 'clsx';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from '@material-ui/core/Link';

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

const currentUser = {
  isStudent: false
};

const useStyles = makeStyles({
  root: {
    width: "20%",
    marginTop: "4%",
    border: "none"
  },

  title: {
    fontSize: "1.4rem"
  },
  pos: {
    marginBottom: 12
  },
  pic: {
    width: 200,
    padding: "2%"
  }
});

export default function Profile(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent
        style={{
          marginTop: "5%",
          marginLeft: "10%",
          backgroundColor: "rgba(130, 143, 211, 0.25)",
          padding: "2%"
        }}
      >
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
          style={{
            textAlign: "center",
            textTransform: "uppercase"
          }}
        >
          Student profile
        </Typography>
        <Typography variant="h5" component="h2" color="primary" align="left">
          {props.studentData.name}
        </Typography>
        <img
          className={classes.pic}
          src={props.studentData.avatar}
          alt="Smiley face"
        />
        {/* <Avatar aria-label="recipe" className={classes.avatar}></Avatar> */}

        <Typography className={classes.pos} variant="h5" color="Secondary">
          Goal : {props.studentData.goal}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Height : {props.studentData.height}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Weight : {props.studentData.weight}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          BMI :{" "}
          {(
            (props.studentData.weight /
              (props.studentData.height *
                0.39 *
                props.studentData.height *
                0.39)) *
            703
          ).toFixed(2)}
        </Typography>
      </CardContent>
      {currentUser.isStudent ? (
        <CardActions>
          <Button size="small">update profile</Button>
        </CardActions>
      ) : (
        ""
      )}
    </Card>
  );
}
