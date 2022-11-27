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
      console.log(token);
      if (!token) {
        setCargando(false)
        return;
      }
      console.log("si hay token");

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        const { data } = await conexionAxios("/perfil", config);
         setAuth(data)
         navigate('/Administrador')
      
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
