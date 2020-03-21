import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  media: {
    height: 150
  },

  card: {
    margin: "2% auto",
    textTransform: "uppercase",
    cursor: "pointer",
    width: "50%"
  }
});

export default function StudentExerciseListItem(props) {
  const dragStart = e => {
    const target = e.target;
    e.dataTransfer.setData("card_id", e.target.id);

    setTimeout(() => {
      target.style.display = "none";
    }, 0);
  };

  const dragOver = e => {
    e.stopPropagation();
  };

  const classes = useStyles();

  return (
    <Card
      className={classes.card}
      id={props.id}
      draggable="true"
      onDragStart={dragStart}
      onDragOver={dragOver}
    >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image_url}
          title={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h6">
            {props.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
