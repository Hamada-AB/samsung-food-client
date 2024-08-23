import { useContext, useState } from "react";
import { DataContext } from "./DataProvider";
import AddPostModal from "./AddPostModal";
import RecipeCard from "./RecipeCard";

export default function MainHome() {
  const [show, setShow] = useState(false);

  const { recipes, savedRecipes, userInfo } = useContext(DataContext);

  return (
    <>
      <header className="add-post">
        <div className="user-avatar">
          <p>{userInfo?.email[0]?.toUpperCase()}</p>
        </div>

        <div
          className="text"
          onClick={() => {
            setShow(true);
          }}
        >
          <input type="text" placeholder="Add your post" />
        </div>
      </header>

      <main className="main-home">
        {show && <AddPostModal show={show} setShow={setShow} />}
        <ul>
          {recipes
            .slice()
            .reverse()
            .map((recipe) => {
              const isSaved = savedRecipes.some(
                (saved) =>
                  saved?.recipeId === recipe?.id &&
                  saved?.userId === userInfo?.id
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
