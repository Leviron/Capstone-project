import { useState } from "react";
import Image from "next/image";
import { useEffect } from "react";
import { recipes } from "../lib/recipes";
import {
  Wrapper,
  ContainerStyle,
  StyledCard,
  SearchContainer,
  MoreDetailButton,
  SearchIcon,
} from "./Card.styled";
import Link from "next/link";
import { getFilteredRecipes } from "../Search/search";

export default function MainPage() {
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

  const maxRecipesToShow = 3;

  return (
    <Wrapper>
      <SearchContainer>
        <SearchIcon />
        <input
          type="search"
          placeholder="Type to search.."
          onChange={(event) => searchHandler(event)}
        />
      </SearchContainer>

      {recipeList.slice(0, maxRecipesToShow).map((recipe) => (
        <ContainerStyle key={recipe.id}>
          <StyledCard>
            <Image
              src={`/images/${recipe.picture}`}
              width={120}
              height={120}
              alt={recipe.title}
            />
            <p>{recipe.title}</p>
            <Link href={`/moredetails/${recipe.id}`}>
              <MoreDetailButton>More Details</MoreDetailButton>
            </Link>
          </StyledCard>
        </ContainerStyle>
      ))}
    </Wrapper>
  );
}
