import React, { useEffect, useState } from "react";
import "../styles/ActivRegister.css";

import {
  Box,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import axios from "axios";

const URI = "http://localhost:8000/comapp/activregister";

const ActivRegister = () => {
  const [file, setFile] = useState("");
  const [filename, setFileName] = useState("Choose file");
  const [uploadedFile, setUploadedFile] = useState({});

  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
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
          <Stack
            spacing={1}
            direction={"row"}
            p={2}
            flex="1"
            justify="flex-end"
            width="100%"
          >
            <Link to="/homeauth">
              <Image src="https://i.imgur.com/GKDwIhR.png" height="80px" />
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
      <Box display="flex" flexDirection="row">
        <Box
          h="auto"
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
        </Box>
        <Box display="flex" w="50%" flexDirection="column">
          <Stack mt={-2} spacing={4} direction={"column"} p={3} flex="1">
            <Heading
              fontSize="24px"
              className="registeractiv-heading"
              fontFamily="conthraxsemibold"
              mt="130px"
            >
              REGISTRO DE ACTIVIDAD COMERCIAL <br />
              (COMPRA - VENTA) <br />
              MENSUAL
            </Heading>
            <Image src="https://i.imgur.com/KEK4IhB.png" mt="30px" />
            <Stack
              mt={-2}
              spacing={2}
              direction={"row"}
              p={3}
              justify="flex-start"
              align="center"
            >
              <Image src="https://i.imgur.com/SVrAvJi.png" width="50px" />
              <a href="/activfile">
                <Text color="green">
                  REGISTRO DE ACTIVIDAD COMERCIAL (COMPRA Y VENTA) MENSUAL
                </Text>
              </a>
            </Stack>
          </Stack>
          <Box
            display="flex"
            flex-direction="row"
            alignItems="center"
            justifyContent="center"
          >
            <form onSubmit={onSubmit}>
              <Stack
                spacing={4}
                direction={"row"}
                p={3}
                flex="1"
                alignItems="center"
                justifyContent="center"
              >
                <Link to="/homeauth">
                  <Image
                    src="https://i.imgur.com/R3DQi40.png"
                    width="200px"
                    cursor="pointer"
                  />
                </Link>
                <Input type="file" name="file" id="file" onChange={onChange} />

                <Button type="submit" value="Upload">
                  <Image width="150px" src="https://i.imgur.com/cWcllqB.png" />
                </Button>
              </Stack>
            </form>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ActivRegister;
