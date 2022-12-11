import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import conexionAxios from "../../config/axios";
import { makeStyles } from "@material-ui/core/styles";
import MUIDataTable from "mui-datatables";
import InfoIcon from "@material-ui/icons/Info";
import Container from '@material-ui/core/Container';
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
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
  Typography,
} from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import Dialog from "@material-ui/core/Dialog";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import DialogContentText from '@material-ui/core/DialogContentText';

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

function EvaluarPasante() {
  const classes = useStyles();
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

  const seleccionarpasantes = (pasantes, caso) => {
    
    setpasantesSeleccionada(pasantes);
    abrirCerrarModalEvaluar();
  };
  
  const [pasantesSeleccionada, setpasantesSeleccionada] = useState({
    idusuario: "",
  });

  //----------------------MODAL-----------------------------------
  
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));


  const [modalEvaluar, setModalEvaluar] = useState(false);

  const abrirCerrarModalEvaluar = () => {
    setModalEvaluar(!modalEvaluar);
  };

  
  
  const bodyEvaluar = (
    <div >
      <Dialog
       fullScreen={fullScreen}
       open={modalEvaluar}
       onClose={abrirCerrarModalEvaluar}
       aria-labelledby="responsive-dialog-title">
      <DialogTitle id="form-dialog-title">EVALUAR</DialogTitle>
      <div className={styles.root}>
      
          <DialogContentText>
          Evaluación  del Informe Final y sustentación 

          </DialogContentText>
          <DialogContentText>
          El rango de valoracion de cada indicador es de 0-5  
          
          </DialogContentText>
        
      <form className={classes.form}  >
          <Grid container spacing={2}>
           
            <Grid item xs={12}>
            <Typography>Cumplimiento de los objetivos propuestos:</Typography>
              <TextField
                
                variant="outlined"
                required
                type="number"
                fullWidth
      
              
              />
            </Grid>

            <Grid item xs={12}>
            <Typography>Calidad de los entregables (hitos) desarrollados durante la pasantía:</Typography>
              <TextField
                
                variant="outlined"
                required
                type="number"
                fullWidth
              
              />
            </Grid>
            
            <Grid item xs={12}>
            <Typography>Sustentación de las actividades desarrolladas en la pasantía:</Typography>
              <TextField
             
                variant="outlined"
                required
                type="number"
                fullWidth
               
              />
            </Grid>
            <Grid item xs={12}>
            <Typography>Presentación documento – con el desarrollo del informe parcial :</Typography>
              <TextField

                variant="outlined"
                required
                type="number"
                fullWidth

              />
            </Grid>
          </Grid>
          <br></br>
          <Button
            type="submit"
            
            variant="contained"
            color="primary"
            className={classes.submit}
            
          >
            Enviar
          </Button>
        </form>



        <DialogActions>
          
          <Button onClick={() => abrirCerrarModalEvaluar()}>Cancelar</Button>
        </DialogActions>

      </div>
      </Dialog>
    </div>
  );


  const columns = [
    {
      name: "Id del estudiante",
      options: {

        display:false,
      },
    },
    {
      name: "Nombre del estudiante",
      options: {},
    },
   
    {
      name: "Evaluar",
    },
  ];

  const row = [];
  pasantes.map((pasante) =>
    row.push([pasante.idpasante,
      pasante.usuario.nombres+ " "+ pasante.usuario.apellidos ,
      <Button 
        className={styles.iconos}
        onClick={() => seleccionarpasantes(pasantes, "Editar")}
        color="primary"
        variant="outlined"
      >EVALUAR</Button>,
    ])
  );
  return (
    <div className="App">
      <br></br>
     
      <Container maxWidth="lg">
      <MUIDataTable
        title={"PASANTES ASIGNADOS"}
        data={row}
        columns={columns}
        options={options}

        

      />
      
      <Modal open={modalEvaluar} onClose={abrirCerrarModalEvaluar}>
        {bodyEvaluar}
      </Modal>
      
      </Container>
    </div>
  );
}

export default EvaluarPasante;
