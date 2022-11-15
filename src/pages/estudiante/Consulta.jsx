import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import InfoIcon from '@mui/icons-material/Info';
import Container from '@material-ui/core/Container';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#EC6E66',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(nombreEmpresa,nombreTutor) {
  return { nombreEmpresa,nombreTutor };
}

const rows = [
  createData('Frozen yoghurt', "Luis Perez"),

];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <Container fixed>
    <TableContainer component={Paper}>
      <Typography variant="h6">Empresa Asignada</Typography>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          
          <TableRow>
          <StyledTableCell component="th" scope="row">
               Empresa
              </StyledTableCell>
              <StyledTableCell >Tutor</StyledTableCell>
              <StyledTableCell >Ver informacion</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.nombreEmpresa}>
              <StyledTableCell component="th" scope="row">
                {row.nombreEmpresa}
              </StyledTableCell>
              <StyledTableCell >{row.nombreTutor}</StyledTableCell>
              <StyledTableCell ><InfoIcon /></StyledTableCell>
             
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    <br></br>
    <br></br>
    
    <TableContainer component={Paper}>
      <Typography variant="h6">Jurados Asignado</Typography>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          
          <TableRow>
          <StyledTableCell component="th" scope="row">
               Jurado 1
              </StyledTableCell>
              <StyledTableCell >Jurado 2</StyledTableCell>
              <StyledTableCell >Jurado 3</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.nombreEmpresa}>
              <StyledTableCell component="th" scope="row">
                {row.nombreEmpresa}
              </StyledTableCell>
              <StyledTableCell >{row.nombreTutor}</StyledTableCell>
              <StyledTableCell >{row.nombreTutor}</StyledTableCell>
             
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
  );
}
