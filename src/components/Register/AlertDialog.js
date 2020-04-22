import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Link } from "react-router-dom";

export default function AlertDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="outlined"
        style={{ color: "white", border: "none", width: "100%" }}
        onClick={handleClickOpen}
      >
        CREATE ACCOUNT
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            style={{
              color: "black",
              fontSize: "1rem",
            }}
          >
            New account has been created. Please login to continue.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Link
            to="./login"
            onClick={handleClose}
            color="primary"
            autoFocus
            style={{
              backgroundColor: "rgb(1, 248, 248)",
              color: "black",
              textDecoration: "none",
              padding: "1%",
              marginRight: "2%",
              borderRadius: "8px",
              width: "20%",
              textAlign: "center",
            }}
          >
            Login
          </Link>
        </DialogActions>
      </Dialog>
    </div>
  );
}
