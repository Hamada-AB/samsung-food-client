import { useState, useEffect } from "react";

export default function MainHome({ token, baseURL }) {
  const [recipes, setRecipes] = useState([]);

  console.log(recipes);

  useEffect(() => {
    if (token) {
      fetch(`${baseURL}/comment`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data && !data.error) {
            setRecipes(data.comments);
          } else {
            console.error(data.error);
          }
        });
    }
  }, [token]);

  return (
    <>
      <main>
        <h1>HOME</h1>
      </main>
    </>
  );
}
