import { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

export default function DataProvider({ children, token, baseURL, userInfo }) {
  const [users, setUsers] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (token) {
      fetch(`${baseURL}/user/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data && !data.error) {
            setUsers(data.users);
          } else {
            setError(data.error);
          }
        })
        .finally(() => {
          setIsLoading(false);
        });

      fetch(`${baseURL}/recipe`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data && !data.error) {
            setRecipes(data.recipes);
          } else {
            setError(data.error);
          }
        })
        .finally(() => {
          setIsLoading(false);
        });

      fetch(`${baseURL}/comment`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data && !data.error) {
            setComments(data.comments);
          } else {
            setError(data.error);
          }
        })
        .finally(() => {
          setIsLoading(false);
        });

      // fetch(`${baseURL}/savedRecipe`, {
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //     "Content-Type": "application/json",
      //   },
      // })
      //   .then((response) => response.json())
      //   .then((data) => {
      //     if (data && !data.error) {
      //       setSavedRecipes(data.savedRecipes);
      //     } else {
      //       setError(data.error);
      //     }
      //   });
    }
  }, [token]);

  const value = {
    token,
    baseURL,
    userInfo,
    users,
    setUsers,
    recipes,
    setRecipes,
    comments,
    setComments,
    isLoading,
    setIsLoading,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}
