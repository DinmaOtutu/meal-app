import validationErrorHandler from './validationErrorHandler';

const verifyMealIdInputs = {
  mealIdBody: (req, res, next) => {
    req.check('mealIds', 'meal ID is required').trim().notEmpty();
    req.check('mealIds', 'meal ID should be an array').isArray();

    validationErrorHandler(req, res, next);
  }
};

export default verifyMealIdInputs;
