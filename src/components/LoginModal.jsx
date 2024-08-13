import { useState } from "react";
import AuthForm from "./AuthForm";
import AlternativeAuth from "./AlternativeAuth";
export default function LoginModal({
  isOpen,
  setIsOpen,
  setToken,
  setUserInfo,
  baseURL,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch(`${baseURL}/user/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data && !data.error) {
          setToken(data.token);
          setIsOpen(false);
          localStorage.setItem("jwt", data.token);

          setUserInfo(data.userInfo);
          localStorage.removeItem("userInfo");
          localStorage.setItem("userInfo", JSON.stringify(data.userInfo));

          setError("");
        } else {
          setError(data.error);
        }
      });
  };

  return (
    <div>
      <div className="modal-overlay">
        <div className="login-modal-content">
          <button className="close-button" onClick={() => setIsOpen(false)}>
            &times;
          </button>

          <AuthForm
            handleSubmit={handleSubmit}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            error={error}
            text="Log in"
          />
          <div className="no-account">
            <p>Don&#39;t have an account?</p>
            <button>Sign Up</button>
          </div>

          <AlternativeAuth />
        </div>
      </div>
    </div>
  );
}
