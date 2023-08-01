import mongoose from "mongoose";
const { Schema } = mongoose;

const recipeSchema = new Schema({
  name: { type: String, required: true },
  ingredients: [{ type: Object, required: true }],
  steps: { type: [String], required: true },
  timers: { type: [Number], required: true },
  imageURL: { type: String, required: true },
});

const Recipe = mongoose.models.Recipe || mongoose.model("Recipe", recipeSchema);

export default Recipe;
