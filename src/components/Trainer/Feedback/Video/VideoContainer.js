//importing dependencies
import React from "react";
import ReactPlayer from "react-player";
import StudentList from "../StudentList/StudentList";

//component contains video
export default function VideoContainer(props) {
  console.log("props",props)
 
  return (

      <div>
        {props.feedback[0] //conditional rendering if there is feedbacks map feedbacks
          ? props.feedback.map((feedback) => {
              return (
                <div className="feedback-box">
                  <div message-container>
                  <div className="student-feedback-text">
                    <img className="avatar-img" src={props.student.avatar} alt="avatar"/> 
                    <p>{feedback.feedback_text}</p>
                  </div>
                  </div>
                  <ReactPlayer
                    className="feedback-video"
                    width="450px"
                    height="200px"
                    url={feedback.feedback_video}
                  />
                </div>
              );
            })
          : <div className="empty-container">no feedbacks from {props.student?props.student.name: "no feedbacks"} </div>}
      </div>
    
  );
}
