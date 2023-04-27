import ImageBannerShowComponent from "../../../components/ImageBannerShowComponent";
import { IntroImagesBanner } from "../../../data/HomeImageBanner";
import { IntroTextBanner } from "../../../data/HomeInfoBanner";
import InfoBanner from "./InfoBanner";

function Intro() {
  return (
    <section className="p-10 bg-gray-200">
      <div className="w-[70%] h-[90%] my-auto mx-auto">
        <ImageBannerShowComponent bannerImages={IntroImagesBanner} speed={5} />
        <InfoBanner bannerInfo={IntroTextBanner}/>
      </div>
    </section>
  );
}

export default Intro;
