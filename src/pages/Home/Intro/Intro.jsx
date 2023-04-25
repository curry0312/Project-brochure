import ImageBannerShowComponent from "../../../components/ImageBannerShowComponent";
import { IntroBanner } from "../../../data/HomeImageBanner";
import { HomeInfoBanner } from "../../../data/HomeInfoBanner";
import InfoBanner from "./InfoBanner";

function Intro() {
  return (
    <section className="p-10 bg-gray-200">
      <div className="w-[70%] h-[90%] my-auto mx-auto">
        <ImageBannerShowComponent bannerImages={IntroBanner} speed={5} />
        <InfoBanner bannerInfo={HomeInfoBanner}/>
      </div>
    </section>
  );
}

export default Intro;
