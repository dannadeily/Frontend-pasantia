import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

//Incicio
import HeaderInicio from "./components/Headerinicio";
import IniciarSesionEmpresa from "./pages/IniciarSesionEmpresa";
import IniciarSesion from "./pages/IniciarSesion";
import RegistrarEstudiante from "./pages/RegistrarEstudiante";
import RegistrarEmpresa from "./pages/RegistrarEmpresa";
import RecuperarPassword from "./pages/RecuperarPassword";

//Administrador
import DrawerAdminsitrador from "./components/DrawerAdministrador";
import ActivarEstudiante from "./pages/administrador/RegistrarPasante";
import EstudianteActivo from "./pages/administrador/EstudianteActivo";
import AsignarJurado from "./pages/administrador/AsignarJurado";
import HistorialEstudiante from "./pages/administrador/HistorialEstudiante";
import CargarConvenio from "./pages/administrador/CargarConvenio";
import DocumentosEmpresa from "./pages/administrador/DocumentosEmpresa";
import HistorialEmpresa from "./pages/administrador/HistorialEmpresa";
import InformacionEmpresa from "./pages/administrador/InformacionEmpresa";
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
import CambiarPasswordAdmin from "./pages/administrador/CambiarPasswordAdmin";
import PerfilAdmin from "./pages/administrador/PerfilAdmin";
import CrearDocumento from "./pages/administrador/CrearDocumento"
import EditarDatosAdmin from "./pages/administrador/EditarDatosAdmin";
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
import PerfilJurado from "./pages/jurado/PerfilJurado";
import CambiarPasswordJurado from "./pages/jurado/CambiarPassworsJurado";
import EvaluarDocumento from "./pages/jurado/EvaluarDocumento";
import EvaluarPasante from "./pages/jurado/EvaluarPasante";

//Empresa
import AppbarEmpresa from "./components/AppbarEmpresa";
import PerfilEmpresa from "./pages/empresa/PerfilEmpresa";
import CambiarPasswordEmpresa from "./pages/empresa/CambiarPasswordEmpresa";

//AuthContext
import { AuthProvider } from "./context/AuthProvider";
import Alerta from "./components/alerta";
import RutaProtegida from "./layouts/RutaProtegida";
import RutaProtegidaEstudiante from "./layouts/RutaProtegidaEstudiante";
import RutaProtegidaJurado from "./layouts/RutaProtegidaJurado";
import RutaProtegidaEmpresa from "./layouts/RutaProtegidaEmpresa";

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
              path="/IniciarSesionEmpresa"
              element={<IniciarSesionEmpresa></IniciarSesionEmpresa>}
            ></Route>
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
          <Route path="/Administrador" element={<RutaProtegida />}>
            <Route
              index
              element={<ActivarEstudiante></ActivarEstudiante>}
            ></Route>

            <Route
              path="/Administrador/EstudianteActivo"
              element={<EstudianteActivo></EstudianteActivo>}
            />

            <Route
              path="/Administrador/FinalizarPasantia"
              element={<FinalizarPasantia></FinalizarPasantia>}
            />
            <Route
              path="/Administrador/InfoEstudiante/:id"
              element={<InfoEstudiante></InfoEstudiante>}
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
              path="/Administrador/HistorialEmpresa/InformacionEmpresa/:id"
              element={<InformacionEmpresa></InformacionEmpresa>}
            ></Route>
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
            <Route
              path="/Administrador/CambiarContraseñaAdmin"
              element={<CambiarPasswordAdmin></CambiarPasswordAdmin>}
            ></Route>
            <Route
              path="/Administrador/PerfilAdmin"
              element={<PerfilAdmin></PerfilAdmin>}
            ></Route>
            <Route
              path="/Administrador/EditarDatosAdmin"
              element={<EditarDatosAdmin></EditarDatosAdmin>}
            ></Route>
            
             <Route
              path="/Administrador/CrearDocumento"
              element={<CrearDocumento></CrearDocumento>}
            ></Route>
          </Route>

          {/** rutas de modulo Estudiante*/}
          <Route path="/Estudiante" element={<RutaProtegidaEstudiante />}>
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
            <Route
              path="/Jurado/EvaluarDocumento"
              element={<EvaluarDocumento></EvaluarDocumento>}
            />
            <Route
              path="/Jurado/EvaluarPasante"
              element={<EvaluarPasante></EvaluarPasante>}
            />
            <Route
              path="/Jurado/PerfilJurado"
              element={<PerfilJurado></PerfilJurado>}
            />
            <Route
              path="/Jurado/CambiarPasswordJurado"
              element={<CambiarPasswordJurado></CambiarPasswordJurado>}
            />
          </Route>

          {/** Rutas del modulo empresa */}
          <Route path="/Empresa" element={<RutaProtegidaEmpresa />}>
            {/* <Route index element={<EstudianteAsignado></EstudianteAsignado>} /> */}
            <Route
              path="/Empresa/PerfilEmpresa"
              element={<PerfilEmpresa></PerfilEmpresa>}
            />
            <Route
              path="/Empresa/CambiarPasswordEmpresa"
              element={<CambiarPasswordEmpresa></CambiarPasswordEmpresa>}
            />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
