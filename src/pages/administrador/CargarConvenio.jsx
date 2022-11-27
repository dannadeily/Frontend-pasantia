// import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom";
// import MUIDataTable from "mui-datatables";
// import InfoIcon from "@mui/icons-material/Info";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormHelperText from "@mui/material/FormHelperText";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
// import TextField from "@mui/material/TextField";
// import { DndProvider } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";
// import FileUploadIcon from "@mui/icons-material/FileUpload";
import conexionAxios from "../../config/axios";
// import Button from "@material-ui/core/Button";
// import { makeStyles } from "@material-ui/core/styles";
// import IconButton from "@material-ui/core/IconButton";

// function CargarConvenio() {
//   const [responsive, setResponsive] = useState("horizontal");
//   const [tableBodyHeight, setTableBodyHeight] = useState("400px");
//   const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState("");
//   const [transitionTime, setTransitionTime] = useState(300);
//   const [selectableRows, setSelectableRows] = useState("none");

//   //Lista de empresas
//   const [empresas, listaEmpresa] = useState([]);

//   const consultarEmpresas = async () => {
//     const empresas = await conexionAxios.get("/empresasinactivas");
//     //volovar en el state
//     listaEmpresa(empresas.data.empresa);
//   };

//   useEffect(() => {
//     consultarEmpresas();
//   }, []);

//   const options = {
//     filter: true,
//     filterType: "dropdown",
//     responsive,
//     tableBodyHeight,
//     tableBodyMaxHeight,
//     draggableColumns: {
//       enabled: true,
//       transitionTime,
//     },
//     selectableRows: selectableRows,
//   };

//   const data = [];
//   empresas.map((empresa) => {
//     data.push(Object.values(empresa));
//   });

//   console.log(Object.values(empresas));

//   const columns = [
//     {
//       name: "Nombre de la empresa",
//     },
//     {
//       name: "Razón social",
//     },

//     {
//       name: "Cargar",

//       options: {
//         customBodyRenderLite: () => {
//           return <div>

//           </div>;
//         },
//       },
//     },
//   ];

//   return (
//     <>
//       <MUIDataTable
//         title={"Cargar convenios"}
//         data={Object.values(data)}
//         columns={columns}
//         options={options}
//       />
//     </>
//   );
// }

// export default CargarConvenio;

import React, { useEffect, useState } from "react";
// import "./App.css";
// import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
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
}));

function CargarConvenio() {
  const styles = useStyles();
  const [data, setData] = useState([]);
  const [modalEditar, setModalEditar] = useState(false);

  const [empresaSeleccionada, setEmpresaSeleccionada] = useState({
    nombre: "",
    empresa: "",
    lanzamiento: "",
    unidades_vendidas: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmpresaSeleccionada((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(EmpresaSeleccionada);
  };

  const peticionGet = async () => {
    await conexionAxios.get("/empresasinactivas").then((response) => {
      setData(response.data.empresa);
    });
  };

  const peticionPut = async () => {
    await conexionAxios
      .put(baseUrl + consolaSeleccionada.id, consolaSeleccionada)
      .then((response) => {
        var dataNueva = data;
        dataNueva.map((consola) => {
          if (consolaSeleccionada.id === consola.id) {
            consola.nombre = consolaSeleccionada.nombre;
            consola.lanzamiento = consolaSeleccionada.lanzamiento;
            consola.empresa = consolaSeleccionada.empresa;
            consola.unidades_vendidas = consolaSeleccionada.unidades_vendidas;
          }
        });
        setData(dataNueva);
        abrirCerrarModalEditar();
      });
  };


  const abrirCerrarModalEditar = () => {
    setModalEditar(!modalEditar);
  };


  const seleccionarEmpresa = (empresa, caso) => {
    setEmpresaSeleccionada(empresa);
    caso === "Editar" ? abrirCerrarModalEditar() : abrirCerrarModalEliminar();
  };

  useEffect(async () => {
    await peticionGet();
  }, []);

  const bodyEditar = (
    <div className={styles.modal}>
      <h3>Editar Consola</h3>
      <TextField
        name="nombre"
        className={styles.inputMaterial}
        label="Nombre"
        onChange={handleChange}
        value={empresaSeleccionada && empresaSeleccionada.nombre}
      />
      <br />
      <TextField
        name="empresa"
        className={styles.inputMaterial}
        label="Empresa"
        onChange={handleChange}
        value={empresaSeleccionada && empresaSeleccionada.empresa}
      />
      <br />
      <TextField
        name="lanzamiento"
        className={styles.inputMaterial}
        label="Lanzamiento"
        onChange={handleChange}
        value={empresaSeleccionada && empresaSeleccionada.nombre}
      />
      <br />
      <TextField
        name="unidades_vendidas"
        className={styles.inputMaterial}
        label="Unidades Vendidas"
        onChange={handleChange}
        value={empresaSeleccionada && empresaSeleccionada.nombre}
      />
      <br />
      <br />
      <div align="right">
        <Button color="primary" onClick={() => peticionPut()}>
          Editar
        </Button>
        <Button onClick={() => abrirCerrarModalEditar()}>Cancelar</Button>
      </div>
    </div>
  );

  return (
    <div className="App">
      <br />
      <Button onClick={() => abrirCerrarModalInsertar()}>Insertar</Button>
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
            {data.map(empresa => (
              <TableRow key={empresa.id}>
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
