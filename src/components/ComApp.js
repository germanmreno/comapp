import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/UserLogin.css"
import Loading from "./Loading";
import "../styles/ComApp.css"
import { Box, Heading, Image, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

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
          <div className="gobierno-logo-container"></div>
          <div className="logo-app-container"></div>
        </div>
        <Box className="app-background" position="relative">
          <Box h="100px" position="absolute" top="10px" display="flex" width="100%">
            <Stack spacing={1} direction={"row"} p={2} flex="1" justify="flex-end" width="100%">
              <Link to="/"><Image src='https://i.imgur.com/GKDwIhR.png' height="80px" /></Link>
              <Link to="/"><Image src='https://i.imgur.com/8NAKakM.png' height="80px" /></Link>
              <Link to="/"><Image src='https://i.imgur.com/ruTDdtu.png' height="80px" /></Link>
              <Link to="/"><Image src='https://i.imgur.com/LBmBrKC.png' height="80px" /></Link>
            </Stack>
          </Box>
          <Box display="flex" width="100%" mt="-160px" mb="0" flex-direction="column">
            <Image src="https://i.imgur.com/Iyg74x0.png" width="800px" justify="flex-start"/>
          </Box>
          <Box display="flex" width="100%" mt="0">
            <Heading ml="300px" color="#fcd72b">Registro Nacional de <br/> Compradores y Vendedores de <br/> Minerales</Heading>
          </Box>
        </Box>
      </div>
      );
  }
  
};

export default ComApp;
