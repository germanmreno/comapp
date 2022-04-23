import axios from "axios";
import { useState } from "react";
import "../styles/UserRegister.css"

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
      <div className="logo-register-container"></div>
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
          <input type="password" placeholder="Confirmar contraseña" ></input>
        </div>
        <div className="gologin-text-container">
          <h2 id="gologin-text">
            <a href="/">¿Posees ya una cuenta? Inicia sesión</a>
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