import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from "react-router-dom";

export const mainListItems = (
  <div>
    <Link
      to="/student/dashboard"
      style={{
        textDecoration: "none",
        color: "black"
        }}
    >
    <ListItem button >
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    
    </Link>


      <Link 
        style={{
          textDecoration: "none",
        color:"black"
        }}
          to="/student/profile">
    <ListItem button >
      <ListItemIcon>
        <AccountCircleIcon />
      </ListItemIcon>
      <ListItemText primary="My Profile" />
     </ListItem>
      </Link>

      <Link 
        style={{
          textDecoration: "none",
        color:"black"
        }}
          to="/student/trainers"> 
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Trainers" />
    </ListItem>
    </Link>

    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="My Feedback" />
    </ListItem>

    
      <Link 
        style={{
          textDecoration: "none",
        color:"black"
        }}
          to="/student/my_plan"> 
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="My Workout Plan" />
    </ListItem>
    </Link>
  </div>
);

export const secondaryListItems = (
  <div>
    {/* <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem> */}
  </div>
);