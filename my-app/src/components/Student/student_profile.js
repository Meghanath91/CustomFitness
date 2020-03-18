import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles({
  root: {
    minWidth: 200
  },

  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default function Student_profile() {
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
          Shivam
        </Typography>

        <Avatar aria-label="recipe" className={classes.avatar}></Avatar>

        <Typography className={classes.pos} color="textSecondary">
          Goal : body building
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Height : 175 cm
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Weight : 130 lbs
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          BMI : 20
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">update profile</Button>
      </CardActions>
    </Card>
  );
}
