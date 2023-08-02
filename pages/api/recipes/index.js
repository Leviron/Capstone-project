import Recipe from "../../../components/db/models/Recipe";
import dbConnect from "../../../components/db/connect";

export default async function handler(request, response) {
  await dbConnect();
  if (request.method === "GET") {
    const recipes = await Recipe.find();
    response.status(200).json(recipes);
  } else if (request.method === "POST") {
    const {} = request.body;

    const newRecipe = new Recipe({
      recipesTitle,
      ingredientName1,
      ingredientQuantity1,
      ingredientType1,
      steps,
      timers,
    });
    await newRecipe.save();

    response.status(201).json({ success: true, data: newRecipe });
  } else {
    response.status(400).json({ success: false });
  }
}
