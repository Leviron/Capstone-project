import { useRouter } from "next/router";
import useSWR from "swr";
import Link from "next/link";
import styled from "styled-components";
import { EditIcon } from "../../components/Main/Card.styled";
import { MdEdit } from "react-icons/md";

export default function MoreDetails() {
  const router = useRouter();
  const { id } = router.query;

  const { data: recipe, error } = useSWR(`/api/recipes/${id}`, {
    revalidateOnMount: true,
  });

  if (error) {
    return <h1>Something went wrong!</h1>;
  }

  if (!recipe) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Header>
        <StyledTitle>{recipe.name}</StyledTitle>
        <Link href={`/editpage/${recipe._id}`}>
          {" "}
          <GoToEdit />
        </Link>
      </Header>
      <MoreDetailsLayout>
        <image>
          {recipe?.image && (
            <img width={"100%"} alt="Recipe Image" src={recipe?.image?.url} />
          )}
        </image>

        {recipe.ingredients && (
          <IngredientsContainer>
            <h3>Ingredients</h3>
            <Ingredients>
              <ul>
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>
                    {ingredient.name} {ingredient.quantity} {ingredient.type}
                  </li>
                ))}
              </ul>
            </Ingredients>
          </IngredientsContainer>
        )}
        {recipe.instructions && (
          <StepsContainer>
            <h3>Instructions</h3>
            <ol>
              {recipe.instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>
          </StepsContainer>
        )}
        {recipe.steps && (
          <IngredientsContainer>
            <h3>Steps</h3>
            <ol>
              {recipe.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </IngredientsContainer>
        )}
        <GoBackLink href="/">
          <GoBackButton>back to main</GoBackButton>
        </GoBackLink>
      </MoreDetailsLayout>
    </>
  );
}

export const GoBackLink = styled(Link)`
  width: 100%;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
`;

const StepsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
  border-radius: 20px;
  border-color: grey;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

const IngredientsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;

  border-radius: 20px;
  border-color: grey;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  margin-bottom: 2rem;
`;

const GoToEdit = styled(MdEdit)`
  font-size: 1.5rem;
  color: black;
  cursor: pointer;
  margin-top: 1rem;
  :active {
    transform: scale(0.85) rotateZ(1.7deg);
  }
`;
const StyledTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
`;

const MoreDetailsLayout = styled.div`
margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-bottom: 6rem;
  margin-top: 2rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
  }

  // border: 1px solid black;
  // border-radius: 20px;
  // border-color: grey;

  // box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

  // h1 {
  //   font-size: 1.5rem;
  //   font-weight: bold;
  //   text-align: center;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 2rem;
  margin-1vh;
`;

export const GoBackButton = styled.button`
  border-radius: 10px;

  background-color: transparent;
  font-size: 100%;
  font-weight: bold;
  cursor: pointer;
`;

const Ingredients = styled.ul`
  h3 {
    font-size: 1.5rem;
    font-weight: bold;
    // text-align: center;
  }

  // width: 100%;
  // font-size: 1.5rem;

  // text-align: center;
  // text-decoration: none;

  // li {
  //   list-style: none;
  //   margin-top: 1rem;
  //   margin-bottom: 1rem;
  // }
`;
