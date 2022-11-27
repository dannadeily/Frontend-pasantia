import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import DrawerEstudiante from "../components/DrawerEstudiante"
import Cargando from "../pages/Cargando"

const RutaProtegida = () => {
  const { auth ,cargando} = useAuth();
  if(cargando)return <Cargando/>
  
  return <>
  
  {auth.roles_idrol===2 ? <DrawerEstudiante/>
    
    
    
    
     : <Navigate to="/" />}
    </>;
};

export default RutaProtegida;
