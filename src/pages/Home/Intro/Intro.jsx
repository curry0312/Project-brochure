import { useEffect, useState } from "react";
import ImageBannerShowComponent from "../../../components/ImageBannerShowComponent";
import { IntroImagesBanner } from "../../../data/HomeImageBanner";
import { IntroTextBanner } from "../../../data/HomeInfoBanner";
import InfoBanner from "./InfoBanner";
import BannerToggle from "./BannerToggle";

function Intro() {
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(currentIndex)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentIndex((prev) => {
        if (prev === 3) return (prev = 0);
        return prev + 1;
      });
    }, 5 * 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [currentIndex]);
  return (
    <section className="relative p-5 bg-gray-200 md:p-10">
      <div className="w-[70%] h-[90%] my-auto mx-auto">
        <ImageBannerShowComponent
          bannerImages={IntroImagesBanner}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
        <InfoBanner
          bannerInfo={IntroTextBanner}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      </div>
      <BannerToggle currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}/>
    </section>
  );
}

export default Intro;
