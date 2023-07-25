import { useState } from "react";
import { SearchContainer } from "../components/Search/search.style";
import { ContainerStyle } from "../components/Card/Card.styled";
import Image from "next/image";
import { useEffect } from "react";
import { recipes } from "../components/lib/recipes";
import { ContentStyle } from "../components/Card/Card.styled";

const getFilteredRecipes = (recipes, searchTerm) => {
  if (!searchTerm) {
    return recipes;
  }
  return recipes.filter((recipe) => {
    return recipe.title.includes(searchTerm);
  });
};

export default function SearchTest() {
  const [recipeList, setRecipeList] = useState(recipes);
  const [searchWord, setSearchWord] = useState("");

  const searchHandler = (event) => {
    const searchWord = event?.target.value;

    if (searchWord.length > 2) {
      setSearchWord(event?.target.value);
    } else {
      setSearchWord("");
    }
  };

  useEffect(() => {
    const filteredRecipes = getFilteredRecipes(recipes, searchWord);
    setRecipeList(filteredRecipes);
  }, [searchWord]);

  return (
    <>
      <SearchContainer>
        <input
          type="search"
          placeholder="Type to search.."
          onChange={(event) => searchHandler(event)}
        />
      </SearchContainer>
      {recipeList.map((recipe) => {
        return (
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
        );
      })}
    </>
  );
}
