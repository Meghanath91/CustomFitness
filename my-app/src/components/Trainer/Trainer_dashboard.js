// fetchProfile
// axios.get('/api/profile').then((res) => {
//   setState(res.body)
// })
import React from "react";
import Students from "../Trainer/Dashboard/Students";
import StudentTable from "../Trainer/Dashboard/StudentTable"


export default function Trainer_dashboard() {

  return (
    <div>
      <Students avatar={'images array'}/>

      <StudentTable />

      </div>

    
    
  )
}