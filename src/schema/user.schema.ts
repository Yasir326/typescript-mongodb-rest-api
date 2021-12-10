import { object, string, TypeOf } from "zod";

const passwordRegExp = new RegExp(
  "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
);

export const createUserSchema = object({
  body: object({
    name: string({
      required_error: "Name is a required field",
    }),
    password: string({
      required_error: "Password is required",
    }).regex(
      passwordRegExp,
      "Password must be minimum eight characters, at least one letter, one number and one special character"
    ),
    passwordConfirmation: string({
      required_error: "Password confirmation is required",
    }),
    email: string({
      required_error: "Email is required",
    }).email("Please enter a valid email"),
  }).refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords do not match",
    path: ["passwordConfirmation"],
  }),
});

export type CreateUserInput = Omit<
  TypeOf<typeof createUserSchema>,
  "body.confirmPassword"
>;
