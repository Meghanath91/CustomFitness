import React, { useState } from "react";
import ReactPlayer from "react-player";

export default function VideoContainer(props) {
  console.log("props in vidoe container", props.feedback);

  return (
    
      <div>
        {props.feedback[0]
          ? props.feedback.map((feedback) => {
              return (
                <div>
                  <h1 className="student-name">{feedback.student_id}</h1>
                  <p className="student-feedback-text">
                    <strong>Feedback: </strong> {feedback.feedback_text}
                  </p>
                  <ReactPlayer
                    className="video"
                    url={feedback.feedback_video}
                  />
                </div>
              );
            })
          : "no feedbacks"}
      </div>
    
  );
}
