import { Router } from 'express';
import ErrorMiddleware from '../Middleware/ErrorMiddleware';
import carsRoute from './CarsRoute';
import motorcyclesRoute from './MotorcylesRoute';

const routes = Router();

routes.use('/cars', ErrorMiddleware, carsRoute);
routes.use('/motorcycles', ErrorMiddleware, motorcyclesRoute);

export default routes;