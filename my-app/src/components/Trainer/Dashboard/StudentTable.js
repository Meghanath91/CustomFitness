import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';



export default function StudentTable(props) {
 
  const rows =props.myStudents
  
  function preventDefault(event) {
    event.preventDefault();
  }
  
  const useStyles = makeStyles(theme => ({
    seeMore: {
      marginTop: theme.spacing(3),
    },
  }));
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Student Details</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Focus</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell align="right">Training Fee</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.phone}</TableCell>
              <TableCell>{row.focus}</TableCell>
              <TableCell>{'VISA ⠀•••• 3719'}</TableCell>
              <TableCell align="right">{9.99}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more Students
        </Link>
      </div>
    </React.Fragment>
  );
}