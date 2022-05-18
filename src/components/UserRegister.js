import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import "../styles/UserRegister.css";
import { Box, Image, Stack } from "@chakra-ui/react";

const URI = "http://localhost:8000/comapp/register";

const UserRegister = () => {
  const [nombreusuario, setNombreUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [contraseña2, setContraseña2] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");

  const navigate = useNavigate();

  //Procedimiento guardar
  const store = async (e) => {
    e.preventDefault();

    if (!nombreusuario || !contraseña || !contraseña2 || !correo || !telefono)
      return alert("Por favor, rellene todos los campos.");

    if (contraseña === contraseña2) {
      const response = await axios.post(URI, {
        nombreusuario,
        contraseña,
        correo,
        telefono,
      });

      console.log(response);
    } else {
      alert("Sus contraseñas no coinciden. Por favor verifique.");
    }
  };

  // alert("Se ha registrado de forma exitosa. Por favor, inicie sesión.");
  // navigate("/login");

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
      <Box className="register-container-form">
        <form onSubmit={store} class="register-form">
          <h2 id="login-text">Regístrate</h2>
          <div className="register-input-background">
            <input
              placeholder="Nombre de usuario"
              value={nombreusuario}
              onChange={(e) => setNombreUsuario(e.target.value)}
              type="text"
              className="form-control"
            ></input>
          </div>
          <div className="register-input-background">
            <input
              placeholder="Contraseña"
              type="password"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
              className="form-control"
            ></input>
          </div>
          <div className="register-input-background">
            <input
              type="password"
              placeholder="Confirmar contraseña"
              value={contraseña2}
              onChange={(e) => setContraseña2(e.target.value)}
              className="form-control"
            ></input>
          </div>
          <div className="register-input-background">
            <input
              placeholder="Correo electrónico"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              type="text"
              className="form-control"
            ></input>
          </div>
          <div className="register-input-background">
            <input
              placeholder="Número de teléfono"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              type="text"
              className="form-control"
            ></input>
          </div>
          <div className="gologin-text-container">
            <h2 id="gologin-text">
              <Link to="/login">¿Posees ya una cuenta? Inicia sesión</Link>
            </h2>
          </div>
          <button className="register-btn" type="submit">
            REGISTRAR
          </button>
        </form>
      </Box>
    </div>
  );
};

export default UserRegister;
