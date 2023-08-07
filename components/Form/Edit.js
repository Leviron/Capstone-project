import { useState, useEffect } from "react";
import { FormContainer, FormButton } from "./styles-form";
import { Heading } from "./styles-form";
import { useRouter } from "next/router";

export default function EditRecipe() {
  const router = useRouter();
  const { id } = router.query;

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

  const handleEdit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const updatedRecipe = Object.fromEntries(formData);

    try {
      const response = await fetch(`/api/recipes/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedRecipe),
      });
      if (!response.ok) {
        window.alert("Problem updating the recipe!");
        return;
      }

      await fetchRecipe(id);

      router.push("/");
    } catch (error) {
      window.alert("Problem updating the recipe!");
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

    setRecipe({
      ...recipe,
      ingredients: updatedIngredients,
    });
  };

  return (
    <>
      <Heading>Edit Recipe</Heading>
      <FormContainer onSubmit={handleEdit}>
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
      </FormContainer>
    </>
  );
}
