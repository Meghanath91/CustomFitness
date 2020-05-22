import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import TrainerAppSideBar from "../Sidebar/TrainerAppSidebar";
import VideoContainer from "./Video/VideoContainer";
import axios from "axios";

export default function Feedback(props) {
  const [feedback, setFeedback] = useState([]);
//getting all feedbacks.
  useEffect(() => {
    axios.get(`/trainer/${props.trainerData.id}/feedbacks`).then((res) => {
      const feedbackData = res.data;
      setFeedback(feedbackData);
    });
  }, [props.trainerData.id]);

  return (
    <div>
      <TrainerAppSideBar trainerData={props.trainerData} />

      <Typography
        style={{
          color: "black",
          textAlign: "center",
        }}
        component="h1"
        variant="h5"
      >
        Custom Plan Detail
      </Typography>
      <VideoContainer feedback={feedback} />
    </div>
  );
}
