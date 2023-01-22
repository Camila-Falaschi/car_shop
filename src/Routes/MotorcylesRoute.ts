import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const motorcyclesRoute = Router();

motorcyclesRoute.post(
  '/',
  (req, res, next) => new MotorcycleController(req, res, next).create(),
);

export default motorcyclesRoute;