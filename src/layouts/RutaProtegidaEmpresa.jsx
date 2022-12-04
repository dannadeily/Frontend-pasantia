import { Outlet, Navigate } from 'react-router-dom'
import AppbarEmpresa from '../components/AppbarEmpresa';
import useAuth from '../hooks/useAuth'
import Cargando from "../pages/Cargando"

const RutaProtegida = () => {

    const { auth, cargando } = useAuth();
    

    if(cargando) return <Cargando/>

    console.log(auth)
    return (
        <>
            {auth.usuario.idusuario && auth.usuario.rol===4 ? 
            (
                <AppbarEmpresa/>
            ) : <Navigate to="/" /> }

            
        </>
    )
}

export default RutaProtegida