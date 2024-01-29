import { AuthContextType, AuthContext } from "@/context/AuthContext";
import { useContext } from "react";

const Home = () => {
  const { userData,logout } = useContext<AuthContextType>(AuthContext);
  return (
    <div className="flex flex-col items-center h-[80vh] pt-20">
      {userData?.userImageURL && (
        <img
          src={userData?.userImageURL}
          alt="UserImage"
          className="object-cover mb-10 rounded-full w-36 h-36"
        />
      )}

      <h1
        className="mb-10 text-2xl text-center text-white sm:text-3xl md:text-4xl"
      >
        Welcome {userData?.userName}!
      </h1>

      <h2 className="text-[#B2D7E8] mb-10 text-sm sm:text-2xl md:text-3xl font-semibold">
        Logged in with {userData?.authProvider}
      </h2>

      <button
        className="px-6 py-2 text-white bg-red-500 border-none rounded-md"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
};

export default Home;
