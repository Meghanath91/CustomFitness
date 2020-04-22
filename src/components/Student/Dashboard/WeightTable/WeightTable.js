import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../Title/Title';



export default function WeightTable(props) {
  const rows = props.data
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
      <Title>Recent Weight Inputs</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Weight</TableCell>
            <TableCell align="right">Body Mass Index</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.weight}</TableCell>
              <TableCell align="right">  {(
            (row.weight /
              (props.studentData.height *
                0.39 *
                props.studentData.height *
                0.39)) *
            703
          ).toFixed(2)}</TableCell> 
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more Inputs
        </Link>
      </div>
    </React.Fragment>
  );
}