import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentCustomPlan from "../components/Student/StudentCustomPlan/StudentCustomPlan";
export default function StudentExercise(props) {

  const [state, setState] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:8080/student/${props.studentData.id}/exercises`)
      .then(res => {
        console.log("res.data=====>", res.data);
        const exercises = res.data;

        setState(exercises);
      });
  }, [props.studentData.id]);

  return (
    <div>
      <StudentCustomPlan exerciseData={state} />
    </div>
  );
}
