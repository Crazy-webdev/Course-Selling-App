import express from 'express';
import { makePurchase, purchases, signin, signup } from '../controllers/user.controller';
import { userSigninSchema, userSignupSchema } from '../schemas/user.schema';
import { validate } from '../middleware/validate.middleware';
import { authenticate } from '../middleware/admin.middleware';

const userRouter = express.Router();

userRouter.post('/signup',validate(userSignupSchema), signup);

userRouter.post('/signin',validate(userSigninSchema), signin);

userRouter.post('/purchase/:courseId',authenticate, makePurchase);

userRouter.get('/purchases',authenticate, purchases);

export default userRouter;