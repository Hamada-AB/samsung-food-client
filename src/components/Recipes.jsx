import { useState, useEffect, useContext } from "react";

import { DataContext } from "./DataProvider";
import SmallRecipeCard from "./SmallRecipeCard";

export default function Recipes() {
  const { users, recipes } = useContext(DataContext);
  return (
    <>
      <h1>Recipes</h1>
      <div>
        <ul className="small-recipe-cards-container">
          {recipes.map((recipe) => {
            return (
              <li key={recipe.id}>
                <SmallRecipeCard users={users} recipe={recipe} />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
