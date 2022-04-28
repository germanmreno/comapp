<<<<<<< HEAD
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
=======
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
>>>>>>> 390b36cf56fba69abf58295852639b4c9cf94ad8
import ComApp from "./components/ComApp";
import ComRegister from "./components/ComRegister";
import UserRegister from "./components/UserRegister";
import UserLogin from "./components/UserLogin";
<<<<<<< HEAD


function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <ComApp /> } />
          <Route path="/login" element={ <UserLogin /> } />
          <Route path="/register" element={ <UserRegister /> } />
          <Route path="/comregister" element={ <ComRegister />} />
        </Routes>
      </BrowserRouter>
    );
  }
=======
import ComHome from "./components/ComHome";
import ConfirmRegister from "./components/ConfirmRegister";

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
      </Routes>
    </BrowserRouter>
  );
}
>>>>>>> 390b36cf56fba69abf58295852639b4c9cf94ad8

export default App;
