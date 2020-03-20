import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
}));

export default function StudentsItem(props) {
  const classes = useStyles();

  return (

    <div className={classes.root}>
      <Avatar alt="Remy Sharp" src="https://i.imgur.com/LpaY82x.png" className={classes.small} />
      <Avatar alt="Travis Howard" src="https://i.imgur.com/Nmx0Qxo.png" />
      <Avatar alt="Cindy Baker" src="https://i.imgur.com/T2WwVfS.png" className={classes.large}/>

      {/* <li onCLick={props.setStudent}> */}
      {/* <Avatar alt="Cohana Roy" src={props.avatar} /> */}
    </div>
  );
}