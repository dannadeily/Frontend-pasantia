import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { Link, useParams } from "react-router-dom";
import conexionAxios from "../../config/axios";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import VisibilityIcon from '@material-ui/icons/Visibility';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function InformacionEstudiante() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { id } = useParams();

  const [pasante, setData] = useState([]);
  const [documentosIniciales, setDocumentosIniciales] = useState([]);
  const [documentosAvances, setDocumentosAvances] = useState([]);
  const peticionGet = async () => {
    await conexionAxios.get("/pasante/" + id).then((response) => {
      setData(response.data.pasante);
    });
    await conexionAxios
      .get("/getdocumentoscargadosinicialesbypasante/" + id)
      .then((response) => {
        setDocumentosIniciales(response.data);
      });
    await conexionAxios
      .get("/getdocumentoscargadosavancesbypasante/" + id)
      .then((response) => {
        setDocumentosAvances(response.data);
      });
  };

  useEffect(async () => {
    await peticionGet();
  }, []);

  //----------------------MODAL---------------------------------
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  //-----------------------------------------------------------------------

  return (
    <div className={classes.root}>
      <br></br>
      <Container maxWidth="lg">
        <AppBar position="static">
          <Tabs
            variant="fullWidth"
            value={value}
            onChange={handleChange}
            aria-label="nav tabs example"
          >
            <LinkTab
              label="Informacion General"
              href="/drafts"
              {...a11yProps(0)}
            />
            <LinkTab
              label="Documentos de aceptacion"
              href="/trash"
              {...a11yProps(1)}
            />
            <LinkTab label="Avances" href="/spam" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        {/* TABLA DE INFORMACION GENERAL  */}
        <TabPanel value={value} index={0}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <Typography variant="h6">Nombres:</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="p"> {pasante.nombres} </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Typography variant="h6">Apellidos:</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="p"> {pasante.apellidos}</Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Typography variant="h6">Direccion:</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="p"> {pasante.direccion}</Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Typography variant="h6">Telefono:</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="p"> {pasante.telefono}</Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Typography variant="h6">Semestre:</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="p"> {pasante.semestre}</Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <Typography variant="h6">Cedula:</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="p">
                        {" "}
                        {pasante.numero_identificacion}
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Typography variant="h6">Tipo:</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="p">Cedula de ciudadania</Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Typography variant="h6">Email:</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="p">{pasante.email}</Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Typography variant="h6">Codigo estudiantil:</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="p"> {pasante.codigo}</Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Grid>
          </Grid>
        </TabPanel>

        {/* DOCUMENTO DE ACEPTACION */}
        <TabPanel value={value} index={1}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Table>
                <TableBody>
                  {documentosIniciales.map((iniciales) => {
                    return (
                      <TableRow>
                        <TableCell>
                          <Typography variant="h6">
                            {iniciales.documento}:
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="p">
                          <a target={"_blank"} href={`http://localhost:4010/`+ iniciales.ruta }> <VisibilityIcon/> </a>
                          </Typography>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </Grid>
          </Grid>

          <br></br>
          <Container maxWidth="sm">
            <Grid item xs={12} sm={6}>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <Button variant="contained" color="primary">
                        APROBAR
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="outlined"
                        color="primary"
                        onClick={handleClickOpen}
                      >
                        Hacer Observaciones
                      </Button>

                      <Dialog
                        fullScreen={fullScreen}
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="responsive-dialog-title"
                      >
                        <DialogTitle id="responsive-dialog-title">
                          {
                            "Por favor agregue la observaciones que presenta algun documento"
                          }
                        </DialogTitle>

                        <TextareaAutosize
                          aria-label="empty textarea"
                          placeholder="Observaciones"
                        />

                        <DialogActions>
                          <Button autoFocus color="primary">
                            Enviar
                          </Button>
                          <Button
                            onClick={handleClose}
                            color="primary"
                            autoFocus
                          >
                            Cancelar
                          </Button>
                        </DialogActions>
                      </Dialog>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Grid>
          </Container>
        </TabPanel>

        {/* AVANCES */}
        <TabPanel value={value} index={2}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Table>
                <TableBody>
                  {documentosAvances.map((avances) => {
                    return (
                      <TableRow>
                        <TableCell>
                          <Typography variant="h6">
                            {avances.documento}:
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="p">
                          <a target={"_blank"} href={`http://localhost:4010/`+ avances.ruta }> <VisibilityIcon/> </a>
                          </Typography>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </Grid>
          </Grid>
        </TabPanel>
      </Container>
    </div>
  );
}
