import React from "react";
import ExerciseListItem from "./ExerciseListItem";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "flex-end",
    margin: "0% auto"
  }
}));

export default function ExerciseList() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ExerciseListItem
        image_url="https://thumbs.gfycat.com/GlossySkinnyDuckbillcat-small.gif"
        title="Push-up"
        name="Push-ups"
        description="push-up is an exercise done laying with face, palms and toes facing down, keeping legs and back straight, extending arms straight to push body up and back down again."
      />
      <ExerciseListItem
        image_url="https://i.imgur.com/UJAnRhJ.gif?noredirect"
        title="Sit-up"
        name="Sit-ups"
        description="a type of physical exercise for making stomach muscles strong, in which you lie on your back on the floor and rouse the top part your body to a sitting position"
      />
      <ExerciseListItem
        image_url="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/workouts/2016/03/jumpingjack-1457045563.gif"
        title="Jumping Jack"
        name="Jumping Jack"
        description="a physical jumping exercise performed by jumping to a position with the legs spread wide and the hands touching overhead, sometimes in a clap, and then returning to a position with the feet together and the arms at the sides"
      />
    </div>
  );
}
