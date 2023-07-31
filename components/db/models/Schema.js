import mongoose from "mongoose";
const { Schema } = mongoose;

const recipesSchema = new Schema({
  name: { type: String, required: true },
  ingredients: [{ type: Object, required: true }],
  steps: { type: [String], required: true },
  timers: { type: [Number], required: true },
  imageURL: { type: String, required: true },
  originalURL: { type: String },
});

const recipes =
  mongoose.models.recipesDB || mongoose.model("Recipe", recipesSchema);

export default recipes;
