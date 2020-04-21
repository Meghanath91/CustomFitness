import React from "react";
import { Link } from "react-router-dom";

export default function StudentSidebar() {
  return (
    <div style={{ display: "flex", backgroundColor: "#c7d4d69c" }}>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li>
          <Link to="/student/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/student/profile">Profile</Link>
        </li>
        <li>
          <Link to="/student/my_plan">My custom plan</Link>
        </li>
      </ul>
    </div>
  );
}
