import { UserData, userSchema } from "@/validations/user";
import { SubmitHandler, useForm } from "react-hook-form";
import InputField from "./InputField";
import { valibotResolver } from "@hookform/resolvers/valibot";

const Form = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<UserData>({
    resolver: valibotResolver(userSchema),
  });
  const formSubmit: SubmitHandler<UserData> = (data) => {
    console.log(data);
    alert("Form Submitted!");
  };

  return (
    <div className="flex flex-col items-center w-full">
      <form onSubmit={handleSubmit(formSubmit)} className="min-w-[28rem]">
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
          label="Age"
          id="age"
          type="number"
          register={register}
          isNumber={true}
          errorMessage={errors.age?.message}
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