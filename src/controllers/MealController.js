import Meal from '../models/Meal';
import MealRepository from '../repositories/MealRepository';


/**
 * @class MealController
 */
class MealController {
    /**
     *@description Accepts meal id to return the meal with shortest ingredients
     *@param  {Object} req - Request sent to the router
     *@param  {object} res - Response sent from the controller
     *@returns {object} - status code, returns meal ID and its ingredients
     *@memberof MealController
     */
static async meal(req, res) {
    try {
const { mealId } = req.body;

    } catch (error) {
        return res.status(500).json({
            message: 'Failed to return the meal with shortest ingredients',
          });
    }
}
}

export default MealController;
