import express from 'express';
import { makePurchase, purchases, signin, signup } from '../controllers/user.controller';
const userRouter = express.Router();

userRouter.post('/signup', signup);
userRouter.get('/signin', signin);
userRouter.get('/purchases', purchases);
userRouter.post('/purchase', makePurchase);

export default userRouter;