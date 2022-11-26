import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
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

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            INICIAR SESION
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
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
          </form>
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


// import React, { useEffect,useState } from "react";
// import Avatar from "@material-ui/core/Avatar";
// import Button from "@material-ui/core/Button";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import TextField from "@material-ui/core/TextField";
// import { Link } from "react-router-dom";
// import Paper from "@material-ui/core/Paper";
// import Grid from "@material-ui/core/Grid";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
// import Typography from "@material-ui/core/Typography";
// import { makeStyles } from "@material-ui/core/styles";
// import FormControl from "@material-ui/core/FormControl";
// import InputLabel from "@material-ui/core/InputLabel";
// import MenuItem from "@material-ui/core/MenuItem";
// import Select from "@material-ui/core/Select";
// import useAuth from "../hooks/useAuth";
// import conexionAxios from "../config/axios";
// import Alerta from "../components/alerta";



// export default function IniciarSesion() {
//   const classes = useStyles();


//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
  
//   const {setAuth, } = useAuth();
    
  

//   const handleSubmit = async e => {
//     e.preventDefault();

//     if([email, password].includes('')) {
//         setAlerta({
//             msg: 'Todos los campos son obligatorios',
//             error: true
//         });
//         return
//     }



//     try { 
//         const { data } = await conexionAxios.post('/login', {email, password})
//         // setAlerta({})
//         localStorage.setItem('token', data.token)
//         setAuth(data)
       
//     } catch (error) {
//         // setAlerta({
//         //     msg: error.response.data.msg,
//         //     error: true
//         // })
//     }

// }

//   const [alerta, setAlerta] = useState({});
//   const { msg } = alerta;

//   return (
//     <Grid container component="main" className={classes.root} >
//       <CssBaseline />
//       <Grid item xs={false} sm={4} md={7} className={classes.image} />
//       <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
//         <div className={classes.paper}>
//           <Avatar className={classes.avatar}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             INICIAR SESION
//           </Typography>
//           {msg && <Alerta alerta={alerta } />}

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
            
//             <TextField
            
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Email Address"
//               name="email"
//               autoComplete="email"
//               autoFocus
              
//               value={email}
//               onChange={ e => setEmail(e.target.value)}
             
//             />
//             {msg && <Alerta alerta={alerta.email } />}
//             <TextField
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//               value={password}
//                     onChange={ e => setPassword(e.target.value)}
              
//             />

//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               color="primary"
//               className={classes.submit}
//             >
//               Iniciar sesion
//             </Button>
//           </form>
//           <Grid item>
//             <Button>
//               <Link to="/RecuperarPassword">Recuperar contraseña</Link>
//             </Button>
//           </Grid>
//         </div>
//       </Grid>
//     </Grid>
//   );
// }
