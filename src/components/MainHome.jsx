import { useContext, useEffect } from "react";

import { DataContext } from "./DataProvider";
import RecipeCard from "./RecipeCard";

export default function MainHome() {
  const { recipes, savedRecipes, userInfo } = useContext(DataContext);

  return (
    <>
      <main className="main-home">
        <ul>
          {recipes.map((recipe) => {
            const isSaved = savedRecipes.some(
              (saved) =>
                saved.recipeId === recipe.id && saved.userId === userInfo.id
            );

            return (
              <li key={recipe.id}>
                <RecipeCard recipe={recipe} isSaved={isSaved} />
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
}
