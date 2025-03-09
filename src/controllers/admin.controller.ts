import { Request, Response } from "express";

const adminSignup = (req: Request, res: Response) => {
  res.send("signup");
};

const adminSignin = (req: Request, res: Response) => {
  res.json({ msg: "signin" });
};

const adminCourse = (req: Request, res: Response) => {
  res.json({ msg: "adminCourse" });
};

const allCourses = (req: Request, res: Response) => {
  res.json({ msg: "allCourses" });
};

export { adminSignin, adminSignup, adminCourse, allCourses };
