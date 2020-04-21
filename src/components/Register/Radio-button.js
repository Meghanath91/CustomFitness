import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles({
  root: {
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  icon: {
    borderRadius: "50%",
    width: 16,
    height: 16,
    boxShadow:
      "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    backgroundColor: "#f5f8fa",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
    "$root.Mui-focusVisible &": {
      outline: "2px auto rgba(19,124,189,.6)",
      outlineOffset: 2
    },
    "input:hover ~ &": {
      backgroundColor: "#ebf1f5"
    },
    "input:disabled ~ &": {
      boxShadow: "none",
      background: "rgba(206,217,224,.5)"
    }
  },
  checkedIcon: {
    backgroundColor: "#137cbd",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&:before": {
      display: "block",
      width: 16,
      height: 16,
      backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
      content: '""'
    },
    "input:hover ~ &": {
      backgroundColor: "#106ba3"
    }
  },
  paper: {
    margin: "0% 1%"
  },
  rock: {
    margin: "5%"
  },
  details: {
    display: "flex"
  },
  goal: {
    margin: "3% 0%"
  }
});


function StyledRadio(props) {
  const classes = useStyles();

  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
}

export default function CustomizedRadios(props) {
  const [state, setState] = useState("");
  const [expertise, setExpertise] = useState("");
  const [focus, setFocus] = useState("");
  const handleExpertise = event => {
    props.setExpertise(() => event.target.value);
    setExpertise(event.target.value);
  };
  const handleFocus = event => {
    props.setFocus(() => event.target.value);
    setFocus(event.target.value);
  };

  const cb = e => {
    props.setUser(() => e.target.value);
    setState(e.target.value);
  };
  const classes = useStyles();
  return (
    <FormControl className={classes.rock} component="fieldset">
      <FormLabel className={classes.paper} component="legend">
        Who are you?
      </FormLabel>
      <RadioGroup
        defaultValue="Student"
        aria-label="User-type"
        name="customized-radios"
        onChange={cb}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <FormControlLabel
              value="trainer"
              control={<StyledRadio />}
              label="Trainer"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControlLabel
              value="student"
              control={<StyledRadio />}
              label="Student"
            />
          </Grid>
          {state === "trainer" ? (
            <div>
              <TextField
                className={classes.paper}
                variant="outlined"
                required
                fullWidth
                id="experience"
                label="Years of Experience"
                value={props.experience}
                onChange={evt => props.setExperience(evt.target.value)}
                name="experience"
                autoComplete="experience"
              />
              <TextField
                className={classes.goal}
                variant="outlined"
                required
                fullWidth
                id="about"
                label="About you"
                name="about"
                value={props.about}
                onChange={evt => props.setAbout(evt.target.value)}
                autoComplete="about"
              />
              <FormControl
                style={{
                  padding: "10px 0px",
                  width: "100%"
                }}
              >
                <InputLabel id="demo-simple-select-label">Expertise</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={expertise}
                  onChange={handleExpertise}
                >
                  <MenuItem value="weightloss">Weight loss</MenuItem>
                  <MenuItem value="weightgain">Weight gain</MenuItem>
                  <MenuItem value="overall">Overall wellbeing</MenuItem>
                  <MenuItem value="yoga">Yoga</MenuItem>
                  <MenuItem value="mediatation">Meditation</MenuItem>
                </Select>
              </FormControl>{" "}
            </div>
          ) : (
            <div>
              <Grid className={classes.details} item xs={12} sm={12}>
                <TextField
                  className={classes.paper}
                  variant="outlined"
                  required
                  fullWidth
                  id="age"
                  label="Age"
                  name="age"
                  value={props.age}
                  onChange={evt => props.setAge(evt.target.value)}
                  autoComplete="age"
                />
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="about"
                  label="Height"
                  name="height"
                  value={props.height}
                  onChange={evt => props.setHeight(evt.target.value)}
                  autoComplete="height"
                />
                <TextField
                  className={classes.paper}
                  variant="outlined"
                  required
                  fullWidth
                  id="weight"
                  label="Weight"
                  name="weight"
                  value={props.weight}
                  onChange={evt => props.setWeight(evt.target.value)}
                  autoComplete="weight"
                />
              </Grid>
              <TextField
                className={classes.goal}
                variant="outlined"
                required
                fullWidth
                id="goal"
                label="Your goal"
                name="goal"
                value={props.goal}
                onChange={evt => props.setGoal(evt.target.value)}
                autoComplete="goal"
              />
              <FormControl
                style={{
                  padding: "10px 0px",
                  width: "100%"
                }}
              >
                <InputLabel id="demo-simple-select-label">Focus</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={focus}
                  onChange={handleFocus}
                >
                  <MenuItem value="weightloss">Weight loss</MenuItem>
                  <MenuItem value="weightgain">Weight gain</MenuItem>
                  <MenuItem value="overall">Overall wellbeing</MenuItem>
                  <MenuItem value="yoga">Yoga</MenuItem>
                  <MenuItem value="mediatation">Meditation</MenuItem>
                </Select>
              </FormControl>{" "}
            </div>
          )}
        </Grid>
      </RadioGroup>
    </FormControl>
  );
}
