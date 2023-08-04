import Recipe from "../../../components/db/models/Recipe";
import dbConnect from "../../../components/db/connect";

export default async function handler(request, response) {
  await dbConnect();

  const { id } = request.query;

  if (request.method === "GET") {
    try {
      const recipes = await Recipe.findById(id);
      if (!recipes) {
        return response.status(404).json({ message: "Recipe not found" });
      }
      response.status(200).json(recipes);
    } catch (error) {
      console.error("Error finding recipe:", error);
      response.status(500).json({ message: "Internal server error" });
    }
  }

  if (request.method === "DELETE") {
    try {
      const deletedRecipe = await Recipe.findByIdAndDelete(id);
      if (!deletedRecipe) {
        return response.status(404).json({ message: "Recipe not found" });
      }
      response.status(200).json(deletedRecipe);
    } catch (error) {
      console.error("Error deleting recipe:", error);
      response.status(500).json({ message: "Internal server error" });
    }
  }
}
