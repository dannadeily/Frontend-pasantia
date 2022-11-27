import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import HeaderInicio from "./components/Headerinicio";
//Administrador
import DrawerAdminsitrador from "./components/DrawerAdministrador";
import IniciarSesion from "./pages/IniciarSesion";
import RegistrarEstudiante from "./pages/RegistrarEstudiante";
import RegistrarEmpresa from "./pages/RegistrarEmpresa";
import EstudianteActivo from "./pages/administrador/EstudianteActivo";
import AsignarEmpresa from "./pages/administrador/AsignarEmpresa";
import ModalAsignarEmpresa from "./pages/administrador/ModalAsignarEmpresa"
import AsignarJurado from "./pages/administrador/AsignarJurado";
import RecuperarPassword from "./pages/RecuperarPassword";
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
import InfoEstudiante from "./pages/administrador/InfoEstudiante";
import FinalizarPasantia from "./pages/administrador/FinalizarPasantia";
import Evaluacion from "./pages/administrador/Evaluacion";
import Documento from "./pages/administrador/Documento";
import EvaluarEstudiante from "./pages/administrador/EvaluarEstudiante";
import Puntuacion from "./pages/administrador/Puntuacion";
//Estudiante
import DrawerEstudiante from "./components/DrawerEstudiante";
import EstadoPasantia from "./pages/estudiante/EstadoPasantia";
import DatosPersonales from "./pages/estudiante/DatosPersonales";
import CargarDocumentos from "./pages/estudiante/CargarDocumentos";
import CargarAvances from "./pages/estudiante/CargarAvances";
import DocumentoFinal from "./pages/estudiante/DocumentoFinal";
import Consulta from "./pages/estudiante/Consulta";
import EditarDatos from "./pages/estudiante/EditarDatos";
import DocumentoCargado from "./pages/estudiante/DocumentoCargado";
import AvanceCargado from "./pages/estudiante/AvanceCargado";
import DocumentoFinalCargado from "./pages/estudiante/DocumentoFinalCargado";
import CambiarPasswordEst from "./pages/estudiante/CambiarPasswordEst";
//Jurado
import AppbarJurado from "./components/AppbarJurado";
import EstudianteAsignado from "./pages/jurado/EstudianteAsignado";
import InformacionEstudiante from "./pages/jurado/InformacionEstudiante";
import Alerta from "./components/alerta";

//
import { AuthProvider } from "./context/AuthProvider";
import RutaProtegida from "./layouts/RutaProtegida";
import RutaProtegidaEstudiante from "./layouts/RutaProtegidaEstudiante";
import RutaProtegidaJurado from "./layouts/RutaProtegidaJurado";

