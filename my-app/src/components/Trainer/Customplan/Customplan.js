import React from "react";
import ExerciseList from "./ExerciseList";
import ExerciseListItem from "./ExerciseListItem";
// import Student_info from "./Student_info";

const currentUser = {
  isStudent: true
};
export default function CustomPlan(props) {
  console.log("props on customplan==========>", props);
  console.log("typeof", typeof props);
  return (
    <div className="custom-plan">
      {/* <Student_info /> */}

      <div className="flexbox">
        {currentUser.isStudent ? (
          ""
        ) : (
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
        )}

        <ExerciseList
          id="board-2"
          className="board"
          name="Selected Exercise(s)"
        >
          <h2>Selected Exercise(s)</h2>
          
        </ExerciseList>
      </div>
      {currentUser.isStudent ? (
        ""
      ) : (
        <button className="button">Create Plan</button>
      )}
    </div>
  );
}
