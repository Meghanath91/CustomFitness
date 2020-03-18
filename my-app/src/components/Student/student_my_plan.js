import React from "react";
import ExerciseList from "../Trainer/Customplan/ExerciseList";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  plan: {
    textAlign: "right"
  },
  student: {
    display: "flex",
    flexDirection: "column",
    width: "25%",
    height: "90vh",
    backgroundColor: "#2B1B00"
  }
}));

export default function Student_my_plan() {
  const classes = useStyles();

  return (
    <div className={classes.plan}>
      <ExerciseList id="board-3" className={classes.student} name="my_plan" />
    </div>
  );
}
