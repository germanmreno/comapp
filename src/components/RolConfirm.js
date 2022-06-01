import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";

function RolConfirm() {
  const {
    user: { logged, rol },
  } = useContext(AuthContext);

  if (!logged) {
    return <Navigate to="/login" replace />;
  }

  if (rol !== "admin") {
    return <Navigate to="/home" replace />;
  }

  return <Outlet />;
}

export default RolConfirm;
