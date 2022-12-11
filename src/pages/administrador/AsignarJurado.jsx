import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import conexionAxios from "../../config/axios";
import { makeStyles } from "@material-ui/core/styles";
import MUIDataTable from "mui-datatables";
import InfoIcon from "@material-ui/icons/Info";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import EditIcon from '@material-ui/icons/Edit';
import {
  Table,
  TableContainer,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  Modal,
  Button,
  TextField,
  Typography,
} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  modal: {
    position: "absolute",
    width: 1000,
    height: 500,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  iconos: {
    cursor: "pointer",
  },
  inputMaterial: {
    width: "100%",
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
}));

function AsignarJurado() {
  const [responsive, setResponsive] = useState("standard");
  const [tableBodyHeight, setTableBodyHeight] = useState("400px");
  const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState("");
  const [transitionTime, setTransitionTime] = useState(300);
  const [selectableRows, setSelectableRows] = useState("none");

  const options = {
    filter: true,
    filterType: "dropdown",
    responsive,
    tableBodyHeight,
    tableBodyMaxHeight,
    draggableColumns: {
      enabled: true,
      transitionTime,
    },
    selectableRows: selectableRows,
  };

  const styles = useStyles();

  const [pasantes, setData] = useState([]);
  const peticionGet = async () => {
    await conexionAxios.get("/pasantes").then((response) => {
      setData(response.data.pasantes);
    });
  };

  useEffect(async () => {
    await peticionGet();
  }, []);

  //-----------------------------MODAL---------------------------------------

  const [modalEditar, setModalEditar] = useState(false);

  const abrirCerrarModalEditar = () => {
    setModalEditar(!modalEditar);
  };

  const bodyEditar = (
    <div className={styles.modal}>
      <div className={styles.root}>
        <DialogContent>

          <Typography>

            Asigne los 3 jurados del estudiante:
          </Typography>
          <br></br>
          <Grid item xs={12}>
          <InputLabel >
                  Asignar jurado 1 : 
          </InputLabel>
          <FormControl variant="outlined" fullWidth>
            
                <Select
                  
                  name="jurado"
                  native
                  label="jurado"
                >
                  
                </Select>
              </FormControl>

              </Grid>
              <br></br>
              <Grid item xs={12}>
          <InputLabel >
                  Asignar jurado 2 : 
          </InputLabel>
          <FormControl variant="outlined" fullWidth>
            
                <Select
                  
                  name="jurado"
                  native
                  label="jurado"
                >
                  
                </Select>
              </FormControl>

              </Grid>
              <br></br>
              <Grid item xs={12}>
          <InputLabel >
                  Asignar jurado 3 : 
          </InputLabel>
          <FormControl variant="outlined" fullWidth>
            
                <Select
                  
                  name="jurado"
                  native
                  label="jurado"
                >
                  
                </Select>
              </FormControl>

              </Grid>
          
        </DialogContent>
      </div>
      <br />
      <br />
      <div align="right">
        <DialogActions>
          <Button color="primary" onClick={() => peticionPut()}>
            Guardar
          </Button>
          <Button onClick={() => abrirCerrarModalEditar()}>Cancelar</Button>
        </DialogActions>
      </div>
    </div>
  );
//------------------------------------------------------------------------------------


const seleccionarpasantes = (pasantes, caso) => {
  setpasantesSeleccionada(pasantes);
  abrirCerrarModalEditar();
};

const [pasantesSeleccionada, setpasantesSeleccionada] = useState({
  idusuario: "",
});

  const columns = [
    {
      name: "Id del estudiante",
      options: {
        display:false,
      },
    },
    {
      name: "Nombre del estudiante",
      options: {},
    },
    {
      name: "Empresa",
      options: {},
    },
    {
      name: "Asignar jurado",
    },
  ];

  const row = [];
  pasantes.map((pasante) =>
    row.push([pasante.idpasante,
      pasante.usuario.nombres + " " + pasante.usuario.apellidos,
      pasante.empresa.nombre,

      <EditIcon
        className={styles.iconos}
        onClick={() => seleccionarpasantes(pasantes, "Editar")}
      />
    ])
  );

  return (
    <div className="App">
      <MUIDataTable
        title={"ASIGNAR JURADO"}
        data={row}
        columns={columns}
        options={options}
      />

      <Modal open={modalEditar} onClose={abrirCerrarModalEditar}>
        {bodyEditar}
      </Modal>
    </div>
  );
}

export default AsignarJurado;
