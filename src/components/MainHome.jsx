import { useState, useEffect, useContext } from "react";
import { DataContext } from "./DataProvider";
import RecipeCard from "./RecipeCard";

export default function MainHome() {
  const {
    token,
    baseURL,
    recipes,
    setRecipes,
    users,
    setUsers,
    comments,
    setComments,
  } = useContext(DataContext);

  return (
    <>
      <main className="main-home">
        <ul>
          {recipes.map((recipe) => {
            return (
              <li key={recipe.id}>
                <RecipeCard recipe={recipe} />
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
}
