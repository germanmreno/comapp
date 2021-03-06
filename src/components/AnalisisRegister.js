import React from "react";
import "../styles/ActivRegister.css";

import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const AnalisisRegister = () => {
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
            <Link to="/home">
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
              (AN??LISIS) <br />
              MENSUAL
            </Heading>
            <Image src="https://i.imgur.com/JugBSxt.png" mt="30px" />
            <Stack
              mt={-2}
              spacing={2}
              direction={"row"}
              p={3}
              justify="flex-start"
              align="center"
            >
              <Image src="https://i.imgur.com/SVrAvJi.png" width="50px" />
              <a href="../assets/registroanalisis.xlsx" download>
                <Text color="green">
                  REGISTRO DE ACTIVIDAD COMERCIAL (AN??LISIS) MENSUAL
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
            <Stack
              spacing={4}
              direction={"row"}
              p={3}
              flex="1"
              alignItems="center"
              justifyContent="center"
            >
              <Image
                src="https://i.imgur.com/Ss8MqbE.png"
                width="150px"
                cursor="pointer"
              />

              <Image
                src="https://i.imgur.com/cWcllqB.png"
                width="150px"
                cursor="pointer"
              />
            </Stack>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AnalisisRegister;
