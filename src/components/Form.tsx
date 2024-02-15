import { UserSchemeType, userSchema } from "@/validations/user-validation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const Form = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  const onSubmit = (data: UserSchemeType) => {
    console.log(data);
    alert("Form Submitted!");
  };

  return (
    <div className="flex flex-col items-center w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="min-w-[28rem]">
        <div className="relative mb-5">
          <label htmlFor="text" className="label">
            Name
          </label>
          <input type="text" className="input" {...register("name")} />
          <span className="absolute right-0 text-sm text-red-600">
            {" "}
            {errors.name?.message}{" "}
          </span>
        </div>
        <div className="relative mb-5">
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            type="text"
            id="email"
            className="input"
            {...register("email")}
          />
          <span className="absolute right-0 text-sm text-red-600">
            {" "}
            {errors.email?.message}{" "}
          </span>
        </div>
        <div className="relative mb-5">
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="input"
            {...register("password")}
          />
          <span className="absolute right-0 text-sm text-red-600">
            {" "}
            {errors.password?.message}{" "}
          </span>
        </div>
        <div className="relative mb-5">
          <label htmlFor="repeatPassword" className="label">
            Repeat password
          </label>
          <input
            type="password"
            id="repeatPassword"
            className="input"
            {...register("repeatPassword")}
          />
          <span className="absolute right-0 text-sm text-red-600">
            {" "}
            {errors.repeatPassword?.message}{" "}
          </span>
        </div>
        <button type="submit" className="btn">
          Validate
        </button>
      </form>
    </div>
  );
};

export default Form;
