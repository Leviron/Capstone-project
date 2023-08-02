import {
  MoreDetailsLayout,
  Header,
  Ingredients,
  GoBackButton,
} from "../../components/moredetails_styled/styled_details";
import { useRouter } from "next/router";
import useSWR from "swr";
import Link from "next/link";

export default function MoreDetails() {
  const router = useRouter();
  const { id } = router.query;

  const { data: recipe, error } = useSWR(`/api/recipes/${id}`, {
    revalidateOnMount: true,
  });

  if (error) {
    return <h1>Something went wrong!</h1>;
  }

  if (!recipe) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Header>
        <Link href="/">
          <GoBackButton>back to main</GoBackButton>
        </Link>
      </Header>
      <MoreDetailsLayout>
        <h2>{recipe.name}</h2>
        {recipe.ingredients && (
          <Ingredients>
            <ul>
              <h3>Ingredients</h3>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>
                  {ingredient.quantity} {ingredient.name} - {ingredient.type}
                </li>
              ))}
            </ul>
          </Ingredients>
        )}
        {recipe.instructions && (
          <article>
            <h3>Instructions</h3>
            <ol>
              {recipe.instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>
          </article>
        )}
        {recipe.steps && (
          <article>
            <h3>Steps</h3>
            <ol>
              {recipe.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </article>
        )}
      </MoreDetailsLayout>
    </>
  );
}
