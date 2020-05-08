import React from "react";
import Typography from "@material-ui/core/Typography";
import TrainerAppSideBar from "../Sidebar/TrainerAppSidebar";
import VideoContainer from "./Video/VideoContainer";


export default function Feedback(props) {

  // useEffect(() => {
  //   axios.get(`/feedbacks/${props.trainerData.id}`).then((res) => {
  //     const exercises = res.data;
  //     setState(exercises);
  //   });
  // }, []);
  
  return (
    <div>
     
      <TrainerAppSideBar trainerData={props.trainerData} />

    <Typography
    style={{
      color: "black",
      textAlign: "center"
    }}
    component="h1"
    variant="h5"
  >
    Custom Plan Detail
  </Typography>
  <VideoContainer/>
  </div>
   
  );
}
