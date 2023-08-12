import { useState, useEffect } from "react";
import {
  Wrapper,
  ContainerStyle,
  StyledCard,
  SearchContainer,
  SearchIcon,
  DeleteIcon,
  DeleteButton,
  EditIcon,
  EditLink,
  MoreDetailsLink,
  CardList,
  ButtonContainer,
  LikeIcon,
  FavoriteIcon,
  LikeButton,
  FavoriteButton,
  StylePicture,
} from "./Card.styled";
import styled, { StyledComponent } from "styled-components";

import { getFilteredRecipes } from "../Search/search";
import useSWR from "swr";

export default function MainPage() {
  const { data, isLoading, error } = useSWR("/api/recipes");

  const [searchWord, setSearchWord] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  useEffect(() => {
    if (!isLoading && data) {
      const filteredData = getFilteredRecipes(data, searchWord);
      setFilteredRecipes(filteredData);
    }
  }, [data, searchWord, isLoading]);

  const handleDelete = async (recipe) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this recipe?"
    );
    if (!confirmDelete) {
      return;
    }

    const response = await fetch(`/api/recipes/${recipe._id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      window.alert("Recipe deleted successfully.");
      setFilteredRecipes((prevRecipes) =>
        prevRecipes.filter((refresh) => refresh._id !== recipe._id)
      );
    } else {
      const responseData = await response.json();
      console.error(responseData.message);
    }
  };

  const handleLike = async (recipe) => {
    const updatedRecipe = {
      ...recipe,
      likes: recipe.likes + 1,
    };

    const response = await fetch(`/api/recipes/${recipe._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedRecipe),
    });

    if (response.ok) {
      setFilteredRecipes((prevRecipes) =>
        prevRecipes.map((prevRecipe) =>
          prevRecipe._id === recipe._id
            ? { ...prevRecipe, likes: recipe.likes + 1 }
            : prevRecipe
        )
      );
    } else {
      const responseData = await response.json();
      console.error("Error updating recipe:", responseData.message);
    }
  };

  const handleFavorite = async (recipe) => {
    const updatedRecipe = {
      ...recipe,
      isFavorite: !recipe.isFavorite,
    };

    const response = await fetch(`/api/recipes/${recipe._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedRecipe),
    });

    if (response.ok) {
      setFilteredRecipes((prevRecipes) =>
        prevRecipes.map((prevRecipe) =>
          prevRecipe._id === recipe._id
            ? { ...prevRecipe, isFavorite: updatedRecipe.isFavorite }
            : prevRecipe
        )
      );
    } else {
      const responseData = await response.json();
      console.error("Error updating favorite:", responseData.message);
    }
  };

  const searchHandler = (event) => {
    const searchWord = event?.target.value;

    if (searchWord.length > 2) {
      setSearchWord(searchWord.toLowerCase());
    } else {
      setSearchWord("");
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

  if (isLoading) {
    return <IsLoading />;
  }

  if (!data) {
    return null;
  }

  return (
    <Wrapper>
      <SearchContainer>
        <SearchIcon />
        <input
          type="search"
          placeholder="Search for recipe..."
          onChange={searchHandler}
        />
      </SearchContainer>
      <CardList>
        {filteredRecipes.map((recipe) => (
          <ContainerStyle key={recipe._id}>
            <StyledCard>
              <StylePicture
                width={"100px"}
                alt="Recipe Image"
                src={recipe?.image?.url}
              />

              <p>{recipe.name}</p>
              <MoreDetailsLink href={`/moredetails/${recipe._id}`}>
                More details
              </MoreDetailsLink>

              <ButtonContainer>
                <EditLink href={`/editpage/${recipe._id}`}>
                  <EditIcon /> Edit
                </EditLink>
                <DeleteButton onClick={() => handleDelete(recipe)}>
                  <DeleteIcon /> Delete
                </DeleteButton>
                <LikeButton onClick={() => handleLike(recipe)}>
                  {recipe.likes} <LikeIcon />
                </LikeButton>
                <FavoriteButton onClick={() => handleFavorite(recipe)}>
                  {recipe.isFavorite ? "Remove Favorite" : "Add Favorite"}
                  <FavoriteIcon />
                </FavoriteButton>
              </ButtonContainer>
            </StyledCard>
          </ContainerStyle>
        ))}
      </CardList>
    </Wrapper>
  );
}

export const IsLoading = styled.div`
  .loader {
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-left-color: transparent;
    border-radius: 50%;
  }

  .loader {
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-left-color: transparent;
    width: 36px;
    height: 36px;
  }

  .loader {
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-left-color: transparent;
    width: 36px;
    height: 36px;
    animation: spin89345 1s linear infinite;
  }

  @keyframes spin89345 {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
