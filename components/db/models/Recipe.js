import mongoose from "mongoose";
const { Schema } = mongoose;

const recipeSchema = new Schema({
  name: { type: String, required: true },
  ingredients: [{ type: Object, required: true }],
  steps: { type: [String], required: false },
  timers: { type: [Number], required: false },
  imageURL: { type: String, required: false },
});

const Recipe = mongoose.models.Recipe || mongoose.model("Recipe", recipeSchema);

export default Recipe;
