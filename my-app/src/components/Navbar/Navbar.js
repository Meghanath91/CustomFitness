import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

import axios from "axios";

export default function Navbar(props) {
  let user = "";

  const handleLogout = evt => {
    evt.preventDefault();

    axios
      .post(`http://localhost:8080/logout`, { user_id: props.trainerData.id })
      .then(res => {
        // console.log({headers: res.headers})
        user = "";
      });
  };

  if (props.trainerData.name) {
    user = props.trainerData.name;
  }
  if (props.studentData.name) {
    user = props.studentData.name;
  }

  return (
    <nav className="navbar-root">
      <Link className="logo" to="/">
        Custom Fitness
      </Link>
      {user ? (
        <>
          <p className="user-name navbar-grid-login">Loggedin as: {user} </p>
          <Link
            onSubmit={() => handleLogout}
            className="logout navbar-grid-register"
            to="/home"
          >
            Logout
          </Link>
        </>
      ) : (
        <>
          <Link className="navbar-link navbar-grid-login" to="/login">
            Login
          </Link>
          <Link className="navbar-link navbar-grid-register" to="/register">
            Register
          </Link>
        </>
      )}
    </nav>
  );
}
