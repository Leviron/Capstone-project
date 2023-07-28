import { useRouter } from "next/router";
import { recipes } from "../../components/lib/recipes";
import {
  MoreDetailsLayout,
  Header,
  ImageStyle,
  Ingredients,
  GoBackButton,
} from "../../components/moredetails_styled/styled_details";
import Image from "next/image";
import Link from "next/link";

export default function MoreDetails() {
  const router = useRouter();
  const { id } = router.query;
  const numericId = parseInt(id, 10);

  const recipeDetails = recipes.find((recipe) => recipe.id === numericId);

  if (!recipeDetails) {
    return <h1>Recipe not found</h1>;
  }

  return (
    <>
      <Header>
        {recipeDetails.title}
        <Link href="/">
          <GoBackButton>back to main</GoBackButton>
        </Link>
      </Header>
      <MoreDetailsLayout>
        <ImageStyle>
          <Image
            src={`/images/${recipeDetails.picture}`}
            width={100}
            height={100}
            alt={recipeDetails.title}
          />
          <dfn>
            {recipeDetails.title} {recipeDetails.subtitle}
          </dfn>
        </ImageStyle>
        <Ingredients>
          <ul>
            <h3>Ingredients</h3>
            {recipeDetails.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
            <article>
              <h3>instructions</h3>
              <p>{recipeDetails.instructions}</p>
            </article>
          </ul>
        </Ingredients>
      </MoreDetailsLayout>
    </>
  );
}
