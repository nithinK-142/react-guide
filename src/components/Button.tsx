import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Button = ({ text }: { text: string }) => {
  const { logout } = useContext(AuthContext)!;

  const navigate = useNavigate();

  const handleToggleAuth = () => {
    logout();
    navigate("/login");
  };
  return (
    <Link
      to="#"
      onClick={handleToggleAuth}
      className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
    >
      {text}
    </Link>
  );
};

export default Button;
