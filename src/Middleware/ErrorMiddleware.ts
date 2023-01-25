import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import { ErrorCatalogy, ErrorTypes } from '../Utils/ErrorTypes';

const ErrorMiddleware: ErrorRequestHandler = (
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const messageErrors = error.message as ErrorTypes;
  const mapError = ErrorCatalogy[messageErrors];
  if (mapError) {
    const { httpStatus, message } = mapError;
    return res.status(httpStatus).json({ message });
  }
  return res.status(500).end();
};

export default ErrorMiddleware;