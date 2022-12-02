import React, { Component ,useState} from "react";
import { Link } from "react-router-dom";
import conexionAxios from "../../config/axios";
import { makeStyles } from "@material-ui/core/styles";
import MUIDataTable from "mui-datatables";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import {
  Modal,
  Button,
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

function AsignarJurado() {

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
  
  const abrirCerrarModalEditar = () => {
    setModalEditar(!modalEditar);
  };

  

  

  const bodyEditar = (
    <div className={styles.modal}>
      <DialogTitle id="form-dialog-title">Cargar convenio</DialogTitle>
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
          <Button onClick={() => abrirCerrarModalEditar()}>Cancelar</Button>
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
      name: "jurado1",
      label: "Jurado 1",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "jurado2",
      label: "Jurado 2",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "jurado3",
      label: "Jurado 3",
      options: {
        filter: true,
        sort: true,
      },
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
      <MUIDataTable title={"ASIGNAR JURADO "} data={row} columns={columns} options={options} />

      <Modal open={modalEditar} onClose={abrirCerrarModalEditar}>
        {bodyEditar}
      </Modal>
    </div>
  );
}

export default AsignarJurado;