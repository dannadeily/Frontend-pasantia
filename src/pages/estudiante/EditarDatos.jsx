import React,{useState} from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { Input } from "@material-ui/core";
import useAuth from "../../hooks/useAuth";
import conexionAxios from "../../config/axios";

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
export default function EditarDatos() {
  const classes = useStyles();
  const { auth } = useAuth();
  const { usuario } = auth;

  const [data, setData] = useState({
    nombres: usuario.nombres,
    apellidos: usuario.apellidos,
    numeroIdentificacion: usuario.numeroDocumento,
    idTipoDocumento: "",
    codigo: usuario.codigo,
    email: usuario.email,
    telefono: usuario.telefono,
    semestre: usuario.semestre,
    direccion: usuario.direccion,
  });

  const actualizarState = (e) => {
    // Almacenar lo que el usuario escribe en el state
    setData({
      // obtener una copia del state actual
      ...data,
      [e.target.name]: e.target.value,
    });
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    conexionAxios.post("/editarDatos", data).then((res) => {
      
    });
  };

  return (
    <div className={classes.root}>
      <Typography variant="h6">Datos Personales</Typography>
      <form className={classes.form} noValidate onSubmit={handleSubmit} >
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Typography variant="h6">Nombres:</Typography>
                  </TableCell>
                  <TableCell>
                    <Input
                      name="nombres"
                      id="nombre"
                      type="text"
                      defaultValue={usuario.nombres}
                      onChange={actualizarState}
                    ></Input>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography variant="h6">Apellidos:</Typography>
                  </TableCell>
                  <TableCell>
                    <Input
                      id="apellidos"
                      name="apellidos"
                      type="text"
                      defaultValue={usuario.apellidos}
                      onChange={actualizarState}
                    ></Input>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    <Typography variant="h6">Direccion:</Typography>
                  </TableCell>
                  <TableCell>
                    <Input
                      id="direccion"
                      name="direccion"
                      type="text"
                      defaultValue={usuario.direccion}
                      onChange={actualizarState}
                    ></Input>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    <Typography variant="h6">Telefono:</Typography>
                  </TableCell>
                  <TableCell>
                    <Input
                      id="telefono"
                      name="telefono"
                      type="number"
                      defaultValue={usuario.telefono}
                      onChange={actualizarState}
                    ></Input>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography variant="h6">Semestre:</Typography>
                  </TableCell>
                  <TableCell>
                    <Input
                      id="semestre"
                      name="semestre"
                      type="text"
                      defaultValue={usuario.semestre}
                      onChange={actualizarState}
                    ></Input>
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
                    <Input
                      id="numeroIdentificacion"
                      name="numeroIdentificacion"
                      type="text"
                      defaultValue={usuario.numeroDocumento}
                      onChange={actualizarState}
                    ></Input>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography variant="h6">Tipo:</Typography>
                  </TableCell>
                  <TableCell>
                    <Input id="semestre" type="text"></Input>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    <Typography variant="h6">Email:</Typography>
                  </TableCell>
                  <TableCell>
                    <Input
                      id="email"
                      name="email"
                      readOnly
                      type="text"
                      value={usuario.email}
                      onChange={actualizarState}
                    ></Input>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography variant="h6">Codigo estudiantil:</Typography>
                  </TableCell>
                  <TableCell>
                    <Input
                      id="codigo"
                      name="codigo"
                      readOnly
                      type="text"
                      value={usuario.codigo}
                      onChange={actualizarState}
                    ></Input>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Grid>
        </Grid>
        <Grid item>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Confirmar
          </Button>
        </Grid>
      </form>
    </div>
  );
}
