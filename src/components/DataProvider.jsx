import { createContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
export const DataContext = createContext();

export default function DataProvider({ children, token, baseURL, userInfo }) {
  const [users, setUsers] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [comments, setComments] = useState([]);
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const location = useLocation();

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

      fetch(`${baseURL}/savedRecipe/all`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data && !data.error) {
            setSavedRecipes(data.allSavedRecipes);
          } else {
            setError(data.error);
          }
        });
    }
  }, [token, location]);

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
    savedRecipes,
    setSavedRecipes,
    error,
    setError,
    isLoading,
    setIsLoading,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}
