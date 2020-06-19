import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import axios from "axios";

const VideoList = (props) => {
  const [feedback, setFeedback] = useState([]);
  useEffect(() => {
    axios.get(`/student/${props.student.id}/feedbacks`).then((res) => {
      const studentFeedbackData = res.data;
      console.log("data=>", res.data);
      setFeedback(studentFeedbackData);
    });
  }, [props.student.id]);
  return (
    <div>
      <h1>My feedbacks</h1>
      <div className="video-container">
        {feedback.map((feedback) => {
          return(
          <div>
          <p>Message: {feedback.feedback_text}</p>
          <ReactPlayer
            key={feedback.id}
            className="video"
            url={feedback.feedback_video}
          />
          </div>);
        })}
      </div>
    </div>
  );
};

export default VideoList;
