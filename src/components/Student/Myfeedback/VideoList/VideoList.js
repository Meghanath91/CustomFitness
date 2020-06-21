import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import axios from "axios";
import "./VideoList.scss";

const VideoList = (props) => {
  const [feedback, setFeedback] = useState([]);
  useEffect(() => {
    axios.get(`/student/${props.student.id}/feedbacks`).then((res) => {
      const studentFeedbackData = res.data;
      setFeedback(studentFeedbackData);
    });
  }, [props.student.id]);
  return (
    <div className="feedback-container">
      <h1>My feedbacks</h1>
      <div className="video-container">
        {feedback.map(feedback => {
          return (
            <div className="video-box">
              {feedback.feedback_video ? (
                <ReactPlayer
                  key={feedback.id}
                  id="videoItem"
                  className="video"
                  url={feedback.feedback_video}
                />
              ) : (
                <img src="/pictures/no_video.png" alt="no video available" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VideoList;
