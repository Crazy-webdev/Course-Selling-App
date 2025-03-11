import { NextFunction, Request, Response } from 'express';

export const errorHandler = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  err: any,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
) => {
  if (err.name === 'JsonWebTokenError' || err.name === 'TokenExpiredError') {
    res.status(401).json({
      status: 'fail',
      message: 'Invalid or expired token',
    });
  } else {
    const statusCode = err.statusCode || 500;

    res.status(statusCode).json({
      status: 'error',
      message: err.message || 'Internal Server Error',
    });
  }
};
