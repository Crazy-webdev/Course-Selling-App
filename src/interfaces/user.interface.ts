import { Types } from 'mongoose';

export interface UserSignupInput {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

export interface UserSigninInput {
  email: string;
  password: string;
}

export interface PurchasedCourses {
  userId: Types.ObjectId;
  courseId: Types.ObjectId;
}
