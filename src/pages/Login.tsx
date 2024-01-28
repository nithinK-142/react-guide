import Button from "@/components/Button";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 pt-6 text-2xl">
      {/* <div>
        <label>UserName :</label>
        <input type="text" required />
      </div>
      <div>
        <label>Password :</label>
        <input type="password" required />
      </div> */}
      <Button text="Login" />
    </div>
  );
};

export default Login;
