import { Router } from 'express';
import MealController from '../controllers/MealController';

// import middlewares
import verifyMealIdInputs from '../middlewares/verifyMealIdInputs';

const router = Router();

// destructure meal controller
const { meal } = MealController;

// destructure middleware
const { mealIdBody } = verifyMealIdInputs;

// meal endpoint
router.use(mealIdBody);
router.post('/', meal);

export default router;
