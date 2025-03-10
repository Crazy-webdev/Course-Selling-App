import { z } from 'zod';

export const passwordSchema = z
  .string()
  .min(8)
  .max(32)
  .regex(
    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
    'Password must be 8 characters long with at least 1 uppercase letter, 1 number, and 1 special character.'
  );

export const adminSignupSchema = z.object({
  email: z.string().email(),
  firstName: z.string().min(3).max(50),
  lastName: z.string().min(3).max(50),
  password: passwordSchema,
});

export const adminSigninSchema = z.object({
  email: z.string().email(),
  password: passwordSchema,
});

export const courseSchema = z.object({
  title: z.string().min(3).max(50),
  description: z.string().min(3).max(255),
  price: z.number().positive(),
  imageUrl: z.string().url(),
});
