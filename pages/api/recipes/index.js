import Recipe from "../../../components/db/models/Recipe";
import dbConnect from "../../../components/db/connect";

export default async function handler(request, response) {
  await dbConnect();
  console.log("//////////////", "hallo");
  if (request.method === "GET") {
    const recipes = await Recipe.find();
    console.log(recipes);
    response.status(200).json(recipes);
    return;
  }
}
