// COMPONENTS
import HomeHeader from "./HomeHeader";
import SectionOne from "./sections/SectionOne";

export default function HomePage({ setToken, setUserInfo, baseURL }) {
  return (
    <>
      <div>
        <HomeHeader
          setToken={setToken}
          setUserInfo={setUserInfo}
          baseURL={baseURL}
        />
        <SectionOne
          setToken={setToken}
          setUserInfo={setUserInfo}
          baseURL={baseURL}
        />
      </div>

      <div className="home-page">
        <div className="logo"></div>
      </div>
    </>
  );
}
