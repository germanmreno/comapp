import React, { useState } from "react";
import { AiOutlineWallet } from "react-icons";

import { Box, Button, Image, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ComHomeAuth = () => {
  return (
    <>
    <Box className="header-app" position="fixed" top="0">
          <div className="gobierno-logo-container"></div>
          <div className="logo-app-container"></div>
          <Box h="100px" position="absolute" display="flex" width="100%">
            <Stack spacing={1} direction={"row"} p={2} flex="1" justify="flex-end" width="100%">
              <Link to="/"><Image src='https://i.imgur.com/GKDwIhR.png' height="80px" /></Link>
              <Link to="/"><Image src='https://i.imgur.com/8NAKakM.png' height="80px" /></Link>
              <Link to="/"><Image src='https://i.imgur.com/ruTDdtu.png' height="80px" /></Link>
              <Link to="/"><Image src='https://i.imgur.com/LBmBrKC.png' height="80px" /></Link>
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
      ></Box>
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
          <Link to="/comregister"><Image src="https://i.imgur.com/bS7KIPb.png" width="300px">
          </Image></Link>
          <Link to="/comregister"><Image src="https://i.imgur.com/67q3YFP.png" width="300px">
          </Image></Link>
          <Link to="/comregister"><Image src="https://i.imgur.com/MR22FOG.png" width="300px">
          </Image></Link>
          <Link to="/comregister"><Image src="https://i.imgur.com/0biuOBJ.png" width="300px">
          </Image></Link>
          <Link to="/comregister"><Image src="https://i.imgur.com/c9S0w8m.png" width="300px">
          </Image></Link>
        </Stack>
      </Box>
    </Box>
    </>
  );
};

export default ComHomeAuth;