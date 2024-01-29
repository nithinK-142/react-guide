import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useContext(AuthContext)!;
  return isAuthenticated ? children : <Navigate to={"/login"} />;
};

export default PrivateRoute;
