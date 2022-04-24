import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/UserLogin.css"
import Loading from "./Loading";
import "../styles/ComApp.css"

const URI = "http://localhost:8000/comapp/";

const ComApp = () => {
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

  const [loading, setLoading] = useState(true);

  const changeState = () => {
    setTimeout(() => {
      setLoading(false);
    }, 3000)
  }

  useEffect(() => {
    changeState();
  }, []);


  if(loading) {
    return (
      <Loading />
    )
  } else {
    return (
      <div>
        <div className="header-app">
          <div className="logo-app-container"></div>
        </div>
        <div className="app-background">
        </div>
      </div>
      );
  }
  
};

export default ComApp;