import { useLoaderData } from "react-router-dom";

interface GitHubUserData {
  following: number;
  avatar_url: string;
}

const Github = () => {
  const data = useLoaderData() as GitHubUserData;
  
  if (!data) return <div className="text-center">Loading...</div>;

  return (
    <div className="flex flex-col items-center p-4 m-4 text-3xl text-white bg-gray-600">
      Github followers: {data.following}
      <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  );
};

export default Github;
