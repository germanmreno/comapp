import React, { useState } from "react";
import "../styles/ActivRegister.css";

import { Box, Image, Input, Stack, Text, Button, Tag, useMediaQuery } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Label } from "reactstrap";
import { slide as Menu } from 'react-burger-menu';
import "../styles/ActaRecepcion.css"

const URI = "/comapp/actarecepcion";

const ActaRecepcion = () => {
  const [isLessThan1200] = useMediaQuery('(max-width: 1200px)');
  const [file, setFile] = useState("");
  const [filename, setFileName] = useState("Elija un archivo.");
  const [uploadedFile, setUploadedFile] = useState({});

  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
    console.log(file);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!file) return alert("No ha adjuntado ningún archivo.");
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post(URI, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const { fileName, filePath } = res.data;

      setUploadedFile({ fileName, filePath });
      alert("Archivo subido de forma exitosa.");
      setFile("");
      setFileName("Elija un archivo");
    } catch (err) {
      if (err.response.status === 500) {
        console.log("There was a problem with the server");
      } else {
        console.log(err.response.data.msg);
      }
    }
  };

  return (
    <>
      <Box className="header-app" position="fixed" top="0">
        <div className="gobierno-logo-container"></div>
        <div className="logo-app-container"></div>
        <Box h="100px" position="absolute" display="flex" width="100%">
        {isLessThan1200 && (
        <Menu id="home-menu">
          <Link to="/">
              <Image src="https://i.imgur.com/GKDwIhR.png" height="80px" />
            </Link>
            <Link to="/contact">
              <Image src="https://i.imgur.com/ruTDdtu.png" height="80px" />
            </Link>
            <Link to="/help">
              <Image src="https://i.imgur.com/LBmBrKC.png" height="80px" />
            </Link>
        </Menu>)}
          {!isLessThan1200 && (
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
      {!isLessThan1200 && (<Box
          h="100vh"
          w="50%"
          backgroundImage="https://i.imgur.com/DYE4aEq.png"
          bgPosition="right"
          backgroundRepeat="no-repeat"
          bgSize="cover"
        >
          <Box
            display="flex"
            width="100%"
            height="600px"
            mb="0"
            flex-direction="column"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Image src="https://i.imgur.com/Iyg74x0.png" width="400px" />
          </Box>
        </Box>)}
        <Box mt={100}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            w={!isLessThan1200 ? "800px" : "100vw"}
            height="100vh"
            mt="-100px"
            mb="-50px"
          >
            <Stack
              spacing={2}
              direction={"column"}
              flex="1"
              alignItems="center"
              justifyContent="center"
            >
              <form onSubmit={onSubmit}>
                <Stack
                  spacing={1}
                  direction={"row"}
                  flex="1"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Label for="actarecepcion">
                    <Image
                      cursor="pointer"
                      src="https://i.imgur.com/Ss8MqbE.png"
                      height="80px"
                    ></Image>
                  </Label>
                  <Input
                    type="file"
                    name="actarecepcion"
                    id="actarecepcion"
                    onChange={onChange}
                    width="0.1px"
                    height="0.1px"
                    opacity={0}
                    overflow="hidden"
                    position="absolute"
                    z-index="-1"
                  />
                  <Image
                    src="https://i.imgur.com/T6iLjuH.png"
                    width="80px"
                  ></Image>
                  <Text fontFamily="Archivo" w="200px">
                    ACTA RECEPCIÓN
                  </Text>
                </Stack>
                <Stack
                  spacing={1}
                  direction={"row"}
                  flex="1"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Label for="analisispieza">
                    <Image
                      cursor="pointer"
                      src="https://i.imgur.com/Ss8MqbE.png"
                      height="80px"
                    ></Image>
                  </Label>
                  <Input
                    type="file"
                    name="analisispieza"
                    id="analisispieza"
                    onChange={onChange}
                    width="0.1px"
                    height="0.1px"
                    opacity={0}
                    overflow="hidden"
                    position="absolute"
                    z-index="-1"
                  />
                  <Image
                    src="https://i.imgur.com/T6iLjuH.png"
                    width="80px"
                  ></Image>
                  <Text fontFamily="Archivo" w="200px">
                    ANÁLISIS DE LA PIEZA
                  </Text>
                </Stack>
                <Stack
                  spacing={1}
                  direction={"row"}
                  flex="1"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Label for="memoriapieza">
                    <Image
                      cursor="pointer"
                      src="https://i.imgur.com/Ss8MqbE.png"
                      height="80px"
                    ></Image>
                  </Label>
                  <Input
                    type="file"
                    name="memoriapieza"
                    id="memoriapieza"
                    onChange={onChange}
                    width="0.1px"
                    height="0.1px"
                    opacity={0}
                    overflow="hidden"
                    position="absolute"
                    z-index="-1"
                  />
                  <Image
                    src="https://i.imgur.com/T6iLjuH.png"
                    width="80px"
                  ></Image>
                  <Text fontFamily="Archivo" w="200px">
                    MEMORIA FOTOGRÁFICA DE LA PIEZA
                  </Text>
                </Stack>
                <Stack
                  spacing={1}
                  direction={"column"}
                  flex="1"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Text>
                    <b>Archivo a subir:</b> {filename}
                  </Text>

                  <Button
                    type="submit"
                    bg="transparent"
                    value="Upload"
                    mt="30px"
                    mb="30px"
                  >
                    <Image
                      width="150px"
                      src="https://i.imgur.com/cWcllqB.png"
                    />
                  </Button>
                  <Link to="/home">
                    <Image
                      src="https://i.imgur.com/R3DQi40.png"
                      width="100px"
                      cursor="pointer"
                    />
                  </Link>
                  <Tag>
                    NOTA: Debe dar al botón Enviar tras adjuntar cada archivo.{" "}
                    <br />
                    Adjunte un único archivo por botón.
                  </Tag>
                </Stack>
              </form>
            </Stack>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ActaRecepcion;
