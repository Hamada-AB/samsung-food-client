import { useContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { DataContext } from "./DataProvider";
import { clickedRecipeIcons } from "../data/clickedRecipeIcons";
import parse from "html-react-parser";
import Comment from "./Comment";

export default function ClickedRecipe() {
  const [currentScrollY, setcurrentScrollY] = useState(0);
  const [user, setUser] = useState({});
  const [recipeComments, setRecipeComments] = useState([]);
  const { comments, users, userInfo } = useContext(DataContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/home";
  const recipe = location.state.recipe;

  console.log({ currentScrollY });

  useEffect(() => {
    findUser();
    getRecipeComments();
  }, [users, comments]);

  useEffect(() => {
    // scroll to the top of the page when the component is mounted
    window.scrollTo(0, 0);

    const handleScroll = () => {
      setcurrentScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function findUser() {
    users.find((user) => {
      if (user.id === recipe.userId) {
        setUser(user);
      }
    });
  }

  function getRecipeComments() {
    const relatedComments = comments.filter(
      (comment) => comment.recipeId === recipe.id
    );

    setRecipeComments(relatedComments);
  }

  const handleBackClick = () => {
    navigate(from);
  };

  return (
    <div className="main-div">
      <button
        className={`back-btn ${currentScrollY > 65 ? "scroll" : ""}`}
        onClick={handleBackClick}
      >
        {parse(clickedRecipeIcons.back)}
        Back
      </button>
      <article className="detailed-recipe-container">
        <section className="detailed-recipe">
          <div
            className="food-image"
            style={{
              backgroundImage: `url(${recipe.image})`,
            }}
          ></div>
          <div className="recipe-details">
            <div className="details-header">
              <div className="header-icons">
                <button> {parse(clickedRecipeIcons.edit)}</button>
                <button> {parse(clickedRecipeIcons.print)}</button>
              </div>

              <button className="save-btn">Save</button>
            </div>

            <div className="user-details">
              <img src={user.avatar} alt="people photo" />
              <p>{user && user.fristName + " " + user.lastName}</p>
            </div>
            <p className="recipe-title">{recipe.title}</p>
            <div className="savedTime">
              {parse(clickedRecipeIcons.savedTiems)} <p>150</p>
            </div>

            <div className="prep">
              <p>{`${recipe.ingredients.split(".").length} ingredients`}</p>
              <div className="preparation-time">
                <p>
                  <span>Prep:</span> {`${recipe.prepTime}min`}
                </p>
                <p>
                  <span>Cook:</span> {`${recipe.cookTime}min`}
                </p>
              </div>
            </div>

            <div className="description">
              <h2>Instructions:</h2>
              <p>{recipe.description}</p>
            </div>
          </div>
        </section>

        <section className="ingredients-and-instuctions">
          <div className="ingredients">
            <h3>Ingredients</h3>
            <ul>
              {recipe.ingredients.split(".").map((ingredient, index) => {
                return (
                  <li key={index}>
                    <div className="ingredient">
                      {ingredient && parse(clickedRecipeIcons.checked)}
                      <p>{ingredient}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="instructions">
            <div className="instructions-header">
              <h3>Instructions</h3>
              <button>{parse(clickedRecipeIcons.print)}</button>
            </div>

            <ul>
              {recipe.instructions.split(".").map((inst, index) => {
                return (
                  <li key={index}>
                    <div className="instruction">
                      {inst && parse(clickedRecipeIcons.step)}
                      {inst}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <section className="comments">
          <div className="comment">
            <ul>
              {recipeComments.map((comment, index) => {
                return (
                  <li key={index}>
                    <Comment users={users} comment={comment} />
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="add-comment">
            <div>{userInfo.email[0].toUpperCase()}</div>
            <input type="text" placeholder="Add your comment. . ." />
          </div>
        </section>
      </article>
    </div>
  );
}
