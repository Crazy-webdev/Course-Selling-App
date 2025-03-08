import express from 'express';
import { courses, makePurchase, purchases, signin, signup } from '../controllers/user.controller';
const userRouter = express.Router();

userRouter.post('/signup', signup);
userRouter.get('/signin', signin);
userRouter.get('/purchases', purchases);
userRouter.post('/purchase', makePurchase);
userRouter.get('/courses', courses);

export default userRouter;