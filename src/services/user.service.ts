import { PurchasedCourses, UserSigninInput, UserSignupInput } from '../interfaces/user.interface';
import PurchaseModel from '../models/purchase.models';
import UserModel from '../models/user.models';
import { comparePassword, encryptPassword } from '../utils/password.util';
import jwt from 'jsonwebtoken';

export class UserService {
  async userSignup(data: UserSignupInput): Promise<void> {
    const { email, password, firstName, lastName } = data;
    const hashedPassword = await encryptPassword(password);
    const existingUser = await UserModel.findOne({ email });

    if (existingUser) {
      throw new Error('Already existing user');
    }

    const user = await UserModel.create({
      email,
      firstName,
      lastName,
      password: hashedPassword,
    });

    if (!user) {
      throw new Error('Error in creating user. Please try again');
    }
    return;
  }

  async userSignin(data: UserSigninInput): Promise<Record<string, string>> {
    const { email, password } = data;
    const user = await UserModel.findOne({
      email,
    });

    if (!user) {
      throw new Error('User not found');
    }

    const isValidPassword = await comparePassword(password, user.password);

    if (!isValidPassword) {
      throw new Error('Invalid Password');
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);

    if (!token) {
      throw new Error('Error while generating token. Please try again');
    }
    return { token };
  }

  async purchaseCourse(userId: string, courseId: string): Promise<void> {
    const isPurchased = await PurchaseModel.findOne({});

    if (isPurchased) {
      throw new Error('Course is already purchased');
    }
    await PurchaseModel.create(userId, courseId);
    return;
  }

  async purchasedCourses(userId: string): Promise<PurchasedCourses[]> {
    const getCourses = await PurchaseModel.find({ userId });

    if (!getCourses.length || !getCourses) {
      return [];
    }
    console.log(`getCourses`,getCourses);

    return getCourses;
  }
}

export const userService = new UserService();
