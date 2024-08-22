import { useState, useEffect, useContext } from "react";
import { DataContext } from "./DataProvider";
import { useNavigate, useLocation } from "react-router-dom";

import parse from "html-react-parser";
import { recipeCardIcons } from "../data/recipe-card-icons";
import AddCommentModal from "./AddCommentModal";

export default function RecipeCard({ recipe, isSaved }) {
  // to show and hide AddCommentModal
  const [show, setShow] = useState(false);

  const [user, setUser] = useState("");
  const [saved, setSaved] = useState(isSaved);
  const { users, baseURL, token, userInfo, savedRecipes, setSavedRecipes } =
    useContext(DataContext);

  const navigate = useNavigate();
  const location = useLocation();

  const { category, title, image, userId } = recipe;
  const { fristName, lastName, avatar } = user;

  useEffect(() => {
    findUser();
  }, []);

  function findUser() {
    users.find((user) => {
      if (user.id === userId) {
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
          setSaved(!saved);
          setSavedRecipes([...savedRecipes, data.savedRecipe]);
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
          const saved = savedRecipes.filter(
            (saved) => saved?.recipeId !== data.deletedSavedRecipe?.recipeId
          );

          setSavedRecipes(saved);
          setSaved(!saved);
        } else {
          console.error(data.error);
        }
      });
  }

  return (
    <article className="recipe-card">
      <div className="recipe-header">
        <div className="recipe-info">
          <div className="init">
            {avatar ? (
              <img src={avatar} alt="photo" />
            ) : (
              user && fristName[0]?.toUpperCase() + lastName[0]?.toUpperCase()
            )}
          </div>

          <div className="name-category">
            <p>{fristName + " " + lastName}</p>
            <p>{category}</p>
          </div>
        </div>
        <button> {parse(recipeCardIcons.menu)}</button>
      </div>

      <div
        className="recipe-body"
        onClick={() => {
          navigate(`/recipes/${recipe.id}`, {
            state: { from: location.pathname, recipe, up: true },
          });
        }}
      >
        <img src={image} alt="" />
        <div className="title-save">
          <p>{title}</p>
          <button
            onClick={(e) =>
              handleIconClick(e, () =>
                saved ? handleUnsaveRecipe() : handleSaveRecipe()
              )
            }
          >
            {saved ? parse(recipeCardIcons.saved) : parse(recipeCardIcons.save)}
          </button>
        </div>
      </div>

      <div className="recipe-icons">
        <button>{parse(recipeCardIcons.like)}</button>

        <button
          onClick={() => {
            navigate(`/recipes/${recipe.id}#addComment`, {
              state: { from: location.pathname, recipe, up: false },
            });
          }}
        >
          {parse(recipeCardIcons.comment)}
        </button>
        <button> {parse(recipeCardIcons.share)}</button>
      </div>

      {show && <AddCommentModal show={show} setShow={setShow} />}
    </article>
  );
}
