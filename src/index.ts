import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import userRouter from './routes/user.routes';
import courseRouter from './routes/course.routes';
import adminRouter from './routes/admin.routes';
import connectDb from './config/db';
import { errorHandler } from './utils/error-handler';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const app = express();
const port = process.env.PORT;

connectDb();

app.use(express.json());

app.use('/api/v1/user', userRouter);

app.use('/api/v1/courses', courseRouter);

app.use('/api/v1/admin', adminRouter);

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});

app.use(errorHandler);
