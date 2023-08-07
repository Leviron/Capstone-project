import { useState, useEffect } from "react";
import { FormContainer, FormButton } from "./styles-form";
import { Heading } from "./styles-form";
import { useRouter } from "next/router";

export default function EditRecipe() {
  const router = useRouter();
  const { id } = router.query;

  const [recipe, setRecipe] = useState({
    name: "",
    ingredients: "",
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
        <input
          type="text"
          name="ingredients"
          placeholder="Ingredient Name"
          value={recipe.ingredients}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="quantity"
          placeholder="Ingredient Quantity"
          value={recipe.quantity}
          onChange={handleInputChange}
        />
        <textarea
          name="steps"
          placeholder="Steps (separate by new lines)"
          value={recipe.steps}
          onChange={handleInputChange}
        ></textarea>
        <input
          type="text"
          name="timers"
          placeholder="Timers (separate by commas)"
          value={recipe.timers}
          onChange={handleInputChange}
        />

        <FormButton type="submit">Update Recipe</FormButton>
      </FormContainer>
    </>
  );
}
