// import { FormContainer, FormButton } from "./styles-form";
// import { Heading } from "./styles-form";
// import { useRouter } from "next/router";

// export default function CreateRecipe() {
//   const router = useRouter();

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);
//     const recipe = Object.fromEntries(formData);

//     try {
//       const response = await fetch(`/api/recipes`, {
//         method: "POST",
//         body: JSON.stringify(recipe),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       if (!response.ok) {
//         window.alert("Problem creating the recipe!");
//         return;
//       }
//       event.target.reset();
//       router.push("/");
//     } catch (error) {
//       window.alert("Problem creating the recipe!");
//     }
//   };

//   return (
//     <>
//       <Heading>Create a Recipe</Heading>
//       <FormContainer onSubmit={handleSubmit}>
//         <input type="text" name="name" placeholder="Recipe Title" required />
//         <input type="text" name="ingredients" placeholder="Ingredient Name" />
//         <input
//           type="number"
//           name="ingredients"
//           placeholder="Ingredient Quantity"
//         />
//         <textarea
//           name="steps"
//           placeholder="Steps (separate by new lines)"
//         ></textarea>

//         <FormButton>Submit </FormButton>
//       </FormContainer>{" "}
//     </>
//   );
// }
import { FormContainer, FormButton } from "./styles-form";
import { Heading } from "./styles-form";
import { useRouter } from "next/router";
import { useState } from "react";

export default function CreateRecipe() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [ingredientName, setIngredientName] = useState("");
  const [ingredientQuantity, setIngredientQuantity] = useState("");
  const [steps, setSteps] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const recipe = {
      name: name,
      ingredients: [
        {
          name: ingredientName,
          quantity: ingredientQuantity,
        },
      ],
      steps: steps.split("\n"),
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
      setIngredientName("");
      setIngredientQuantity("");
      setSteps("");
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
        <input
          type="text"
          name="ingredientName"
          placeholder="Ingredient Name"
          value={ingredientName}
          onChange={(e) => setIngredientName(e.target.value)}
        />
        <input
          type="number"
          name="ingredientQuantity"
          placeholder="Ingredient Quantity"
          value={ingredientQuantity}
          onChange={(e) => setIngredientQuantity(e.target.value)}
        />
        <textarea
          name="steps"
          placeholder="Steps (separate by new lines)"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
        ></textarea>

        <FormButton>Submit </FormButton>
      </FormContainer>{" "}
    </>
  );
}
