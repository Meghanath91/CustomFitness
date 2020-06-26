import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import "./myfeedback.scss";
import VideoComponent from "./Video/VideoComponent";
import axios from "axios";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import StudentAppSideBar from "../SideBar/StudentAppSideBar";
import VideoList from "./VideoList/VideoList";

export default function StudentFeedback(props) {
  const [feedback_video, setFeedbackVideo] = useState("");
  const [feedback_text, setfeedbackText] = useState("");
  const [trainer, setTrainer] = useState("");
  const [feedback, setFeedback] = useState([]);
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
    axios
      .post("/feedback", {
        feedback_video: feedback_video,
        feedback_text: feedback_text,
        student_id: props.studentData.id,
        trainer_id: trainer,
      })
      .then((res) => {
        //this get request will update newly added video in DOM
        axios.get(`/student/${props.studentData.id}/feedbacks`).then((res) => {
          const studentFeedbackData = res.data;
          setFeedback(studentFeedbackData);
        });
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
              <TextField
                id="outlined-text"
                select
                // label="Select"
                value={trainer}
                onChange={handleTrainer}
                helperText="Please select your Trainer"
                variant="outlined"
              >
                {props.myTrainers.map((trainer) => (
                  <MenuItem key={trainer.id} value={trainer.id}>
                    {trainer.name}
                  </MenuItem>
                ))}
              </TextField>
            </FormControl>
            <TextField
              id="outlined-basic"
              // label="paste the video link"
              variant="outlined"
              value={feedback_video}
              onChange={handleVideo}
              helperText="Please paste your video link"
            />
            <textarea
              cols="50"
              rows="15"
              id="contactMessage"
              label="Feedback"
              value={feedback_text}
              onChange={handleText}
              name="contactMessage"
              placeholder="Please type your feedback"
            ></textarea>
            <button className="send-button">SEND</button>
          </form>
          <div className="video-display">
            <VideoComponent feedback_video={feedback_video} />
          </div>
        </section>

        <VideoList
          student={props.studentData}
          feedback={feedback}
          setFeedback={setFeedback}
        />
      </div>
    </div>
  );
}
