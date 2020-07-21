import React from "react";
import ReactPlayer from "react-player"
import "./video.scss";
//video rendering component
export default function VideoComponent(props){

  return(
    <div className="video-container">
      <ReactPlayer
        className="video"
        url={props.feedback_video}
      />
    </div>
  )
}