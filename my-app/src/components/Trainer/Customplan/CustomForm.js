import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "45ch"
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }
}));

export default function CustomPlanForm() {
  const classes = useStyles();

  const [difficulty, setDifficulty] = useState("beginner");
  const [type, setType] = useState("weightloss");

  const handleChange = event => {
    setDifficulty(event.target.value);
    setType(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Typography component="h1" variant="h5">
        Custom Plan Details
      </Typography>
      <div>
        <TextField
          required
          id="standard-required"
          label="Title of the plan"
          defaultValue="title"
        />
        <TextField
          required
          id="standard-required"
          label="Description"
          defaultValue="Description"
        />

        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Difficulty</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={difficulty}
            onChange={handleChange}
          >
            <MenuItem value="beginner">Beginner</MenuItem>
            <MenuItem value="intermediate">Intermediate</MenuItem>
            <MenuItem value="hard">Hard</MenuItem>
          </Select>
        </FormControl>
          {" "}
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Difficulty</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={type}
            onChange={handleChange}
          >
            <MenuItem value="weightloss">Weight loss</MenuItem>
            <MenuItem value="weightgain">Weight gain</MenuItem>
            <MenuItem value="overall">Overall wellbeing</MenuItem>
            <MenuItem value="yoga">Yoga</MenuItem>
            <MenuItem value="mediatation">Meditation</MenuItem>
          </Select>
        </FormControl>
      </div>
    </form>
  );
}
