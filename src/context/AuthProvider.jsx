import { useState, useEffect, createContext } from "react";
import conexionAxios from "../config/axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const [auth, setAuth] = useState({});
  const [cargando,setCargando] = useState(true)

  const navigate = useNavigate()

  useEffect(() => {
    const autenticarUsuario = async () => {
      const token = localStorage.getItem("token");
      
      if (!token) {
        setCargando(false)
        return;
      }

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        const { data } = await conexionAxios("/perfil", config);
         setAuth(data)
        //  if(data.roles_idrol===1){
        //  navigate('/Administrador')}
        //  else if(data.roles_idrol===2){
        //   navigate('/Estudiante')}
        //   else if(data.roles_idrol===3){
        //     navigate('/Jurado')}
      
      } catch (error) {
          setAuth({})
      } 
        setCargando(false)
      
    };
    autenticarUsuario();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        cargando
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
export default AuthContext;
