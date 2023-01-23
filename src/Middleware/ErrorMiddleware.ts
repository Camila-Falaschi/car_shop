import { NextFunction, Request, Response } from 'express';
import AppErrors from '../Utils/AppErrors';

class ErrorMiddleware {
  public static handler(
    error: Error,
    _req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const { status, message } = error as AppErrors;
    res.status(status || 500).json({ message });
    next();
  }
}

export default ErrorMiddleware;