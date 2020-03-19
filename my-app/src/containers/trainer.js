import React, { useState, useEffect } from "react";
import axios from "axios";
import TrainerProfile from "../components/Trainer/TrainerProfile";

export default function Trainer() {
  const [state, setState] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/trainers").then(res => {
      const trainers = res.data[0];

      setState(trainers);
    });
  }, []);

  return (
    <div>
      <TrainerProfile trainerData={state} />
    </div>
  );
}
