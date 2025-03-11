import express from 'express';
import {
  adminCourse,
  adminSignin,
  adminSignup,
  allCourses,
} from '../controllers/admin.controller';
import { validate } from '../middleware/validate.middleware';
import {
  adminSigninSchema,
  adminSignupSchema,
  courseSchema,
} from '../schemas/admin.schema';

const adminRouter = express.Router();

adminRouter.post('/signup', validate(adminSignupSchema), adminSignup);
adminRouter.post('/signin', validate(adminSigninSchema), adminSignin);
adminRouter.post('/course', validate(courseSchema), adminCourse);
adminRouter.get('/course/bulk', allCourses);

export default adminRouter;
