import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

export const Layout = () => {
  const { isAuthenticated } = useContext(AuthContext)!;
  return (
    <>
      {isAuthenticated ? (
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      ) : (
        <Outlet />
      )}
    </>
  );
};
