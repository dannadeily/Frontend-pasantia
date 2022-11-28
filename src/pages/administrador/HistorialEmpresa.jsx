import React, { useState,useEffect } from "react";
import ReactDOM from "react-dom";
import MUIDataTable from "mui-datatables";
import InfoIcon from "@mui/icons-material/Info";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import conexionAxios from "../../config/axios";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function HistorialEmpresa() {
  const [responsive, setResponsive] = useState("standard");
  const [tableBodyHeight, setTableBodyHeight] = useState("400px");
  const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState("");
  const [transitionTime, setTransitionTime] = useState(300);
  const [selectableRows, setSelectableRows] = useState("none");

  const [empresas, setData] = useState([]);
  const peticionGet = async () => {
    await conexionAxios.get("/empresasactivas").then((response) => {
      setData(response.data.empresa);
    });
  };

  useEffect(async () => {
    await peticionGet();
  }, []);

  const columns = [
    {
      name: "Nombre de la empresa",
    },
    {
      name: "Razón social",
    },
    {
      name: "Informacion",

      options: {
        customBodyRenderLite: (dataIndex, rowIndex) => {
          return (
            <button
              onClick={() =>
                window.alert(
                  `Clicked "Edit" for row ${rowIndex} with dataIndex of ${dataIndex}`
                )
              }
            >
              <InfoIcon />
            </button>
          );
        },
      },
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

  const data = [];
  empresas.map( empresa=>{
    data.push(Object.values(empresa))
  })
  

  return (
    <>
      <MUIDataTable
        title={"Historial Empresas"}
        data={data}
        columns={columns}
        options={options}
      />
    </>
  );
}

export default HistorialEmpresa;
