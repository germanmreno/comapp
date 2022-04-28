import { Box, Image, Stack } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/UserLogin.css"

const URI = "http://localhost:8000/comapp/";

const UserLogin = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  //Procedimiento guardar
  const store = async (e) => {
    e.preventDefault();
    await axios.post(URI, {
      user,
      password,
    });
  };

  return (
    <div className="login">
        <Box className="header-app" position="fixed" top="0">
          <div className="gobierno-logo-container"></div>
          <div className="logo-app-container"></div>
          <Box h="100px" position="absolute" display="flex" width="100%">
            <Stack spacing={1} direction={"row"} p={2} flex="1" justify="flex-end" width="100%">
              <Link to="/"><Image src='https://i.imgur.com/GKDwIhR.png' height="80px" /></Link>
              <Link to="/"><Image src='https://i.imgur.com/8NAKakM.png' height="80px" /></Link>
              <Link to="/"><Image src='https://i.imgur.com/ruTDdtu.png' height="80px" /></Link>
              <Link to="/"><Image src='https://i.imgur.com/LBmBrKC.png' height="80px" /></Link>
            </Stack>
          </Box>
        </Box>

      <Box className="logo-container" mt="60px"></Box>
      <Box className="login-container-form">
        <h2 id="login-text">Inicia sesión con tu cuenta</h2>
        <div className="login-input-background">
          <input placeholder="Correo electrónico"></input>
        </div>
        <div className="login-input-background">
          <input type="password" placeholder="Contraseña"></input>
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
          <Link to="/comregister">INICIAR SESIÓN</Link>
        </button>
      </Box>
    </div>
  );
};

export default UserLogin;
