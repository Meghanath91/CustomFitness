import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function Student_Sidebar() {
  return (
      <div style={{ display: "flex" }}>
        <div
          style={{
            padding: "10px",
            width: "40%",
            background: "#f0f0f0"
          }}
        >
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

        <div style={{ flex: 1, padding: "10px" }}>  
        </div>
      </div>
  );
}
