// COMPONENTS
import MainHeader from "./MainHeader";

export default function MainPage({ token, setToken, userInfo, baseURL }) {
  return (
    <>
      <div className="main-page">
        <MainHeader userInfo={userInfo} setToken={setToken} />
      </div>
    </>
  );
}
