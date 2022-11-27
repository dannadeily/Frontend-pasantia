import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

function Documento(props) {
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

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#159ED6",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(nombreEmpresa, nombreTutor) {
  return { nombreEmpresa, nombreTutor };
}

const rows = [createData("Frozen yoghurt", "Luis Perez")];

// tabla de la evaluacion de los jurados

const StyledTableCellE = withStyles((theme) => ({
  head: {
    backgroundColor: "#5050FF",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

function createDataD(documento, estado, observacion) {
  return { documento, estado, observacion };
}
const rowsDoc = [
  createDataD("Plan de trabajo", "Aprobado"),
  createDataD("Avance 1", "pendiente", "faltan fechas"),
  createDataD("Avance 2", "rechazado", "faltan actividades"),
  createDataD("Informe Final", "aprobado"),
];
function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

const invoiceTotal = 0;

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  table: {
    minWidth: 700,
  },
  appbar: {
    backgroundColor: "#159ED6",
  },
  tabPanel: {
    backgroundColor: "#D5D8D8",
  },
});

export default function Evaluacion(params) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container fixed>
      <TableContainer component={Paper}>
        <Typography variant="h6">
          Documentos aprobados por pate de los jurados al estudiante ""
        </Typography>
        <br></br>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell component="th" scope="row">
                Jurado 1
              </StyledTableCell>
              <StyledTableCell>Jurado 2</StyledTableCell>
              <StyledTableCell>Jurado 3</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.nombreEmpresa}>
                <StyledTableCell component="th" scope="row">
                  {row.nombreEmpresa}
                </StyledTableCell>
                <StyledTableCell>{row.nombreTutor}</StyledTableCell>
                <StyledTableCell>{row.nombreTutor}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br></br>

      <AppBar className={classes.appbar} position="static">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab label="Jurado 1" {...a11yProps(0)} />
          <LinkTab label="Jurado 2" {...a11yProps(1)} />
          <LinkTab label="Jurado 3" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel className={classes.tabPanel} value={value} index={0}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="spanning table">
            <TableHead>
              <TableRow>
                <StyledTableCellE>Documentos</StyledTableCellE>
                <StyledTableCellE align="right">Estado</StyledTableCellE>
                <StyledTableCellE align="right">Observaciones</StyledTableCellE>
              </TableRow>
            </TableHead>
            <TableBody>
              {rowsDoc.map((rowsDoc) => (
                <TableRow>
                  <TableCell>{rowsDoc.documento}</TableCell>
                  <TableCell align="right">{rowsDoc.estado}</TableCell>
                  <TableCell align="right">{rowsDoc.observacion}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </TabPanel>
      <TabPanel className={classes.tabPanel} value={value} index={1}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="spanning table">
            <TableHead>
              <TableRow>
                <StyledTableCellE>Documentos</StyledTableCellE>
                <StyledTableCellE align="right">Estado</StyledTableCellE>
                <StyledTableCellE align="right">Observaciones</StyledTableCellE>
              </TableRow>
            </TableHead>
            <TableBody>
              {rowsDoc.map((rowsDoc) => (
                <TableRow>
                  <TableCell>{rowsDoc.documento}</TableCell>
                  <TableCell align="right">{rowsDoc.estado}</TableCell>
                  <TableCell align="right">{rowsDoc.observacion}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </TabPanel>
      <TabPanel className={classes.tabPanel} value={value} index={2}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="spanning table">
            <TableHead>
              <TableRow>
                <StyledTableCellE>Documentos</StyledTableCellE>
                <StyledTableCellE align="right">Estado</StyledTableCellE>
                <StyledTableCellE align="right">Observaciones</StyledTableCellE>
              </TableRow>
            </TableHead>
            <TableBody>
              {rowsDoc.map((rowsDoc) => (
                <TableRow>
                  <TableCell>{rowsDoc.documento}</TableCell>
                  <TableCell align="right">{rowsDoc.estado}</TableCell>
                  <TableCell align="right">{rowsDoc.observacion}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </TabPanel>
    </Container>
  );
}
