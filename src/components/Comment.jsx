import { useState, useEffect } from "react";

export default function Comment({ users, comment }) {
  const [commenter, setCommenter] = useState({});

  useEffect(() => {
    findCommenter();
  }, [users, comment]);

  function findCommenter() {
    users.find((user) => {
      if (user.id === comment.userId) {
        setCommenter(user);
      }
    });
  }
  return (
    <article>
      <div className="commenter">
        <img src={commenter.avatar} alt="people photo" />
        <p>{commenter && commenter.fristName + " " + commenter.lastName}</p>
      </div>
      <div className="comment-content">
        <p>{comment.content}</p>
      </div>
    </article>
  );
}
