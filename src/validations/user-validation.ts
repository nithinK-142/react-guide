import { object, string, ref } from "yup";

export const userSchema = object().shape({
  name: string().min(4).required(),
  email: string().email("not a valid email").required(),
  password: string().min(4).max(10).required(),
  repeatPassword: string()
    .required()
    .oneOf([ref("password")], "Passwords must match"),
});

export type UserSchemeType = {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
};
