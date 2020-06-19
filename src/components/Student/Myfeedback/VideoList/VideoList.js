import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import axios from "axios";
// import logo from "pictures/no_video.png"
const VideoList = (props) => {
  const [feedback, setFeedback] = useState([]);
  useEffect(() => {
    axios.get(`/student/${props.student.id}/feedbacks`).then((res) => {
      const studentFeedbackData = res.data;
      console.log(res.data,"11")
      setFeedback(studentFeedbackData);
    });
  }, [props.student.id]);
  return (
    <div>
      <h1>My feedbacks</h1>
      <div className="video-container">
        {feedback.map((feedback) => {
          return (
            <div>
              <p>Message: {feedback.feedback_text}</p>
              {feedback.feedback_video ? (
                <ReactPlayer
                  key={feedback.id}
                  className="video"
                  url={feedback.feedback_video}
                />
              ) : (
                <img src="/pictures/no_video.png" alt="no video available"/>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VideoList;
