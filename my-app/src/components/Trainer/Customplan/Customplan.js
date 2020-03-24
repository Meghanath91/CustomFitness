import React, { useState } from "react";
import ExerciseList from "./ExerciseList";
import "./CustomPlan.scss";
import axios from "axios";
import { Redirect } from "react-router-dom";

import CustomForm from "./CustomForm";

export default function CustomPlan(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [type, setType] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");

  const handleCreatePlan = evt => {
    evt.preventDefault();

    axios.post(`http://localhost:8080/custom_plans/create`, {
        trainer_id: 1,
        student_id: 1,
        title: title,
        description: description,
        difficulty: difficulty,
        type: type
      })
      .then(res => {
        console.log("i get to this point with user from======>>>", res.data);
        return <Redirect to="/trainer" />;
      });
  };

  return (
    <section className="custom-plan">
      <CustomForm
        className="custom-form"
        setTitle={setTitle}
        setDescription={setDescription}
        setDifficulty={setDifficulty}
        setType={setType}
        setSets={setSets}
        setReps={setReps}
        handleCreatePlan={handleCreatePlan}
      />
      <ExerciseList exerciseData={props.exerciseData} />
    </section>
  );
}
