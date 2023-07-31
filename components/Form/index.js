import { FormContainer } from "./styles-form";
import { Heading } from "./styles-form";

export default function CreateRecipe() {
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

        <button type="submit">Submit</button>
      </FormContainer>
    </>
  );
}
