import { useState } from "react";
import { FormContainer, FormButton, AddButton } from "./styles-form";
import { Heading } from "./styles-form";
import NavigationBar from "../Navbar";

export default function EditRecipe({ initialRecipe, onSubmit }) {
  const [recipe, setRecipe] = useState(initialRecipe);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      [name]: value,
    }));
  };

  const handleIngredientChange = (ingredientId, field, event) => {
    const updatedIngredients = [...recipe.ingredients];
    const index = recipe.ingredients.findIndex(
      (ingredient) => ingredient.id === ingredientId
    );

    if (index !== -1) {
      updatedIngredients[index][field] = event.target.value;

      setRecipe((prevRecipe) => ({
        ...prevRecipe,
        ingredients: updatedIngredients,
      }));
    }
  };

  const addIngredient = () => {
    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      ingredients: [
        ...prevRecipe.ingredients,
        { id: Date.now(), name: "", quantity: "" },
      ],
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(recipe);
  };

  return (
    <>
      <Heading>Edit Recipe</Heading>
      <FormContainer onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Recipe Name"
          value={recipe.name}
          onChange={handleInputChange}
          required
        />

        {recipe.ingredients.map((ingredient) => (
          <div key={ingredient.id}>
            <input
              type="text"
              name={`ingredients[${ingredient.id}].name`}
              placeholder="Ingredient Name"
              value={ingredient.name}
              onChange={(e) => handleIngredientChange(ingredient.id, "name", e)}
            />
            <input
              type="text"
              name={`ingredients[${ingredient.id}].quantity`}
              placeholder="Ingredient Quantity"
              value={ingredient.quantity}
              onChange={(e) =>
                handleIngredientChange(ingredient.id, "quantity", e)
              }
            />
          </div>
        ))}
        <AddButton type="button" onClick={addIngredient}>
          + Add Ingredient
        </AddButton>

        <textarea
          name="steps"
          placeholder="Steps to make the recipe"
          value={recipe.steps}
          onChange={handleInputChange}
        ></textarea>

        <FormButton type="submit">Update Recipe</FormButton>
      </FormContainer>
      <NavigationBar />
    </>
  );
}
