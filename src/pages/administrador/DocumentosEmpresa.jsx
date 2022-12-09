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
import Checkbox from '@material-ui/core/Checkbox';

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

function DocumentosEmpresa() {
    const styles = useStyles();


    //-----------------tabla---------------------

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
 //-------------------------------------------------------

  
  const [data, setData] = useState([]);
  
  const peticionGet = async () => {
    
    await conexionAxios.get("/empresasinactivas").then((response) => {
      setData(response.data.empresa);
    });
  };




  useEffect(async () => {
    await peticionGet();
  }, []);






   //----------checkbox-----------

   const [checked, setChecked] = React.useState(true);

   const handleChange = (event) => {
     setChecked(event.target.checked);
   };
   //----------------------------


  const columns = [
    {
      name: "documento",
      label: "Documento",
      options: {
        filter: false,
        sort: true,
    
        
      },
    },
    {
        name: "formato",
        label: "Formato",
      
      },
    {
      name: "visualizado",
      label: "Visualizado",
    
    },
   
  ];

  const row=[];
    data.map((empresa) => (
       row.push( ["empresa.nombre", "empresa.nombre",<Checkbox
        defaultChecked
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      ]
)))


  return (
    <div className="App">
      <MUIDataTable title={"DOCUMENTOS QUE PUEDE VER LA EMPRESA"} data={row} columns={columns} options={options} />

    </div>
  );
}

export default DocumentosEmpresa;
