import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import "../styles/UserLogin.css"
=======
import "../styles/UserLogin.css";
>>>>>>> 390b36cf56fba69abf58295852639b4c9cf94ad8

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
      <div className="logo-container"></div>
      <div className="login-container-form">
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
<<<<<<< HEAD
          <Link to="/comregister">INICIAR SESIÓN</Link>
=======
          <Link to="/home">INICIAR SESIÓN</Link>
>>>>>>> 390b36cf56fba69abf58295852639b4c9cf94ad8
        </button>
      </div>
    </div>
  );
};

export default UserLogin;
