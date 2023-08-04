import { useRouter } from "next/router";
import useSWR from "swr";
import Link from "next/link";
import styled from "styled-components";

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
        <Link href="/">
          <GoBackButton>back to main</GoBackButton>
        </Link>
      </Header>
      <MoreDetailsLayout>
        <h1>{recipe.name}</h1>
        {recipe.ingredients && (
          <Ingredients>
            <h3>Ingredients</h3>
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>
                  {ingredient.quantity} {ingredient.name} - {ingredient.type}
                </li>
              ))}
            </ul>
          </Ingredients>
        )}
        {recipe.instructions && (
          <article>
            <h3>Instructions</h3>
            <ol>
              {recipe.instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>
          </article>
        )}
        {recipe.steps && (
          <article>
            <h3>Steps</h3>
            <ol>
              {recipe.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </article>
        )}
      </MoreDetailsLayout>
    </>
  );
}

const MoreDetailsLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 2rem;
  margin-bottom: 2rem;

  border: 1px solid black;
  border-radius: 20px;
  border-color: grey;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
  }
`;

// const MoreDetailsLayout = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   margin-left: 10%;
//   margin-right: 10%;
//   align-items: center;
//   justify-content: space-around;
//   margin-top: 2rem;
//   margin-bottom: 2rem;

//   border: 1px solid black;
//   border-radius: 20px;
//   border-color: grey;

//   box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);

//   h1 {
//     font-size: 1.5rem;
//     font-weight: bold;
//     text-align: center;
//   }
// `;

const Header = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 2rem;
`;

const GoBackButton = styled.button`
  align-self: center;
  width: 10rem;
  height: 2rem;
  border-radius: 20px;
  border: 1px solid black;
  border-color: grey;
  margin-top: 1rem;
  margin-bottom: 1rem;
  background-color: white;
  color: black;
  font-size: 1rem;
  font-weight: bold;

  &:hover {
    background-color: black;
    color: white;
  }
`;

const Ingredients = styled.ul`
  h3 {
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
  }

  ul {
    width: 100%;
    font-size: 1.5rem;

    text-align: center;
    text-decoration: none;
  }

  li {
    list-style: none;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;
