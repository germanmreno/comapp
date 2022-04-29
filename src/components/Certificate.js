import React from "react";

import { Box, Image, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Certificate = () => {
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
          w="100%"
          backgroundImage="https://i.imgur.com/DYE4aEq.png"
          bgPosition="right"
          backgroundRepeat="no-repeat"
          bgSize="cover"
        >
          <Box
            display="flex"
            width="100%"
            height="600px"
            flex-direction="column"
            justifyContent="center"
            alignItems="center"
            mt="150px"
          >
            <Image src="https://i.imgur.com/nIWy1Uy.png" width="800px" />
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
              <Link to="/homeauth">
                <Image
                  src="https://i.imgur.com/R3DQi40.png"
                  width="150px"
                  cursor="pointer"
                ></Image>
              </Link>
            </Stack>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Certificate;
