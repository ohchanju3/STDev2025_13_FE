import { Navigate } from "react-router-dom";
import { ReactNode } from "react";

const PrivateRoute = ({ children }: { children?: ReactNode }) => {
  const accessToken = localStorage.getItem("access");
  const refreshToken = localStorage.getItem("refresh");

  if (!accessToken || !refreshToken) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
