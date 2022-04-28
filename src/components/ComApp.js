import axios from "axios";
import { useEffect, useState } from "react";
<<<<<<< HEAD
import "../styles/UserLogin.css"
import Loading from "./Loading";
import "../styles/ComApp.css"
=======
import "../styles/UserLogin.css";
import Loading from "./Loading";
import "../styles/ComApp.css";
>>>>>>> 390b36cf56fba69abf58295852639b4c9cf94ad8

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
<<<<<<< HEAD
    }, 3000)
  }
=======
    }, 3000);
  };
>>>>>>> 390b36cf56fba69abf58295852639b4c9cf94ad8

  useEffect(() => {
    changeState();
  }, []);

<<<<<<< HEAD

  if(loading) {
    return (
      <Loading />
    )
=======
  if (loading) {
    return <Loading />;
>>>>>>> 390b36cf56fba69abf58295852639b4c9cf94ad8
  } else {
    return (
      <div>
        <div className="header-app">
<<<<<<< HEAD
          <div className="logo-app-container"></div>
        </div>
        <div className="app-background">
        </div>
      </div>
      );
  }
  
};

export default ComApp;
=======
          <div className="home-logogobierno-container"></div>
          <div className="home-logo-container"></div>
        </div>
        <div className="app-background"></div>
      </div>
    );
  }
};

export default ComApp;
>>>>>>> 390b36cf56fba69abf58295852639b4c9cf94ad8
