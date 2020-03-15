import React from 'react';
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
  
});

export default function Trainer_profile() {
  const classes = useStyles();


  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Trainer profile
        </Typography>
        <Typography variant="h5" component="h2">
          Megatron
        </Typography>
        
          <Avatar aria-label="recipe" className={classes.avatar}>
            
          </Avatar>
        
        
        <Typography className={classes.pos} color="textSecondary">
          yoga/meditation
        </Typography>
        <Typography variant="body2" component="p">
        < Typography classname={classes.desc}>
        A personal trainer is an individual certified to have 
        a varying degree of knowledge of general fitness 
        involved in exercise prescription and instruction.
        They motivate clients by setting goals and providing feedback and accountability to clients.
        Trainers also measure their client's strengths and weaknesses with fitness assessments.
        </Typography>
        
         
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">update profile</Button>
      </CardActions>
    </Card>
  );
}
