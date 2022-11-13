import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from '@material-ui/core/Typography';
import IconButton from "@mui/material/IconButton";
import InfoIcon from '@mui/icons-material/Info';
import EditIcon from '@mui/icons-material/Edit';

function createData(nombreEmpresa, convenio) {
  return {nombreEmpresa, convenio};
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
     <Typography>HISTORIAL DE ESTUDIANTES</Typography>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Empresa</TableCell>
            <TableCell align="right">convenio</TableCell>
            <TableCell align="right">accion</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.nombreEmpresa}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.nombreEmpresa}
              </TableCell>
              <TableCell align="right">{row.convenio}</TableCell>
              <TableCell align="right">
              <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="label"
                >
                
                  <EditIcon />
                  </IconButton>
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="label"
                >
                
                  <InfoIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
