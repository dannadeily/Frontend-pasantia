import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import conexionAxios from "../../config/axios";

import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import Alerta from "../../components/alerta";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

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
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function RegistrarPasante() {
  const classes = useStyles();

  const [jurado, setJurado] = useState({
    nombres: "",
    apellidos: "",
    email: "",
    password: "",
  });

  const actualizarState = (e) => {
    // Almacenar lo que el usuario escribe en el state
    setJurado({
      // obtener una copia del state actual
      ...jurado,
      [e.target.name]: e.target.value,
    });
  };

  const [alerta, setAlerta] = useState({});
  //ALERTA------------------------------------
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const agregarJurado = (e) => {
    e.preventDefault();

    conexionAxios.post("/jurado", jurado).then((res) => {
      if (res.data.status === 201) {
        setAlerta({
          msg: (
            <Alert severity="sucess" onClose={handleClose}>
              {res.data.message}
            </Alert>
          ),
          error: true,
        });
      } else
        setAlerta({
          msg: (
            <Alert severity="error" onClose={handleClose}>
              {res.data.message}
            </Alert>
          ),
          error: true,
        });
    });
  };

  const { msg } = alerta;

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Registrar nuevo pasante
        </Typography>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <div>{msg && <Alerta alerta={alerta} />}</div>
        </Snackbar>
        <form className={classes.form} noValidate onSubmit={agregarJurado}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="nombres"
                variant="outlined"
                required
                type="text"
                fullWidth
                id="firstName"
                label="Nombres"
                autoFocus
                onChange={actualizarState}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="apellidos"
                variant="outlined"
                required
                type="text"
                fullWidth
                id="firstName"
                label="Apellidos"
                autoFocus
                onChange={actualizarState}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="codigo"
                variant="outlined"
                required
                type="number"
                fullWidth
                id="firstName"
                label="Codigo estudiantil"
                autoFocus
                onChange={actualizarState}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                onChange={actualizarState}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl variant="outlined" fullWidth >
                <InputLabel htmlFor="outlined-age-native-simple">
                 Asignar empresa
                </InputLabel>
                <Select native label="empresa">
                  <option aria-label="None" value="" />
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={actualizarState}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleClick}
          >
            Registrar
          </Button>
        </form>
      </div>
    </Container>
  );
}
