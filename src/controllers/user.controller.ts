import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import { userService } from '../services/user.service';

const signup = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    await userService.userSignup(req.body);

    res.status(201).json({
      status: 'success',
    });
  }
);
const signin = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const { token } = await userService.userSignin(req.body);

    res.setHeader('Authorization', `Bearer ${token}`);

    res.status(200).json({
      status: 'success',
    });
  }
);
const makePurchase = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {

    const userId = req.user?._id;

    if (!userId) {
      throw new Error('Trouble getting userId');
    }

    const courseId = req.params.courseId;

    await userService.purchaseCourse(userId, courseId);

    res.status(201).json({
      status: 'success',
    });
  }
);
const purchases = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const userId = req.user?._id;
    if (!userId) {
      throw new Error('Trouble getting userId');
    }
    const courses = await userService.purchasedCourses(userId);
    res.status(201).json({
      status: 'success',
      data:courses
    });
  }
);

export { signup, signin, purchases, makePurchase };
