import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./styles/styles.css";
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
    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
