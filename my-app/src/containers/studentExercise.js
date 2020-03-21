import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentCustomPlan from "../components/Student/StudentCustomPlan/StudentCustomPlan"
export default function StudentExercise(props) {
 console.log("props at studentExercise.js====>",props.studentData.id)
  
  const [state, setState] = useState([]);
  useEffect(() => {
    axios.post("http://localhost:8080/exercises/student", {
      
      params: {
        id:props.studentData.id
      }}).then(res => {
          console.log("res.data",res.data)
      const exercises = [res.data];

      setState(exercises);
    });
  },[props.studentData.id]);

  return (
    <div>

      <StudentCustomPlan exerciseData={state} />
     
    </div>
  );
}
