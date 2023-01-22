import { Router } from 'express';
import CarController from '../Controllers/CarController';

const carsRoute = Router();

carsRoute.post(
  '/',
  (req, res, next) => new CarController(req, res, next).create(),
);

export default carsRoute;