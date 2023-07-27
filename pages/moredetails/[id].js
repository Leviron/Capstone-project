import { useRouter } from "next/router";
import { recipes } from "../../components/lib/recipes";
import { MoreDetailsLayout } from "../../components/moredetails_styled/styled_details";
import Image from "next/image";

export default function MoreDetails() {
  const router = useRouter();
  const { id } = router.query;
  const numericId = parseInt(id, 10);

  const recipeDetails = recipes.find((recipe) => recipe.id === numericId);

  if (!recipeDetails) {
    return <h1>Recipe not found</h1>;
  }

  return (
    <MoreDetailsLayout>
      <h1>{recipeDetails.title}</h1>
      <h2>{recipeDetails.subtitle}</h2>
      <p>{recipeDetails.description}</p>
      <p>{recipeDetails.ingredients}</p>
    </MoreDetailsLayout>
  );
}
