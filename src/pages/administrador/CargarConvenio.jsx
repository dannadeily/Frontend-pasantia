import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import MUIDataTable from "mui-datatables";
import InfoIcon from "@mui/icons-material/Info";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import conexionAxios from "../../config/axios";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import IconButton from "@material-ui/core/IconButton";

function CargarConvenio() {
  const [responsive, setResponsive] = useState("horizontal");
  const [tableBodyHeight, setTableBodyHeight] = useState("400px");
  const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState("");
  const [transitionTime, setTransitionTime] = useState(300);
  const [selectableRows, setSelectableRows] = useState("none");

  //Lista de empresas
  const [empresas, listaEmpresa] = useState([]);

  const consultarEmpresas = async () => {
    const empresas = await conexionAxios.get("/empresasinactivas");
    //volovar en el state
    listaEmpresa(empresas.data.empresa);
  };

  

  useEffect(() => {
    consultarEmpresas();
  }, []);

  const columns = [
    {
      name: "Nombre de la empresa",
    },
    {
      name: "Razón social",
    },

    {
      name: "Cargar",

      options: {
        customBodyRenderLite: () => {
          return (
            <div></div>
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
  empresas.map((empresa) => {
    data.push(Object.values(empresa));
  });

  console.log(Object.values(empresas));

  return (
    <>
      <MUIDataTable
        title={"Cargar convenios"}
        data={Object.values(data)}
        columns={columns}
        options={options}
      />
    </>
  );
}

export default CargarConvenio;
