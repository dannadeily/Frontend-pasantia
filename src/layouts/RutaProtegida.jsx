import { Outlet, Navigate } from 'react-router-dom'
import DrawerAdministrador from '../components/DrawerAdministrador';
import useAuth from '../hooks/useAuth.jsx'
import Cargando from "../pages/Cargando"

const RutaProtegida = () => {

    const { auth, cargando } = useAuth();
    

    if(cargando) return <Cargando/>

    return (
        <>
            {auth.usuario.idusuario && auth.usuario.rol===1 ? 
            (
                <DrawerAdministrador/>
            ) : <Navigate to="/" /> }

            
        </>
    )
}

export default RutaProtegida