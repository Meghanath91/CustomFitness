import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import Navbar from "./components/Navbar";
import SignUp from "./components/Signup";
import SignIn from "./components/Signin";

function App() {
  return (
    <div>
      <Navbar />
      <SignUp />
      {/* <SignIn /> */}
    </div>
  );
}

export default App;
