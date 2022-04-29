import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import "../styles/UserRegister.css";
import { Box, Image, Stack } from "@chakra-ui/react";

const URI = "http://localhost:8000/comapp/";

const UserRegister = () => {
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
    <div className="register">
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
            <Link to="/">
              <Image src="https://i.imgur.com/GKDwIhR.png" height="80px" />
            </Link>
            <Link to="/register">
              <Image src="https://i.imgur.com/8NAKakM.png" height="80px" />
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
      <Box className="logo-register-container" mt="100px"></Box>
      <div className="register-container-form">
        <h2 id="register-text">Regístrate</h2>
        <div className="register-input-background">
          <input placeholder="Nombre de usuario"></input>
        </div>
        <div className="register-input-background">
          <input placeholder="Correo electrónico"></input>
        </div>
        <div className="register-input-background">
          <input placeholder="Número de teléfono"></input>
        </div>
        <div className="register-input-background">
          <input placeholder="Número de cédula"></input>
        </div>
        <div className="register-input-background">
          <input placeholder="Contraseña" type="password"></input>
        </div>
        <div className="register-input-background">
          <input type="password" placeholder="Confirmar contraseña"></input>
        </div>
        <div className="gologin-text-container">
          <h2 id="gologin-text">
            <Link to="/login">¿Posees ya una cuenta? Inicia sesión</Link>
          </h2>
        </div>
        <button className="register-btn" type="submit">
          REGISTRAR
        </button>
      </div>
    </div>
  );
};

export default UserRegister;
