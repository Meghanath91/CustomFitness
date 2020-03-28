import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import axios from "axios";

export default function UpdateProfile(props) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [experience, setExperience] = useState("");
  const [about, setAbout] = useState("");
  const handleClickOpen = () => {
    setOpen(true);
  };
  console.log("id trainer--", props.trainerData.id);
  const handleClose = () => {
    setOpen(false);
  };

  

  const handleUpdate = evt => {
    evt.preventDefault();
    axios
      .put(`http://localhost:8080/trainers`, {
        name: name,
        about: about,
        experience: experience,
        id: props.trainerData.Id
      })
      .then(res => {
        alert("Trainer Details completed");
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
            id="name"
            value={name}
            onChange={evt => setName(evt.target.value)}
            label="Full Name"
            type="text"
            fullWidth
          />
          <TextField
            required
            autoFocus
            margin="dense"
            id="name"
            value={about}
            onChange={evt => setAbout(evt.target.value)}
            label="About"
            type="Text"
            fullWidth
          />

          <TextField
            autoFocus
            margin="dense"
            id="name"
            value={experience}
            onChange={evt => setExperience(evt.target.value)}
            label="Years of Experience"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleUpdate} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
