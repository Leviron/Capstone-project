import { useRouter } from "next/router";
import useSWR from "swr";
import EditRecipe from "../../components/Form/Edit";

export default function EditRecipePage() {
  const router = useRouter();
  const { id } = router.query;
  const { data: initialRecipe, isLoading } = useSWR(`/api/recipes/${id}`);

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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <EditRecipe id={id} initialRecipe={initialRecipe} onSubmit={handleSubmit} />
  );
}
