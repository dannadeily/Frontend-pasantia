import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import { deepOrange } from "@material-ui/core/colors";
import { Outlet } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import useAuth from '../hooks/useAuth'


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "#dd4b39",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },

  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },

  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  square: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  menu: {
    flexGrow: 1,
  },
  button: {
    marginLeft: theme.spacing(2),
    color: "#FFFFFF",
  },
}));

export default function AppbarJurado() {
  const classes = useStyles();
  const theme = useTheme();

   //cerrar Sesion 
   const { cerrarSesionAuth } = useAuth()
   const handleCerrarSesion = () => {
     cerrarSesionAuth()
     localStorage.removeItem('token')
 }
  const [open, setOpen] = React.useState(false);

  //Abrir menu ---------------

  const [anchorEl, setAnchorEl] = React.useState(null);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
 

  return (
    <div className={classes.grow}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            JURADO
          </Typography>
          <div className={classes.menu}>
           <Link to="/Jurado">  <Button className={classes.button}>Estudiantes asignados</Button> </Link> 
           <Link to="/Jurado/EvaluarDocumento">
           <Button className={classes.button}>Evaluar documento</Button>
           </Link>
           <Link to="/Jurado/EvaluarPasante">
           <Button className={classes.button}>Evaluar Pasante</Button>
           </Link>
           
            
          </div>

          <div className={classes.grow} />
          <div>
          <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
             
            </div>
          <div>
              <IconButton
                aria-controls="simple-menu"
                aria-haspopup="true"
                color="inherit"
                onClick={handleClick}
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <Link to="/Jurado/PerfilJurado">
                <MenuItem onClick={handleClose}>
                  <Button>Perfil</Button>
                </MenuItem>
                </Link>
                <Link to="/Jurado/CambiarPasswordJurado">
                <MenuItem onClick={handleClose}>
                  <Button>Cambiar contraseña</Button>
                </MenuItem>
                </Link>
               
                <MenuItem onClick={handleClose}>
                  <Button onClick={handleCerrarSesion}>Cerrar Sesion</Button>
                </MenuItem>
              </Menu>
            </div>
        </Toolbar>
      </AppBar>

      <br></br>
      <br></br>
      <br></br>

      <Outlet></Outlet>
    </div>
  );
}
