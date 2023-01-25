import express from 'express';
import ErrorMiddleware from './Middleware/ErrorMiddleware';
import routes from './Routes/Routes';

const app = express();

app.use(express.json());
app.use(routes);
app.use(ErrorMiddleware.handler);

export default app;
