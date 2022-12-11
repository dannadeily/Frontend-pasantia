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
import Container from '@material-ui/core/Container';

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
export default function EditarDatosJurado() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <br></br>
      <Container maxWidth="sm">
      <Typography variant="h6">Editar datos personales</Typography>
       
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Typography variant="h6">Nombres:</Typography>
                </TableCell>
                <TableCell>
                  
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography variant="h6">Apellidos:</Typography>
                </TableCell>
                <TableCell>
                 
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography variant="h6">Email:</Typography>
                </TableCell>
                <TableCell>
                  <Typography >dannadeilydc@ufps.edu.co</Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography variant="h6">Codigo :</Typography>
                </TableCell>
                <TableCell>
                  <Typography >1151732</Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
   
      <br></br>
      <Grid item>
        <Button variant="contained" color="primary">
          <Link to="/Jurado/PerfilJurado">Guardar cambios</Link>
        </Button>
      </Grid>
      </Container>
    </div>
  );
}
