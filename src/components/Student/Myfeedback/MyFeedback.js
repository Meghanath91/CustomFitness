import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import "./myfeedback.scss";
import VideoComponent from "./Video/VideoComponent";

export default function StudentFeedback() {
  const [link, setLink] = useState("");
  
  const handleSubmit = evt=>{
    debugger;
    evt.preventDefault();
  }
  return (
    <section>
      <form onSubmit={handleSubmit} className="feedback" noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="video link"
          variant="outlined"
          value={link}
          onChange={(evt) => setLink(evt.target.value)}
        />
        <button className="createPlan">UPLOAD</button>
      </form>
      <div>
        <VideoComponent link={link} />
      </div>
    </section>
  );
}
