import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import ComApp from "./components/ComApp";
import ComRegister from "./components/ComRegister";
import UserRegister from "./components/UserRegister";
import UserLogin from "./components/UserLogin";
import ConfirmRegister from "./components/ConfirmRegister";
import ComHome from "./components/ComHome";
import ActivRegister from "./components/ActivRegister";
import ComHomeAuth from "./components/ComHomeAuth";
import AnalisisRegister from "./components/AnalisisRegister";
import Contact from "./components/Contact";
import Certificate from "./components/Certificate";
import Help from "./components/Help";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ComApp />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/register" element={<UserRegister />} />
        <Route path="/home" element={<ComHome />} />
        <Route path="/comregister" element={<ComRegister />} />
        <Route path="/confirmregister" element={<ConfirmRegister />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/activregister" element={<ActivRegister />} />
        <Route path="/homeauth" element={<ComHomeAuth />} />
        <Route path="/analisisregister" element={<AnalisisRegister />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
