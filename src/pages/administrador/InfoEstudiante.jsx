import React,{useEffect, useState} from "react";
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

export default function InfoEstudiante() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const {id}= useParams();

  const [pasante, setData] = useState([]);
  const peticionGet = async () => {
    await conexionAxios.get("/pasante/"+ id  ).then((response) => {
      setData(response.data.pasante);
    });
  };

  useEffect(async () => {
    await peticionGet();
  }, []);

  return (
    <div className={classes.root}>
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
          <LinkTab label="Documentos Finales" href="/spam" {...a11yProps(3)} />
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
                    <Typography variant="p"> {pasante.numero_identificacion}</Typography>
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
                    <Typography variant="p">
                    {pasante.email}
                    </Typography>
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
                <TableRow>
                  <TableCell>
                    <Typography variant="h6">
                      Documento de identidad:
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="p">Danna Deily </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography variant="h6">
                      Formato solicitud pasantia PPS01:
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="p">Duque Conde</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography variant="h6">
                      Plan de trabajo pasantia PPS03:{" "}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="p">Danna Deily </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography variant="h6">
                      Convenio "Borrador" PPS02:
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="p">Duque Conde</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography variant="h6">
                      Acta de Compromiso PPS03-1:
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="p">Duque Conde</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography variant="h6">
                      Presentacion Plan de trabajo PPS04:
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="p">29/04/2000</Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Grid>
        </Grid>
      </TabPanel>

      {/* AVANCES */}
      <TabPanel value={value} index={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Typography variant="h6">
                      Informe parcial 1 PPS06:{" "}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="p">Danna Deily </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography variant="h6">
                      Informe parcial 2 PPS06:
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="p">Duque Conde</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography variant="h6">Informe final PPS08:</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="p">29/04/2000</Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Grid>
        </Grid>
      </TabPanel>

      {/* DOCUMENTOS FINALES */}
      <TabPanel value={value} index={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Typography variant="h6">
                      Solicitud de sustentacion informe final PPS08-1:
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="p">29/04/2000</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography variant="h6">
                      Acta de finalizacion por parte de la empresa PPS08-2:
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="p">29/04/2000</Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Grid>
        </Grid>
      </TabPanel>
    </div>
  );
}
