import React from 'react';
import styles from './Kitchen.module.scss';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const demoContent = [
  { number: '253', table: '1', status: 'order', order: ['pizza-margherita'], extrainfo: ['double dough, extra cheese'] },
  { number: '452', table: '2',status: 'order', order: ['pizza-napoli'], extrainfo: ['no olives, no gluten'] },
  { number: '056', table: '3',status: 'prepared', order: ['pizza-capriciosa'], extrainfo: ['well baked'] },
  { number: '286', table: null,status: 'prepared-delivery', order: ['pizza-funghi'], extrainfo: ['extra ham'] },
  { number: '465', table: '1',status: 'in progress', order: ['pizza-quatroformaggio'], extrainfo: null },
];

const renderActions = status => {
  switch (status) {
    case 'order':
      return (
        <>
          <Button>Start the process</Button>
        </>
      );
    case 'prepared':
      return (
        <>
          <Button>Call the waiter</Button>
        </>
      );
    case 'prepared-delivery':
      return (
        <>
          <Button>Call the delivery service</Button>
        </>
      );
    default:
      return null;
  }
};

const Kitchen = () => (
  <Paper className={styles.component}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Order number</TableCell>
          <TableCell>Table</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Order</TableCell>
          <TableCell>Extra Info</TableCell>
          <TableCell>Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {demoContent.map(row => (
          <TableRow key={row.id}>
            <TableCell>{row.number}</TableCell>
            <TableCell component="th" scope="row">
              {row.table}
            </TableCell>
            <TableCell>{row.status}</TableCell>
            <TableCell>{row.order}</TableCell>
            <TableCell>{row.extrainfo}</TableCell>
            <TableCell>{renderActions(row.status)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default Kitchen;