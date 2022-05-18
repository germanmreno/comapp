import React from "react";

import { Box, Image, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ComHome = () => {
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
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          w="50%"
          flexDirection="column"
        >
          <Stack
            mt={-2}
            spacing={4}
            direction={"column"}
            p={3}
            flex="1"
            alignItems="center"
            justifyContent="Center"
          >
            <Image
              htmlWidth="275px"
              src="https://i.imgur.com/61iZxXu.png"
              alt="Comercialización CVM"
            />
            <Link to="/comregister">
              <Image
                src="https://i.imgur.com/R7uehhJ.png"
                width="250px"
              ></Image>
            </Link>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default ComHome;
