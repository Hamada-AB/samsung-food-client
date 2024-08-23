import { recipeCardIcons } from "../data/recipe-card-icons";

import parse from "html-react-parser";

export default function AddPostForm(props) {
  return (
    <form onSubmit={props.handlePostSubmit} className="add-post-form">
      <div>
        <h3 className="add-post-h3">Title</h3>
        <input
          type="text"
          value={props.title}
          placeholder="Give your recipe a name"
          onChange={(e) => props.setTitle(e.target.value)}
        />
      </div>

      <div>
        <h3 className="add-post-h3">Category</h3>
        <select
          value={props.category}
          onChange={(e) => props.setCategory(e.target.value)}
        >
          <option value="">Select category</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="vegan">Vegan</option>
          <option value="non-vegetarian">Non-Vegetarian</option>
        </select>
      </div>

      <div>
        <label htmlFor="image" className="custom-file-upload">
          <div>
            {parse(recipeCardIcons.camera)}
            <p>Add photos</p>
          </div>
        </label>

        <input
          id="image"
          type="file"
          accept="image/*"
          // onChange={(e) => {
          //   props.setImageFile(e.target.files[0]);
          // }}
        />
      </div>

      <div>
        <h3 className="add-post-h3">Description</h3>
        <textarea
          className="post-textarea"
          name="description"
          placeholder="introduce your recipe, add notes, cooking tips, serving suggestions, etc..."
          value={props.description}
          onChange={(e) => props.setDescription(e.target.value)}
        ></textarea>
      </div>

      <div>
        <h3 className="add-post-h3">Ingredients</h3>
        <textarea
          className="post-textarea"
          name="ingredients"
          placeholder="Add or paste one or multiple items separated by a period."
          value={props.ingredients}
          onChange={(e) => props.setIngredients(e.target.value)}
        ></textarea>
      </div>

      <div>
        <h3 className="add-post-h3">Instructions</h3>
        <textarea
          className="post-textarea"
          name="instructions"
          placeholder="Add or paste one or multiple steps separated by a period."
          value={props.instructions}
          onChange={(e) => props.setInstructions(e.target.value)}
        ></textarea>
      </div>

      <div>
        <h3 className="add-post-h3">Prep time</h3>
        <p className="time-p">How long does it take to prepare this recipe?</p>
        <div className="time-need">
          <label htmlFor="prep">Minutes</label>
          <input
            type="text"
            id="prep"
            placeholder="0"
            value={props.prepTime}
            onChange={(e) => props.setPrepTime(e.target.value)}
          />
        </div>
      </div>

      <div>
        <h3 className="add-post-h3">Cook time</h3>
        <p className="time-p">How long does it take to cook this recipe?</p>
        <div className="time-need">
          <label htmlFor="cook">Minutes</label>
          <input
            type="text"
            id="cook"
            placeholder="0"
            value={props.cookTime}
            onChange={(e) => props.setCookTime(e.target.value)}
          />
        </div>
      </div>

      {props.error && <p className="post-error-message">{props.error}</p>}
      <input type="submit" value={"Save"} className="post-submit-btn" />
    </form>
  );
}

{
  /* <form onSubmit={handlePostSubmit} className="add-comment-form">
<textarea
  className={`comment-textarea ${error ? "border-error" : ""}`}
  value={content}
  onChange={(e) => setContent(e.target.value)}
  placeholder="Share more about your experience. Any tips for improving this recipe?"
></textarea>
{error && <p className="content-error-message">{error}</p>}
<input type="submit" value={"Save"} className="comment-submit-btn" />
</form> */
}
