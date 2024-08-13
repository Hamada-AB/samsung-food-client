import { useState } from "react";
import SignUpModal from "../SignUpModal";
import ladyPhoto from "../../assets/images/section-1/lady.jpg";

export default function SectionOne({
  baseURL,
  setSuccessfulMessage,
  setToken,
  setUserInfo,
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="section-one">
        <div className="welcome">
          <h1>Food Your Way</h1>
          <p className="welcome-message">
            Personalize your culinary experience with a versatile app that lets
            you explore, customize, and save recipes tailored to your taste.
          </p>
          <button className="signup-btn" onClick={() => setIsOpen(true)}>
            Sign Up
          </button>
          <div className="rating">
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p>4.8 rating in the AppStore and Google Play</p>
          </div>
        </div>
        <div className="lady-photo">
          <img src={ladyPhoto} alt="korean lady cooks" />
        </div>
      </section>

      {isOpen && (
        <SignUpModal
          setToken={setToken}
          setUserInfo={setUserInfo}
          setIsOpen={setIsOpen}
          baseURL={baseURL}
          setSuccessfulMessage={setSuccessfulMessage}
        />
      )}
    </>
  );
}
