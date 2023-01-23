import { Router } from 'express';
import CarController from '../Controllers/CarController';

const carsRoute = Router();

carsRoute.post(
  '/',
  (req, res, next) => new CarController(req, res, next).create(),
);
carsRoute.get(
  '/',
  (req, res, next) => new CarController(req, res, next).getAllCars(),
);
carsRoute.get(
  '/:id',
  (req, res, next) => new CarController(req, res, next).getCarById(),
);

export default carsRoute;