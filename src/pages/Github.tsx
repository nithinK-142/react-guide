import { useEffect, useState } from "react";

interface UserData {
  following: number;
  avatar_url: string;
}

const Github = () => {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    fetch("https://api.github.com/users/nithinK-142")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUserData(data);
      });
  }, []);

  if (!userData) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center p-4 m-4 text-3xl text-white bg-gray-600">
      Github followers: {userData.following}
      <img src={userData.avatar_url} alt="Git picture" width={300} />
    </div>
  );
};

export default Github;
