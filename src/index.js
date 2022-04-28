import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/styles.css";
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
    
);
