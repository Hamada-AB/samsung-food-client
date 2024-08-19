import { useState, useEffect, useContext } from "react";
import { DataContext } from "./DataProvider";
import parse from "html-react-parser";

import { recipeCardIcons } from "../data/recipe-card-icoms";

export default function RecipeCard({ recipe }) {
  const { category, title, image, userId } = recipe;
  const { users } = useContext(DataContext);
  const [user, setUser] = useState("");
  const { fristName, lastName, avatar } = user;

  function findUser() {
    users.find((user) => {
      if (user.id === userId) {
        setUser(user);
      }
    });
  }

  useEffect(() => {
    findUser();
  }, []);

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

        {parse(recipeCardIcons.menu)}
      </div>

      <div className="recipe-body">
        <img src={image} alt="" />
        <div className="title-save">
          <p>{title}</p>
          {parse(recipeCardIcons.save)}
        </div>
      </div>

      <div className="recipe-icons">
        {parse(recipeCardIcons.like)}
        {parse(recipeCardIcons.comment)}
        {parse(recipeCardIcons.share)}
      </div>
    </article>
  );
}
