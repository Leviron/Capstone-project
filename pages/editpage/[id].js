import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import EditRecipe from "../../components/Form/Edit";

async function fetchRecipe(id) {
  try {
    const response = await fetch(`/api/recipes/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching recipe:", error);
    return null;
  }
}

export default function EditRecipePage() {
  const router = useRouter();
  const { id } = router.query;

  const [initialRecipe, setInitialRecipe] = useState(null);

  useEffect(() => {
    async function fetchInitialRecipe() {
      const recipe = await fetchRecipe(id);
      setInitialRecipe(recipe);
    }

    fetchInitialRecipe();
  }, [id]);

  const handleSubmit = async (updatedRecipe) => {
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

    router.push("/");
  };

  if (initialRecipe === null) {
    return <div>Loading...</div>;
  }

  return (
    <EditRecipe id={id} initialRecipe={initialRecipe} onSubmit={handleSubmit} />
  );
}
