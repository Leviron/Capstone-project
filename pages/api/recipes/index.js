import Recipe from "../../../components/db/models/Recipe";
import dbConnect from "../../../components/db/connect";

export default async function handler(request, response) {
  await dbConnect();
  if (request.method === "GET") {
    const recipes = await Recipe.find();
    response.status(201).json(recipes);
    return;
  }
  if (request.method === "POST") {
    try {
      const newRecipe = new Recipe(request.body);
      await newRecipe.save();
      response.status(200).json({ success: true, data: newRecipe });
      return;
    } catch (error) {
      console.error("Error saving recipe:", error);
      response.status(500).json({ message: "Internal server error" });
      return;
    }
  } else {
    response.status(400).json({ success: false });
  }
}
