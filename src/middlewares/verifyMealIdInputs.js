import validationErrorHandler from './validationErrorHandler';

const verifyMealIdInputs = {
  mealIdBody: (req, res, next) => {
    req.check('mealId', 'meal ID is required').trim().notEmpty();
    req.check('mealId', 'meal ID should be an array').isArray();

    validationErrorHandler(req, res, next);
  }
};

export default verifyMealIdInputs;
