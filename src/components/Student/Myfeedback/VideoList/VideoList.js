import React, { useEffect } from "react";
import ReactPlayer from "react-player";
import axios from "axios";
import "./VideoList.scss";

// videolist
const VideoList = (props) => {
  //getting all feedbacks for a student
  useEffect(() => {
    axios.get(`/student/${props.student.id}/feedbacks`).then((res) => {
      const studentFeedbackData = res.data;
      props.setFeedback(studentFeedbackData);
    });
  }, []);
  return (
    <div className="feedback-container">
      <h1>My feedbacks</h1>
      <div className="video-container">
        {props.feedback.map((feedback) => {
          return (
            <div className="video-box">
              {feedback.feedback_video ? (
                <ReactPlayer
                  key={feedback.id}
                  id="videoItem"
                  className="video1"
                  url={feedback.feedback_video}
                  width="300px"
                  height="200px"
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
