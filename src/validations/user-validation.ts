import { object, string, ValidationError } from "yup";

export const userSchema = object().shape({
  name: string().min(4).required(),
  email: string().email().required(),
  password: string().min(4).max(10).required(),
});

export interface IUser {
  name: string;
  email: string;
  password: string;
}

export const validateUser = async (userData: IUser) => {
  try {
    const isValid = await userSchema.validate(userData);
    return isValid;
  } catch (error) {
    if (error instanceof ValidationError) alert(error.message);
  }
};
