import { useState } from "react";

// COMPONENTS
import HomePage from "./components/HomePage";
import MainPage from "./components/MainPage";

const baseURL = "http://localhost:5000";

export default function App() {
  const [token, setToken] = useState(localStorage.getItem("jwt"));
  const [userInfo, setUserInfo] = useState(getUserInfo);

  function getUserInfo() {
    return JSON.parse(localStorage.getItem("userInfo"));
  }

  return (
    <>
      {!token ? (
        <HomePage
          setToken={setToken}
          setUserInfo={setUserInfo}
          baseURL={baseURL}
        />
      ) : (
        <MainPage
          token={token}
          setToken={setToken}
          userInfo={userInfo}
          baseURL={baseURL}
        />
      )}
    </>
  );
}
