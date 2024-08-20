import { useState, useE, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import parse from "html-react-parser";
import { recipeCardIcons } from "../data/recipe-card-icoms";

export default function SmallRecipeCard({ users, recipe }) {
  const [user, setUser] = useState("");
  const { title, ingredients, prepTime } = recipe;
  const navigate = useNavigate();
  const location = useLocation();

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
            onClick={(e) =>
              handleIconClick(e, () => console.log("save icon is clicked"))
            }
          >
            {parse(recipeCardIcons.save)}
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
