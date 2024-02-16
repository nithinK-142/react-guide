import { z } from "zod";

export const userSchema = z
  .object({
    name: z.string().min(3, "Name's too short!").max(30, "Name's too long!"),
    email: z.string().email(),
    age: z.number().min(18, "Underage are prohibited!").max(70),
    password: z
      .string()
      .min(4, "Password's too short!")
      .max(10, "Password's too long!"),
    repeatPassword: z.string(),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: "Passwords do not match!",
    path: ["repeatPassword"],
  });

export type UserData = z.infer<typeof userSchema>;

export type IDType = "name" | "email" | "age" | "password" | "repeatPassword";
