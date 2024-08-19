import { useState, useEffect, useRef } from "react";
import parse from "html-react-parser";
import logo from "./../assets/icons/logo.svg";
import { mainHeaderIcons } from "../data/mainHeaderIcons";

export default function Header({ userInfo, setToken, children }) {
  const [showLogOut, setShowLogOut] = useState(false);

  const divRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the clicked target is outside of the div and button or not
      if (
        divRef.current &&
        !divRef.current.contains(event.target) &&
        btnRef.current &&
        !btnRef.current.contains(event.target)
      ) {
        setShowLogOut(false); // Hide the div if the click was outside
      }
    };

    // Attach the event listener to the document
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener when the component rerender to avoid memory lake
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header className="main-haeder">
        <img src={logo} alt="samung logo" />

        <div className="navbar">
          {children}

          <div className="serach-bar">
            {parse(mainHeaderIcons.serach)}{" "}
            <input type="search" name="" id="" placeholder="Search" />
          </div>
        </div>

        <div className="header-right">
          <div className="initials">{userInfo?.email[0]?.toUpperCase()}</div>

          <button
            ref={btnRef}
            className="down-arrow"
            onClick={() => setShowLogOut(!showLogOut)}
          >
            <span>{userInfo?.email}</span>
            {parse(mainHeaderIcons.downArrow)}
          </button>

          {showLogOut && (
            <div ref={divRef} className="log-out-menu ">
              <button
                className="log-out-btn"
                onClick={() => {
                  setToken("");
                  localStorage.removeItem("jwt");
                }}
              >
                {parse(mainHeaderIcons.logOut)} Log out
              </button>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
