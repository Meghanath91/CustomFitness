import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: "rgb(255, 226, 193)",
    textAlign: "center"
  },
  input: {
    fontSize: "1rem",
    color: "#040404",
    margin: "0% 0.5%",
    border: "none",
    backgroundColor: "rgb(255, 226, 193)",
    fontWeight: "900",
    textTransform: "uppercase"
  },
  form: {
    padding: "1%"
  }
}));

export default function Student_info() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <form className={classes.form}>
        <label for="student_name">Student Name:</label>
        <input
          className={classes.input}
          type="text"
          id="student_name"
          value="John Smith"
          disabled
        />
        <label for="height">Height:</label>
        <input
          className={classes.input}
          type="text"
          id="height"
          value="170cm"
          disabled
        />
        <label for="weight">Weight:</label>
        <input
          className={classes.input}
          type="text"
          id="weight"
          value="65kg"
          disabled
        />
        <label for="bmi">BMI:</label>
        <input
          className={classes.input}
          type="text"
          id="bmi"
          value="20"
          disabled
        />
      </form>
    </div>
  );
}
