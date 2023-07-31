import dbConnect from "../../components/db/connect";
import Recipes from "../../components/db/models/Schema";

export default async function handler(request, response) {
  await dbConnect();

  const { id } = request.query;

  if (request.method === "GET") {
    const recipe = await Recipes.findById(id);
    if (!recipe) {
      return response.status(404).json({ message: "Recipe not found" });
    }
    return response.status(200).json({ recipe });
  }
}
