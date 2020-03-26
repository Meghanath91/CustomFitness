import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ReactPlayer from "react-player";

import "./Home.scss";

const useStyles = makeStyles({
  root: {
    height: "100%",
    width: "100%",
    overflow: "hidden",
    position: "relative"
  }
});
export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div id="video-overlay" />
      <ReactPlayer
        className={classes.video}
        playing="true"
        autoplay
        loop
        muted
        width="100%"
        height="100%"
        url="/Videos/Fitness.mp4"
        type="video/mp4"
      />
      <h2 className="tag">Find Your Fit</h2>
      <p className="tag-line">ONE day or day ONE. YOU decide.</p>
    </div>
  );
}
