import React ,{useState}from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import axios from "axios";

export default function StudentUpdateProfile(props) {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
 
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleComplete = event => {
    event.preventDefault();
    console.log("props.student.id",props.studentData.id)
    console.log("typeof",typeof(props.studentData.id))
    console.log("height",height)
    console.log("weight",weight)
    console.log("typeof",typeof(height))

    axios
      .put(`http://localhost:8080/students`, {
        name: name,
        goal:goal,
        height:parseInt(height),
        weight:parseInt(weight),
        id: props.studentData.id
      })
      .then(res => {
        alert("Student details updated");
        handleClose();
      });
  };


  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Update Profile
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle
          id="form-dialog-title"
          style={{
            backgroundColor: "rgba(5, 5, 5, 0.73)",
            color: "white",
            fontFamily: "'Raleway', sans-serif"
          }}
        >
          Update your profile
        </DialogTitle>
        <DialogContent>
          <TextField
            required
            autoFocus
            margin="dense"
            value={name}
            onChange={evt => setName(evt.target.value)}
            id="name"
            label="Full Name"
            type="text"
            fullWidth
          />
          <TextField
            required
            margin="dense"
            id="goal"
            value={goal}
            onChange={evt => setGoal(evt.target.value)}
            label="Goal"
            type="Text"
            fullWidth
          />
          <TextField
            required
            margin="dense"
            id="height"
            value={height}
            onChange={evt => setHeight(evt.target.value)}
            label="Height"
            type="text"
            fullWidth
          />
          <TextField
            required
            margin="dense"
            id="weight"
            label="Weight"
            value={weight}
            onChange={evt => setWeight(evt.target.value)}
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleComplete} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
