import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/styles.css";
<<<<<<< HEAD
import reportWebVitals from "./reportWebVitals";
import UserLogin from "./components/UserLogin";
import UserRegister from "./components/UserRegister";
import { ComRegister } from "./components/ComRegister";
import { ChakraProvider } from '@chakra-ui/react'
import ComApp from "./components/ComApp";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 
<ChakraProvider>
    <App />
</ChakraProvider>
    
=======
import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import App from "./App";

const colors = {
  verde: {},
};

const theme = extendTheme({ colors });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
>>>>>>> 390b36cf56fba69abf58295852639b4c9cf94ad8
);
