import { recipes } from "../lib/recipes";
import Image from "next/image";
import { ContainerStyle, ContentStyle } from "./Card.styled";
import SearchRecipes from "../Search/search";

export default function RecipesList() {
  return (
    <>
      <SearchRecipes />
      {recipes.map((recipe) => (
        <ContainerStyle key={recipe.id}>
          <Image
            src={`/images/${recipe.picture}`}
            width={100}
            height={100}
            alt={recipe.title}
          />
          <ContentStyle>
            <h1>{recipe.title}</h1>
            <h2>{recipe.subtitle}</h2>
          </ContentStyle>
        </ContainerStyle>
      ))}
    </>
  );
}
