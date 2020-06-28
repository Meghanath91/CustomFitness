import React, { useState, useEffect } from "react";
import "./feedback.scss";
import TrainerAppSideBar from "../Sidebar/TrainerAppSidebar";
import VideoContainer from "./Video/VideoContainer";
import StudentList from "./StudentList/StudentList";
import axios from "axios";

export default function Feedback(props) {
  const [feedback, setFeedback] = useState([]);
  const [student, setStudent] = useState({});
 
  //getting all feedbacks.
  useEffect(() => {
    axios.get(`/trainer/${props.trainerData.id}/feedbacks`).then((res) => {
      const feedbackData = res.data;
      const filterFeedBackForStudent = feedbackData.filter(
        (selectedStudent) => selectedStudent.student_id === student.id
      );
      setFeedback(filterFeedBackForStudent);
    });
  }, [props.trainerData.id, student]);

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
