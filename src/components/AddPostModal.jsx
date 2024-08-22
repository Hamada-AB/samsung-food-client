import { useState } from "react";

// COMPONENTS
import AddPostForm from "./AddPostForm";

export default function AddPostModal({ show, setShow }) {
  return (
    <div>
      <div className="modal-overlay">
        <div className="add-post-modal-content">
          <button className="close-button" onClick={() => setShow(false)}>
            &times;
          </button>
          <AddPostForm />
        </div>
      </div>
    </div>
  );
}
