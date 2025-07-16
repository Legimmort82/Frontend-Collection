import { z } from "zod";
export const UserCompany = z.object({
  name: z.optional(z.string().max(255)),
  email: z.optional(z.string().max(255)),
  phone: z.optional(z.string().max(255)),
  fax: z.optional(z.string().max(255)),
  bio: z.optional(z.string().max(255)),
  address: z.optional(z.string().max(255)),
  website: z.optional(z.string().max(255)),
});

export const signUpSchema = z
  .object({
    username: userNameSchema,
    password: passwordSchema,
    confirm_password: passwordSchema,
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords don't match",
    path: ["confirm_password"], // path of error
  });
