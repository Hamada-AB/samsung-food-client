import { useState, useContext } from "react";
import { DataContext } from "./DataProvider";

// COMPONENTS
import AddCommentForm from "./AddCommentForm";

export default function AddCommentModal({ show, setShow, recipe }) {
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  const { baseURL, token, comments, setComments } = useContext(DataContext);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    fetch(`${baseURL}/comment`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content, recipeId: recipe?.id }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data && !data.error) {
          setShow(false);
          setComments([...comments, data.comment]);
          setError("");
          setContent("");
        } else {
          setError(data.error);
        }
      });
  };

  return (
    <div>
      <div className="modal-overlay">
        <div className="add-comment-modal-content">
          <button className="close-button" onClick={() => setShow(false)}>
            &times;
          </button>
          <div>
            <h2 className="add-comment-h2">Add comment</h2>
            <AddCommentForm
              handleFormSubmit={handleFormSubmit}
              error={error}
              content={content}
              setContent={setContent}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
