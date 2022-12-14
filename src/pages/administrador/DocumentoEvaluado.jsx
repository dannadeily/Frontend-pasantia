import React, { useState , useEffect } from "react";
import MUIDataTable from "mui-datatables";
import Button from "@material-ui/core/Button";
import conexionAxios from "../../config/axios";
import { Link } from "react-router-dom";

function DocumentoEvaluado() {
  const [responsive, setResponsive] = useState("standard");
  const [tableBodyHeight, setTableBodyHeight] = useState("400px");
  const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState("");
  const [transitionTime, setTransitionTime] = useState(300);
  const [selectableRows, setSelectableRows] = useState("none");


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
    },

    {
      name: "Informacion",

     
    },
  ];

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

  const row = [];
  pasantes.map((pasante) =>
    row.push([
      pasante.usuario.nombres+ " "+ pasante.usuario.apellidos ,
    
      <Link
        to={`/Administrador/InfoEstudiante/${pasante.idpasante}`}
        className="btn btn-primary"
      >
         <Button variant="contained" color="primary">
              <Link to="/Administrador/Documento">Ver evaluacion</Link>
            </Button>
      </Link>,
    ])
  );

  return (
    <>
      <MUIDataTable
        title={"Documentos evaluados"}
        data={row}
        columns={columns}
        options={options}
      />
      <br></br>
    </>
  );
}

export default DocumentoEvaluado;
