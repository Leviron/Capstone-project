import { useRouter } from "next/router";
import { DeleteIcon } from "../Main/Card.styled";

export default function DeleteRecipe() {
  const router = useRouter();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const recipe = Object.fromEntries(formData);

    try {
      const response = await fetch(`/api/recipes`, {
        method: "DELETE",
        body: JSON.stringify(recipe),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        window.alert("Problem deleting the recipe!");
        return;
      }
      event.target.reset();
      router.push("/");
    } catch (error) {
      window.alert("Problem deleting the recipe!");
    }
  };

  return (
    <>
      <DeleteIcon onClick={handleSubmit} />
    </>
  );
}
