import React from "react";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  button: {
    color: purple
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "1.1rem",
    padding: "1%",
    "&:hover": {
      color: "#ABFFC7"
    }
  }
}));

export default function Customplan() {
  const classes = useStyles();
  return <div></div>;
}
