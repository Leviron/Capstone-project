import { FormContainer, FormButton } from "./styles-form";
import { Heading } from "./styles-form";
import { useRouter } from "next/router";

export default function CreateRecipe() {
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const recipe = Object.fromEntries(formData);

    const response = await fetch(`/api/recipes`, {
      method: "POST",
      body: JSON.stringify(recipe),
      headers: {
        "Content-Type": "application/json",
      },
    });
    event.target.reset();
    router.push("/");
  };

  return (
    <>
      <Heading>Create a Recipe</Heading>
      <FormContainer onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Recipe Title" required />
        <input type="text" name="ingredients" placeholder="Ingredient Name" />
        <input
          type="number"
          name="ingredients"
          placeholder="Ingredient Quantity"
        />
        <textarea
          name="steps"
          placeholder="Steps (separate by new lines)"
        ></textarea>
        <input
          type="number"
          name="timers"
          placeholder="Timers (separate by commas)"
        />

        <FormButton type="submit">Submit </FormButton>
      </FormContainer>{" "}
    </>
  );
}
