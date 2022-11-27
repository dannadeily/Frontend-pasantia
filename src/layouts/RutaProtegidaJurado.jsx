import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import AppbarJurado from "../components/AppbarJurado"
import Cargando from "../pages/Cargando"

const RutaProtegida = () => {
  const { auth ,cargando} = useAuth();
  if(cargando)return <Cargando/>
  
  return <>
  {auth.roles_idrol===3 ? <AppbarJurado/> 
    
    
    
    
    : <Navigate to="/" />}
    </>;
};

export default RutaProtegida;
