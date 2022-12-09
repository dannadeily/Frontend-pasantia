import React,{useState} from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import conexionAxios from "../../config/axios";
import useAuth from "../../hooks/useAuth";
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

export default function CambiarPasswordEst() {
  const classes = useStyles();

  const { auth } = useAuth();
  const { usuario } = auth;

  const [data, setData] = useState({
    email: usuario.email,
    password: "",
    newPassword: "",
    repeatPassword: "",
  });
 


     //ALERTA------------------------------------
     const [alerta, setAlerta] = useState({});
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
    conexionAxios.put("/cambiarPassword", data).then((res) => {
      if(res.data.status===200){
        setAlerta(
          {
          
            msg: <Alert severity="success" onClose={handleClose} >{res.data.message}</Alert>,
            error: true
          
        });

      }else{
        setAlerta(
          {
          
            msg: <Alert severity="error" onClose={handleClose} >{res.data.message}</Alert>,
            error: true
          
        });
        
      }
      
      
    });
  };


   //ALERTA------------------------------------

   const { msg } = alerta;

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <div  >{msg && <Alerta alerta={alerta} />}</div>
          </Snackbar>
        <Typography component="h1" variant="h5">
          Cambiar contraseña
        </Typography>
        <form className={classes.form}  onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="contraseña actual"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={actualizarState}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="newPassword"
                label="nueva contraseña"
                type="password"
                id="password"
                onChange={actualizarState}
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="repeatPassword"
                label="repetir contraseña"
                type="password"
                id="password"
                onChange={actualizarState}
                autoComplete="current-password"
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
            Cambiar Contraseña
          </Button>
        </form>
      </div>
    </Container>
  );
}
