import { useParams } from "react-router-dom";
const User = () => {
  const params = useParams();
  if (!params) return <h1 className="pt-6 text-3xl text-center">User</h1>;
  return <h1 className="pt-6 text-3xl text-center">User {params.userid}</h1>;
};

export default User;
