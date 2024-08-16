// COMPONENTS
import Footer from "./Footer";
import HomeHeader from "./HomeHeader";
import HeroSection from "./sections/HeroSection";
import MainSectons from "./sections/MainSections";

export default function HomePage({ setToken, setUserInfo, baseURL }) {
  return (
    <>
      <HomeHeader
        setToken={setToken}
        setUserInfo={setUserInfo}
        baseURL={baseURL}
      />
      <HeroSection
        setToken={setToken}
        setUserInfo={setUserInfo}
        baseURL={baseURL}
      />
      <MainSectons />
      <Footer />
    </>
  );
}
