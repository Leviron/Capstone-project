import { useState, useEffect } from "react";
import { FormContainer, FormButton, AddButton } from "./styles-form";
import { Heading } from "./styles-form";

export default function EditRecipe({ id, onSubmit }) {
  const initialIngredients = [{ name: "", quantity: "" }];

  const [recipe, setRecipe] = useState({
    name: "",
    ingredients: initialIngredients,
    quantity: 0,
    steps: "",
    timers: "",
  });

  useEffect(() => {
    if (id) {
      fetchRecipe(id);
    }
  }, [id]);

  const fetchRecipe = async (id) => {
    try {
      const response = await fetch(`/api/recipes/${id}`);
      const data = await response.json();
      setRecipe(data);
    } catch (error) {
      console.error("Error fetching recipe:", error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      [name]: value,
    }));
  };

  const handleIngredientChange = (index, field, event) => {
    const updatedIngredients = [...recipe.ingredients];
    updatedIngredients[index][field] = event.target.value;

    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      ingredients: updatedIngredients,
    }));
  };

  const addIngredient = () => {
    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      ingredients: [...prevRecipe.ingredients, { name: "", quantity: "" }],
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

        {recipe.ingredients.map((ingredient, index) => (
          <div key={index}>
            <input
              type="text"
              name={`ingredients[${index}].name`}
              placeholder="Ingredient Name"
              value={ingredient.name}
              onChange={(e) => handleIngredientChange(index, "name", e)}
            />
            <input
              type="text"
              name={`ingredients[${index}].quantity`}
              placeholder="Ingredient Quantity"
              value={ingredient.quantity}
              onChange={(e) => handleIngredientChange(index, "quantity", e)}
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
    </>
  );
}
