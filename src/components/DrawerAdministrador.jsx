import React from "react";
import clsx from "clsx";
import { alpha, makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import useAuth from '../hooks/useAuth'
import Button from "@material-ui/core/Button";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
  root: {
    display: "flex",
  },
  appBar: {
    backgroundColor: "#dd4b39",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    backgroundColor: "#dd4b39",
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  drawerContent: {
    backgroundColor: "#FBFCFC",
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function DrawerAdministrador() {
  const classes = useStyles();
  const theme = useTheme();

  //cerrar Sesion 
  const { cerrarSesionAuth } = useAuth()
  const handleCerrarSesion = () => {
    cerrarSesionAuth()
    localStorage.removeItem('token')
}
  //Abrir Drawer
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  //Abrir menu ---------------

  const [anchorEl, setAnchorEl] = React.useState(null);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            ADMINISTRADOR
          </Typography>

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
                <MenuItem onClick={handleClose}>
                 Perfil
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Button onClick={handleCerrarSesion}>Cerrar Sesion</Button>
                </MenuItem>
              </Menu>
            </div>

        </Toolbar>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />

        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Estudiantes</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              {[
                ["/Administrador","Estudiantes Activos"],
                ["/Administrador/AsignarEmpresa","Asignar Empresa"],
                ["/Administrador/AsignarJurado","Asignar Jurado"],
                ["/Administrador/HistorialEstudiante","Historial"]
              ].map((text, index) => (
                <Link to={text[0]}>
                  <ListItem button>
                    <ListItemText primary={text[1]} />
                  </ListItem>
                </Link>
                ))}
            </List>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Empresa</Typography>
          </AccordionSummary>
          <AccordionDetails>

          <List>
              {[
                ["/Administrador/CargarConvenio","Cargar Convenio"],
                ["/Administrador/DocumentosEmpresa","documentos a visualizar"],
                ["/Administrador/HistorialEmpresa","Historial"],
               
              ].map((text, index) => (
                <Link to={text[0]}>
                  <ListItem button>
                    <ListItemText primary={text[1]} />
                  </ListItem>
                </Link>
                ))}
            </List>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography className={classes.heading}>Jurado</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
            {[
                ["/Administrador/RegistrarJurado","Registrar Jurado"],
                ["/Administrador/DocumentoEvaluado","Documentos evaluados"],
                ["/Administrador/EstudianteEvaluado","Estudiantes evaluados"],
                ["/Administrador/HistorialJurado","Historial de jurados"],
               
              ].map((text, index) => (
                <Link to={text[0]}>
                  <ListItem button>
                    <ListItemText primary={text[1]} />
                  </ListItem>
                </Link>
                ))}

            </List>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4a-content"
            id="panel4a-header"
          >
            <Typography className={classes.heading}>Calificacion</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
            {[
                ["/Administrador/Evaluar","Evaluar"],
                ["/Administrador/HistorialCalificacion"," Historial"],
              ].map((text, index) => (
                <Link to={text[0]}>
                  <ListItem button>
                    <ListItemText primary={text[1]} />
                  </ListItem>
                </Link>
                ))}

            </List>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel5a-content"
            id="panel5a-header"
          >
            <Typography className={classes.heading}>Reportes</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>

            {[
                ["/Administrador/ReporteEstudiante","Estudiantes"],
                ["/Administrador/ReporteEmpresa","Empresas"],
                            
              ].map((text, index) => (
                <Link to={text[0]}>
                  <ListItem button>
                    <ListItemText primary={text[1]} />
                  </ListItem>
                </Link>
                ))}


               </List>
          </AccordionDetails>
        </Accordion>
      </Drawer>

      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerContent} />
        <Outlet></Outlet>
      </main>
    </div>
  );
}
