import apple from "../../assets/icons/apple-store-b.svg";
import play from "../../assets/icons/google-play-b.svg";

import galaxy from "../../assets/icons/galaxy-store.svg";
import arrowS from "../../assets/icons/arrow-s.svg";

export default function AwardWinning() {
  return (
    <section className="wining-app">
      <h2>Get the award-winning app</h2>
      <p>
        Organize your recipes, meal plan, grocery shop, and more with Samsung
        Food.
      </p>

      <div className="app-stores-icons">
        <img src={apple} alt="apple store icon" />
        <img src={play} alt="google play icon" />
        <img src={galaxy} alt="galaxy store icon" />
      </div>

      <div className="web-app-link">
        <a href="#">Or try our web app</a>
        <img src={arrowS} alt="arrow icon" />
      </div>
    </section>
  );
}
