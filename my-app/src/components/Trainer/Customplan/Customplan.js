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
  const [sets, setSets] = useState(0);
  const [reps, setReps] = useState(0);
  const [exerciseIdArray, setExerciseIdArray] = useState("");

  const handleCreatePlan = evt => {
    evt.preventDefault();

    axios
      .post(`http://localhost:8080/custom_plans/create`, {
        trainer_id: 1,
        student_id: 1,
        title: title,
        description: description,
        difficulty: difficulty,
        type: type
      })
      .then(res => {
        const workoutExercises = exerciseIdArray;

        for (let exerciseID of workoutExercises) {
          debugger;
          console.log("sets",sets,reps)
          axios.post(`http://localhost:8080/workout_exercises/create`, {
            custom_plan_id: parseInt(res.data),
            exercise_id: parseInt(exerciseID.id),
            sets: sets,
            reps: reps
          });
        }

        console.log("i get to this point with user from======>>>", res.data);
        // return <Redirect to="/trainer" />;
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
      <ExerciseList
        exerciseData={props.exerciseData}
        setExerciseIdArray={setExerciseIdArray}
      />
    </section>
  );
}
