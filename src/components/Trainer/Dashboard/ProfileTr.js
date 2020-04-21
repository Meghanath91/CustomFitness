import React, { useState } from "react";
import "./Dashboard.scss";
import UpdateProfile from "./UpdateProfile";

export default function ProfileTr(props) {
  return (
    <section className="trainer-profile-section">
      <img
        className="trainer-avatar"
        src={props.trainerData.avatar}
        alt="trainer-profile-picture"
      />
      <div className="trainer-profile">
        <p className="trainer-header">My Profile</p>
        <h1 className="trainer-name">{props.trainerData.name}</h1>
        <p className="trainer-expertise">
          <strong>About: </strong>
          {props.trainerData.about}
        </p>
        <p className="trainer-expertise">
          <strong>Expertise: </strong>
          {props.trainerData.expertise}
        </p>
        <p className="years-experience">
          <strong>Years of experience: </strong>
          {props.trainerData.experience}
        </p>
        <UpdateProfile trainerData={props.trainerData} />
      </div>
    </section>
  );
}
