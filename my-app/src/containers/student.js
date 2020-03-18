import React,{useState,useEffect} from "react";
import axios from "axios";
import Student_profile from "../components/Student/student_profile";

export default function Student() {

  const [state, setState] = useState([]);

  // const [name, setName] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8080/students').then((res) => {
      const students= res.data[0];
      console.log("=====================>",students)
      setState(students)
      
    });

  }, [])

  // axios.get('http://localhost:8080/students')
  //   .then(res => {
  //     console.log(res.data[0])
  //     const students = res.data[0]
  //     setState(students)
  //   })
  //   .catch(error => {
  //   console.log(error);
  //   })


  return (
    <div>
      <Student_profile studentData={state}
      />
    </div>
  )
}
