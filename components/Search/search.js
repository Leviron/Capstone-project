export const getFilteredRecipes = (recipes, searchTerm) => {
  if (!searchTerm) {
    return recipes;
  }
  const searchTermLower = searchTerm.toLowerCase();
  return recipes.filter((recipe) => {
    return recipe.name.toLowerCase().includes(searchTermLower);
  });
};
