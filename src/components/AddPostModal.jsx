import { useState, useContext } from "react";
import { DataContext } from "./DataProvider";

// COMPONENTS
import AddPostForm from "./AddPostForm";

export default function AddPostModal({ show, setShow }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [category, setCategory] = useState("");
  const [prepTime, setPrepTime] = useState(0);
  const [cookTime, setCookTime] = useState(0);
  // const [imageFile, setImageFile] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");

  const { baseURL, token, recipes, setRecipes } = useContext(DataContext);

  const defaultImageUrl =
    "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/2caca97b-77f6-48e7-837d-62642c0c9861/Derivates/12591894-e010-4a02-b04e-2627d8374298.jpg";

  const handlePostSubmit = (e) => {
    e.preventDefault();

    const formData = {
      title,
      description,
      ingredients,
      image: image || defaultImageUrl,
      instructions,
      category,
      prepTime,
      cookTime,
    };

    fetch(`${baseURL}/recipe`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data && !data.error) {
          setShow(false);
          setRecipes([...recipes, data.recipe]);
          setError("");
        } else {
          setError(data.error);
        }
      });
  };

  // const handlePostSubmit = async (e) => {
  //   e.preventDefault();

  //   const formData = new FormData();
  //   formData.append("title", title);
  //   formData.append("description", description);
  //   formData.append("ingredients", ingredients);
  //   formData.append("instructions", instructions);
  //   formData.append("category", category);
  //   formData.append("prepTime", prepTime);
  //   formData.append("cookTime", cookTime);

  //   if (imageFile) {
  //     formData.append("image", imageFile);
  //   }

  //   try {
  //     const response = await fetch(`${baseURL}/recipe`, {
  //       method: "POST",
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //       body: formData,
  //     });

  //     const data = await response.json();

  //     if (response.ok && data.recipe) {
  //       setRecipes([...recipes, data.recipe]);
  //       setShow(false);
  //       setError("");
  //     } else {
  //       setError(data.error || "An unexpected error occurred.");
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //     setError("Failed to submit the recipe. Please try again.");
  //   }
  // };

  return (
    <div>
      <div className="post-modal-overlay">
        <div className="add-post-modal-content">
          <button className="close-button" onClick={() => setShow(false)}>
            &times;
          </button>
          <div>
            <h2 className="add-post-h2">Add post</h2>
            <AddPostForm
              handlePostSubmit={handlePostSubmit}
              error={error}
              title={title}
              setTitle={setTitle}
              description={description}
              setDescription={setDescription}
              ingredients={ingredients}
              setIngredients={setIngredients}
              instructions={instructions}
              setInstructions={setInstructions}
              category={category}
              setCategory={setCategory}
              prepTime={prepTime}
              setPrepTime={setPrepTime}
              cookTime={cookTime}
              setCookTime={setCookTime}
              // imageFile={imageFile}
              // setImageFile={setImageFile}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
