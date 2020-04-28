import React from "react";
import ReactPlayer from "react-player"
import "./video.scss";

export default function VideoComponent(){

  
  
  return(
    <div>
      <ReactPlayer
        className="video"
        url="https://www.youtube.com/watch?v=ug50zmP9I7s"
      />
    </div>
  )
}