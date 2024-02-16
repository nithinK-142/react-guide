import { IDType, UserData } from "@/validations/user";
import { UseFormRegister } from "react-hook-form";

export interface InputFieldProps {
  label: string;
  id: IDType;
  type: string;
  register: UseFormRegister<UserData>;
  isNumber?: boolean;
  errorMessage?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  id,
  type,
  register,
  isNumber = false,
  errorMessage,
}) => {
  return (
    <div className="relative mb-5">
      <label htmlFor={id} className="label">
        {label}
      </label>
      <input
        type={type}
        id={id}
        className="input"
        {...register(id, { valueAsNumber: isNumber })}
        required
      />
      <span className="absolute right-0 pt-1 text-sm font-medium text-red-500">
        {errorMessage}
      </span>
    </div>
  );
};

export default InputField;
