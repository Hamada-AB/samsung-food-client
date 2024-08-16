import facebookIcon from "../assets/icons/footer/facebook.svg";
import instagramIcon from "../assets/icons/footer/instagram.svg";
import twitterIcon from "../assets/icons/footer/twitter.svg";
import linkedInIcon from "../assets/icons/footer/linkedIn.svg";
import youtubeIcon from "../assets/icons/footer/youtube.svg";

export default function Footer() {
  return (
    <footer>
      <div className="copyrights">
        <p>&copy; 2024 Samsung Food. All rights reserved</p>
      </div>
      <div className="footer-tabs">
        <p>Privacy Policy</p>
        <p>Terms</p>
        <p>Security</p>
        <p>Do not sell my data</p>
      </div>
      <div className="footer-icons">
        <img src={facebookIcon} alt="facebook icon" />
        <img src={instagramIcon} alt="instagram icon" />
        <img src={twitterIcon} alt="twitter icon" />
        <img src={linkedInIcon} alt="linked in icon" />
        <img src={youtubeIcon} alt="youtube icon" />
      </div>
    </footer>
  );
}
