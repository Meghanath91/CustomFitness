import React, { useState, useEffect } from "react";
import axios from "axios";
import Student_profile from "../components/Student/student_profile";

export default function Student() {
  const [state, setState] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/students").then(res => {
      const students = res.data[0];

      setState(students);
    });
  }, []);

  return (
    <div>
      <Student_profile studentData={state} />
    </div>
  );
}
