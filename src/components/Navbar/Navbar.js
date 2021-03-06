import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import "./Navbar.scss";

import axios from "axios";

function Navbar(props) {
  const [user, setUser] = useState(null);

  useEffect(() => {
   
    if (props.trainerData && props.trainerData.name) {
      setUser(props.trainerData.name);
    }

    if (props.studentData && props.studentData.name) {
      setUser(props.studentData.name);
    }
  }, [props, user]);

  const handleLogout = async evt => {
    evt.preventDefault();
  
    await axios
      .post(`/logout`, { user_id: props.trainerData.id })
      .then(res => {
        props.setStudent({});
        props.setTrainer({});
        setUser(null);
        props.history.push("/");
      });
  };

  return (
    <nav className="navbar-root">
      <Link className="logo" to="/">
        Custom Fitness
      </Link>
      {user ? (
        <>
          <p className="user-name navbar-grid-login">Welcome, {user} </p>
          <Link
            onClick={handleLogout}
            className="logout navbar-grid-register"
            to="/"
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

export default withRouter(Navbar);
