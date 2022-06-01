import { Box, Image, Stack } from "@chakra-ui/react";
import axios from "axios";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { types } from "../types/types";
import "../styles/UserLogin.css";

const URI = "/comapp/login";

const UserLogin = () => {
  const [nombreusuario, setNombreUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  //Procedimiento guardar
  const store = async (e) => {
    e.preventDefault();
    const response = await axios
      .post(URI, {
        nombreusuario,
        contraseña,
      })
      .catch((err) => {
        console.log(err);
        alert(
          "Usuario no autenticado. Por favor, intente con uno correcto o verifique sus datos."
        );
      });

    console.log(response);

    if (response.status === 200) {
      dispatch({
        type: types.login,
        payload: { jwt: response.data.jwt, rol: response.data.rol },
      });
      console.log(response.data.rol);
      alert("Inicio de sesión exitoso.");
      if (response.data.rol === "admin") {
        navigate("/companies");
      } else {
        navigate("/home");
      }
    }
  };

  return (
    <div className="login">
      <Box className="header-app" position="fixed" top="0">
        <div className="gobierno-logo-container"></div>
        <div className="logo-app-container"></div>
        <Box h="100px" position="absolute" display="flex" width="100%">
          <Stack
            spacing={1}
            direction={"row"}
            p={2}
            flex="1"
            justify="flex-end"
            width="100%"
          >
            <Link to="/home">
              <Image src="https://i.imgur.com/GKDwIhR.png" height="80px" />
            </Link>
            <Link to="/contact">
              <Image src="https://i.imgur.com/ruTDdtu.png" height="80px" />
            </Link>
            <Link to="/help">
              <Image src="https://i.imgur.com/LBmBrKC.png" height="80px" />
            </Link>
          </Stack>
        </Box>
      </Box>

      <Box className="logo-container" mt="60px"></Box>
      <Box className="login-container-form">
        <form onSubmit={store} className="login-form">
          <h2 id="login-text">Inicia sesión con tu cuenta</h2>
          <div className="login-input-background">
            <input
              placeholder="Nombre de usuario"
              id="nombreusuario"
              name="nombreusuario"
              value={nombreusuario}
              onChange={(e) => setNombreUsuario(e.target.value)}
            ></input>
          </div>
          <div className="login-input-background">
            <input
              type="password"
              placeholder="Contraseña"
              id="contraseña"
              name="contraseña"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
            ></input>
          </div>
          <div className="forgot-password-container">
            <h2 id="forgot-password-text">
              <a href="/">¿Olvidaste tu contraseña?</a>
            </h2>
          </div>
          <div className="newregister-text-container">
            <h2 id="newregister-text">
              <Link to="/register">¿No posees una cuenta? Regístrate</Link>
            </h2>
          </div>
          <button className="login-btn" type="submit">
            INICIAR SESIÓN
          </button>
        </form>
      </Box>
    </div>
  );
};

export default UserLogin;
