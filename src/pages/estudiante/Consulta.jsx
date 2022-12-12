import React, { useEffect, useState } from "react";
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
import useAuth from "../../hooks/useAuth";
import conexionAxios from "../../config/axios";

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

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();
  const { auth } = useAuth();
  const { usuario } = auth;

  const [datos, setDatos] = useState([]);

  const peticionGet = async () => {
    await conexionAxios.get("/infopasante/" + usuario.idusuario).then((res) => {
      console.log(res);
      setDatos(res.data);
    });
  };

  useEffect(() => {
    peticionGet();
  }, []);

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
              <StyledTableCell>Tutor</StyledTableCell>
              <StyledTableCell>Ver informacion</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                {datos.empresa.nombre}
              </StyledTableCell>
              <StyledTableCell>nombreTutor</StyledTableCell>
              <StyledTableCell>
                <InfoIcon />
              </StyledTableCell>
            </StyledTableRow>
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
              <StyledTableCell>Jurado 2</StyledTableCell>
              <StyledTableCell>Jurado 3</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                {datos.jurados[0].usuario.nombres + " " + datos.jurados[0].usuario.apellidos}
              </StyledTableCell>
              <StyledTableCell>{datos.jurados[1].usuario.nombres + " " + datos.jurados[1].usuario.apellidos}</StyledTableCell>
              <StyledTableCell>{datos.jurados[2].usuario.nombres + " " + datos.jurados[2].usuario.apellidos}</StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
