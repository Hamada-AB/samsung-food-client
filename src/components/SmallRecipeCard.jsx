import { useState, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { DataContext } from "./DataProvider";
import parse from "html-react-parser";
import { recipeCardIcons } from "../data/recipe-card-icons";

export default function SmallRecipeCard({
  recipe,
  isSaved,
  update,
  setUpdate,
}) {
  const [user, setUser] = useState("");
  const [saved, setSaved] = useState(isSaved);

  const { title, ingredients, prepTime } = recipe;

  const navigate = useNavigate();
  const location = useLocation();

  const { users, baseURL, token, userInfo, savedRecipes, setSavedRecipes } =
    useContext(DataContext);

  useEffect(() => {
    findUser();
  }, []);

  function findUser() {
    users.find((user) => {
      if (user.id === recipe.userId) {
        setUser(user);
      }
    });
  }

  const handleIconClick = (event, action) => {
    event.stopPropagation();
    action();
  };

  function handleSaveRecipe() {
    fetch(`${baseURL}/savedRecipe`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: userInfo.id, recipeId: recipe.id }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data && !data.error) {
          setUpdate(!update);
          setSaved(!saved);
        } else {
          console.error(data.error);
        }
      });
  }

  function handleUnsaveRecipe() {
    fetch(`${baseURL}/savedRecipe`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: userInfo.id, recipeId: recipe.id }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data && !data.error) {
          setUpdate(!update);
          setSaved(!saved);
        } else {
          console.error(data.error);
        }
      });
  }

  return (
    <article className="small-recipe-card">
      <div
        className="small-card-body"
        style={{
          backgroundImage: `url(${recipe.image})`,
        }}
        onClick={() => {
          navigate(`/recipes/${recipe.id}`, {
            state: { from: location.pathname, recipe },
          });
        }}
      >
        <div className="like-save-icons">
          <button
            onClick={(e) =>
              handleIconClick(e, () => console.log("like icon is clicked"))
            }
          >
            {parse(recipeCardIcons.whiteLike)}
          </button>

          <button
            onClick={(e) => {
              handleIconClick(e, () =>
                saved ? handleUnsaveRecipe() : handleSaveRecipe()
              );
            }}
          >
            {saved ? parse(recipeCardIcons.saved) : parse(recipeCardIcons.save)}
          </button>
        </div>

        <div className="avatar-and-menu-icon">
          <div
            onClick={(e) =>
              handleIconClick(e, () => console.log("user info is clicked"))
            }
          >
            <img src={user.avatar} alt="avatar" />
            <p>{user && user.fristName + " " + user.lastName}</p>
          </div>

          <button
            className="menu-icon"
            onClick={(e) =>
              handleIconClick(e, () => console.log("menu icon is clicked"))
            }
          >
            {parse(recipeCardIcons.menu)}
          </button>
        </div>
      </div>

      <div className="recipe-title-and-prep-time">
        <p>{title}</p>
        <p>
          <span>{`${ingredients.split(".").length} ingredients`}</span>
          <span>.</span>
          <span>{`${prepTime}min`}</span>
        </p>
      </div>
    </article>
  );
}
