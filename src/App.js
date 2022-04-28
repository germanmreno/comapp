import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ComApp from "./components/ComApp";
import ComRegister from "./components/ComRegister";
import UserRegister from "./components/UserRegister";
import UserLogin from "./components/UserLogin";
import ConfirmRegister from "./components/ConfirmRegister";
import ComHome from "./components/ComHome";
import ActivRegister from "./components/ActivRegister";


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
        <Route path="/activregister" element={<ActivRegister />} />
        </Routes>
      </BrowserRouter>
    );
  }

export default App;
