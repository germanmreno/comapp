import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ComApp from "./components/ComApp";
import ComRegister from "./components/ComRegister";
import UserRegister from "./components/UserRegister";
import UserLogin from "./components/UserLogin";


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

export default App;
