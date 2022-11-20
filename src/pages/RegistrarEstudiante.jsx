import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import conexionAxios from "../config/axios";
import {
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Select,
} from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import Box from "@material-ui/core/Box";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

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

export default function RegistrarEstudiante() {
  // cliente = state, guardarcliente = funcion para guardar el state
  const [estudiante, guardarEstudiante] = useState({
    nombres: "",
    apellidos: "",
    numeroIdentificacion: "",
    idTipoDocumento: "",
    codigo: "",
    email: "",
    password: "",
    telefono: "",
    semestre: "",
    direccion: "",
  });

  // leer los datos del formulario
  const actualizarState = (e) => {
    // Almacenar lo que el usuario escribe en el state
    guardarEstudiante({
      // obtener una copia del state actual
      ...estudiante,
      [e.target.name]: e.target.value,
    });
  };

  const agregarEstudiante = (e) => {
    e.preventDefault();

    // enviar petición
    conexionAxios.post("/user", estudiante).then((res) => {
      // validar si hay errores de mongo
      console.log(res);
      <Alert severity="success">This is a success message!</Alert>
      // Redireccionar
      // history.push('/');
    });
  };

   //Alert
  const classes = useStyles();

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  //

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
          REGISTRARSE COMO ESTUDIANTE
        </Typography>
        <CssBaseline></CssBaseline>
        <form className={classes.form} noValidate onSubmit={agregarEstudiante}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <FormControl>
                <InputLabel htmlFor="nombre">Nombres</InputLabel>
                <Input
                  name="nombres"
                  id="nombre"
                  type="TextField"
                  onChange={actualizarState}
                ></Input>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl>
                <InputLabel htmlFor="apellido">Apellidos</InputLabel>
                <Input
                  id="apellido"
                  name="apellidos"
                  type="TextField"
                  aria-describedby="email-helper"
                  onChange={actualizarState}
                ></Input>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl>
                <InputLabel htmlFor="cedula">Número documento</InputLabel>
                <Input
                  name="numeroIdentificacion"
                  id="cedula"
                  type="number"
                  aria-describedby="email-helper"
                  onChange={actualizarState}
                ></Input>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl className={classes.formControl}>
                <InputLabel>Tipo de documento</InputLabel>
                <Select name="idTipoDocumento" onChange={actualizarState}>
                  <MenuItem value={10}>Cedula de ciudadania</MenuItem>
                  <MenuItem value={20}>Tarjeta de identidad</MenuItem>
                  <MenuItem value={30}>Cedula Extranjeria</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl>
                <InputLabel htmlFor="expedicion">
                  Lugar de expedicion
                </InputLabel>
                <Input
                  id="expedicion"
                  type="TextField"
                  aria-describedby="expedicion-helper"
                  onChange={actualizarState}
                ></Input>
                <FormHelperText id="expedicion-helper">
                  de la cedula
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              {/** <FormControl>
                    <InputLabel >Fecha de nacimiento</InputLabel>
                    <Input id="date" label="Birthday" type="date"></Input>
                </FormControl>
              */}

              <TextField
                id="date"
                label="Fecha nacimiento"
                type="date"
                onChange={actualizarState}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="sexo">Sexo</InputLabel>
                <Select native id="sexo" onChange={actualizarState}>
                  <option aria-label="None" value="" />
                  <option value={10}>Femenino</option>
                  <option value={20}>Masculino</option>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl>
                <InputLabel htmlFor="direccion">Direccion</InputLabel>
                <Input
                  id="direccion"
                  name="direccion"
                  type="TextField"
                  onChange={actualizarState}
                ></Input>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl>
                <InputLabel htmlFor="telefono">Telefono</InputLabel>
                <Input
                  name="telefono"
                  id="telefono"
                  type="number"
                  onChange={actualizarState}
                ></Input>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl>
                <InputLabel htmlFor="email">Email</InputLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  onChange={actualizarState}
                  aria-describedby="email-helper"
                ></Input>
                <FormHelperText id="email-helper">
                  email institucional
                </FormHelperText>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl>
                <InputLabel htmlFor="codigo">Codigo estudiantil</InputLabel>
                <Input
                name="codigo"
                  id="codigo"
                  type="number"
                  onChange={actualizarState}
                ></Input>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl>
                <InputLabel htmlFor="semestre">Semestre</InputLabel>
                <Input
                name="semestre"
                  id="semestre"
                  type="number"
                  onChange={actualizarState}
                ></Input>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl>
                <InputLabel htmlFor="contraseña">contraseña</InputLabel>
                <Input
                name="password"
                  id="contraseña"
                  type="password"
                  onChange={actualizarState}
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
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to="/">Iniciar Sesion</Link>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
}
