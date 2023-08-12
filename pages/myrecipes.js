import { useState, useEffect } from "react";
import {
  Wrapper,
  ContainerStyle,
  StyledCard,
  MoreDetailsLink,
  CardList,
  StylePicture,
} from "../components/Main/Card.styled";
import { IsLoading } from "../components/Main/Card";
import styled from "styled-components";
import { GoBackLink, GoBackButton } from "./moredetails/[id]";
import useSWR from "swr";

export default function MyRecipesPage() {
  const { data: allRecipes, isLoading, error } = useSWR("/api/recipes");

  const [filteredRecipes, setFilteredRecipes] = useState([]);

  useEffect(() => {
    if (!isLoading && allRecipes) {
      const filteredData = allRecipes.filter((recipe) => recipe.isFavorite);
      setFilteredRecipes(filteredData);
    }
  }, [allRecipes, isLoading]);

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

  if (!allRecipes) {
    return null;
  }

  return (
    <Wrapper>
      <StyledH1>My Favorites</StyledH1>
      <CardList>
        {filteredRecipes.map((recipe) => (
          <ContainerStyle key={recipe._id}>
            <StyledCard>
              <p>{recipe.name}</p>
              <MoreDetailsLink href={`/moredetails/${recipe._id}`}>
                More details
              </MoreDetailsLink>
              <StylePicture src={recipe.image.url} alt={recipe.name} />
            </StyledCard>
          </ContainerStyle>
        ))}
      </CardList>
      <GoBackLink href="/">
        {" "}
        <GoBackButton>Go Back</GoBackButton>
      </GoBackLink>
    </Wrapper>
  );
}

const StyledH1 = styled.h1`
  color: black;
  font-size: 2rem;
  text-align: center;
  margin: 2rem;
`;
