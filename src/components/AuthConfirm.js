import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";

function AuthConfirm() {
  const {
    user: { logged, rol },
  } = useContext(AuthContext);

  if (logged && rol === "admin") {
    return <Navigate to="/companies" replace />;
  }

  if (logged) {
    return <Navigate to="/home" replace />;
  }

  return <Outlet />;
}

export default AuthConfirm;
