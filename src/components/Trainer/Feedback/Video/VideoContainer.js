import React from "react";
import ReactPlayer from "react-player"

export default function VideoContainer(){
// console.log(props)
  return(
    <div>
      <ReactPlayer
      className="video"
      url={"https://youtu.be/tLAZvESoVgI"}/>

    </div>
  )

}