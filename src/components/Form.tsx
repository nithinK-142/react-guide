import { IUser, validateUser } from "@/validations/user-validation";
import { useState } from "react";

const Form = () => {
  const [result, setResult] = useState<IUser | null>(null);

  const createUser: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const userData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    const validData = await validateUser(userData);
    if (!validData) {
      setResult(null);
      return <h2>Invalid Details!</h2>;
    } else {
      setResult(validData);
    }
  };
  return (
    <div className="flex flex-col items-center w-full">
      <form onSubmit={createUser} className="min-w-[28rem]">
        <div className="mb-5">
          <label htmlFor="text" className="label">
            Name
          </label>
          <input type="text" name="name" id="text" className="input" />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="label">
            Email
          </label>
          <input type="email" name="email" id="email" className="input" />
        </div>
        <div className="mb-5">
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="input"
          />
        </div>
        <button type="submit" className="btn">
          Validate
        </button>
      </form>
      <div className="min-w-[28rem] text-center pt-10">
        {result && (
          <>
            <p>{result.name}</p>
            <p>{result.email}</p>
            <p>{result.password}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Form;
