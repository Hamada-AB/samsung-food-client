import { useState } from "react";
import { NavLink, Routes, Route } from "react-router-dom";
// COMPONENTS
import DataProvider from "./DataProvider";
import MainHeader from "./MainHeader";
import MainHome from "./MainHome";
import Recipes from "./Recipes";
import SavedRecipes from "./SavedRecipes";
import ClickedRecipe from "./ClickedRecipe";

export default function MainPage({ token, setToken, userInfo, baseURL }) {
  const [selectedTab, setSelectedTab] = useState(null);

  function habdleSelectedTab(num) {
    setSelectedTab(num);
  }

  return (
    <>
      <div className="main-page">
        <MainHeader userInfo={userInfo} setToken={setToken}>
          <nav>
            <ul>
              <li className={`link ${selectedTab === 1 ? "selected" : ""}`}>
                <NavLink to="/home" onClick={() => habdleSelectedTab(1)}>
                  Home
                </NavLink>
              </li>
              <li className={`link ${selectedTab === 2 ? "selected" : ""}`}>
                <NavLink to="/recipes" onClick={() => habdleSelectedTab(2)}>
                  Explore
                </NavLink>
              </li>
              <li className={`link ${selectedTab === 3 ? "selected" : ""}`}>
                <NavLink to="/saved" onClick={() => habdleSelectedTab(3)}>
                  Saved
                </NavLink>
              </li>
            </ul>
          </nav>
        </MainHeader>

        <main className="main">
          <DataProvider token={token} baseURL={baseURL} userInfo={userInfo}>
            <Routes>
              <Route path="/home" element={<MainHome />} />
              <Route path="/recipes" element={<Recipes />} />
              <Route path="/recipes/:id" element={<ClickedRecipe />} />
              <Route path="/saved" element={<SavedRecipes />} />
            </Routes>
          </DataProvider>
        </main>
      </div>
    </>
  );
}
