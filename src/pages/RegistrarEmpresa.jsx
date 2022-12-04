import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { FormControl, Input, InputLabel, Select } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import conexionAxios from "../config/axios";
import * as Yup from "yup";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    backgroundColor: "#dd4b39",
    color: "#FFFFFF",
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 190,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function RegistrarEmpresa() {
  const [sectorEmpresas, listaSectoresEmpresa] = useState([]);
  const [actividades, listaTiposActividades] = useState([]);

  const consultarActividades = async () => {
    const actividades = await conexionAxios.get("/actividades");
    //volovar en el state
    listaTiposActividades(actividades.data.actividades);
  };

  const consultarSectorEmpresas = async () => {
    const sectores = await conexionAxios.get("/sectorempresa");
    //volovar en el state
    listaSectoresEmpresa(sectores.data.sectoresEmpresa);
  };

  useEffect(() => {
    consultarActividades();
    consultarSectorEmpresas();
  }, []);

  const [empresa, guardarEmpresa] = useState({
    sectorEmpresa: "",
    actividad: "",
    nombre: "",
    razonSocial: "",
    nit: "",
    password: "",
    email: "",
    telefono: "",
    semestre: "",
    direccion: "",
  });
  const actualizarState = (e) => {
    // Almacenar lo que el usuario escribe en el state
    guardarEmpresa({
      // obtener una copia del state actual
      ...empresa,
      [e.target.name]: e.target.value,
    });
  };

  const agregarEmpresa = (e) => {
    e.preventDefault();

    conexionAxios.post("/empresa", empresa).then((res) => {});
  };

  const classes = useStyles();

  const validationSchema = Yup.object({

  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        className={classes.paper}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" align="center">
          REGISTRARSE COMO EMPRESA
        </Typography>
        <form
          className={classes.form}
          validationSchema={validationSchema}
          onSubmit={agregarEmpresa}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <FormControl>
                <InputLabel htmlFor="nombre">Nombre empresa</InputLabel>
                <Input
                  onChange={actualizarState}
                  name="nombre"
                  id="nombre"
                  type="TextField"
                ></Input>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl>
                <InputLabel htmlFor="razonSocil">Razon social</InputLabel>
                <Input
                  onChange={actualizarState}
                  id="apellido"
                  type="TextField"
                  name="razonSocial"
                  aria-describedby="email-helper"
                ></Input>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl>
                <InputLabel htmlFor="nit">NIT</InputLabel>
                <Input
                  onChange={actualizarState}
                  id="cedula"
                  type="number"
                  name="nit"
                  aria-describedby="email-helper"
                ></Input>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl className={classes.formControl}>
                <InputLabel>Sector</InputLabel>
                <Select onChange={actualizarState} name="sectorEmpresa">
                  <MenuItem value={1}>Publico</MenuItem>
                  <MenuItem value={2}>Privado</MenuItem>
                  <MenuItem value={3}>Mixto</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl className={classes.formControl}>
                <InputLabel>Actividad</InputLabel>
                <Select onChange={actualizarState} name="actividad">
                  <MenuItem value={1}>Industrial</MenuItem>
                  <MenuItem value={2}>Comercial</MenuItem>
                  <MenuItem value={3}>Educativo</MenuItem>
                  <MenuItem value={4}>Estatal</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl>
                <InputLabel htmlFor="direccion">Direccion</InputLabel>
                <Input
                  onChange={actualizarState}
                  name="direccion"
                  id="direccion"
                  type="TextField"
                ></Input>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl>
                <InputLabel htmlFor="telefono">Telefono</InputLabel>
                <Input
                  onChange={actualizarState}
                  name="telefono"
                  id="telefono"
                  type="number"
                ></Input>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl>
                <InputLabel htmlFor="email">Email</InputLabel>
                <Input
                  onChange={actualizarState}
                  id="email"
                  type="email"
                  aria-describedby="email-helper"
                  name="email"
                ></Input>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl>
                <InputLabel htmlFor="contraseña">contraseña</InputLabel>
                <Input
                  onChange={actualizarState}
                  id="contraseña"
                  name="password"
                  type="password"
                ></Input>
              </FormControl>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Registrarse
          </Button>
        </form>
      </Box>
    </Container>
  );
}
