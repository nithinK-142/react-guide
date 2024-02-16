import {
  object,
  string,
  email,
  Output,
  minLength,
  maxLength,
  minValue,
  maxValue,
  number,
  forward,
  custom,
} from "valibot";

export const userSchema = object(
  {
    name: string([
      minLength(3, "Name's too short!"),
      maxLength(30, "Name's too long!"),
    ]),
    email: string([email("Invalid emai!")]),
    age: number([minValue(18, "Underage are prohibited!"), maxValue(70)]),
    password: string([
      minLength(4, "Password's too short!"),
      maxLength(10, "Password's too long!"),
    ]),
    repeatPassword: string(),
  },
  [
    forward(
      custom(
        (input) => input.password === input.repeatPassword,
        "Passwords do not match."
      ),
      ["repeatPassword"]
    ),
  ]
);

export type UserData = Output<typeof userSchema>;

export type IDType = "name" | "email" | "age" | "password" | "repeatPassword";
