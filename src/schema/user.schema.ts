import { object, string } from "zod";

export const createUserSchema = object({
  body: object({
    name: string({
      required_error: "Name is a required field",
    }),
    password: string({
      required_error: "Password is required",
    }).regex(
      new RegExp(
        "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$"
      ),
      "Password must be minimum eight characters, at least one letter, one number and one special character"
    ),
    confirmPassword: string({
        required_error: "Password confirmation is required",
    }),
    email: string({
        required_error: "Email is required"
    }).email("Please enter a valid email")
  }).refine((data) => data.password === data.confirmPassword, {
      message: "Passwords do not match",
      path: ['confirmPassword']
  }),
});
