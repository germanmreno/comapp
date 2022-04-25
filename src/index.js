import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/styles.css";
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
);
