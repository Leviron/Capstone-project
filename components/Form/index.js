import { FormContainer, FormButton } from "./styles-form";
import { Heading } from "./styles-form";
import { useRouter } from "next/router";
import { useState } from "react";

export default function CreateRecipe() {
  const [recipesTitle, setRecipesTitle] = useState("");
  const [ingredientName1, setIngredientName1] = useState("");
  const [ingredientQuantity1, setIngredientQuantity1] = useState("");
  const [ingredientType1, setIngredientType1] = useState("");
  const [steps, setSteps] = useState("");
  const [timers, setTimers] = useState("");
  const [error, setError] = useState(null);

  const router = useRouter();

  const handleName = (event) => {
    setRecipesTitle(event.target.value);
  };

  const handleIngredientName = (event) => {
    setIngredientName1(event.target.value);
  };

  const handleIngredientQuantity = (event) => {
    setIngredientQuantity1(event.target.value);
  };

  const handleIngredientType = (event) => {
    setIngredientType1(event.target.value);
  };

  const handleSteps = (event) => {
    setSteps(event.target.value);
  };

  const handleTimers = (event) => {
    setTimers(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      recipesTitle === "" ||
      ingredientName1 === "" ||
      ingredientQuantity1 === "" ||
      ingredientType1 === "" ||
      steps === "" ||
      timers === ""
    ) {
      setError("Please fill in all fields");
      return;
    }

    const response = await fetch("/api/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        recipesTitle,
        ingredientName1,
        ingredientQuantity1,
        ingredientType1,
        steps,
        timers,
      }),
    });

    if (response.ok) {
      setRecipesTitle("");
      setIngredientName1("");
      setIngredientQuantity1("");
      setIngredientType1("");
      setSteps("");
      setTimers("");
      setError("");
      router.push("/");
    } else {
      const responseData = await response.json();
      setError(responseData.message);
    }
  };

  return (
    <>
      <Heading>Create a Recipe</Heading>
      <FormContainer>
        <input
          type="text"
          name="title"
          placeholder="Recipe Title"
          value={recipesTitle}
          onChange={handleName}
        />
        <input
          type="text"
          name="ingredientName1"
          placeholder="Ingredient Name"
          value={ingredientName1}
          onChange={handleIngredientName}
        />
        <input
          type="text"
          name="ingredientQuantity1"
          placeholder="Ingredient Quantity"
          value={ingredientQuantity1}
          onChange={handleIngredientQuantity}
        />
        <input
          type="text"
          name="ingredientType1"
          placeholder="Ingredient Type"
          value={ingredientType1}
          onChange={handleIngredientType}
        />
        <textarea
          name="steps"
          placeholder="Steps (separate by new lines)"
          value={steps}
          onChange={handleSteps}
        ></textarea>
        <input
          type="text"
          name="timers"
          placeholder="Timers (separate by commas)"
          value={timers}
          onChange={handleTimers}
        />

        {error && <p>{error}</p>}

        <FormButton type="submit" onSubmit={handleSubmit}>
          Submit{" "}
        </FormButton>
      </FormContainer>{" "}
    </>
  );
}
