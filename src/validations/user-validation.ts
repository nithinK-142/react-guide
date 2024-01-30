import * as yup from "yup";

export const userSchema = yup.object().shape({
  name: yup.string().min(4).required(),
  email: yup.string().email().required(),
  password: yup.string().min(4).max(10).required(),
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
    if (error instanceof yup.ValidationError) alert(error.message);
  }
};
