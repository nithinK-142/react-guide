import { AuthContext, AuthContextType } from "@/context/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { isLoading, authenticateUser } =
    useContext<AuthContextType>(AuthContext);
  const navigate = useNavigate();

  const handleClick = async (provider: string) => {
    try {
      await authenticateUser(provider);
      navigate("/");
    } catch (error) {
      console.error("Authentication failed:", error);
    }
  };
  return (
    <div className="flex flex-col items-center pt-40 sm:pt-48">
      <h1
        className="mb-10 text-2xl text-center text-white sm:text-3xl md:text-4xl"
        style={{ fontFamily: "Lilita One, cursive" }}
      >
        Whats it gonna be, Google or Github?
      </h1>
      <div className="flex space-x-4">
        <span className="w-16 h-16 bg-white rounded-full select-none">
          <button
            className="bg-opacity-0 cursor-pointer"
            onClick={() => handleClick("Google")}
            disabled={isLoading}
          >
            <img src="./gg.png" alt="Big G" className="w-16 h-16" />
          </button>
        </span>

        <span className="flex justify-center w-16 h-16 bg-white rounded-full select-none align-center">
          <button
            className="bg-opacity-0 cursor-pointer"
            onClick={() => handleClick("GitHub")}
            disabled={isLoading}
          >
            <img src="./github.svg" alt="GitHub Icon" className="w-12 h-12" />
          </button>
        </span>
      </div>
    </div>
  );
};

export default Login;
