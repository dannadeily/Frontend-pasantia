import conexionAxios from "../../config/axios";
import React, { useEffect, useState } from "react";
// import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import MUIDataTable from "mui-datatables";

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

function CargarConvenio() {

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
  const [data, setData] = useState([]);
  const [modalEditar, setModalEditar] = useState(false);

  const [empresaSeleccionada, setEmpresaSeleccionada] = useState({
    idempresa: "",
  });
  const [archivo, guardarArchivo] = useState("");

  const peticionGet = async () => {
    await conexionAxios.get("/empresasinactivas").then((response) => {
      setData(response.data.empresa);
    });
  };

  const peticionPut = async () => {
    const formData = new FormData();
    formData.append("convenio", archivo);
    formData.append("idempresa", empresaSeleccionada.idempresa);
    await conexionAxios
      .put("cargarconvenio/" + empresaSeleccionada.idempresa, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        var dataNueva = data;
        setData(dataNueva);
        abrirCerrarModalEditar();
      });
  };

  const abrirCerrarModalEditar = () => {
    setModalEditar(!modalEditar);
  };

  const seleccionarEmpresa = (empresa, caso) => {
    setEmpresaSeleccionada(empresa);
    abrirCerrarModalEditar();
  };

  useEffect(async () => {
    await peticionGet();
  }, []);

  const leerArchivo = (e) => {
    guardarArchivo(e.target.files[0]);
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
            onChange={leerArchivo}
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
          <Button color="primary" onClick={() => peticionPut()}>
            Subir
          </Button>
          <Button onClick={() => abrirCerrarModalEditar()}>Cancelar</Button>
        </DialogActions>
      </div>
    </div>
  );

  const columns = [
    {
      name: "idEmpresa",
      label: "IdEmpresa",
      options: {
        filter: false,
        sort: true,
        display: false,
        
      },
    },
    {
      name: "nombre",
      label: "Nombre",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "empresa",
      label: "Empresa",
      options: {
        filter: true,
        sort: true,
      },
    },

    {
      name: "Cargar convenio",
    },
  ];

  const row=[];
    data.map((empresa) => (
       row.push( [empresa.idempresa,empresa.nombre,empresa.razon_social,<PublishIcon
        className={styles.iconos}
        onClick={() => seleccionarEmpresa(empresa, "Editar")}
      />
      ]
)))


  return (
    <div className="App">
      <MUIDataTable title={"CARGAR CONVENIOS"} data={row} columns={columns} options={options} />

      <Modal open={modalEditar} onClose={abrirCerrarModalEditar}>
        {bodyEditar}
      </Modal>
    </div>
  );
}

export default CargarConvenio;
