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
    const result = await adminService.signin(req.body);
    res.status(200).json({
      status: 'success',
      data: result,
    });
  }
);

const adminCourse = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const result = await adminService.createCourse(req.body);
    res.status(201).json({
      status: 'success',
      data: result,
    });
  }
);

const allCourses = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
      res.status(401).json({
        status:'fail',
        message:'Authorization header is missing',
      });
      return;
    }
    const result = await adminService.allCourses(authHeader);
    res.status(200).json({
      status: 'success',
      data: result,
    });
  }
);

export { adminSignin, adminSignup, adminCourse, allCourses };
