import { useEffect, useMemo, useState } from "react";
import SkeletonLoader from "./SkeletonLoader";

interface User {
  name: {
    first: string;
    last: string;
  };
  picture: {
    medium: string;
  };
}

const Shows: React.FC = () => {
  const [data, setData] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://randomuser.me/api/?results=6");
      const { results } = await response.json();
      console.log(results);
      setData(results);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const users = useMemo(() => data, [data]);

  return (
    <div className="flex flex-col items-center justify-center">
      <button
        onClick={fetchUsers}
        disabled={isLoading}
        className="px-4 py-1 my-8 text-black transition-colors duration-500 rounded-lg bg-white/80 active:scale-90"
      >
        Fetch User
      </button>
      {isLoading ? (
        <SkeletonLoader />
      ) : (
        <ul className="grid grid-cols-2 gap-x-10">
          {users.map((user, index) => (
            <li
              key={index}
              className="flex flex-col items-center p-4 mb-6 rounded-lg bg-white/10"
            >
              <img
                src={user.picture.medium}
                alt="User Thumbnail"
                className="rounded-full"
              />
              <span>{`${user.name.first} ${user.name.last}`}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Shows;
