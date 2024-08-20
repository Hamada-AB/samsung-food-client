import { useState, useEffect, useContext } from "react";
import { DataContext } from "./DataProvider";
import { useNavigate, useLocation } from "react-router-dom";

import parse from "html-react-parser";

import { recipeCardIcons } from "../data/recipe-card-icoms";

export default function RecipeCard({ recipe }) {
  const { category, title, image, userId } = recipe;
  const { users } = useContext(DataContext);
  const [user, setUser] = useState("");
  const { fristName, lastName, avatar } = user;
  const navigate = useNavigate();
  const location = useLocation();

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

      {/*  */}

      <div
        className="recipe-body"
        onClick={() => {
          navigate(`/recipes/${recipe.id}`, {
            state: { from: location.pathname, recipe },
          });
        }}
      >
        <img src={image} alt="" />
        <div className="title-save">
          <p>{title}</p>
          <button
            onClick={(e) =>
              handleIconClick(e, () => console.log("save icon is clicked"))
            }
          >
            {parse(recipeCardIcons.save)}
          </button>
        </div>
      </div>

      <div className="recipe-icons">
        <button>{parse(recipeCardIcons.like)}</button>
        <button> {parse(recipeCardIcons.comment)}</button>
        <button> {parse(recipeCardIcons.share)}</button>
      </div>
    </article>
  );
}
