import express from 'express';
import {
  adminCourse,
  adminSignin,
  adminSignup,
  allCourses,
} from '../controllers/admin.controller';

const adminRouter = express.Router();

adminRouter.post('/signup', adminSignup);
adminRouter.get('/signin', adminSignin);
adminRouter.post('/course', adminCourse);
// adminRouter.put('/course',adminCourse);
adminRouter.get('/course/bulk', allCourses);

export default adminRouter;
