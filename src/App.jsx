import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./index.css";
import HeaderInicio from "./components/Headerinicio";
//Administrador
import DrawerAdminsitrador from "./components/DrawerAdministrador";
import IniciarSesion from "./pages/IniciarSesion";
import RegistrarEstudiante from "./pages/RegistrarEstudiante";
import RegistrarEmpresa from "./pages/RegistrarEmpresa";
import EstudianteActivo from "./pages/administrador/EstudianteActivo";
import AsignarEmpresa from "./pages/administrador/AsignarEmpresa";
import AsignarJurado from "./pages/administrador/AsignarJurado";
import RecuperarContraseña from "./pages/RecuperarPassword";
import HistorialEstudiante from "./pages/administrador/HistorialEstudiante";
import CargarConvenio from "./pages/administrador/CargarConvenio";
import DocumentosEmpresa from "./pages/administrador/DocumentosEmpresa";
import HistorialEmpresa from "./pages/administrador/HistorialEmpresa";
import RegistrarJurado from "./pages/administrador/RegistrarJurado";
import DocumentoEvaluado from "./pages/administrador/DocumentoEvaluado";
import EstudianteEvaluado from "./pages/administrador/EstudianteEvaluado";
import HistorialJurado from "./pages/administrador/HistorialJurado";
import Evaluar from "./pages/administrador/Evaluar";
import HistorialCalificacion from "./pages/administrador/HistorialCalificacion";
import ReporteEstudiante from "./pages/administrador/ReporteEstudiante";
import ReporteEmpresa from "./pages/administrador/ReporteEmpresa";
//Estudiante
import DrawerEstudiante from "./components/DrawerEstudiante";
import InicioPracticas from "./pages/estudiante/InicioPracticas";
import DatosPersonales from "./pages/estudiante/DatosPersonales"
import CargarDocumentos from "./pages/estudiante/CargarDocumentos";
import CargarAvances from "./pages/estudiante/CargarAvances";
import DocumentoFinal from "./pages/estudiante/DocumentoFinal";
import Consulta from "./pages/estudiante/Consulta";
import RecuperarPassword from "./pages/RecuperarPassword"
function App() {


    return (
      <BrowserRouter>
       
            <Routes>
                <Route path="/" element={<HeaderInicio></HeaderInicio>}>
                    <Route index element={<IniciarSesion></IniciarSesion>} />
                    <Route path="/RegistrarEstudiante" element={<RegistrarEstudiante></RegistrarEstudiante>} />
                    <Route path="/RegistrarEmpresa" element={<RegistrarEmpresa></RegistrarEmpresa>} />
                    <Route path="/RecuperarPassword" element={<RecuperarPassword></RecuperarPassword>} />
                </Route>
  
                <Route path="/Administrador" element={<DrawerAdminsitrador />}>
                    <Route index element={<EstudianteActivo></EstudianteActivo>} />
                    <Route path="Administrador/AsignarEmpresa" element={<AsignarEmpresa></AsignarEmpresa>} />
                    <Route path="Administrador/AsignarJurado" element={<AsignarJurado></AsignarJurado>} />
                    <Route path="Administrador/HistorialEstudiante" element={<HistorialEstudiante></HistorialEstudiante>} />
                    <Route path="Administrador/CargarConvenio" element={<CargarConvenio></CargarConvenio>} />
                    <Route path="Administrador/DocumentosEmpresa" element={<DocumentosEmpresa></DocumentosEmpresa>} />
                    <Route path="Administrador/HistorialEmpresa" element={<HistorialEmpresa></HistorialEmpresa>} />
                    <Route path="Administrador/RegistrarJurado" element={<RegistrarJurado></RegistrarJurado>} />
                    <Route path="Administrador/DocumentoEvaluado" element={<DocumentoEvaluado></DocumentoEvaluado>} />
                    <Route path="Administrador/EstudianteEvaluado" element={<EstudianteEvaluado></EstudianteEvaluado>} />
                    <Route path="Administrador/HistorialJurado" element={<HistorialJurado></HistorialJurado>} />
                    <Route path="Administrador/Evaluar" element={<Evaluar></Evaluar>} />
                    <Route path="Administrador/HistorialCalificacion" element={<HistorialCalificacion></HistorialCalificacion>} />
                    <Route path="Administrador/ReporteEstudiante" element={<ReporteEstudiante></ReporteEstudiante>} />
                    <Route path="Administrador/ReporteEmpresa" element={<ReporteEmpresa></ReporteEmpresa>} />
                </Route>
                <Route path="/Estudiante" element={<DrawerEstudiante />}>
                    <Route index element={<InicioPracticas></InicioPracticas>} />
                    <Route path="Estudiante/DatosPersonales" element={<AsignarEmpresa></AsignarEmpresa>} />
                    <Route path="Estudiante/CargarDocumentos" element={<AsignarJurado></AsignarJurado>} />
                    <Route path="Estudiante/CargarAvances" element={<HistorialEstudiante></HistorialEstudiante>} />
                    <Route path="Estudiante/DocumentoFinal" element={<CargarConvenio></CargarConvenio>} />
                    <Route path="Estudiante/Consulta" element={<DocumentosEmpresa></DocumentosEmpresa>} />
                   
                </Route>
            </Routes>
    
      </BrowserRouter>
    )
  }
  
  export default App