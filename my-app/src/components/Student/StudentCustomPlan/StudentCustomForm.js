import React, { useEffect, useState } from "react";
import "../Student.scss";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import axios from "axios";

export default function StudentCustomForm(props) {
  console.log("props on customform", props.setCustomPlanID);

  const [myCustomPlans, setMyCustomPlans] = useState([]);
  const [plan, setPlan] = useState("");
  const [title, setTitle] = useState("Work out Title");
  const [sets, setSets] = useState("Number of sets");
  const [reps, setReps] = useState("Number of reps");
  const [difficulty, setDifficulty] = useState("Difficulty level");
  const [description, setDescription] = useState("Explanation");
  const [type, setType] = useState("Type");

  useEffect(() => {
    axios
      .get(`http://localhost:8080/student/${props.studentData.id}/custom_plans`)
      .then(res => {
        const customPlans = res.data;

        console.log("mystudents on trainer", customPlans);
        setMyCustomPlans(customPlans);
      });
  }, [props.studentData.id]);

  const handlePlan = event => {
    // set(() => event.target.value);
    console.log("plan id", event.target.value);
    props.setCustomId(event.target.value);
    setPlan(prev => {
      const selectedPlan = myCustomPlans.filter(
        p => p.id === event.target.value
      )[0];
      //selectedPlan._______
      setTitle(selectedPlan.title);
      setDescription(selectedPlan.description);
      setSets(selectedPlan.sets);
      setReps(selectedPlan.reps);
      setDifficulty(selectedPlan.difficulty);
      setType(selectedPlan.type);
      return event.target.value;
    });
  };

  console.log("custom plan details ------>??? ", myCustomPlans);
  return (
    <form
      className="student-custom-form"
      noValidate
      autoComplete="off"
      style={{ width: "100%" }}
    >
      <p className="form-title">My custom plan</p>
      <FormControl>
        <InputLabel id="demo-simple-select-label">Select Your Plan</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={plan}
          onChange={handlePlan}
        >
          {myCustomPlans.map(plan => (
            <MenuItem value={plan.id}>{plan.title}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <label for="workout-title">Workout Title:</label>
      <input
        className="student-form-data"
        disabled
        value={title}
        name={plan.title}
      />
      <label for="explanation">Exercise direction:</label>
      <input
        className="student-form-data"
        disabled
        value={description}
        name={plan.description}
      />
      <label for="type"># Type:</label>
      <input
        className="student-form-data"
        disabled
        value={type}
        name={plan.type}
      />
      <label for="sets"># of sets:</label>
      <input
        className="student-form-data"
        disabled
        value={sets}
        name={plan.sets}
      />
      <label for="reps"># of reps:</label>
      <input
        className="student-form-data"
        disabled
        value={reps}
        name={plan.reps}
      />
      <label for="difficulty">Difficulty Level:</label>
      <input
        className="student-form-data"
        disabled
        value={difficulty}
        name={plan.difficulty}
      />
      <button className="completePlan">Complete plan</button>
    </form>
  );
}
