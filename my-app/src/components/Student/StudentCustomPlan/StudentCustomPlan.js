import React from "react";
import StudentExerciseList from "./StudentExerciseList";
import StudentCustomForm from "./StudentCustomForm";

export default function StudentCustomPlan(props) {
  return (
    <section className="custom-plan">
      <StudentCustomForm className="custom-form" />
      <StudentExerciseList exerciseData={props.exerciseData} />
    </section>
  );
}