//cargando
import Cargando from "./pages/Cargando"

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/Alerta" element={<Alerta></Alerta>}></Route>

          {/** rutas de Inicio */}
          <Route path="/" element={<HeaderInicio></HeaderInicio>}>
            <Route index element={<IniciarSesion></IniciarSesion>} />
            <Route
              path="/RegistrarEstudiante"
              element={<RegistrarEstudiante></RegistrarEstudiante>}
            />
            <Route
              path="/RegistrarEmpresa"
              element={<RegistrarEmpresa></RegistrarEmpresa>}
            />
            <Route
              path="/RecuperarPassword"
              element={<RecuperarPassword></RecuperarPassword>}
            />
          </Route>
          {/** rutas de modulo Administrador */}
          <Route path="/Administrador" element={<RutaProtegida></RutaProtegida>}>
            <Route index element={<EstudianteActivo></EstudianteActivo>} />

            <Route
              path="/Administrador/FinalizarPasantia"
              element={<FinalizarPasantia></FinalizarPasantia>}
            />
            <Route
              path="/Administrador/InfoEstudiante"
              element={<InfoEstudiante></InfoEstudiante>}
            />
            <Route
              path="/Administrador/AsignarEmpresa"
              element={<AsignarEmpresa></AsignarEmpresa>}
            />
            <Route
              path="/Administrador/AsignarEmpresa/ModalAsignarEmpresa"
              element={<ModalAsignarEmpresa></ModalAsignarEmpresa>}
            />
            <Route
              path="/Administrador/AsignarJurado"
              element={<AsignarJurado></AsignarJurado>}
            />
            <Route
              path="/Administrador/HistorialEstudiante"
              element={<HistorialEstudiante></HistorialEstudiante>}
            />
            <Route
              path="/Administrador/CargarConvenio"
              element={<CargarConvenio></CargarConvenio>}
            />
            <Route
              path="/Administrador/DocumentosEmpresa"
              element={<DocumentosEmpresa></DocumentosEmpresa>}
            />
            <Route
              path="/Administrador/HistorialEmpresa"
              element={<HistorialEmpresa></HistorialEmpresa>}
            />
            <Route
              path="/Administrador/RegistrarJurado"
              element={<RegistrarJurado></RegistrarJurado>}
            />
            <Route
              path="/Administrador/DocumentoEvaluado"
              element={<DocumentoEvaluado></DocumentoEvaluado>}
            />
            <Route
              path="/Administrador/Documento"
              element={<Documento></Documento>}
            />
            <Route
              path="/Administrador/EstudianteEvaluado"
              element={<EstudianteEvaluado></EstudianteEvaluado>}
            />
            <Route
              path="/Administrador/Evaluacion"
              element={<Evaluacion></Evaluacion>}
            />
            <Route
              path="/Administrador/HistorialJurado"
              element={<HistorialJurado></HistorialJurado>}
            />
            <Route
              path="/Administrador/Evaluar"
              element={<Evaluar></Evaluar>}
            />
            <Route
              path="/Administrador/EvaluarEstudiante"
              element={<EvaluarEstudiante></EvaluarEstudiante>}
            />
            <Route
              path="/Administrador/HistorialCalificacion"
              element={<HistorialCalificacion></HistorialCalificacion>}
            />
            <Route
              path="/Administrador/Puntuacion"
              element={<Puntuacion></Puntuacion>}
            />
            <Route
              path="/Administrador/ReporteEstudiante"
              element={<ReporteEstudiante></ReporteEstudiante>}
            />
            <Route
              path="/Administrador/ReporteEmpresa"
              element={<ReporteEmpresa></ReporteEmpresa>}
            />
          </Route>

          {/** rutas de modulo Estudiante*/}
          <Route path="/Estudiante" element={<RutaProtegidaEstudiante></RutaProtegidaEstudiante>}>
            <Route index element={<EstadoPasantia></EstadoPasantia>} />
            <Route
              path="/Estudiante/DatosPersonales"
              element={<DatosPersonales></DatosPersonales>}
            />
            <Route
              path="/Estudiante/EditarDatos"
              element={<EditarDatos></EditarDatos>}
            />
            <Route
              path="/Estudiante/DocumentoCargado"
              element={<DocumentoCargado></DocumentoCargado>}
            />
            <Route
              path="/Estudiante/CargarDocumentos"
              element={<CargarDocumentos></CargarDocumentos>}
            />
            <Route
              path="/Estudiante/AvanceCargado"
              element={<AvanceCargado></AvanceCargado>}
            />
            <Route
              path="/Estudiante/CargarAvances"
              element={<CargarAvances></CargarAvances>}
            />
            <Route
              path="/Estudiante/DocumentoFinalCargado"
              element={<DocumentoFinalCargado></DocumentoFinalCargado>}
            />
            <Route
              path="/Estudiante/DocumentoFinal"
              element={<DocumentoFinal></DocumentoFinal>}
            />
            <Route
              path="/Estudiante/Consulta"
              element={<Consulta></Consulta>}
            />
            <Route
              path="/Estudiante/CambiarPasswordEst"
              element={<CambiarPasswordEst></CambiarPasswordEst>}
            />
          </Route>
         
          {/** rutas de modulo jurado */}
          
          <Route path="/Jurado" element={<RutaProtegidaJurado />}>
            <Route index element={<EstudianteAsignado></EstudianteAsignado>} />
            <Route
              path="/Jurado/InformacionEstudiante"
              element={<InformacionEstudiante></InformacionEstudiante>}
            />
          </Route>

          <Route path="/cargando" element={<Cargando></Cargando>}>

          </Route>

          {/* <Route path="/Proyectos" element={}>
          <Route index element={<EstudianteActivo></EstudianteActivo>} />
          </Route> */}
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
