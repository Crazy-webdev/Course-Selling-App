import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import userRouter from './routes/user.routes';
import courseRouter from './routes/course.routes';

dotenv.config({ path : path.resolve(__dirname, '../.env')});


const app = express();
const port = process.env.PORT

app.use(express.json());

app.use('/user',userRouter);
app.use('/courses',courseRouter);

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});

