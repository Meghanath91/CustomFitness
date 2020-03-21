import React from "react";
import ExerciseList from "./StudentExerciseList";
import ExerciseListItem from "./StudentExerciseListItem";


export default function StudentCustomPlan(props) {
  console.log("props on studentcustomplan==========>", props);
  
  return (
    <div className="custom-plan">
      <div className="flexbox">
        
          <ExerciseList
            id="board-1"
            className="board"
            name="Select Exercise(s)"
          >
            <h2>My customized Exercises</h2>
            {props.exerciseData.map(x => (
              <ExerciseListItem
                id={x.id}
                className="card"
                image_url={x.thumbnail_photo_url}
                title={x.title}
              />
            ))}
          </ExerciseList>
        

       
      </div>
      
        <button className="button">Complete Plan</button>
     
    </div>
  );
}
