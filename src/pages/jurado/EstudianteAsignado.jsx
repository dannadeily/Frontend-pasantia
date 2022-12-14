import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import conexionAxios from "../../config/axios";
import { makeStyles } from "@material-ui/core/styles";
import MUIDataTable from "mui-datatables";
import InfoIcon from "@material-ui/icons/Info";
import Button from "@material-ui/core/Button";
import Container from '@material-ui/core/Container';
import useAuth from "../../hooks/useAuth";

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

function EstudianteAsignado() {
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

  const { auth } = useAuth();
  const { usuario } = auth;


  const [pasantes, setData] = useState([]);
  const peticionGet = async () => {
    await conexionAxios.get("/getPasantesAsignados/"+usuario.idusuario ).then((response) => {
      setData(response.data);
    });
  };

  useEffect(async () => {
    await peticionGet();
  }, []);

  const columns = [
    {
      name: "Nombre del estudiante",
      options: {},
    },
    {
      name: "Empresa",
    },
    {
      name: "Fecha inicio de la pasantia",
    },
    {
      name: "Informacion",
    },
  ];

  const row = [];
  pasantes.map((pasante) =>
    row.push([
      pasante.pasante.usuario.nombres + " "+ pasante.pasante.usuario.apellidos ,
      pasante.pasante.empresa.nombre,
      pasante.createdAt.substring(0,10),
      <Link
        to={`/Jurado/InformacionEstudiante/${pasante.pasante.idpasante}`}
        className="btn btn-primary"
      >
        <InfoIcon />
      </Link>,
    ])
  );

  return (
    <div className="App">
      <Container maxWidth="lg">
      <br></br>
      <MUIDataTable
        title={"PASANTES ASIGNADOS"}
        data={row}
        columns={columns}
        options={options}

      /></Container>
    </div>
  );
}

export default EstudianteAsignado;
