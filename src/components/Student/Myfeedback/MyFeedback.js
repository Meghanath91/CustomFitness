import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import "./myfeedback.scss";
import VideoComponent from "./Video/VideoComponent";
import axios from "axios";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import StudentAppSideBar from "../SideBar/StudentAppSideBar";

export default function StudentFeedback(props) {
  const [feedback_video, setFeedbackVideo] = useState("");
  const [feedback_text, setfeedbackText] = useState("");
  const [trainer, setTrainer] = useState("");

  const handleVideo = (evt) => {
    evt.preventDefault();
    setFeedbackVideo(evt.target.value);
  };

  const handleTrainer = (evt) => {
    evt.preventDefault();
    // props.setTrainer(evt.target.value);
    setTrainer(evt.target.value);
  };

  const handleText = (evt) => {
    evt.preventDefault();
    setfeedbackText(evt.target.value);
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    axios.post("/feedback", {
      feedback_video: feedback_video,
      feedback_text: feedback_text,
      student_id: props.studentData.id,
      trainer_id: trainer,
    });
  };
  return (
    <div className="main-container">
      <StudentAppSideBar studentData={props.studentData} />
      <div className="sub-container">
        <section className="form-container">
          <h1>Send Feedback</h1>
          <form
            onSubmit={handleSubmit}
            className="feedback"
            noValidate
            autoComplete="off"
          >
            <FormControl className="select-trainer">
              <InputLabel id="demo-simple-select-label">
                Select Trainer
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={trainer}
                onChange={handleTrainer}
                variant="outlined"
              >
                {props.myTrainers.map((trainer) => (
                  <MenuItem key={trainer.id} value={trainer.id}>
                    {trainer.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              id="outlined-basic"
              label="paste the video link"
              variant="outlined"
              value={feedback_video}
              onChange={handleVideo}
            />
            <textarea
              cols="50"
              rows="15"
              id="contactMessage"
              label="Feedback"
              value={feedback_text}
              onChange={handleText}
              name="contactMessage"
            ></textarea>
            <button className="send">Send</button>
          </form>
          <div>
            <VideoComponent feedback_video={feedback_video} />
          </div>
        </section>
        <section className="video-album">
          <h1>My feedbacks</h1>
        </section>
      </div>
    </div>
  );
}
