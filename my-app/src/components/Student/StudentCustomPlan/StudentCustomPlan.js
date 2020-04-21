import React, { useState, useEffect } from "react";
import StudentExerciseList from "./StudentExerciseList";
import StudentCustomForm from "./StudentCustomForm";
import axios from "axios";
import "../Student.scss";

export default function StudentCustomPlan(props) {


  const [customId, setCustomId] = useState([]);

  const [state, setState] = useState([]);
  useEffect(() => {
    axios
      .get(`/custom_plan/${customId}/exercises`)
      .then(res => {
        
        const exercises = res.data;

        setState(exercises);
      });
  }, [customId]);

  return (
    <section className="student-custom-plan">
      <StudentCustomForm
        studentData={props.studentData}
        setCustomId={setCustomId}
      />
      <StudentExerciseList exerciseData={state} />
    </section>
  );
}
