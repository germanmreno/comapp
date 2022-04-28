import React, { useState } from "react";

import {
  Box
} from "@chakra-ui/react";


const ActivRegister = () => {
    const [data, setData] = useState([
        [{ value: "Nº" , readOnly: true}, { value: "Chocolate" }],,
      ]);

console.log(data);

  return (
    <Box display="flex" flexDirection="row">
      <Box
        h="100vh"
        w="50%"
        backgroundImage="https://i.imgur.com/X5w7nmt.png"
        backgroundRepeat="no-repeat"
        bgSize="cover"
      ></Box>
    </Box>
  );
};

export default ActivRegister;