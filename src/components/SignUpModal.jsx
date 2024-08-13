import { useState } from "react";

// ICONS
import save from "../assets/icons/sign-up-feartures/save.svg";
import discover from "../assets/icons/sign-up-feartures/discover.svg";
import plan from "../assets/icons/sign-up-feartures/plan.svg";
import follow from "../assets/icons/sign-up-feartures/follow.svg";
import googlePlay from "../assets/icons/sign-up-feartures/google-play.svg";
import appStore from "../assets/icons/sign-up-feartures/app-store.svg";

// COMPONENTS
import AuthForm from "./AuthForm";
import AlternativeAuth from "./AlternativeAuth";

export default function SignUpModal({
  setIsOpen,
  baseURL,
  setSuccessfulMessage,
  setToken,
  setUserInfo,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // To automatically log in a user after they sign up
  function login() {
    fetch(`${baseURL}/user/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data && !data.error) {
          setToken(data.token);
          localStorage.setItem("jwt", data.token);
          setUserInfo(data.userInfo);
          localStorage.removeItem("userInfo");
          localStorage.setItem("userInfo", JSON.stringify(data.userInfo));
        } else {
          console.error(data.error);
        }
      });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch(`${baseURL}/user/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data && !data.error) {
          setIsOpen(false);
          setError("");
          setEmail("");
          setPassword("");
          setSuccessfulMessage(data.message);

          login();
        } else {
          setSuccessfulMessage("");
          setError(data.error);
        }
      });
  };

  return (
    <div>
      <div className="modal-overlay">
        <div className="sign-up-modal-content">
          <button className="close-button" onClick={() => setIsOpen(false)}>
            &times;
          </button>

          <div className="features-and-form">
            <div className="sign-up-features">
              <h2>Sign up to save your recipes, lists, and many more!</h2>

              <ul>
                <li>
                  <img src={save} alt="icon" /> Save your favourite recipes from
                  anywhere
                </li>
                <li>
                  <img src={discover} alt="icon" /> Discover top-rated recipes
                  for inspiration
                </li>
                <li>
                  <img src={plan} alt="icon" /> Plan meals and make shopping
                  lists with ease
                </li>
                <li>
                  <img src={follow} alt="icon" /> Follow your favourite food
                  creators
                </li>
              </ul>

              <div className="download-app">
                <button>
                  <img src={googlePlay} alt=" google play logo" />
                </button>
                <button>
                  <img src={appStore} alt="apple store logo" />
                </button>
              </div>
            </div>

            <div className="sign-up-form">
              <AuthForm
                handleSubmit={handleSubmit}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                error={error}
                text="Sign Up"
              />

              <AlternativeAuth />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
