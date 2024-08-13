// COMPONENTS
import HomeHeader from "./HomeHeader";
import SectionOne from "./sections/SectionOne";

export default function HomePage({
  successfulMessage,
  setSuccessfulMessage,
  setToken,
  setUserInfo,
  baseURL,
}) {
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
          setSuccessfulMessage={setSuccessfulMessage}
        />
      </div>

      <div className="home-page">
        <div className="logo">
          {successfulMessage && (
            <p className="successful-message">{successfulMessage}</p>
          )}
        </div>
      </div>
    </>
  );
}
