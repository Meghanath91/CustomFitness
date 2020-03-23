import React from "react";
import ExerciseList from "./ExerciseList";
import ExerciseListItem from "./ExerciseListItem";
import CustomForm from "./CustomForm";

// const currentUser = {
//   isStudent: false
// };
export default function CustomPlan(props) {
  
  
  return (
    <div className="custom-plan">
      <div className="flexbox">
        {/* {currentUser.isStudent ? (
          ""
        ) : ( */}
          <ExerciseList
            id="board-1"
            className="board"
            name="Select Exercise(s)"
          >
            <h2>Select Exercise(s)</h2>
            {props.exerciseData.map(x => (
              <ExerciseListItem
                id={x.id}
                className="card"
                image_url={x.thumbnail_photo_url}
                name={x.name}
              />
            ))}
          </ExerciseList>
        {/* )} */}
        <CustomForm/>
        <ExerciseList
          id="board-2"
          className="board"
          name="Selected Exercise(s)"
        >
          <h2>Selected Exercise(s)</h2>
        </ExerciseList>
      </div>
      {/* {currentUser.isStudent ? (
        ""
      ) : ( */}
        <button className="button">Create Plan</button>
      {/* )} */}
    </div>
  );
}
