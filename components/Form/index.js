import { FormContainer, FormButton } from "./styles-form";
import { Heading } from "./styles-form";
import useSWR from "swr";

export default function CreateRecipe() {
  const { mutate } = useSWR("/api");

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const productData = Object.fromEntries(formData);

    const response = await fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });
    if (response.ok) {
      mutate();
    }
  }
  return (
    <>
      <Heading>Create a Recipe</Heading>
      <FormContainer>
        <input type="text" placeholder="Recipe Title" />
        <input type="number" placeholder="Ingredients" min={0} />
        <input type="text" placeholder="Ingredients" />
        <input type="text" placeholder="Steps" />
        <input type="text" placeholder="Timers" />
        <textarea type="text" placeholder="Descripe your steps" />

        <FormButton onSubmit={handleSubmit} type="submit">
          Submit
        </FormButton>
      </FormContainer>{" "}
    </>
  );
}
