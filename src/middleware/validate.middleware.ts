import { NextFunction, Request, Response } from 'express';
import { AnyZodObject } from 'zod';

export const validate = (schema: AnyZodObject) => {
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      return next();
    } catch (error) {
      return res.status(400).json({
        status: 'error',
        message: 'Invalid input data',
        error: error,
      });
    }
  };
};
