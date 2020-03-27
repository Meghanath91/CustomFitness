import React, { useEffect,useState } from "react";

import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import axios from "axios";
export default function StudentCustomForm(props) {
  console.log("props on customform", props.myStudents);

  const [myCustomPlans, setMyCustomPlans] = useState([]);
  const [plan,setPlan] = useState("")
  const [title, setTitle] = useState('Work out Title');
  const [sets, setSets] = useState('Number of sets');
  const [reps, setReps] = useState('Number of reps');
  const [difficulty, setDifficulty] = useState('Difficulty level');
  const [description, setDescription] = useState('Explanation');
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
    console.log(event.target.value)
    setPlan(prev => {
      const selectedPlan = myCustomPlans.filter( p => p.id === event.target.value)[0]
      //selectedPlan._______
      setTitle(selectedPlan.title)
      setDescription(selectedPlan.description)
      setSets(selectedPlan.sets)
      setReps(selectedPlan.reps)
      setDifficulty(selectedPlan.difficulty)
      return event.target.value;
    });
  };

console.log("custom plan details ------>??? ",myCustomPlans)
  return (
    <form
      
      className="custom-form"
      noValidate
      autoComplete="off"
    > 
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
      <input disabled value={title} name={plan.title} />
      <label for="explanation">Exercise direction:</label>
      <input
        disabled
        value={description}
        name={plan.description}
      />
      <label for="sets"># of sets:</label>
      <input disabled value={sets} name={plan.sets} />
      <label for="reps"># of reps:</label>
      <input disabled value={reps} name={plan.reps} />
      <label for="difficulty">Difficulty Level:</label>
      <input disabled value={difficulty} name={plan.difficulty} />
      <button className="completePlan">Complete plan</button>
    </form>
  );
}
