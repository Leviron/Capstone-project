import { useRouter } from "next/router";
import EditRecipe from "../../components/Form/Edit";

export default function EditRecipePage() {
  const router = useRouter();
  const { id } = router.query;

  const handleSubmit = async (updatedRecipe) => {
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

      router.push("/");
    } catch (error) {
      window.alert("Problem updating the recipe!");
    }
  };

  return <EditRecipe id={id} onSubmit={handleSubmit} />;
}
