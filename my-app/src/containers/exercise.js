import React, { useState, useEffect } from "react";
import axios from "axios";
import CustomPlan from "../components/Trainer/Customplan/Customplan";
export default function Exercise() {
  const [state, setState] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/exercises").then(res => {

      const exercises = res.data;
      setState(exercises);

    });
  }, []);

  return (
    <div>
      <CustomPlan exerciseData={state} />
    </div>
  );
}
