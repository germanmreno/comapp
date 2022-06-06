import React from "react";

import { Box, Image, Stack, useMediaQuery } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu';

const Help = () => {
  const [isLessThan1200] = useMediaQuery('(max-width: 1200px)');
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
        <Box
          h="100vh"
          w="100%"
          backgroundImage="https://i.imgur.com/DYE4aEq.png"
          bgPosition="right"
          backgroundRepeat="no-repeat"
          bgSize="cover"
        >
          <Box
            display="flex"
            width="100%"
            flex-direction="column"
            justifyContent="center"
            alignItems="center"
            mt="150px"
          >
            <Image src="https://i.imgur.com/dsthvOM.png" width="1400px" />
          </Box>
          <Box
            display="flex"
            flex-direction="row"
            alignItems="center"
            justifyContent="center"
          ></Box>
        </Box>
      </Box>
    </>
  );
};

export default Help;
