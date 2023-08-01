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

  const { recipe, error } = useSWR(`/api/recipes/${id}`, {
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
      <MoreDetailsLayout key={recipe._id}>
        <Ingredients>
          <ul>
            <h3>Ingredients</h3>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>
                {ingredient.quantity} {ingredient.name} - {ingredient.type}
              </li>
            ))}
            <article>
              <h3>instructions</h3>
              <p>{recipe.instructions}</p>
            </article>
          </ul>
        </Ingredients>
      </MoreDetailsLayout>
    </>
  );
}
