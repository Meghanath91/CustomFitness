import React from "react";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

export default function TrainerView(props) {
  const [open, setOpen] = React.useState(false);
  const [trainer, setTrainer] = React.useState({});
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClickOpen = (evt) => {
    evt.preventDefault();
    const iTrainer = props.allTrainers.filter(
      (trainer) => trainer.id === props.trainerId
    );
    setTrainer(iTrainer[0]);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <CardActions>
        <Button size="small" color="primary" onClick={handleClickOpen}>
          View
        </Button>
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">
            {"Use Google's location service?"}
          </DialogTitle>
          <DialogContent
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <DialogContentText
              style={{
                fontSize: "1.6rem",
                fontWeight: "700",
                color: "black",
              }}
            >
              {trainer.name}
            </DialogContentText>
            <DialogContentText>
              <img
                style={{
                  height: "50%",
                  width: "50%",
                  marginLeft: "27%",
                }}
                src={trainer.avatar}
                alt="trainer"
              />
            </DialogContentText>
            <DialogContentText
              style={{
                color: "black",
              }}
            >
              {" "}
              <strong>About me: </strong>
              {trainer.about}
            </DialogContentText>
            <DialogContentText
              style={{
                color: "black",
              }}
            >
              <strong>Phone: </strong>
              {trainer.phone}
            </DialogContentText>
            <DialogContentText
              style={{
                color: "black",
              }}
            >
              <strong>Experience: </strong>
              {trainer.experience}
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </CardActions>
    </div>
  );
}
