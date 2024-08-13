import { useState } from "react";

import openedEye from "../assets/icons/sign-up-feartures/opend-eye.svg";
import closedEye from "../assets/icons/sign-up-feartures/closed-eye.svg";

import clsx from "clsx";

export default function AuthForm({
  handleSubmit,
  email,
  setEmail,
  password,
  setPassword,
  error,
  text,
}) {
  const [showPw, setShowPw] = useState(false);

  const inputClass = clsx({
    "input-error-border": error && !email,
  });

  return (
    <form onSubmit={handleSubmit} className="loginForm">
      <input
        className={inputClass}
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />

      <div className={`${inputClass} password-dev`}>
        <input
          className="password-input"
          type={showPw ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <span onClick={() => setShowPw(!showPw)}>
          <img src={showPw ? openedEye : closedEye} alt="eye icon" />
        </span>
      </div>

      {error && <p className="error-message">{error}</p>}
      <button className="submit-btn" type="submit">
        {text}
      </button>
    </form>
  );
}
