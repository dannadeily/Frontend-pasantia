import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Button from "@material-ui/core/Button";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#EC6E66",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(nombreEmpresa, nombreTutor) {
  return { nombreEmpresa, nombreTutor };
}

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
        <Typography variant="h6">Estado: </Typography>
        <br></br>
        <br></br>
        <Table className={classes.table} aria-label="customized table">
          <TableBody>
          <TableRow>
              <StyledTableCell>Estado del aspirante:</StyledTableCell>
              <StyledTableCell>
                Aspirante/Pasante
              </StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>Inicio de la Pasantia:</StyledTableCell>
              <StyledTableCell>
                <CheckBoxIcon />
              </StyledTableCell>
            </TableRow>
            <br></br>
            <br></br>
            <Typography>Documentos aprobados:</Typography>
            <br></br>
            <TableRow>
              <StyledTableCell>Documentos Requeridos:</StyledTableCell>
              <StyledTableCell>
                <CheckBoxIcon />
              </StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>Informe Final:</StyledTableCell>
              <StyledTableCell>
                <CheckBoxIcon />
              </StyledTableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <br></br>
      <br></br>

      <Button variant="contained" color="primary">
        Solicitar Pasantia
      </Button>
    </Container>
  );
}
