import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ComApp from "./components/ComApp";
import ComRegister from "./components/ComRegister";
import UserRegister from "./components/UserRegister";
import UserLogin from "./components/UserLogin";
import ComHome from "./components/ComHome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ComApp />} />
        <Route
          path="https://comercializacioncvmprueba.netlify.app/login"
          element={<UserLogin />}
        />
        <Route
          path="https://comercializacioncvmprueba.netlify.app/register"
          element={<UserRegister />}
        />
        <Route
          path="https://comercializacioncvmprueba.netlify.app/home"
          element={<ComHome />}
        />
        <Route
          path="https://comercializacioncvmprueba.netlify.app/comregister"
          element={<ComRegister />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
