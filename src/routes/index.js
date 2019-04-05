
import { Router } from 'express';
import mealRoutes from './meal';

const app = Router();

app.use('/meal', mealRoutes);

export default app;
