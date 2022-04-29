import React, { useState } from "react";
import { AiOutlineWallet } from "react-icons";

import { Box, Button, Image, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ComHomeAuth = () => {
  return (
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
          <Image
            htmlWidth="275px"
            src="https://i.imgur.com/61iZxXu.png"
            alt="Comercialización CVM"
          />
          <Link to="/comregister"><Image src="https://i.imgur.com/R7uehhJ.png" width="250px">
          </Image></Link>
        </Stack>
      </Box>
    </Box>
  );
};

export default ComHomeAuth;