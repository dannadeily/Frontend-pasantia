import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import useAuth from '../../hooks/useAuth'

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
  const { auth } = useAuth();
  const {usuario}= auth;
  return (
    <div className={classes.root}>
      <Typography variant="h6">Datos Personales</Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Typography variant="h6">Nombres:</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="p">{usuario.nombres} </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography variant="h6">Apellidos:</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="p">{usuario.apellidos}</Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography variant="h6">Direccion:</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="p"> {usuario.direccion} </Typography>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <Typography variant="h6">Telefono:</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="p"> {usuario.telefono} </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Typography variant="h6">Cedula:</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="p"> {usuario.numeroDocumento} </Typography>
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
                  <Typography variant="h6">Email:</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="p">{usuario.email}</Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography variant="h6">Codigo estudiantil:</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="p">{usuario.codigo}</Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography variant="h6">Semestre:</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="p">{usuario.semestre}</Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Grid>
      </Grid>
      <Grid item>
        <Button variant="contained" color="primary">
          <Link to="/Estudiante/EditarDatos">Editar datos</Link>
        </Button>
      </Grid>
    </div>
  );
}
