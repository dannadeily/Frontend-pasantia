import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import DrawerAdministrador from '../components/DrawerAdministrador'
import EstudianteActivo from "../pages/administrador/EstudianteActivo"
import Cargando from "../pages/Cargando"

const RutaProtegida = () => {
  const { auth ,cargando} = useAuth();
  if(cargando)return <Cargando/>
  
  return <>

  
  
  {auth.roles_idrol===1 ? <DrawerAdministrador></DrawerAdministrador>
    
    
    
    
     : <Navigate to="/" />}</>;
     
};

export default RutaProtegida;
