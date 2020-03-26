import React, { useState } from "react";
import ExerciseList from "./ExerciseList";
import "./CustomPlan.scss";
import axios from "axios";
import { Redirect } from "react-router-dom";

import CustomForm from "./CustomForm";

export default function CustomPlan(props) {
  console.log("props on customplan=========>",props)
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [type, setType] = useState("");
  const [sets, setSets] = useState(0);
  const [reps, setReps] = useState(0);
  const [exerciseIdArray, setExerciseIdArray] = useState("");
  const [student,setStudent] = useState("");

  const handleCreatePlan = evt => {
    evt.preventDefault();
    axios.post(`http://localhost:8080/custom_plans/create`, {
        trainer_id: props.trainerData.id,
        student_id: student,
        title: title,
        description: description,
        difficulty: difficulty,
        type: type
      })
      .then(res => {
        const workoutExercises = exerciseIdArray;

        for (let exerciseID of workoutExercises) {
          
          axios.post(`http://localhost:8080/workout_exercises/create`, {
            custom_plan_id: parseInt(res.data),
            exercise_id: parseInt(exerciseID.id),
            sets: sets,
            reps: reps
          }).then(res=>{
            alert("new workoutExercise  created");
          })
        }
      });
      alert("new CustomPlan  created");
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
        setStudent={setStudent}
        myStudents={props.myStudents}
      />
      <ExerciseList
        exerciseData={props.exerciseData}
        setExerciseIdArray={setExerciseIdArray}

      />
    </section>
  );
}
