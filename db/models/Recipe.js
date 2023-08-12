import mongoose from "mongoose";
const { Schema } = mongoose;

const recipeSchema = new Schema({
  name: { type: String, required: true },
  ingredients: [{ type: Object, required: true }],
  steps: { type: [String], required: false },
  likes: { type: Number, default: 0 },
  isFavorite: { type: Boolean, default: false },
  image: {
    url: { type: String, required: false },
    width: { type: Number, required: false },
    height: { type: Number, required: false },
  },
});

const Recipe = mongoose.models.Recipe || mongoose.model("Recipe", recipeSchema);

export default Recipe;
