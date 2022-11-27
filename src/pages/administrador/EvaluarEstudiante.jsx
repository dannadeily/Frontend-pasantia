import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import InfoIcon from "@mui/icons-material/Info";
import Container from "@material-ui/core/Container";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#159ED6",
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

function EvaluarEstudiante(evaluador, nota) {
  return { evaluador, nota };
}

const rows = [
  createData("Jurado 1", 5),
  createData("Jurado 2", 4),
  createData("Jurado 3", 3),
  createData("empresa", 4),
  createData("Coordinador", 5),
];

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

const invoiceTotal = 0;

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <TableContainer component={Paper}>
        <Typography variant="h6">Evaluar estudiante: ""</Typography>
        <br></br>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell component="th" scope="row">
                Evaluador
              </StyledTableCell>
              <StyledTableCell align="right">Nota</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.evaluador}>
                <StyledTableCell component="th" scope="row">
                  {row.evaluador}
                </StyledTableCell>
                <StyledTableCell align="right">{row.nota}</StyledTableCell>
              </StyledTableRow>
            ))}

            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                Nota
              </StyledTableCell>
              <StyledTableCell align="right">
                {ccyFormat(invoiceTotal)}
              </StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
