import {
  AdminSigninInput,
  AdminSignupInput,
  CourseInput,
} from '../interfaces/admin.interface';
import AdminModel from '../models/admin.models';
import CourseModel from '../models/courses.models';
import { comparePassword, encryptPassword } from '../utils/password.util';
import jwt from 'jsonwebtoken';

export class AdminService {
  async signup(data: AdminSignupInput): Promise<void> {
    const { email, password, firstName, lastName } = data;
    const hashedPassword = await encryptPassword(password);
    const existingUser = await AdminModel.findOne({ email });
    if (existingUser) {
      throw new Error('Already existing user');
    }
    const user = await AdminModel.create({
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

  async signin(data: AdminSigninInput): Promise<Record<string, string>> {
    const { email, password } = data;
    const user = await AdminModel.findOne({
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

  async createCourse(data: CourseInput,creatorId:string): Promise<void> {
    const { title } = data;
    const isSameTitle = await CourseModel.findOne({ title });
    if (isSameTitle) {
      throw new Error('Another Course has the same title');
    }

    const course = await CourseModel.create({
      ...data,
      creatorId
    });
    if (!course) {
      throw new Error('Error while creating the course. Please try again');
    }
    return;
  }

  async allCourses(creatorId: string) {
    const getCourses = await CourseModel.find({ creatorId });
    if (!getCourses) {
      throw new Error('Error while getting courses. Please try again');
    }
    return getCourses;
  }
}

export const adminService = new AdminService();
