import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import DrawerAdministrador from '../components/DrawerAdministrador'
import EstudianteActivo from "../pages/administrador/EstudianteActivo"

const RutaProtegida = () => {
  const { auth ,cargando} = useAuth();
  if(cargando)return 'Cargando...'
  
  return <>{auth.idusuario ? <div><DrawerAdministrador />
    
    
    
    </div> : <Navigate to="/" />}</>;
};

export default RutaProtegida;
