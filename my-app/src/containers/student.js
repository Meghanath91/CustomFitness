import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentProfile from "../components/Student/StudentProfile";
import "./student.scss";

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
      <StudentProfile studentData={state} />
    </div>
  );
}
