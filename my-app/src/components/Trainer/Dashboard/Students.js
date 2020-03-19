import React from "react";
import Button from '@material-ui/core/Button';
import StudentsItem from "./StudentsItem";



export default function Students(props) {

  // const lists = props.interviewers.map(interviewer => {
  //   return (
  //     <StudentsItem
  //     key={interviewer.id}
  //     name={interviewer.name}
  //     avatar={interviewer.avatar}
  //     selected={interviewer.id === props.interviewer}
  //     setInterviewer={event => props.setInterviewer(interviewer.id)}
  //     />
  //   );
  // });

  return (
    <div>
      <h2> {props.avatar}</h2>
      Hello from Students
      <Button variant="contained" color="primary">
      This is just a button 
    </Button>
    <StudentsItem />
    {/* {lists} */}

    </div>
  )
}


