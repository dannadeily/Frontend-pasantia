import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TextField from "@material-ui/core/TextField";
import GetAppIcon from "@material-ui/icons/GetApp";
import VisibilityIcon from "@material-ui/icons/Visibility";
import PublishIcon from "@material-ui/icons/Publish";
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
}));

export default function CargarDocumentos() {
  const classes = useStyles();

  return (
    <Container fixed>
      <Typography component="div" style={{ height: "100vh" }}>
        <Typography variant="h6">Cargar documentos</Typography>
        <form class="" action="" method="post">
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Typography variant="h6">Cedula de ciudadania:</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="p"> nombreArchivo.pdf </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="p">Estado del documento: </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="p">Aprobado </Typography>
                </TableCell>

                
              
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography variant="h6">Cedula de ciudadania:</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="p"> nombreArchivo.pdf </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="p">Estado del documento: </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="p">Aprobado </Typography>
                </TableCell>

                
              
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography variant="h6">Cedula de ciudadania:</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="p"> nombreArchivo.pdf </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="p">Estado del documento: </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="p">Aprobado </Typography>
                </TableCell>

                
              
              </TableRow>
            </TableBody>
          </Table>

          
          <Grid item>
        <Button variant="contained" color="primary">
          <Link to="/Estudiante/CargarDocumentos">Actualizar Documentos</Link>
        </Button>
      </Grid>
        </form>
      </Typography>
    </Container>
  );
}
