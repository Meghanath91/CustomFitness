import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  board: {
    display: "flex",
    flexDirection: "column",
    width: "25%",
    height: "100vh",
    backgroundColor: "#2B1B00"
  }
}));

export default function ExerciseList(props) {
  const classes = useStyles();
  const drop = e => {
    e.preventDefault();
    const card_id = e.dataTransfer.getData("card_id");

    const card = document.getElementById(card_id);
    card.style.display = "block";

    e.target.appendChild(card);
  };

  const dragOver = e => {
    e.preventDefault();
  };

  return (
    <div
      className={classes.board}
      id={props.id}
      onDrop={drop}
      onDragOver={dragOver}
      name={props.value}
    >
      {props.children}
    </div>
  );
}
