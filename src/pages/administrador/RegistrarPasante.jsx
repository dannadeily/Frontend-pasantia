import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import conexionAxios from "../../config/axios";
import { Link ,Navigate,useNavigate} from "react-router-dom";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import Alerta from "../../components/alerta";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  paper: {
    
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

  const [pasante, setPasante] = useState({
    nombres: "",
    apellidos: "",
    codigo: "",
    email: "",
    password: "",
    empresa: "",
  });
  
  const navigate = useNavigate()

  const actualizarState = (e) => {
    // Almacenar lo que el usuario escribe en el state
    setPasante({
      // obtener una copia del state actual
      ...pasante,
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

  const agregarPasante = (e) => {
    e.preventDefault();
    conexionAxios.post("/user", pasante).then((res) => {
      if (res.data.status === 201) {
        
        setAlerta(
          {
          
            msg: <Alert severity="success" onClose={handleClose} >Pasante registrado exitosamente</Alert>,
            error: true
           
          
        })
        
        
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

  const [empresas, setData] = useState([]);
  const peticionGet = async () => {
    await conexionAxios.get("/empresasactivas").then((response) => {
      setData(response.data.empresa);
    });
  };

  useEffect(async () => {
    await peticionGet();
  }, []);

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
        <form className={classes.form}  onSubmit={agregarPasante}>
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
              <FormControl variant="outlined" fullWidth>
              <InputLabel shrink>
                  Asignar empresa
                </InputLabel>
                <Select
                  onChange={actualizarState}
                  name="empresa"
                  native
                  label="empresa"
                >
                  {empresas.map((empresa) => {
                    return (
                      <option value={empresa.idempresa}>
                        {empresa.nombre}
                      </option>
                    );
                  })}
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
