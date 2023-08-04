import { useState } from "react";
import {
  Wrapper,
  ContainerStyle,
  StyledCard,
  SearchContainer,
  MoreDetailButton,
  SearchIcon,
  EditButton,
  DeleteIcon,
} from "./Card.styled";
import Link from "next/link";
import { getFilteredRecipes } from "../Search/search";
import useSWR from "swr";
import { useRouter } from "next/router";

export default function MainPage({ recipes }) {
  const { data, isLoading, error } = useSWR("/api/recipes");
  const router = useRouter();
  const [searchWord, setSearchWord] = useState("");

  const handleDelete = async (recipe) => {
    const response = await fetch(`/api/recipes/${recipe._id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      router.push("/");
    } else {
      const responseData = await response.json();
      console.error(responseData.message);
    }
  };

  if (error) {
    return (
      <h1>
        {error.message === "Recipe not found"
          ? "Recipe not found"
          : "failed to load "}
      </h1>
    );
  }

  const searchHandler = (event) => {
    const searchWord = event?.target.value;

    if (searchWord.length > 2) {
      setSearchWord(searchWord.toLowerCase());
    } else {
      setSearchWord("");
    }
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return null;
  }

  const filteredRecipes = getFilteredRecipes(data, searchWord);

  return (
    <Wrapper>
      <SearchContainer>
        <SearchIcon />
        <input
          type="search"
          placeholder="Type to search.."
          onChange={searchHandler}
        />
      </SearchContainer>

      {filteredRecipes.map((recipe) => (
        <ContainerStyle key={recipe._id}>
          <StyledCard>
            <p>{recipe.name}</p>
            <Link href={`/moredetails/${recipe._id}`}>
              <MoreDetailButton>More Details</MoreDetailButton>
            </Link>
            <Link href={`/editpage/${recipe._id}`}>
              <EditButton>Edit recipe</EditButton>
            </Link>
            <DeleteIcon onClick={() => handleDelete(recipe)}>Delete</DeleteIcon>
          </StyledCard>
        </ContainerStyle>
      ))}
    </Wrapper>
  );
}
