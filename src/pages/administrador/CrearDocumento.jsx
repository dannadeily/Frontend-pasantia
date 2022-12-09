import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import conexionAxios from "../../config/axios";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import Alerta from "../../components/alerta";

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
    formato: "",
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
    formData.append("formato", documento.formato);
    formData.append("aprobacion", state.aprobacion);
    await conexionAxios
      .post("/documento", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        if (res.data.status === 201) {
          setAlerta({
            msg: (
              <Alert severity="success" onClose={handleClose}>
                {res.data.message}
              </Alert>
            ),
            error: true,
          });
        } else {
          setAlerta({
            msg: (
              <Alert severity="error" onClose={handleClose}>
                {res.data.message}
              </Alert>
            ),
            error: true,
          });
        }
      });
  };

  const leerArchivo = (e) => {
    guardarArchivo(e.target.files[0]);
  };

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const [tiposFormatos, listaTiposFormatos] = useState([]);

  const consultarTiposFormatos = async () => {
    const tiposDocumentosConsulta = await conexionAxios.get("/tipoFormato");
    //volovar en el state
    listaTiposFormatos(tiposDocumentosConsulta.data.tiposFormatos);
  };

  useEffect(() => {
    consultarTiposFormatos();
  }, []);

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
        <form className={classes.form} onSubmit={handleSubmit}>
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
              <FormControl fullWidth required className={classes.formControl}>
                <InputLabel id="formato">Agregar a:</InputLabel>
                <Select
                  labelId="formato"
                  onChange={actualizarState}
                  className={classes.selectEmpty}
                  fullWidth
                  name="formato"
                >
                  {tiposFormatos.map((formatos) => {
                    return (
                      <MenuItem value={formatos.idformato}>
                        {formatos.formato}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
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
