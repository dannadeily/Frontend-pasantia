import { Outlet, Navigate } from 'react-router-dom'
import DrawerEstudiante from '../components/DrawerEstudiante';
import useAuth from '../hooks/useAuth'
import Cargando from "../pages/Cargando"

const RutaProtegidaEstudiante = () => {

    const { auth, cargando } = useAuth();

    if(cargando) return <Cargando/>

    console.log(auth)
    return (
        <>
             {auth.usuario.idusuario && auth.usuario.rol===2? 
            (
                <DrawerEstudiante/>
            ) :<Navigate to="/" />}
        </>
    )
}

export default RutaProtegidaEstudiante