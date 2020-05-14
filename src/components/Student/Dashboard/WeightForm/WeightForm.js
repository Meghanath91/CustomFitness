import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import axios from "axios";

export default function WeightForm(props) {
  const [open, setOpen] = React.useState(false);
  const [weight, setWeight] = useState("");
  const [date, setDate] = useState("MM/DD");

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  //handling request
  const handleWeight = (evt) => {
    evt.preventDefault();
    axios
      .post(`/weights/create`, {
        date: date,
        weight: parseInt(weight),
        student_id: props.studentData.id,
      })
      .then((res) => {
        alert("Student Weight & Date added to database");
        handleClose();
        // axios
        // .get(`/student/${props.studentData.id}/weights`)
  
        // .then((res) => {
        //   const datafromdb = res.data;
        //   const formattedData = datafromdb.map(
        //     ({ id, student_id, created_at, ...item }) => item
        //   );
  
        //   setData(formattedData);
        // });
      });
  };

  return (
    <div style={{ marginTop: "5%" }}>
      <Button
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
        style={{
          fontSize: "1.5rem",
          color: "white",
          border: "1px solid white",
          borderRadius: "8px",
        }}
      >
        Update Weight
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Weight</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter your new weight below and date
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            value={date}
            onChange={(evt) => setDate(evt.target.value)}
            label=""
            type="date"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            value={weight}
            onChange={(evt) => setWeight(evt.target.value)}
            label="Weight (lbs)"
            type="number"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleWeight} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
