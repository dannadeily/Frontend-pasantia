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
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import FormGroup from "@material-ui/core/FormGroup";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

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

export default function RegistrarJurado() {
  const classes = useStyles();

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

  //-----------------------

  const [documento, setData] = useState({
    nombreDocumento: "",
    aprobacion: "",
  });
  const [archivo, guardarArchivo] = useState("");

  const actualizarState = (e) => {
    // Almacenar lo que el usuario escribe en el state
    setData({
      // obtener una copia del state actual
      ...documento,
      [e.target.name]: e.target.value,
    });
  };

  const { msg } = alerta;

  const [state, setState] = React.useState({
    aprobacion: true,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("plantilla", archivo);
    formData.append("nombre", documento.nombreDocumento);
    formData.append("aprobacion", state.aprobacion);
    await conexionAxios.post("/documento", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };

  const leerArchivo = (e) => {
    guardarArchivo(e.target.files[0]);
  };

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Crear un nuevo documento
        </Typography>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <div>{msg && <Alerta alerta={alerta} />}</div>
        </Snackbar>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="nombreDocumento"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Nombre del documento"
                autoFocus
                onChange={actualizarState}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="file"
                variant="outlined"
                type="file"
                required
                fullWidth
                id="file"
                autoFocus
                onChange={leerArchivo}
              />
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.aprobacion}
                    onChange={handleChange}
                    name="aprobacion"
                    color="primary"
                  />
                }
                label="Requiere aprobación"
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
            Crear
          </Button>
        </form>
      </div>
    </Container>
  );
}
