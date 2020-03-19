import React from "react";
import { Link } from "react-router-dom";

// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.

// We are going to use this route config in 2
// spots: once for the sidebar and once in the main
// content section. All routes are in the same
// order they would appear in a <Switch>.

export default function TrainerSidebar() {
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          padding: "10px",
          width: "40%",
          background: "#f0f0f0",
          marginTop: "5%"
        }}
      >
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li>
            <Link to="/trainer/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/trainer/profile">Profile</Link>
          </li>
          <li>
            <Link to="/trainer/create_plan">Create custom plan</Link>
          </li>
        </ul>
      </div>

      <div style={{ flex: 1, padding: "10px" }}></div>
    </div>
  );
}
