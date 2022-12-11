import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import conexionAxios from "../../config/axios";
import { makeStyles } from "@material-ui/core/styles";
import MUIDataTable from "mui-datatables";
import InfoIcon from "@material-ui/icons/Info";
import Button from "@material-ui/core/Button";

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

function EstudianteActivo() {
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
      pasante.usuario.nombres+ " "+ pasante.usuario.apellidos ,
      pasante.empresa.nombre,
      pasante.createdAt.substring(0,10),
      <Link
        to={`/Administrador/InfoEstudiante/${pasante.idpasante}`}
        className="btn btn-primary"
      >
        <InfoIcon />
      </Link>,
    ])
  );

  return (
    <div className="App">
      <MUIDataTable
        title={"ESTUDIANTES ACTIVOS EN EL SEMESTRE"}
        data={row}
        columns={columns}
        options={options}
      />
      <Button variant="contained" color="primary">
        <Link to="/Administrador/FinalizarPasantia">Finalizar pasantia</Link>
      </Button>
    </div>
  );
}

export default EstudianteActivo;
