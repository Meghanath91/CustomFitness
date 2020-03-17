import React from "react";
import ExerciseList from "./ExerciseList";
import ExerciseListItem from "./ExerciseListItem";

export default function Customplan() {
  return (
    <div className="flexbox">
      <ExerciseList id="board-1" className="board" name="Select Exercise(s)">
        <h2>Select Exercise(s)</h2>
        <ExerciseListItem
          id="1"
          className="card"
          image_url="https://thumbs.gfycat.com/GlossySkinnyDuckbillcat-small.gif"
          title="Push-up"
          name="Push-ups"
        />
        <ExerciseListItem
          id="2"
          className="card"
          image_url="https://i.imgur.com/UJAnRhJ.gif?noredirect"
          title="Sit-up"
          name="Sit-ups"
        />
      </ExerciseList>
      <ExerciseList id="board-2" className="board" name="Selected Exercise(s)">
        <h2>Selected Exercise(s)</h2>
        <ExerciseListItem
          id="3"
          className="card"
          image_url="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/workouts/2016/03/jumpingjack-1457045563.gif"
          title="Jumping Jack"
          name="Jumping Jack"
        />
      </ExerciseList>
    </div>
  );
}
