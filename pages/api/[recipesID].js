// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from "../../components/db/connect";
import recipes from "../../components/db/models/Schema";

export default async function handler(request, response) {
  await dbConnect();

  const { recipesID } = request.query;

  if (request.method === "GET") {
    const recipe = await recipes.findById(recipesID);
    if (!recipesID) {
      return response.status(404).json({ message: "Recipe not found" });
    }
    return response.status(200).json({ recipe });
  }
}
