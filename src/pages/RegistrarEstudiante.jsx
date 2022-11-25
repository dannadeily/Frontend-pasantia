import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import conexionAxios from "../config/axios";
import {
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Select,
} from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import Box from "@material-ui/core/Box";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { Alert, AlertTitle } from "@material-ui/lab";
import { data } from "autoprefixer";
import { useFormik } from "formik";
import * as Yup from "yup";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    backgroundColor: "#dd4b39",
    color: "#FFFFFF",
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 190,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function RegistrarEstudiante() {
  const [tiposDocumentos, listaTiposDocumentos] = useState([]);

  const consultarTiposDocumentos = async () => {
    const tiposDocumentosConsulta = await conexionAxios.get("/tipoDocumento");
    //volovar en el state
    listaTiposDocumentos(tiposDocumentosConsulta.data.tiposDocumentos);
  };

  useEffect(() => {
    consultarTiposDocumentos();
  }, []);

  // cliente = state, guardarcliente = funcion para guardar el state
  // const [estudiante, guardarEstudiante] = useState({
  //   nombres: "",
  //   apellidos: "",
  //   numeroIdentificacion: "",
  //   idTipoDocumento: "",
  //   codigo: "",
  //   email: "",
  //   password: "",
  //   telefono: "",
  //   semestre: "",
  //   direccion: "",
  // });

  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [numeroIdentificacion, setNumeroIdentificacion] = useState("");
  const [idTipoDocumento, setDdTipoDocumento] = useState("");
  const [codigo, setCodigo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [telefono, setTelefono] = useState("");
  const [semestre, setSemestre] = useState("");
  const [direccion, setDireccion] = useState("");
  //--------------------Alerta--------------------------

  const [alerta, setAlerta] = useState({});
  const { msg } = alerta;
  //-----------------------------------------------
  // leer los datos del formulario
  // const actualizarState = (e) => {
  //   // Almacenar lo que el usuario escribe en el state
  //   guardarEstudiante({
  //     // obtener una copia del state actual
  //     ...estudiante,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  //formulario con validacion con formik ------------------------------

  const formik = useFormik({
    initialValues: {
      nombres: "",
      apellidos: "",
      numeroIdentificacion: "",
      idTipoDocumento: "",
      codigo: "",
      email: "",
      password: "",
      telefono: "",
      semestre: "",
      direccion: "",
    },
    validationSchema: Yup.object({
      nombres: Yup.string().required("Campo Obligatorio"),
      apellidos: Yup.string().required("Campo Obligatorio"),
      numeroIdentificacion: Yup.string().required("Campo Obligatorio"),
      idTipoDocumento: Yup.string().required("Campo Obligatorio"),
      codigo: Yup.string().required("Campo Obligatorio").length(7,"El codigo debe contener 7 digitos"),
      email: Yup.string().required("Campo Obligatorio"),
      password: Yup.string().required("Campo Obligatorio").min(8,"La contraseña debe tener al menos 8 caracteres"),
      telefono: Yup.string().required("Campo Obligatorio"),
      semestre: Yup.string().required("Campo Obligatorio"),
      direccion: Yup.string().required("Campo Obligatorio"),
    }),
    onSubmit: (valores) => {
      console.log(valores);
    },
  });

  const agregarEstudiante = (e) => {
    e.preventDefault();

    if (
      [
        nombres,
        apellidos,
        numeroIdentificacion,
        idTipoDocumento,
        codigo,
        email,
        password,
        telefono,
        semestre,
        direccion,
      ].includes("")
    ) {
      setAlerta({
        msg: <Alert severity="error">todos los campos son abligatorios</Alert>,
      });
      return;
    }
    setAlerta({});
    // enviar petición

    conexionAxios
      .post("/user", {
        nombres,
        apellidos,
        numeroIdentificacion,
        idTipoDocumento,
        codigo,
        email,
        password,
        telefono,
        semestre,
        direccion,
      })
      .then((res) => {
        // validar si hay errores de mongo
        if (res.data.status === 201) {
          setAlerta({
            msg: <Alert severity="success">registrado correctamente</Alert>,
          });
        } else {
          setAlerta({
            msg: <Alert severity="error">{res.data.message}</Alert>,
          });
        }
        return;
        // Redireccionar
        // history.push('/');
      });
  };

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        className={classes.paper}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>

        <Typography component="h1" variant="h5" align="center">
          REGISTRARSE COMO ESTUDIANTE
        </Typography>
        {msg && <Alerta alerta={alerta} />}
        <CssBaseline></CssBaseline>
        <form
          className={classes.form}
          noValidate
          onSubmit={formik.handleSubmit}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <FormControl>
                <InputLabel htmlFor="nombre">Nombres</InputLabel>
                <Input
                  name="nombres"
                  id="nombre"
                  type="TextField"
                  value={formik.values.nombres}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                ></Input>

                {formik.touched.nombres && formik.errors.nombres ? (
                  <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    {formik.errors.nombres}
                  </Alert>
                ) : null}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl>
                <InputLabel htmlFor="apellido">Apellidos</InputLabel>
                <Input
                  id="apellido"
                  name="apellidos"
                  type="TextField"
                  aria-describedby="email-helper"
                  value={formik.values.apellidos}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                ></Input>

                {formik.touched.apellidos && formik.errors.apellidos ? (
                  <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    {formik.errors.apellidos}
                  </Alert>
                ) : null}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl>
                <InputLabel htmlFor="cedula">Número documento</InputLabel>
                <Input
                  name="numeroIdentificacion"
                  id="cedula"
                  type="number"
                  aria-describedby="email-helper"
                  value={formik.values.numeroIdentificacion}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                ></Input>
                  {formik.touched.numeroIdentificacion && formik.errors.numeroIdentificacion ? (
                  <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    {formik.errors.numeroIdentificacion}
                  </Alert>
                ) : null}
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl className={classes.formControl}>
                <InputLabel>Tipo de documento</InputLabel>
                <Select
                  name="idTipoDocumento"
                  value={formik.values.idTipoDocumento}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  {tiposDocumentos.map((tipoDocumento) => {
                    return (
                      <MenuItem value={tipoDocumento.idtipo_documento}>
                        {tipoDocumento.tipo_documento}
                      </MenuItem>
                    );
                  })}
                </Select>
                {formik.touched.idTipoDocumento && formik.errors.idTipoDocumento ? (
                  <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    {formik.errors.idTipoDocumento}
                  </Alert>
                ) : null}
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl>
                <InputLabel htmlFor="direccion">Direccion</InputLabel>
                <Input
                  id="direccion"
                  name="direccion"
                  type="TextField"
                  value={formik.values.direccion}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                ></Input>
                  {formik.touched.direccion && formik.errors.direccion ? (
                  <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    {formik.errors.direccion}
                  </Alert>
                ) : null}
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl>
                <InputLabel htmlFor="telefono">Telefono</InputLabel>
                <Input
                  name="telefono"
                  id="telefono"
                  type="number"
                  value={formik.values.telefono}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                ></Input>
                  {formik.touched.telefono && formik.errors.telefono ? (
                  <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    {formik.errors.telefono}
                  </Alert>
                ) : null}
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl>
                <InputLabel htmlFor="email">Email</InputLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  aria-describedby="email-helper"
                ></Input>
                <FormHelperText id="email-helper">
                  email institucional
                </FormHelperText>
                {formik.touched.email && formik.errors.email ? (
                  <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    {formik.errors.email}
                  </Alert>
                ) : null}
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl>
                <InputLabel htmlFor="codigo">Codigo estudiantil</InputLabel>
                <Input
                  name="codigo"
                  id="codigo"
                  type="number"
                  value={formik.values.codigo}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                ></Input>
                  {formik.touched.codigo && formik.errors.codigo ? (
                  <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    {formik.errors.codigo}
                  </Alert>
                ) : null}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl>
                <InputLabel htmlFor="semestre">Semestre</InputLabel>
                <Input
                  name="semestre"
                  id="semestre"
                  type="number"
                  value={formik.values.semestre}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                ></Input>
                  {formik.touched.semestre && formik.errors.semestre ? (
                  <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    {formik.errors.semestre}
                  </Alert>
                ) : null}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl>
                <InputLabel htmlFor="contraseña">contraseña</InputLabel>
                <Input
                  name="password"
                  id="contraseña"
                  type="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                ></Input>
                  {formik.touched.password && formik.errors.password ? (
                  <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    {formik.errors.password}
                  </Alert>
                ) : null}
              </FormControl>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Registrarse
          </Button>

          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to="/">Iniciar Sesion</Link>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
}
