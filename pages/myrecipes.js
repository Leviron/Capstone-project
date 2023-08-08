import { useState, useEffect } from "react";
import {
  Wrapper,
  ContainerStyle,
  StyledCard,
  MoreDetailsLink,
  CardList,
} from "../components/Main/Card.styled";

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
    return <h1>Loading...</h1>;
  }

  if (!allRecipes) {
    return null;
  }

  return (
    <Wrapper>
      <CardList>
        {filteredRecipes.map((recipe) => (
          <ContainerStyle key={recipe._id}>
            <StyledCard>
              <p>{recipe.name}</p>
              <MoreDetailsLink href={`/moredetails/${recipe._id}`}>
                More details
              </MoreDetailsLink>
            </StyledCard>
          </ContainerStyle>
        ))}
      </CardList>
    </Wrapper>
  );
}
