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
                <div className="feedback-box">
                  <p className="student-feedback-text">
                    <strong>Message: </strong> {feedback.feedback_text}
                  </p>
                  <ReactPlayer
                    className="feedback-video"
                    width="450px"
                    height="200px"
                    url={feedback.feedback_video}
                  />
                </div>
              );
            })
          : <div className="empty-container">no feedbacks</div>}
      </div>
    
  );
}
