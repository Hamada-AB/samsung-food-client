import samsung from "../assets/icons/samsung.svg";
import apple from "../assets/icons/app.svg";
import google from "../assets/icons/google.svg";
import facebook from "../assets/icons/facebook.svg";
import tiktok from "../assets/icons/tiktok.svg";

export default function AlternativeAuth() {
  return (
    <>
      <div className="alternative-auth">
        <div className="line"></div>
        <div>OR</div>
        <div className="line"></div>
      </div>

      <div className="alternative-auth-icons">
        <button>
          <img src={samsung} alt="samsung logo" />
        </button>
        <button>
          <img src={apple} alt="apple logo" />
        </button>
        <button>
          <img src={google} alt="google logo" />
        </button>
        <button>
          <img src={facebook} alt="facebook logo" />
        </button>
        <button>
          <img src={tiktok} alt="ttiktok logo" />
        </button>
      </div>

      <p className="terms-and-privacy-policy">
        By using Samsung Food you agree to our <span>Terms</span> and
        <span> Privacy Policy</span>. This site is protected by reCAPTCHA and
        the Google <span>Privacy Policy</span> and
        <span>Terms of Service </span>
        apply.
      </p>
    </>
  );
}
