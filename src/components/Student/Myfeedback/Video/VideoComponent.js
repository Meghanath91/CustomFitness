import React from "react";
import ReactPlayer from "react-player"
import "./video.scss";

export default function VideoComponent(props){


  
  return(
    <div>
      <ReactPlayer
        className="video"
        url={props.feedback_video}
      />
    </div>
  )
}