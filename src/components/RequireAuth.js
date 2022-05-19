import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";

function RequireAuth() {
  const {
    user: { logged },
  } = useContext(AuthContext);

  if (!logged) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default RequireAuth;
