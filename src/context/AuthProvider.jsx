import { useState, useEffect, createContext } from 'react'
import { useNavigate } from 'react-router-dom'
import clienteAxios from '../config/axios'

const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [auth, setAuth] = useState({})
    const [cargando, setCargando] = useState(true)
    
    const navigate = useNavigate()
   
      
    useEffect(() => {
        const autenticarUsuario = async () => {
            
            const token = localStorage.getItem('token')
          
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
           

            try {

                 
                if(!token){
                    
                    setCargando(false)
                    
                    return
                }
                const { data } = await clienteAxios('/perfil', config)
                setAuth(data)
                

            } catch (error) {
                console.log(error)
            } finally{
                    
                setCargando(false)
            }


            
        }
        autenticarUsuario()
    }, [])

    const cerrarSesionAuth = () => {
        setAuth({})
        navigate("/")
    }


    return (
        <AuthContext.Provider
            value={{
                cargando,
                auth,
                setAuth,
                
                cerrarSesionAuth
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export { 
    AuthProvider
}

export default AuthContext;