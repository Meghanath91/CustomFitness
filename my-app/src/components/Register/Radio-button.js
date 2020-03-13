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
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

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

// Inspired by blueprintjs
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

export default function CustomizedRadios() {
  const [state, setState] = useState(null);
  const cb = e => {
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
              value="Student"
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
                autoComplete="about"
              />
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
                  autoComplete="age"
                />
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="about"
                  label="Height"
                  name="height"
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
                autoComplete="goal"
              />
            </div>
          )}
        </Grid>
      </RadioGroup>
    </FormControl>
  );
}
