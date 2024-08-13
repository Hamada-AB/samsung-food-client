import { useState, useEffect } from "react";
import clsx from "clsx";
import logo from "../assets/icons/logo.svg";

export default function HomeHeader({ setToken, setUserInfo, baseURL }) {
  const [currentScrollY, setcurrentScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const headerClasses = clsx({
    "home-header": true,
    "scroll-fixed": currentScrollY > 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      setcurrentScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentScrollY]);

  return (
    <>
      <header className={headerClasses}>
        <div className="logo">
          <img src={logo} alt="samsung logo." />
        </div>
        <button className="login-btn" onClick={() => setIsOpen(true)}>
          Log in
        </button>
      </header>
    </>
  );
}
