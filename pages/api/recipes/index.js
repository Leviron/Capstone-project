import dbConnect from "../../../db/connect";
import Recipe from "../../../db/models/Recipe";

export default async function handler(request, response) {
  await dbConnect();
  if (request.method === "GET") {
    const recipes = await Recipe.find();
    response.status(200).json(recipes);
  } else if (request.method === "POST") {
    try {
      const newRecipe = new Recipe(request.body);
      await newRecipe.save();
      response.status(201).json({ success: true, data: newRecipe });
    } catch (error) {
      console.error("Error saving recipe:", error);
      response.status(500).json({ message: "Internal server error" });
    }
  } else if (request.method === "PUT") {
    try {
      const { id } = request.query;
      const updatedRecipe = await Recipe.findByIdAndUpdate(id, request.body, {
        new: true,
        runValidators: true,
      });
      if (!updatedRecipe) {
        response.status(404).json({ message: "Recipe not found" });
      } else {
        response.status(200).json({ success: true, data: updatedRecipe });
      }
    } catch (error) {
      console.error("Error updating recipe:", error);
      response.status(500).json({ message: "Internal server error" });
    }
  } else {
    response.status(400).json({ success: false });
  }
}
