import { useState, useEffect } from "react";
import clsx from "clsx";
import logo from "../assets/icons/logo.svg";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";

export default function HomeHeader({ setToken, setUserInfo, baseURL }) {
  const [currentScrollY, setcurrentScrollY] = useState(0);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  useEffect(() => {
    if (isSignUpModalOpen) {
      setIsLoginModalOpen(false);
    }
  }, [isSignUpModalOpen]);

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
        <button className="login-btn" onClick={() => setIsLoginModalOpen(true)}>
          Log in
        </button>
      </header>

      {isLoginModalOpen && (
        <LoginModal
          isLoginModalOpen={isLoginModalOpen}
          setIsLoginModalOpen={setIsLoginModalOpen}
          setIsSignUpModalOpen={setIsSignUpModalOpen}
          setToken={setToken}
          setUserInfo={setUserInfo}
          baseURL={baseURL}
        />
      )}

      {isSignUpModalOpen && (
        <SignUpModal
          setIsOpen={setIsSignUpModalOpen}
          baseURL={baseURL}
          setToken={setToken}
          setUserInfo={setUserInfo}
        />
      )}
    </>
  );
}
