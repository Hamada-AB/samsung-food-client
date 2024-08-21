import { useContext, useEffect, useState } from "react";
import { DataContext } from "./DataProvider";
import SmallRecipeCard from "../components/SmallRecipeCard";

export default function SavedRecipes() {
  const [myRecipes, setMyRecipes] = useState([]);
  const [update, setUpdate] = useState(true);
  const { token, baseURL } = useContext(DataContext);

  useEffect(() => {
    fetch(`${baseURL}/savedRecipe`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data && !data.error) {
          setMyRecipes(data.savedRecipes);
        } else {
          console.error(data.error);
        }
      });
  }, [update]);

  return (
    <section className="saved-recipes-section">
      {!myRecipes.length && (
        <p className="no-saved-recipes">
          You haven&#39;t saved any recipes yet.
        </p>
      )}
      <ul className="saved-recipes">
        {myRecipes
          .slice()
          .reverse()
          .map((saved, index) => {
            return (
              <li key={index}>
                <SmallRecipeCard
                  recipe={saved.recipe}
                  isSaved={true}
                  update={update}
                  setUpdate={setUpdate}
                />
              </li>
            );
          })}
      </ul>
    </section>
  );
}
