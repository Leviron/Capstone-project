import { useState } from "react";
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
import useSWR from "swr";

export default function MainPage() {
  const { data, isLoading } = useSWR("/api/recipes", {
    initialData: [],
    revalidateOnMount: true,
  });

  const [searchWord, setSearchWord] = useState("");

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (!data) {
    return;
  }

  const searchHandler = (event) => {
    const searchWord = event?.target.value;

    if (searchWord.length > 2) {
      setSearchWord(searchWord.toLowerCase());
    } else {
      setSearchWord("");
    }
  };

  const filteredRecipes = getFilteredRecipes(data, searchWord);
  const recipesToDisplay = filteredRecipes.slice(0, 4);

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

      {recipesToDisplay.map((recipe) => (
        <ContainerStyle key={recipe._id}>
          <StyledCard>
            {/* <Image
              src={recipe.imageURL}
              width={120}
              height={120}
              alt={recipe.name}
            /> */}
            <p>{recipe.name}</p>
            <Link href={`/moredetails/${recipe._id}`}>
              <MoreDetailButton>More Details</MoreDetailButton>
            </Link>
          </StyledCard>
        </ContainerStyle>
      ))}
    </Wrapper>
  );
}
