import { object, string } from "yup";

export const userSchema = object().shape({
  name: string().min(3).max(30).required(),
  email: string().email("Invalid email").required(),
  password: string().min(4, "Too Short!").max(10, "Too Long!").required(),
});
