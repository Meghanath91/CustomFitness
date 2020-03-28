import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import "../Dashboard/Dashboard.scss";

export default function UpdateProfile() {
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
        <DialogContent style={{}}>
          <TextField
            className="update-profile-input"
            style={{
              paddingTop: "1rem"
            }}
            required
            autoFocus
            margin="dense"
            id="name"
            label="Full Name"
            type="text"
            fullWidth
          />
          <TextField
            style={{
              paddingTop: "1rem"
            }}
            className="update-profile-input"
            required
            autoFocus
            margin="dense"
            id="name"
            label="About"
            type="Text"
            fullWidth
          />
          <TextField
            style={{
              paddingTop: "1rem"
            }}
            className="update-profile-input"
            required
            autoFocus
            margin="dense"
            id="name"
            label="Expertise"
            type="text"
            fullWidth
          />
          <TextField
            style={{
              paddingTop: "1rem"
            }}
            className="update-profile-input"
            autoFocus
            margin="dense"
            id="name"
            label="Years of Experience"
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
