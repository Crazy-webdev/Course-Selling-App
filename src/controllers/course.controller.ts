import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import { courseService } from '../services/courses.service';

const courses = asyncHandler(
  async (req:Request,res:Response)=>{
    const dashboardCourses = await courseService.dashboardCourses();
    res.status(200).json({
      status: 'success',
      data: dashboardCourses,
    });
  }
)

export { courses };
