import { useState } from "react";
import { useContext } from "react";
import { DataContext } from "./DataProvider";
import SmallRecipeCard from "./SmallRecipeCard";

export default function Recipes() {
  const [update, setUpdate] = useState(true);
  const { users, recipes, savedRecipes, userInfo } = useContext(DataContext);
  return (
    <>
      <h1 className="recipes-heading">Recipes</h1>
      <div>
        <ul className="small-recipe-cards-container">
          {recipes
            .slice()
            .reverse()
            .map((recipe) => {
              const isSaved = savedRecipes.some(
                (saved) =>
                  saved.recipeId === recipe.id && saved.userId === userInfo.id
              );

              return (
                <li key={recipe.id}>
                  <SmallRecipeCard
                    recipe={recipe}
                    isSaved={isSaved}
                    users={users}
                    update={update}
                    setUpdate={setUpdate}
                  />
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
}
