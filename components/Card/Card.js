import { useState } from "react";
import Image from "next/image";
import { useEffect } from "react";
import { recipes } from "../lib/recipes";

import { ContainerStyle } from "./Card.styled";
import { ContentStyle } from "./Card.styled";
import Link from "next/link";
import {
  ButtonContainer,
  MoreDetailButton,
  SearchContainer,
} from "./Card.styled";




const getFilteredRecipes = (recipes, searchTerm) => {
  if (!searchTerm) {
    return recipes;
  }
  const searchTermLower = searchTerm.toLowerCase();
  return recipes.filter((recipe) => {
    return recipe.title.toLowerCase().includes(searchTermLower);
  });
};

export default function SearchBar() {
  const [recipeList, setRecipeList] = useState(recipes);
  const [searchWord, setSearchWord] = useState("");

  const searchHandler = (event) => {
    const searchWord = event?.target.value;

    if (searchWord.length > 2) {
      setSearchWord(searchWord.toLowerCase());
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

              width={120}
              height={120}

              alt={recipe.title}
            />
            <ContentStyle>
              <h1>{recipe.title}</h1>
              <h2>{recipe.subtitle}</h2>
            </ContentStyle>

            <ButtonContainer>
              <Link href={`/moredetails/${recipe.id}`}>
                <MoreDetailButton>More Details</MoreDetailButton>
              </Link>
            </ButtonContainer>

          </ContainerStyle>
        );
      })}
    </>
  );
}
