import express from 'express';
import { courses } from '../controllers/user.controller';
const courseRouter = express.Router();

courseRouter.get('/', courses);

export default courseRouter;