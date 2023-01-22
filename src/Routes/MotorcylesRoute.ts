import { Router } from 'express';

const motorcyclesRoute = Router();

motorcyclesRoute.post(
  '/',
  (req, res, next) => new MotorcycleController(req, res, next).create(),
);

export default motorcyclesRoute;