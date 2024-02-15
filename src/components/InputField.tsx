import { UserSchemeType } from "@/validations/user-validation";
import { UseFormRegister } from "react-hook-form";

export interface InputFieldProps {
  label: string;
  id: "name" | "email" | "password" | "repeatPassword";
  type: string;
  register: UseFormRegister<UserSchemeType>;
  errorMessage?: string;
}
const InputField: React.FC<InputFieldProps> = ({
  label,
  id,
  type,
  register,
  errorMessage,
}) => {
  return (
    <div className="relative mb-5">
      <label htmlFor={id} className="label">
        {label}
      </label>
      <input type={type} id={id} className="input" {...register(id)} required />
      <span className="absolute right-0 pt-1 text-sm font-medium text-red-600">
        {errorMessage}
      </span>
    </div>
  );
};

export default InputField;
