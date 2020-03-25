import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import "./CustomPlan.scss";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

export default function CustomPlanForm(props) {
  const [difficulty, setDifficulty] = useState("beginner");
  const [type, setType] = useState("weightloss");

  const handleDifficulty = event => {
    props.setDifficulty(()=>event.target.value)
    setDifficulty(event.target.value);
  };
  const handleType = event => {
    props.setType(()=>event.target.value)
    setType(event.target.value);
  };

  return (
    <form
      onSubmit={props.handleCreatePlan}
      className="custom-form"
      noValidate
      autoComplete="off"
    >
      <Typography
        style={{
          color: "black"
        }}
        component="h1"
        variant="h5"
      >
        Custom Plan Details
      </Typography>
      <section className="custom-form">
        <TextField
          required
          id="standard-required"
          label="Title of the plan"
          value={props.title}
          onChange={evt => props.setTitle(evt.target.value)}
          placeholder="Title"
        />
        <TextField
          required
          id="standard-required"
          label="Description"
          value={props.description}
          onChange={evt => props.setDescription(evt.target.value)}
          placeholder="Description"
        />
        <FormControl>
          <InputLabel id="demo-simple-select-label">Difficulty</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={difficulty}
            onChange={handleDifficulty}
          >
            <MenuItem value="beginner">Beginner</MenuItem>
            <MenuItem value="intermediate">Intermediate</MenuItem>
            <MenuItem value="hard">Hard</MenuItem>
          </Select>
        </FormControl>{" "}
        <FormControl>
          <InputLabel id="demo-simple-select-label">Work out type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={type}
            onChange={handleType}
          >
            <MenuItem value="weightloss">Weight loss</MenuItem>
            <MenuItem value="weightgain">Weight gain</MenuItem>
            <MenuItem value="overall">Overall wellbeing</MenuItem>
            <MenuItem value="yoga">Yoga</MenuItem>
            <MenuItem value="mediatation">Meditation</MenuItem>
          </Select>
        </FormControl>
        <TextField
          required
          id="standard-required"
          value={props.sets}
          onChange={evt => props.setSets(evt.target.value)}
          label="Number of sets"
          placeholder="# of sets"
        />
        <TextField
          required
          id="standard-required"
          value={props.reps}
          onChange={evt => props.setReps(evt.target.value)}
          label="Number of reps"
          placeholder="# of reps"
        />
      </section>
      <button
        style={{
          backgroundColor: "#0456B1",
          color: "white",
          border: "none",
          borderRadius: "8px",
          marginTop: "3%",
          padding: "3%",
          fontFamily: "'Raleway', sans-serif",
          fontSize: "1rem",
          textTransform: "uppercase"
        }}
      >
        Create Plan
      </button>
    </form>
  );
}
