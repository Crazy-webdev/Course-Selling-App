import express from "express";
import dotenv from "dotenv";
import path from "path";
import userRouter from "./routes/user.routes";
import courseRouter from "./routes/course.routes";
import adminRouter from "./routes/admin.routes";

dotenv.config({ path: path.resolve(__dirname, "../.env") });

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/courses", courseRouter);
app.use("/api/v1/admin", adminRouter);

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
