import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../auth/AuthContext";
import axios from "axios";
import { slide as Menu } from 'react-burger-menu';

import { Box, Image, Stack, Text, useMediaQuery } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import "../styles/ConfirmRegister.css";

const URI = "/comapp/confirmregister";

const ConfirmRegister = () => {
  const [isLessThan1024] = useMediaQuery('(max-width: 1024px)');
  const [isLargerThan1024] = useMediaQuery('(min-width: 1025px)');
  const {
    user: { jwt },
  } = useContext(AuthContext);
  const [data, setData] = useState({});

  useEffect(() => {
    confirmRegister();
  }, []);

  const confirmRegister = async () => {
    const res = await axios.post(URI, {
      jwt,
    });
    setData(res.data);
    console.log(data);
  };

  return (
    <>
      <Box className="header-app" position="fixed" top="0">
        <div className="gobierno-logo-container"></div>
        <div className="logo-app-container"></div>
        <Box h="100px" position="absolute" display="flex" width="100%">
        {isLessThan1024 && (
            <Menu id="burguer-menu"
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
            </Menu>
            )} 
            {isLargerThan1024 && (<Stack
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
          </Stack>)}
        </Box>
      </Box>
      <Box display="flex" flexDirection="row">
        <Box
          h="auto"
          w="100%"
          backgroundImage="https://i.imgur.com/DYE4aEq.png"
          bgPosition="right"
          backgroundRepeat="no-repeat"
          bgSize="cover"
        >
          <Box
            display="flex"
            width="100%"
            height="100vh"
            flex-direction="column"
            justifyContent="center"
            alignItems="center"
            mt="150px"
          >
            <Box className="certificate-register">
              <Box display="flex" alignItems="center">
                <Text
                  color="#f7cd00"
                  fontSize={isLargerThan1024 ? "18px" : "13px"}
                  fontFamily="Archivo"
                  align="Center"
                >
                  Su registro ha sido realizado con éxito, el mismo será
                  evaluado en un <br /> tiempo máximo de 48 horas, su Número de
                  Referencia es <br />
                  <b>{data.guid}</b>
                </Text>
              </Box>
              <Box color="whiteAlpha.800" w="80%" fontSize="19px">
                <Stack direction={"row"} p={2}>
                  <Text
                    fontFamily="conthraxsemibold"
                    textAlign="left"
                    color="#f7cd00"
                    fontSize={isLargerThan1024 ? "18px" : "13px"}
                  >
                    Nº de Registro:
                  </Text>
                  <Text fontFamily="conthraxsemibold" fontSize={isLargerThan1024 ? "18px" : "13px"}>{data.numregistro}</Text>
                </Stack>
                <Stack direction={"column"} p={2}>
                  <Text
                    fontFamily="conthraxsemibold"
                    textAlign="left"
                    color="#f7cd00"
                    fontSize={isLargerThan1024 ? "18px" : "13px"}
                  >
                    Nombre de la Empresa:
                  </Text>
                  <Text fontSize={isLargerThan1024 ? "18px" : "13px"} fontFamily="conthraxsemibold">{data.nombre}</Text>
                </Stack>
                <Stack direction={"column"} p={2}>
                  <Text
                    fontFamily="conthraxsemibold"
                    textAlign="left"
                    color="#f7cd00"
                    fontSize={isLargerThan1024 ? "18px" : "13px"}
                  >
                    Objeto:
                  </Text>
                  <Text fontFamily="conthraxsemibold" fontSize={isLargerThan1024 ? "18px" : "13px"}>
                    {data.tipoactividad}
                  </Text>
                </Stack>
                <Stack direction={"column"} p={3}>
                  <Text
                    fontFamily="conthraxsemibold"
                    textAlign="left"
                    color="#f7cd00" fontSize={isLargerThan1024 ? "18px" : "13px"}
                  >
                    Mineral:
                  </Text>
                  <Text fontFamily="conthraxsemibold" fontSize={isLargerThan1024 ? "18px" : "13px"}>
                    {data.actividadminera}
                  </Text>
                </Stack>
                <Stack direction={"column"} p={3}>
                  <Text
                    fontFamily="conthraxsemibold"
                    textAlign="left"
                    color="#f7cd00" fontSize={isLargerThan1024 ? "18px" : "13px"}
                  >
                    Status:
                  </Text>
                  <Text fontFamily="conthraxsemibold" fontSize={isLargerThan1024 ? "18px" : "13px"}>Registrado</Text>
                </Stack>
                <Stack direction={"column"} p={3}>
                  <Text
                    fontFamily="conthraxsemibold"
                    textAlign="left"
                    color="#f7cd00" fontSize={isLargerThan1024 ? "18px" : "13px"}
                  >
                    Fecha:
                  </Text>
                  <Text fontFamily="conthraxsemibold" fontSize={isLargerThan1024 ? "18px" : "13px"}>{data.createdAt}</Text>
                </Stack>
              </Box>
            </Box>
          </Box>
          <Box
            display="flex"
            flex-direction="row"
            alignItems="center"
            justifyContent="center"
          >
            <Stack
              direction={"row"}
              p={3}
              flex="1"
              alignItems="center"
              justifyContent="center"
            >
              <Link to="/home">
                <Image
                  src="https://i.imgur.com/R3DQi40.png"
                  mt="-200px"
                  width="150px"
                  cursor="pointer"
                  mb="0"
                ></Image>
              </Link>
            </Stack>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ConfirmRegister;
