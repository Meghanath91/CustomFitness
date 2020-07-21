import React, { useState } from "react";
import ExerciseList from "./ExerciseList/ExerciseList";
import "./CustomPlan.scss";
import axios from "axios";
import CustomForm from "./CustomForm/CustomForm";

export default function CustomPlan(props) {

  //declaring states
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [type, setType] = useState("");
  const [sets, setSets] = useState(0);
  const [reps, setReps] = useState(0);
  const [exerciseIdArray, setExerciseIdArray] = useState("");
  const [student, setStudent] = useState("");

  const handleCreatePlan = (evt) => {
    evt.preventDefault();
    axios
      .post(`/custom_plans/create`, {
        trainer_id: props.trainerData.id,
        student_id: student,
        title: title,
        description: description,
        difficulty: difficulty,
        type: type,
        sets: sets,
        reps: reps,
        trainer_name: props.trainerData.name,
      })
      .then((res) => {
        const workoutExercises = exerciseIdArray;

        for (let exerciseID of workoutExercises) {
          axios
            .post(`/workout_exercises/create`, {
              custom_plan_id: parseInt(res.data),
              exercise_id: parseInt(exerciseID.id),
            })
            .then((res) => {
              console.log("new exercise added", res);
            });
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
