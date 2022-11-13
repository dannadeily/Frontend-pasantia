import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
export default function DatosPersonales() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h4">Datos Personales</Typography>

      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Typography variant="h6">Nombres:</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="p">Danna Deily </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography variant="h6">Apellidos:</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="p">Duque Conde</Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography variant="h6">Fecha de nacimiento:</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="p">29/04/2000</Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography variant="h6">Lugar de nacimiento:</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="p">cúcuta</Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography variant="h6">Sexo:</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="p">Femenino</Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography variant="h6">Direccion:</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="p">av 4 # 6-47 san luis</Typography>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <Typography variant="h6">Telefono:</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="p">3177141689</Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Grid>
        <Grid item xs={6}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Typography variant="h6">Cedula:</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="p">1010075720</Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography variant="h6">Tipo:</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="p">Cedula de ciudadania</Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography variant="h6">Expedida:</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="p">Cucuta</Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography variant="h6">Email:</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="p">dannadeilydc@ufps.edu.co</Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography variant="h6">Codigo estudiantil:</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="p">1151732</Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography variant="h6">Semestre:</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="p">10</Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Grid>
      </Grid>
      <Grid item>
        <Button variant="contained" color="primary">
          <Link to="">Editar datos</Link>
        </Button>
      </Grid>
    </div>
  );
}
