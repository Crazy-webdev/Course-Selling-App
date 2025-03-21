import { z } from 'zod';

export const passwordSchema = z
  .string()
  .min(8)
  .max(32)
  .regex(
    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
    'Password must be 8 characters long with at least 1 uppercase letter, 1 number, and 1 special character.'
  );

export const userSignupSchema = z.object({
  email: z.string().email(),
  firstName: z.string().min(3).max(50),
  lastName: z.string().min(3).max(50),
  password: passwordSchema,
});

export const userSigninSchema = z.object({
  email: z.string().email(),
  password: passwordSchema,
});

