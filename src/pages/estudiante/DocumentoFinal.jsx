import React, { useEffect, useState } from "react";
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
import conexionAxios from "../../config/axios";

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

  const [data, setData] = useState([]);
  const peticionGet = async () => {
    await conexionAxios.get("/documentosFinales").then((response) => {
      setData(response.data);
    });
  };

  useEffect(async () => {
    await peticionGet();
  }, []);

  return (
    <Container fixed>
      <Typography component="div" style={{ height: "100vh" }}>
        <Typography variant="h6">Cargar Documentos Finales</Typography>
        <form class="" action="" method="post">
          <Table>
            <TableBody>
              {data.map((documento) => {
                return(<TableRow>
                  <TableCell>
                    <Typography variant="h6">{documento.documento}:</Typography>
                  </TableCell>

                  <TableCell>
                    <TextField
                      autoComplete="fname"
                      name={documento.documento}
                      variant="outlined"
                      type="file"
                      required
                      fullWidth
                      id="file"
                      autoFocus
                    />
                  </TableCell>
                </TableRow>);
              })}
            </TableBody>
          </Table>

          <h6>
            los archivos deben estar en formato pdf y no superar los 5mb de
            tamaño
          </h6>
          <br></br>
          <Grid item>
            <Button variant="contained" color="primary">
              <Link to="/Estudiante/DocumentoFinalCargado">Editar datos</Link>
            </Button>
          </Grid>
        </form>
      </Typography>
    </Container>
  );
}
