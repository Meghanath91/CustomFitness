import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles({
  root: {
    minWidth: 200,
  },
 
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  pic:{
    width:400,
  }
  
});

export default function Trainer_profile(props) {

  console.log(props)
 
  const classes = useStyles();


  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Trainer profile
        </Typography>
        <Typography variant="h5" component="h2" color="primary" align="left">
         {props.trainerData.name}
        </Typography>
        
        <img className={classes.pic} src={props.trainerData.avatar} alt="Smiley face"/>

          {/* <Avatar aria-label="recipe" className={classes.avatar}></Avatar> */}
        
        
        <Typography className={classes.pos} color="textSecondary">
          {props.trainerData.about}
        </Typography>
        <Typography variant="body2" component="p">
        < Typography classname={classes.desc}>
        {props.trainerData.experience}
        </Typography>
        
         
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">update profile</Button>
      </CardActions>
    </Card>
  );
}
