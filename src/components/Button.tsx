import { AuthContext } from "@/context/AuthProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Button = ({ text }: { text: string }) => {
  const { toggleAuth } = useContext(AuthContext)!;
  return (
    <Link
      to="#"
      onClick={toggleAuth}
      className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
    >
      {text}
    </Link>
  );
};

export default Button;
