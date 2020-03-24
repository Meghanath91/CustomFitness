import React from "react";
import ExerciseList from "./ExerciseList";
import "./CustomPlan.scss";

import CustomForm from "./CustomForm";


export default function CustomPlan(props) {
  
  
  return (
    <section className="custom-plan">
      <CustomForm className="custom-form" />
      <ExerciseList exerciseData={props.exerciseData}/>
    </section>
  );
};