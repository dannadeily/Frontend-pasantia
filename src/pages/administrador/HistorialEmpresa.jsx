import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import conexionAxios from "../../config/axios";
import { makeStyles } from "@material-ui/core/styles";
import MUIDataTable from "mui-datatables";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { Modal, Button } from "@material-ui/core";
import { Edit } from "@material-ui/icons";
import InfoIcon from "@material-ui/icons/Info";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

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

function HistorialEmpresa() {
  const [responsive, setResponsive] = useState("standard");
  const [tableBodyHeight, setTableBodyHeight] = useState("400px");
  const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState("");
  const [transitionTime, setTransitionTime] = useState(300);
  const [selectableRows, setSelectableRows] = useState("none");

  const [modalInformacion, setModalEditar] = useState(false);

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

  const [empresaSeleccionada, setEmpresaSeleccionada] = useState({
    idempresa: "",
  });

  const [empresas, setData] = useState([]);
  const peticionGet = async () => {
    await conexionAxios.get("/empresasactivas").then((response) => {
      setData(response.data.empresa);
    });
  };

  useEffect(async () => {
    await peticionGet();
  }, []);

  const bodyInformacion = (
    <div>
      <Link
        to={
          "/Administrador/HistorialEmpresa/InformacionEmpresa" +
          empresaSeleccionada.idempresa
        }
        className="btn btn-primary"
      >
        Edit
      </Link>
      &nbsp;
    </div>
  );

  const columns = [
    {
      name: "idempresa",
      label: "ID de la empresa",
      options: {
        filter: false,
        sort: true,
        display: false,
      },
    },
    {
      name: "nombreEmpresa",
      label: "Nombre de la empresa",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "razonSocial",
      label: "Razon Social",
      name: "nombreEmpresa",
      label: "Nombre de la empresa",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "informacion",
      label: "Informacion",
    },
  ];

  const row = [];
  empresas.map((empresa) =>
    row.push([
      empresa.idempresa,
      empresa.nombre,
      empresa.razon_social,
      <Link
        to={
          `/Administrador/HistorialEmpresa/InformacionEmpresa/${empresa.idempresa}`
        }
        className="btn btn-primary"
      >
        <InfoIcon />
      </Link>,
    ])
  );

  return (
    <div className="App">
      <MUIDataTable
        title={"HISTORIAL DE LAS EMPRESA"}
        data={row}
        columns={columns}
        options={options}
      />
    </div>
  );
}

export default HistorialEmpresa;
