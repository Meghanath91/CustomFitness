import React from "react";
import StudentExerciseList from "./StudentExerciseList";
// import "./CustomPlan.scss";

// import CustomForm from "./CustomForm";

export default function StudentCustomPlan(props) {
  return (
    <section className="custom-plan">
      {/* <CustomForm className="custom-form" /> */}
      <StudentExerciseList exerciseData={props.exerciseData} />
    </section>
  );
}
