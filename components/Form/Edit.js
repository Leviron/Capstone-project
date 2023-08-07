import { useState, useEffect } from "react";
import { FormContainer, FormButton } from "./styles-form";
import { Heading } from "./styles-form";

export default function EditRecipeComponent({ id, onSubmit }) {
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

        <textarea
          name="steps"
          placeholder="Steps (separate by new lines)"
          value={recipe.steps}
          onChange={handleInputChange}
        ></textarea>

        <FormButton type="submit">Update Recipe</FormButton>

        {/* Rest of your form inputs */}
      </FormContainer>
    </>
  );
}
