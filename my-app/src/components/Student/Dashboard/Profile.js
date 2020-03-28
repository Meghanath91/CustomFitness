import React, { useState } from "react";
import "../Student.scss";
import StudentUpdateProfile from "./StudentUpdateProfile";

// import Avatar from '@material-ui/core/Avatar';

export default function Profile(props) {
  return (
    <section className="student-profile">
      <p className="student-header">Student Profile</p>
      <h1 className="student-name">{props.studentData.name}</h1>
      <img
        className="student-avatar"
        src={props.studentData.avatar}
        alt="student-profile-picture"
      />
      <p className="student-goal">Goal: {props.studentData.goal}</p>
      <p className="details">Height: {props.studentData.height} CM</p>
      <p className="details">Weight: {props.studentData.weight} LB(s)</p>
      <p className="details">
        BMI:
        {(
          (props.studentData.weight /
            (props.studentData.height *
              0.39 *
              props.studentData.height *
              0.39)) *
          703
        ).toFixed(2)}
      </p>
      <StudentUpdateProfile studentData={props.studentData}/>
    </section>
  );
}
