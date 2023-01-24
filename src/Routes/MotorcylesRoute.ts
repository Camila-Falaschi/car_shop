import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const motorcyclesRoute = Router();

motorcyclesRoute.post(
  '/',
  (req, res, next) => new MotorcycleController(req, res, next).create(),
);
motorcyclesRoute.get(
  '/',
  (req, res, next) => new MotorcycleController(req, res, next).getAllMotorcycles(),
);
motorcyclesRoute.get(
  '/:id',
  (req, res, next) => new MotorcycleController(req, res, next).getMotorcycleById(),
);
motorcyclesRoute.put(
  '/:id',
  (req, res, next) => new MotorcycleController(req, res, next).update(),
);

export default motorcyclesRoute;