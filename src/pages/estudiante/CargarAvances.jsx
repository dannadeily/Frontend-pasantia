import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TextField from "@material-ui/core/TextField";
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
        <Typography variant="h6">Cargar Avances</Typography>
        <form class="" action="" method="post">
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Typography variant="h6">Cedula de ciudadania:</Typography>
                </TableCell>

                <TableCell>
                  <TextField
                    autoComplete="fname"
                    name="file"
                    variant="outlined"
                    type="file"
                    required
                    fullWidth
                    id="file"
                    autoFocus
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography variant="h6">Cedula de ciudadania:</Typography>
                </TableCell>

                <TableCell>
                  <TextField
                    autoComplete="fname"
                    name="file"
                    variant="outlined"
                    type="file"
                    required
                    fullWidth
                    id="file"
                    autoFocus
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography variant="h6">Cedula de ciudadania:</Typography>
                </TableCell>

                <TableCell>
                  <TextField
                    autoComplete="fname"
                    name="file"
                    variant="outlined"
                    type="file"
                    required
                    fullWidth
                    id="file"
                    autoFocus
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <br></br>
          <br></br>
          <h6>
            los archivos deben estar en formato pdf y no superar los 5mb de
            tamaño
          </h6>
          <br></br>
          <Grid item>
            <Button variant="contained" color="primary">
              <Link to="/Estudiante/AvanceCargado">Editar datos</Link>
            </Button>
          </Grid>
        </form>
      </Typography>
    </Container>
  );
}
