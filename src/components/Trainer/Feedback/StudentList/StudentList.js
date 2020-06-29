//import required libraries
import React from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

//to select the students from list
export default function StudentList(props) {
  //function to handle dynamic selection event of student
  const handleChange = (evt) => {
    //to prevent default behaviour of browser
    evt.preventDefault();
    const selectedStudent = evt.target.value;
    //calling setStudent with the selected student object
    props.setStudent(selectedStudent);
  };
  return (
    <div className="select-form">
      <TextField
        id="select-student"
        select
        label="Select"
        value={props.student}//student object
        onChange={handleChange}
        helperText="Please select your student"
        variant="outlined"
      >
        {props.myStudents.map((student) => (
          <MenuItem key={student.id} value={student}>
            {student.name}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
}
