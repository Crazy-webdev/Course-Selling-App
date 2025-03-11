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
import { authenticateAdmin } from '../middleware/admin.middleware';

const adminRouter = express.Router();

adminRouter.post('/signup', validate(adminSignupSchema), adminSignup);
adminRouter.post('/signin', validate(adminSigninSchema), adminSignin);
adminRouter.post('/course', validate(courseSchema),authenticateAdmin, adminCourse);
adminRouter.get('/courses/bulk',authenticateAdmin, allCourses);

export default adminRouter;
