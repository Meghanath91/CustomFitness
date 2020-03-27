import React, { useState } from "react";
import "../Student.scss";

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
      className="student-custom-form"
      noValidate
      autoComplete="off"
    >
      <p className="form-title">My custom plan</p>
      <label for="workout-title">Workout Title:</label>
      <input
        className="student-form-data"
        disabled
        value="Work out Title"
        name="workoutTitle"
      />
      <label for="explanation">Exercise direction:</label>
      <input
        className="student-form-data"
        disabled
        value="Lorem ejslfjklwekjf fnwerlkfghlsehf"
        name="explanation"
      />
      <label for="sets"># of sets:</label>
      <input
        className="student-form-data"
        disabled
        value="Number of sets"
        name="sets"
      />
      <label for="reps"># of reps:</label>
      <input
        className="student-form-data"
        disabled
        value="Number of reps"
        name="reps"
      />
      <label for="difficulty">Difficulty Level:</label>
      <input
        className="student-form-data"
        disabled
        value="Difficulty level"
        name="difficulty"
      />
      <button className="completePlan">Complete plan</button>
    </form>
  );
}
