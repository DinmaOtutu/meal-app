/* eslint-disable func-names */
import mongoose, { Schema } from 'mongoose';


const MealSchema = new Schema({
  ingredients: {
      type: Array
  },
  mealId: {
      type: Number
  },
},
{
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

const Meal = mongoose.model('Meal', MealSchema);

export default Meal;
