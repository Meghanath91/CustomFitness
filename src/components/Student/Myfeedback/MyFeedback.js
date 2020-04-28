import React,{useState} from "react";
import TextField from "@material-ui/core/TextField";
import "./myfeedback.scss";
import VideoComponent from "./Video/VideoComponent";

export default function StudentFeedback() {


  return (
    <section>
      <form className="feedback" noValidate autoComplete="off">
        <TextField id="outlined-basic" label="video link" variant="outlined" />
        <button className="createPlan">UPLOAD</button>
      </form>
      <div>
        <VideoComponent />
      </div>
    </section>
  );
}
