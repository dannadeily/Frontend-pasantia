import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { Link } from "react-router-dom";
import conexionAxios from "../../config/axios";
import useAuth from "../../hooks/useAuth";
import VisibilityIcon from '@material-ui/icons/Visibility';

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

  const { auth } = useAuth();
  const { usuario } = auth;

  const [documentos, setData] = useState([]);
  const peticionGet = async () => {
    await conexionAxios
      .get("/getdocumentoscargadosfinales/" + usuario.idusuario)
      .then((response) => {
        setData(response.data);
      });
  };

  useEffect(async () => {
    await peticionGet();
  }, []);

  return (
    <Container fixed>
      <Typography component="div" style={{ height: "100vh" }}>
        <Typography variant="h6">Cargar documentos</Typography>
        <form class="" action="" method="post">
          <Table>
            <TableBody>
              {documentos.map((documento) => {
                return (
                  <TableRow>
                    <TableCell>
                      <Typography variant="h6">
                        {documento.documento}:
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="p">
                      <a target={"_blank"} href={`http://localhost:4010/`+ documento.ruta }> <VisibilityIcon/> </a>
                      </Typography>
                    </TableCell>
                
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
          <br></br>
          <Grid item>
            <Button variant="contained" color="primary">
              <Link to="/Estudiante/CargarDocumentos">
                Actualizar Documentos
              </Link>
            </Button>
          </Grid>
        </form>
      </Typography>
    </Container>
  );
}
