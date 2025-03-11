import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import { adminService } from '../services/admin.service';

const adminSignup = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    await adminService.signup(req.body);

    res.status(201).json({
      status: 'success',
    });
  }
);
const adminSignin = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const { token } = await adminService.signin(req.body);

    res.setHeader('Authorization', `Bearer ${token}`);

    res.status(200).json({
      status: 'success',
    });
  }
);
const adminCourse = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const creatorId = req?.user?._id;

    if (!creatorId) {
      throw new Error('Trouble getting userId');
    }

    const result = await adminService.createCourse(req.body, creatorId);

    res.status(201).json({
      status: 'success',
      data: result,
    });
  }
);
const allCourses = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const creatorId = req.user?._id;

    if (!creatorId) {
      throw new Error('Trouble getting userId');
    }

    const result = await adminService.allCourses(creatorId);

    res.status(200).json({
      status: 'success',
      data: result,
    });
  }
);

export { adminSignin, adminSignup, adminCourse, allCourses };
