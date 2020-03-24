import React from "react";
import ExerciseList from "./ExerciseList";
import "./CustomPlan.scss";

import CustomForm from "./CustomForm";

const [title,setTitle]= useState("");
const [description,setDescription]= useState("");
const [difficulty,setDifficulty]= useState("");
const [type,setType]=useState("");
const[sets,setSets]=useState("");
const[reps,setReps]=useState("");

export default function CustomPlan(props) {
  
  
  return (
    <section className="custom-plan">
      <CustomForm className="custom-form"
        setTitle={setTitle}
        setDescription={setDescription}
        setDifficulty={setDifficulty}
        setType={setType}
        setSets={setSets}
        setReps={setReps}
      />
      <ExerciseList exerciseData={props.exerciseData}/>
    </section>
  );
};