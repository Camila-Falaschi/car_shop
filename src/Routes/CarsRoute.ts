import { Router } from 'express';
import CarController from '../Controllers/CarController';
import Validations from '../Middleware/Validations';

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
  (req, res, next) => new Validations(req, res, next).validateId(),
  (req, res, next) => new CarController(req, res, next).getCarById(),
);
carsRoute.put(
  '/:id',
  (req, res, next) => new Validations(req, res, next).validateId(),
  (req, res, next) => new CarController(req, res, next).update(),
);

export default carsRoute;