import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
// import "./CustomPlan.scss";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

export default function StudentCustomForm(props) {
  console.log("props on customform", props.myStudents);
  const [difficulty, setDifficulty] = useState("beginner");
  const [type, setType] = useState("weightloss");
  const [student, setStudent] = useState({});

  const handleDifficulty = event => {
    props.setDifficulty(() => event.target.value);
    setDifficulty(event.target.value);
  };
  const handleType = event => {
    props.setType(() => event.target.value);
    setType(event.target.value);
  };

  const handleStudent = event => {
    props.setStudent(() => event.target.value);
    setStudent(event.target.value);
  };

  return (
    <form
      // onSubmit={props.handleCreatePlan}
      className="custom-form"
      noValidate
      autoComplete="off"
    >
      <label for="workout-title">Workout Title:</label>
      <input disabled value="Work out Title" name="workoutTitle" />
      <label for="explanation">Exercise direction:</label>
      <input
        disabled
        value="Lorem ejslfjklwekjf fnwerlkfghlsehf fnlerghjkerjhfg gndrgklhdrklg"
        name="explanation"
      />
      <label for="sets"># of sets:</label>
      <input disabled value="Number of sets" name="sets" />
      <label for="reps"># of reps:</label>
      <input disabled value="Number of reps" name="reps" />
      <label for="difficulty">Difficulty Level:</label>
      <input disabled value="Difficulty level" name="difficulty" />
      <button className="completePlan">Complete plan</button>
    </form>
  );
}
