import React, { Component, useState ,useEffect } from "react";
import conexionAxios from "../../config/axios";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import { Link, useParams } from "react-router-dom";
import VisibilityIcon from '@material-ui/icons/Visibility';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
export default function DatosPersonales() {
  const classes = useStyles();
  const {id}= useParams();

  const [empresa, setData] = useState([]);
  const peticionGet = async () => {
    await conexionAxios.get("/empresa/"+ id  ).then((response) => {
      setData(response.data.empresa);
    });
  };

  useEffect(async () => {
    await peticionGet();
  }, []);

  return (
    <div className={classes.root}>
      <Typography variant="h6">Informacion de la empresa </Typography>
      <br></br>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Typography variant="h6">Nombre de la empresa: </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="p"> {empresa.nombre} </Typography>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <Typography variant="h6">Nit:</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="p">{empresa.nit}</Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography variant="h6">Actividad: </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="p">c??cuta</Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography variant="h6">Sector: </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="p">Femenino</Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Typography variant="h6">Razon social: </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="p"> {empresa.razon_social} </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography variant="h6">Email:</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="p"> {empresa.email} </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography variant="h6">Telefono:</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="p"> {empresa.telefono} </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography variant="h6">Convenio:</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="p"> <a target={"_blank"} href={`http://localhost:4010/`+ empresa.convenio }> <VisibilityIcon/> </a> </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Grid>
      </Grid>
    </div>
  );
}

