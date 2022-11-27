
import React, { useEffect,useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import useAuth from "../hooks/useAuth";
import conexionAxios from "../config/axios";
import Alerta from "../components/alerta";
import {ValidatorForm,TextValidator} from "react-material-ui-form-validator"


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: '/public/fondoescritorio.jpg',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSide() {
  const classes = useStyles();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [messageEmail,setMessageEmail] = useState('');
    const [messagePassword,setMessagePassword] = useState('');
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);
    
    const {setAuth, } = useAuth();
      
    
  
    const handleSubmit = async e => {
      e.preventDefault();
  
      try { 
          const { data } = await  conexionAxios.post('/login', {email, password})
          // setAlerta({})
          localStorage.setItem('token', data.token)
          setAuth(data)
         
      } catch (error) {
          // setAlerta({
          //     msg: error.response.data.msg,
          //     error: true
          // })
      }
  
  }
  
    const [alerta, setAlerta] = useState({});
    const { msg } = alerta;

  return (
    <Grid container component="main" className={classes.root} >
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image}  />

      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            INICIAR SESION
          </Typography>
          {msg && <Alerta alerta={alerta } />}
          <ValidatorForm className={classes.form} noValidate onSubmit={handleSubmit}>
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
              validators={['required']}
              errorMessages={['Campo Obligatorio']}
              value={email}
             onChange={ (e) => setEmail(e.target.value)
             
              // if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9_.+-]+$/.test(email)){
              //   setErrorEmail(true);
              //   setMessageEmail("Debe ser un correo valido");

              // }else
              // if(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9_.+-]+$/.test(email)){
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
              validators={['required']}
              errorMessages={['Campo Obligatorio']}
              value={password}
              onChange={ e => {setPassword(e.target.value);
                if(password.length<7){
                  setErrorPassword(true);
                  setMessagePassword("La contraseña debe tener minimo 8 digitos")
                }else{
                  setErrorPassword(false);
                  setMessagePassword("")
                }
                
              }
            }
              error={errorPassword}
              helperText={messagePassword}
            />
           
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Iniciar Sesion
            </Button>
            <Grid container>
             
              
            </Grid>
          </ValidatorForm>
          <Grid item>
            <Button>
              <Link to="/RecuperarPassword">Recuperar contraseña</Link>
            </Button>
         </Grid>
        </div>
      </Grid>
    </Grid>
  );
}



//           

//           <form className={classes.form} noValidate onSubmit={handleSubmit}>
//             {/* <FormControl variant="outlined" className={classes.formControl}>
//               <InputLabel id="demo-simple-select-outlined-label">
//                 Rol
//               </InputLabel>
//               <Select
//                 labelId="demo-simple-select-outlined-label"
//                 id="rol"
//                 label="Rol"
//               >
//                 <MenuItem value={1}>Administrador</MenuItem>
//                 <MenuItem value={2}>Empresa</MenuItem>
//                 <MenuItem value={3}>Estudiante</MenuItem>
//                 <MenuItem value={4}>Jurado</MenuItem>
//               </Select>
//             </FormControl> */}
            

