import { useState, useEffect } from "react";

export default function Comment({ users, comment }) {
  const [commenter, setCommenter] = useState({});

  useEffect(() => {
    findCommenter();
  }, [users, comment]);

  function findCommenter() {
    users.find((user) => {
      if (user?.id === comment?.userId) {
        setCommenter(user);
      }
    });
  }
  return (
    <article>
      <div className="commenter">
        {commenter?.avatar ? (
          <img src={commenter.avatar} alt="people photo" />
        ) : (
          <div className="no-image">
            {" "}
            {commenter.email?.[0]?.toUpperCase() || "U"}
          </div>
        )}
        <p>
          {commenter?.fristName && commenter?.lastName
            ? commenter?.fristName + " " + commenter?.lastName
            : "User"}
        </p>
      </div>
      <div className="comment-content">
        <p>{comment?.content}</p>
      </div>
    </article>
  );
}
