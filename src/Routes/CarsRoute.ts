import { Router } from 'express';

const carsRoute = Router();

carsRoute.post(
  '/',
  (req, res, next) => new CarController(req, res, next).create(),
);

export default carsRoute;