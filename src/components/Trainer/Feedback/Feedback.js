//importing all dependencies
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./feedback.scss";
import TrainerAppSideBar from "../Sidebar/TrainerAppSidebar";
import VideoContainer from "./Video/VideoContainer";
import StudentList from "./StudentList/StudentList";

//feedback parent main component
export default function Feedback(props) {
  
  const [feedback, setFeedback] = useState([]);
  const [student, setStudent] = useState({});

  //getting all feedbacks.
  useEffect(() => {
    axios.get(`/trainer/${props.trainerData.id}/feedbacks`).then((res) => {
      //storing response into variable 
      const feedbackData = res.data;
      //filtering feedbacks for a selected student
      const filterFeedBackForStudent = feedbackData.filter(
        (selectedStudent) => selectedStudent.student_id === student.id
      );
      //calling fn to change the state
      setFeedback(filterFeedBackForStudent);
    });
  }, [props.trainerData.id, student]);//adding dependencies

  return (
    <div>
      <TrainerAppSideBar trainerData={props.trainerData} />
      <h1>Feedbacks</h1>
      <StudentList
        myStudents={props.myStudents}
        student={student}
        setStudent={setStudent}
      />
      <VideoContainer feedback={feedback} />
    </div>
  );
}
