import conexionAxios from "../../config/axios";
import React, { useEffect, useState } from "react";
// import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
// import Button from '@material-ui/core/Button';
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";

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
  const styles = useStyles();
  const [data, setData] = useState([]);
  const [modalEditar, setModalEditar] = useState(false);

  const [empresaSeleccionada, setEmpresaSeleccionada] = useState({
    idempresa: "",
  });
  const [archivo, guardarArchivo] = useState('');

  const peticionGet = async () => {
    await conexionAxios.get("/empresasinactivas").then((response) => {
      setData(response.data.empresa);
    });
  };

  const peticionPut = async () => {
    const formData = new FormData();
    formData.append('convenio', archivo);
    formData.append('idempresa', empresaSeleccionada.idempresa)
    await conexionAxios
      .put(
        "cargarconvenio/" + empresaSeleccionada.idempresa,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
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

  const leerArchivo = e => {
    guardarArchivo( e.target.files[0] );
}

  const bodyEditar = (
    <div className={styles.modal}>
        <h3>Añador convenio</h3>
        <div className={styles.root}>
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
              Upload
            </Button>
          </label>
        </div>
        <br />
        <br />
        <div align="right">
          <Button color="primary"  onClick={() => peticionPut()}>
            Editar
          </Button>
          <Button onClick={() => abrirCerrarModalEditar()}>Cancelar</Button>
        </div>

    </div>
  );

  return (
    <div className="App">
      <br />
      <br />
      <br />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Empresa</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {data.map((empresa) => (
              <TableRow key={empresa.idempresa}>
                <TableCell>{empresa.nombre}</TableCell>
                <TableCell>{empresa.razon_social}</TableCell>
                <TableCell>
                  <Edit
                    className={styles.iconos}
                    onClick={() => seleccionarEmpresa(empresa, "Editar")}
                  />
                  &nbsp;&nbsp;&nbsp;
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal open={modalEditar} onClose={abrirCerrarModalEditar}>
        {bodyEditar}
      </Modal>
    </div>
  );
}

export default CargarConvenio;
