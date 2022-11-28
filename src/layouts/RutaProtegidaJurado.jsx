import { Outlet, Navigate } from 'react-router-dom'
import AppbarJurado from '../components/AppbarJurado';
import useAuth from '../hooks/useAuth'
import Cargando from "../pages/Cargando"

const RutaProtegidaJurado = () => {

    const { auth, cargando } = useAuth();

    if(cargando) return <Cargando/>

    console.log(auth)
    return (
        <>
              {auth.usuario.idusuario &&  auth.usuario.rol===3 ? 
            (
                <AppbarJurado></AppbarJurado>
            ) :<Navigate to="/" />}
        </>
    )
}

export default RutaProtegidaJurado