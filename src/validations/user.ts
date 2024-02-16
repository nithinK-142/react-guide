import { ZodType, z } from "zod";

export const userSchema: ZodType<UserData> = z
  .object({
    name: z.string().min(3, "Name's too short!").max(30, "Name's too long!"),
    email: z.string().email(),
    age: z.number().min(18, "Underage are prohibited!").max(70),
    password: z
      .string()
      .min(4, "Password's too short!")
      .max(10, "Password's too long!"),
    repeatPassword: z
      .string()
      .min(4, "Passwords do not match!")
      .max(10, "Passwords do not match!"),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: "Passwords do not match!",
    path: ["repeatPassword"],
  });

export type UserData = {
  name: string;
  email: string;
  age: number;
  password: string;
  repeatPassword: string;
};
