export default function AddCommentForm({
  handleFormSubmit,
  error,
  content,
  setContent,
}) {
  return (
    <form onSubmit={handleFormSubmit} className="add-comment-form">
      <textarea
        className={`comment-textarea ${error ? "border-error" : ""}`}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Share more about your experience. Any tips for improving this recipe?"
      ></textarea>
      {error && <p className="content-error-message">{error}</p>}
      <input type="submit" value={"Save"} className="comment-submit-btn" />
    </form>
  );
}
