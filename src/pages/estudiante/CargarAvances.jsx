import React, {useEffect, useState} from "react";
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
import useAuth from "../../hooks/useAuth";
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
  const { auth } = useAuth();
  const { usuario } = auth;
  const peticionGet = async () => {
    await conexionAxios.get("/documentosAvances").then((response) => {
      setData(response.data);
    });
  };

  useEffect(async () => {
    await peticionGet();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const property in documentos) {
      formData.append(property, documentos[property]);
    }

    await conexionAxios
      .post("/inicioPasantia/"+ usuario.idusuario, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {});
  };

  const [documentos, setDocumentos] = useState(data.map((documento) => {}));

  const actualizarState = (e) => {
    // Almacenar lo que el usuario escribe en el state
    setDocumentos({
      // obtener una copia del state actual
      ...documentos,
      [e.target.id]: e.target.files[0],
    });
  };

  console.log(data);

  return (
    <Container fixed>
      <Typography component="div" style={{ height: "100vh" }}>
        <Typography variant="h6">Cargar Avances</Typography>
        <form onSubmit={handleSubmit}>
          <Table>
            <TableBody>
              {data.map((documento) => {
                return (
                  <TableRow>
                    <TableCell>
                      <Typography variant="h6">
                        {documento.documento}:
                      </Typography>
                    </TableCell>

                    <TableCell>
                      <TextField
                        autoComplete="fname"
                        name={documento.documento}
                        variant="outlined"
                        type="file"
                        required
                        fullWidth
                        id={documento.iddocumento}
                        autoFocus
                        onChange={actualizarState}
                      />
                    </TableCell>
                  </TableRow>
                );
              })}
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
          <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Cargar documentos
            </Button>
          </Grid>
        </form>
      </Typography>
    </Container>
  );
}
