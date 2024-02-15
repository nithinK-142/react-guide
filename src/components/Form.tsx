import { UserSchemeType, userSchema } from "@/validations/user-validation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "./InputField";

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
        <InputField
          label="Name"
          id="name"
          type="text"
          register={register}
          errorMessage={errors.name?.message}
        />
        <InputField
          label="Email"
          id="email"
          type="text"
          register={register}
          errorMessage={errors.email?.message}
        />
        <InputField
          label="Password"
          id="password"
          type="password"
          register={register}
          errorMessage={errors.password?.message}
        />
        <InputField
          label="Repeat password"
          id="repeatPassword"
          type="password"
          register={register}
          errorMessage={errors.repeatPassword?.message}
        />
        <button type="submit" className="mt-6 btn">
          Validate
        </button>
      </form>
    </div>
  );
};

export default Form;
