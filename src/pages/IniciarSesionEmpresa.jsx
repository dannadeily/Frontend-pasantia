import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { Link, useNavigate } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import conexionAxios from "../config/axios";
import Alerta from "../components/alerta";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import useAuth from "../hooks/useAuth";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import BusinessIcon from '@material-ui/icons/Business';
import background from "../../public/fondoescritorio.jpg";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSideEmpresa() {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [messageEmail, setMessageEmail] = useState("");
  const [messagePassword, setMessagePassword] = useState("");
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [alerta, setAlerta] = useState({});
  const { auth, setAuth, cargando } = useAuth();

  const navigate = useNavigate();


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



  const handleSubmit = async (e) => {
    e.preventDefault();

    

    try {
      const { data } = await conexionAxios.post("/login", { email, password });
      setAlerta(
        {
        
          msg: <Alert severity="sucess" onClose={handleClose} >Incio exitoso</Alert>,
          error: true
        
      });

      localStorage.setItem("token", data.token);

      setAuth(data);
      console.log(data);
      if (data.usuario.rol === 4) {
        navigate("/Empresa");
      } 
    } catch (error) {
      setAlerta(
        {
        
          msg: <Alert severity="error" onClose={handleClose} >Correo o contraseña inconrrecta</Alert>,
          error: true
        
      });
    }
  };

  //ALERTA------------------------------------

  const { msg } = alerta;

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
     

      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
          <BusinessIcon/>
          </Avatar>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <div  >{msg && <Alerta alerta={alerta} />}</div>
          </Snackbar>
          <Typography component="h1" variant="h5">
            INICIAR SESION COMO EMPRESA
          </Typography>
          
          <ValidatorForm className={classes.form} onSubmit={handleSubmit}>
            <TextValidator
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => 
                setEmail(e.target.value)
                // ;

                // if (
                //   !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9_.+-]+$/.test(
                //     email
                //   )
                // ) {
                //   setErrorEmail(true);
                //   setMessageEmail("Debe ser un correo valido");
                // } else if (
                //   /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9_.+-]+$/.test(
                //     email
                //   )
                // ) {
                //   setErrorEmail(false);
                //   setMessageEmail("");
                // }
              }
              error={errorEmail}
              helperText={messageEmail}
            />
            <TextValidator
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (password.length < 7) {
                  setErrorPassword(true);
                  setMessagePassword(
                    "La contraseña debe tener minimo 8 caracteres"
                  );
                } else {
                  setErrorPassword(false);
                  setMessagePassword("");
                }
              }}
              error={errorPassword}
              helperText={messagePassword}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleClick}
            >
              Iniciar Sesion
            </Button>
          </ValidatorForm>
          <Grid item>
            <Button>
              <Link to="/RecuperarPassword">Recuperar contraseña</Link>
            </Button>
          </Grid>
        </div>
        
      </Grid>
      <Grid item xs={false} sm={4} md={7} className={classes.image} style={{ backgroundImage: `url(${background})` }} >
      </Grid>
    </Grid>
  );
}

