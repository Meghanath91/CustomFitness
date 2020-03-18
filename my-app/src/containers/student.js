import React,{useState} from "react";
import axios from "axios";
import Student_profile from "../components/Student/Student_profile";

export default function Trainer() {

  const [state, setState] = useState(0);

  axios.get('http://localhost:8080/students')
    .then(res => {
      const students = res.data[0]
      setState(students.name)
    })
    .catch(error => {
    console.log(error);
    })


  return (
    <div>
      <Student_profile studentData={state}/>
    </div>
  )
}
