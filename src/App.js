import React, { useEffect, useReducer } from "react";
import { AuthContext } from "./auth/AuthContext";
import { authReducer } from "./auth/authReducer";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ComApp from "./components/ComApp";
import ComRegister from "./components/ComRegister";
import UserRegister from "./components/UserRegister";
import UserLogin from "./components/UserLogin";
import ConfirmRegister from "./components/ConfirmRegister";
import ComHome from "./components/ComHome";
import ActivRegister from "./components/ActivRegister";
import AnalisisRegister from "./components/AnalisisRegister";
import Contact from "./components/Contact";
import Certificate from "./components/Certificate";
import RequireAuth from "./components/RequireAuth";
import Help from "./components/Help";
import AuthConfirm from "./components/AuthConfirm";

const init = () => {
  return JSON.parse(localStorage.getItem("user")) || { logged: false };
};

function App() {
  const [user, dispatch] = useReducer(authReducer, {}, init);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      <BrowserRouter>
        <Routes>
          <Route element={<AuthConfirm />}>
            <Route path="/" element={<ComApp />} />
          </Route>
          <Route element={<AuthConfirm />}>
            <Route path="/login" element={<UserLogin />} />
          </Route>
          <Route element={<AuthConfirm />}>
            <Route path="/register" element={<UserRegister />} />
          </Route>
          <Route element={<RequireAuth />}>
            <Route path="/home" element={<ComHome />} />
            <Route path="/comregister" element={<ComRegister />} />
            <Route path="/confirmregister" element={<ConfirmRegister />} />
            <Route path="/certificate" element={<Certificate />} />
            <Route path="/activregister" element={<ActivRegister />} />
            <Route path="/analisisregister" element={<AnalisisRegister />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/help" element={<Help />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
