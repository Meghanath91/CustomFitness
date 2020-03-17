import React from "react";
import Button from '@material-ui/core/Button';


export default function Clients(props) {

  return (
    <div>
      <h2> {props.avatar}</h2>
      Hello from Clients
      <Button variant="contained" color="primary">
      Hello World
    </Button>

    </div>
  )
}