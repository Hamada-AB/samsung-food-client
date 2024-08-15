import heartIcon from "../../assets/icons/heart-icon.svg";
import appStore from "../../assets/images/app-store.jpg";
import bestTrophy from "../../assets/images/best-trophy.webp";
import webby from "../../assets/images/webby.jpg";
import usersChoice from "../../assets/images/userschoice.jpg";

export default function LovedGlobally() {
  return (
    <section className="loved-globally">
      <div className="heart-icon">
        <img src={heartIcon} alt="heart icon" />
      </div>

      <div className="home-cooks">
        <div className="plam-leaf-left"></div>

        <div className="middle-div">
          <div className="heading-h2">
            <h2>Home cooks around the world love Samsung Food</h2>
          </div>

          <div className="global-icons">
            <div>
              <img src={appStore} alt="apple store icon" />
              <p>Featured App of the Week</p>
            </div>

            <div>
              <img src={bestTrophy} alt="best trophy icon" />
              <p>Best Everyday Essentials</p>
            </div>

            <div>
              <img src={webby} alt="webby icon" />
              <p>Webby Awards Nominee 2021</p>
            </div>

            <div>
              <img src={usersChoice} alt="users choice icon" />
              <p>Users’ Choice Award Nominee</p>
            </div>
          </div>
        </div>

        <div className="plam-leaf-right"></div>
      </div>
    </section>
  );
}
