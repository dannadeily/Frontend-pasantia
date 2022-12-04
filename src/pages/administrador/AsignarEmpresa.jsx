import React, { Component ,useState} from "react";
import { Link } from "react-router-dom";
import conexionAxios from "../../config/axios";
import { makeStyles } from "@material-ui/core/styles";
import MUIDataTable from "mui-datatables";

import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import ModalAsignarEmpresa from "../administrador/ModalAsignarEmpresa"
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
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
} from "@material-ui/core";
import { Edit } from "@material-ui/icons";
import PublishIcon from '@material-ui/icons/Publish';


const useStyles = makeStyles((theme) => ({
  modal: {
    position: "absolute",
    width: 400,
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

function AsignarEmpresa() {

  const [responsive, setResponsive] = useState("standard");
  const [tableBodyHeight, setTableBodyHeight] = useState("400px");
  const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState("");
  const [transitionTime, setTransitionTime] = useState(300);
  const [selectableRows, setSelectableRows] = useState("none");

  const [modalEditar, setModalEditar] = useState(false);

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
  
  const abrirCerrarModalAsignar = () => {
    setModalEditar(!modalEditar);
  };

  

  

  const bodyAsignarEmpresa = (
    <div className={styles.modal}>
      <DialogTitle id="form-dialog-title">Asignar empresa</DialogTitle>
      <div className={styles.root}>
        <DialogContent>
          <input
            name="convenio"
            accept=".pdf"
            className={styles.input}
            id="contained-button-file"
            multiple
            type="file"
            // onChange={leerArchivo}
          />
          <label htmlFor="contained-button-file">
            <Button variant="contained" color="primary" component="span">
              <CloudUploadIcon /> Cargar Documento
            </Button>
          </label>
        </DialogContent>
      </div>
      <br />
      <br />
      <div align="right">
        <DialogActions>
          <Button color="primary" >
            Subir
          </Button>
          <Button onClick={() => abrirCerrarModalAsignar()}>Cancelar</Button>
        </DialogActions>
      </div>
    </div>
  );

  const columns = [
    {
      name: "nombreEstudiante",
      label: "Nombre Estudiante",
      options: {
        filter: false,
        sort: true,
       
        
      },
    },
   
   

    {
      name: "Asignar empresa",
    },
  ];

  const row=[];
//     data.map((empresa) => (
//        row.push( [empresa.idempresa,empresa.nombre,empresa.razon_social,<PublishIcon
//         className={styles.iconos}
//         onClick={() => seleccionarEmpresa(empresa, "Editar")}
//       />
//       ]
// )))


  return (
    <div className="App">
      <MUIDataTable title={"ASIGNAR EMPRESA "} data={row} columns={columns} options={options} />

      <Modal open={modalEditar} onClose={abrirCerrarModalAsignar}>
        {bodyAsignarEmpresa}
      </Modal>
    </div>
  );
}

export default AsignarEmpresa;