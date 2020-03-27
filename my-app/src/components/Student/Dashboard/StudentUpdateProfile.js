import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function StudentUpdateProfile() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
            label="Full Name"
            type="text"
            fullWidth
          />
          <TextField
            required
            margin="dense"
            id="goal"
            label="Goal"
            type="Text"
            fullWidth
          />
          <TextField
            required
            margin="dense"
            id="height"
            label="Height"
            type="text"
            fullWidth
          />
          <TextField
            required
            margin="dense"
            id="weight"
            label="Weight"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
