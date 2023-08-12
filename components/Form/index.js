import { FormContainer, FormButton, AddButton, Heading } from "./styles-form";
import { useRouter } from "next/router";
import { useState } from "react";

import ImageUploadReloaded from "../ImageUpload/imageUploadReloaded";

export default function CreateRecipe() {
  const router = useRouter();
  const [ingredientFields, setIngredientFields] = useState([
    { name: "", quantity: "", unit: "" },
  ]);
  const [name, setName] = useState("");
  const [steps, setSteps] = useState([""]);

  const [recipeImageUrl, setRecipeImageUrl] = useState("");

  const handleAddIngredient = () => {
    setIngredientFields([
      ...ingredientFields,
      { name: "", quantity: "", unit: "" },
    ]);
  };

  const handleIngredientChange = (index, field, value) => {
    const updatedFields = [...ingredientFields];
    updatedFields[index][field] = value;
    setIngredientFields(updatedFields);
  };

  const handleRemoveIngredient = (index) => {
    const updatedFields = [...ingredientFields];
    updatedFields.splice(index, 1);
    setIngredientFields(updatedFields);
  };

  const handleAddStep = () => {
    setSteps([...steps, ""]);
  };

  const handleStepChange = (index, value) => {
    const updatedSteps = [...steps];
    updatedSteps[index] = value;
    setSteps(updatedSteps);
  };

  const handleRemoveStep = (index) => {
    const updatedSteps = [...steps];
    updatedSteps.splice(index, 1);
    setSteps(updatedSteps);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const recipe = {
      name: name,
      ingredients: ingredientFields.map((field) => ({
        name: field.name,
        quantity: field.quantity,
        type: field.unit,
      })),
      steps: steps,
      image: {
        url: recipeImageUrl,
      },
    };

    try {
      const response = await fetch(`/api/recipes`, {
        method: "POST",
        body: JSON.stringify(recipe),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        window.alert("Problem creating the recipe!");
        return;
      }

      setName("");
      setIngredientFields([{ name: "", quantity: "", unit: "" }]);
      setSteps([""]);
      router.push("/");
    } catch (error) {
      window.alert("Problem creating the recipe!");
    }
  };

  return (
    <>
      <Heading>Create a Recipe</Heading>
      <FormContainer onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Recipe Title"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        {ingredientFields.map((field, index) => (
          <div key={index}>
            <input
              type="text"
              name={`ingredientName${index}`}
              placeholder="Ingredient Name"
              value={field.name}
              onChange={(e) =>
                handleIngredientChange(index, "name", e.target.value)
              }
            />
            <input
              type="number"
              name={`ingredients.quantity${index}`}
              placeholder="Ingredient Quantity"
              value={field.quantity}
              onChange={(e) =>
                handleIngredientChange(index, "quantity", e.target.value)
              }
            />
            <select
              name={`ingredients.name${index}`}
              value={field.unit}
              onChange={(e) =>
                handleIngredientChange(index, "unit", e.target.value)
              }
            >
              <option value="empty"></option>
              <option value="gram">Gram</option>
              <option value="pound">Pound</option>
              <option value="pieces">Piece</option>
              <option value="kilogram">Kilogram</option>
              <option value="liter">Liter</option>
              <option value="ounce">Ounce</option>
              <option value="cup">Cup</option>
              <option value="tablespoon">Tablespoon</option>
            </select>
            {index > 0 && (
              <button
                type="button"
                onClick={() => handleRemoveIngredient(index)}
              >
                Remove Ingredient
              </button>
            )}
          </div>
        ))}
        <AddButton type="button" onClick={handleAddIngredient}>
          Add Ingredient
        </AddButton>
        {steps.map((step, index) => (
          <div key={index}>
            <textarea
              name={`step${index}`}
              placeholder={`Step ${index + 1}`}
              value={step}
              onChange={(e) => handleStepChange(index, e.target.value)}
            />
            {index > 0 && (
              <button type="button" onClick={() => handleRemoveStep(index)}>
                Remove Step
              </button>
            )}
          </div>
        ))}
        <AddButton type="button" onClick={handleAddStep}>
          Add Step
        </AddButton>
        <ImageUploadReloaded setRecipeImageUrl={setRecipeImageUrl} />

        <FormButton>Submit</FormButton>
      </FormContainer>
    </>
  );
}
