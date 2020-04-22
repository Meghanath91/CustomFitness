import React from "react";
import "../../Student.scss";
import StudentUpdateProfile from "../StudentUpdateProfile";

export default function Profile(props) {
  return (
    <section className="student-update-profile">
      <img
        className="student-avatar"
        src={props.studentData.avatar}
        alt="student-profile"
      />
      <div className="student-profile">
        <p className="student-header">My Profile</p>
        <h1 className="student-name">{props.studentData.name}</h1>
        <p className="student-goal">
          <strong>Goal: </strong> {props.studentData.goal}
        </p>
        <p className="details">
          <strong>Height: </strong> {props.studentData.height} CM
        </p>
        <p className="details">
          {" "}
          <strong>Weight: </strong> {props.studentData.weight} LB(s)
        </p>
        <p className="details">
          <strong>BMI: </strong>
          {(
            (props.studentData.weight /
              (props.studentData.height *
                0.39 *
                props.studentData.height *
                0.39)) *
            703
          ).toFixed(2)}
        </p>
        <StudentUpdateProfile
          className="update-weight"
          studentData={props.studentData}
        />
      </div>
    </section>
  );
}
