import React, { useState } from "react";
import "./Dashboard.scss";
import UpdateProfile from "./UpdateProfile";

// import Avatar from '@material-ui/core/Avatar';

export default function ProfileTr(props) {
  return (
    <section className="trainer-profile">
      <p className="trainer-header">Trainer Profile</p>
      <h1 className="trainer-name">{props.trainerData.name}</h1>
      <img
        className="trainer-avatar"
        src={props.trainerData.avatar}
        alt="trainer-profile-picture"
      />
      <p className="trainer-expertise">Expertise: {props.trainerData.about}</p>
      <p className="years-experience">
        Years of experience: {props.trainerData.experience}
      </p>
      <UpdateProfile trainerData={props.trainerData} />
    </section>
  );
}
