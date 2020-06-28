//importing dependencies
import React from "react";
import ReactPlayer from "react-player";

//component contains video
export default function VideoContainer(props) {
 
  return (

      <div>
        {props.feedback[0] //conditional rendering if there is feedbacks map feedbacks
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
