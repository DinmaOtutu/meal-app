import axios from 'axios';
import Meal from '../models/Meal';
import MealRepository from '../repositories/MealRepository';
import responses from '../utils/responses';

const MEAL_URL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
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
      const lists = [];
      const { mealId } = req.body;
      const mealsId = (await axios.get(`${MEAL_URL}${mealId}`)).data;
      const mealObject = mealsId.meals[0];
      const mealObject1 = Object.keys(mealObject);
      const allMealIngredients = mealObject1.filter(meal => meal.includes('strIngredient'));
      allMealIngredients.map((key) => {
        if (mealObject[key] !== '' && mealObject[key] !== null) lists.push(key);
      });
      const lengthOfIngredients = lists.length;
      const options = {
        mealId,
        lists,
        lengthOfIngredients
      };
      const items = await MealRepository.create(Meal, options);
      return res.status(201).json(
        responses.success(201, 'successfully returned the meal with the least ingredients', items)
      );
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: 'Failed to return the meal with the least ingredients',
      });
    }
  }
}

export default MealController;
