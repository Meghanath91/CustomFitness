import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";

// import Avatar from "@material-ui/core/Avatar";
const currentUser = {
  isStudent: false
};

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
  }
});

export default function Student_profile(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
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
