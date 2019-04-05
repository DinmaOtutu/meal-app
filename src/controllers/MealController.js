import axios from 'axios';

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
      // array to store meal IDs thay do not exist in https://themealdb.com/api.php
      const invalidMealId = [];

      const { mealIds } = req.body;
      if (mealIds !== Number) {
        return res.status(400).json({
          message: 'Sorry, meal IDs are only numbers',
        });
      }

      // mapping through the list of ids in the request body and making axios call
      const mealObjects = await Promise.all(mealIds.map(async (mealId) => {
        // to store the list of Ingredients that are not empty or null
        const lists = [];

        // making a call to https://themealdb.com/api.php's endpoint to get each particular meal with their id
        const mealsId = (await axios.get(`${MEAL_URL}${mealId}`)).data;

        // check if the meal id exist in https://themealdb.com/api.php, if it doesn't, push to the invalid meal id array
        if (mealsId.meals === null) return invalidMealId.push(mealId);

        // when the object response from https://themealdb.com/api.php is returned
        // it comes in form of an array of object, so SELECT the array
        const getMealObject = mealsId.meals[0];

        // get the keys for each object in the array
        const mealObject = Object.keys(getMealObject);

        // filter the keys returned and select those which have strIngredients
        const allMealIngredients = mealObject.filter(meal => meal.includes('strIngredient'));

        // map the filtered object and get the keys of that are neither empty strings nor null
        allMealIngredients.map((key) => {
          if (getMealObject[key] !== '' && getMealObject[key] !== null) lists.push(key);
        });
        // get the length of the ingredients that was pushed into the list array
        const lengthOfIngredients = lists.length;
        // return the id and the length of the ingredients
        return { mealId, lengthOfIngredients };
      }));

      // Check the array of invalid id, return a message to the user
      if (invalidMealId.length) {
        return res.status(400).json({
          message: `Sorry, this meal Id(s) ${(invalidMealId).toString()} is/are invalid`,
        });
      }
      // For each IDs check which has the least number of ingredients
      const leastIngredientsMeal = mealObjects.reduce((prev, curr) => (prev.lengthOfIngredients < curr.lengthOfIngredients ? prev : curr));
      return res.status(200).json({
        message: `The meal with ID: ${leastIngredientsMeal.mealId} has the least number of ingredients (${leastIngredientsMeal.lengthOfIngredients})`
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Failed to return the meal with the least ingredients',
      });
    }
  }
}

export default MealController;
