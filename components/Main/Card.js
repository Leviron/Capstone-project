// import { useState, useEffect } from "react";
// import {
//   Wrapper,
//   ContainerStyle,
//   StyledCard,
//   SearchContainer,
//   SearchIcon,
//   DeleteIcon,
//   DeleteButton,
//   EditIcon,
//   EditLink,
//   MoreDetailsLink,
//   CardList,
//   ButtonContainer,
//   LikeIcon,
//   FavoriteIcon,
//   LikeButton,
//   FavoriteButton,
// } from "./Card.styled";
// import { getFilteredRecipes } from "../Search/search";
// import useSWR from "swr";

// export default function MainPage() {
//   const { data, isLoading, error } = useSWR("/api/recipes");

//   const [searchWord, setSearchWord] = useState("");
//   const [filteredRecipes, setFilteredRecipes] = useState([]);
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     if (!isLoading && data) {
//       const filteredData = getFilteredRecipes(data, searchWord);
//       setFilteredRecipes(filteredData);
//     }
//   }, [data, searchWord, isLoading]);

//   const handleDelete = async (recipe) => {
//     const response = await fetch(`/api/recipes/${recipe._id}`, {
//       method: "DELETE",
//     });
//     if (response.ok) {
//       setFilteredRecipes((prevRecipes) =>
//         prevRecipes.filter((refresh) => refresh._id !== recipe._id)
//       );
//     } else {
//       const responseData = await response.json();
//       console.error(responseData.message);
//     }
//   };

//   const handleLike = async (recipe) => {
//     const updatedRecipe = {
//       ...recipe,
//       likes: recipe.likes + 1,
//     };

//     const response = await fetch(`/api/recipes/${recipe._id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(updatedRecipe),
//     });

//     if (response.ok) {
//       setCount(count + 1);
//     } else {
//       const responseData = await response.json();
//       console.error("Error updating recipe:", responseData.message);
//     }
//   };

//   const searchHandler = (event) => {
//     const searchWord = event?.target.value;

//     if (searchWord.length > 2) {
//       setSearchWord(searchWord.toLowerCase());
//     } else {
//       setSearchWord("");
//     }
//   };

//   if (error) {
//     return (
//       <h1>
//         {error.message === "Recipe not found"
//           ? "Recipe not found"
//           : "failed to load "}
//       </h1>
//     );
//   }

//   if (isLoading) {
//     return <h1>Loading...</h1>;
//   }

//   if (!data) {
//     return null;
//   }

//   return (
//     <Wrapper>
//       <SearchContainer>
//         <SearchIcon />
//         <input
//           type="search"
//           placeholder="Type to search.."
//           onChange={searchHandler}
//         />
//       </SearchContainer>
//       <CardList>
//         {filteredRecipes.map((recipe) => (
//           <ContainerStyle key={recipe._id}>
//             <StyledCard>
//               <p>{recipe.name}</p>
//               <MoreDetailsLink href={`/moredetails/${recipe._id}`}>
//                 More details
//               </MoreDetailsLink>
//               <ButtonContainer>
//                 <EditLink href={`/editpage/${recipe._id}`}>
//                   <EditIcon />
//                 </EditLink>
//                 <DeleteButton onClick={() => handleDelete(recipe)}>
//                   <DeleteIcon />
//                 </DeleteButton>
//                 <LikeButton onClick={() => handleLike(recipe)}>
//                   {recipe.likes} <LikeIcon />
//                 </LikeButton>
//                 <FavoriteButton>
//                   <FavoriteIcon />
//                 </FavoriteButton>
//               </ButtonContainer>
//             </StyledCard>
//           </ContainerStyle>
//         ))}
//       </CardList>
//     </Wrapper>
//   );
// }

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
} from "./Card.styled";
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
    const response = await fetch(`/api/recipes/${recipe._id}`, {
      method: "DELETE",
    });
    if (response.ok) {
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

  const addFavorite = async (recipeId) => {
    try {
      const response = await fetch(`/api/user/favorites/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ recipeId }),
      });

      if (!response.ok) {
        const responseData = await response.json();
        console.error("Error adding to favorites:", responseData.message);
      }
    } catch (error) {
      console.error("Error adding to favorites:", error);
    }
  };

  const handleFavorite = async (recipe) => {
    const updatedRecipe = {
      ...recipe,
      favorite: !recipe.favorite,
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
            ? { ...prevRecipe, favorite: !recipe.favorite }
            : prevRecipe
        )
      );
    } else {
      const responseData = await response.json();
      console.error("Error updating recipe:", responseData.message);
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
    return <h1>Loading...</h1>;
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
          placeholder="Type to search.."
          onChange={searchHandler}
        />
      </SearchContainer>
      <CardList>
        {filteredRecipes.map((recipe) => (
          <ContainerStyle key={recipe._id}>
            <StyledCard>
              <p>{recipe.name}</p>
              <MoreDetailsLink href={`/moredetails/${recipe._id}`}>
                More details
              </MoreDetailsLink>
              <ButtonContainer>
                <EditLink href={`/editpage/${recipe._id}`}>
                  <EditIcon />
                </EditLink>
                <DeleteButton onClick={() => handleDelete(recipe)}>
                  <DeleteIcon />
                </DeleteButton>
                <LikeButton onClick={() => handleLike(recipe)}>
                  {recipe.likes} <LikeIcon />
                </LikeButton>
                <FavoriteButton onClick={() => handleFavorite(recipe)}>
                  {recipe.favorite ? "Unfavorite" : "Favorite"} <FavoriteIcon />
                </FavoriteButton>
              </ButtonContainer>
            </StyledCard>
          </ContainerStyle>
        ))}
      </CardList>
    </Wrapper>
  );
}
