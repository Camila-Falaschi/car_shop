import { Router } from 'express';
import carsRoute from './CarsRoute';
import motorcyclesRoute from './MotorcylesRoute';

const routes = Router();

routes.use('/cars', carsRoute);
routes.use('/motorcycles', motorcyclesRoute);

export default routes;