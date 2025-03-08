import { Request, Response } from "express";



const courses = (req:Request, res: Response ) => {
    res.send('courses');
}

export {
    courses,
}