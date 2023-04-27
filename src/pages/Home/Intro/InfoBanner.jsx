import { useEffect, useRef } from "react";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";

function InfoBannerComponent({ bannerInfo, currentIndex }) {
  const imageRef = useRef();

  function transformImage() {
    imageRef.current.style.transform = `translateX(-${
      (currentIndex / 4) * 100
    }%)`;
  }

  useEffect(() => {
    transformImage();
  }, [currentIndex]);

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex w-[400%] transition duration-1000 ease-in-out"
        ref={imageRef}
      >
        {bannerInfo?.map((info, index) => {
          return (
            <div className="w-full flex justify-between" key={index}>
              <div className="flex flex-col">
                {/*Header*/}
                <div className="">
                  <h3 className="font-Sigmar text-3xl">{info.title}</h3>
                  <p className="font-Poltawski text-xl">{info.subscription}</p>
                </div>
                {/*Features*/}
                <div>
                  {info.features.map((feature, index) => {
                    return <Detail key={index} category={feature.category} rating={feature.rating} level={feature.level}/>;
                  })}
                </div>
              </div>
              {/*Button*/}
              <div className="flex flex-col justify-end">
                <button
                  className="bg-red-600 text-white font-Poltawski px-8 py-4 flex items-center group hover:bg-red-900"
                  onClick={null}
                >
                  <span>{info.title}</span>
                  <div className="block translate-x-0 group-hover:translate-x-1 transition duration-200">
                    <TrendingFlatIcon sx={{ color: "white" }} />
                  </div>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Detail({ category, rating, level }) {
  return (
    <div className="p-2">
      <div className="flex">
        <div className="p-4 border-r-2 border-gray-400">
          <h4 className="text-black text-2xl font-Poltawski font-bold">
            CATEGORY
          </h4>
          <p className="font-Poltawski">{category}</p>
        </div>
        <div className="p-4 border-r-2 border-gray-400">
          <h4 className="text-black text-2xl font-Poltawski font-bold">
            RATING
          </h4>
          <p className={parseFloat(rating) > 7 ? 'text-red-500 font-Poltawski':'font-Poltawski'}>{rating}</p>
        </div>
        <div className="p-4">
          <h4 className="text-black text-2xl font-Poltawski font-bold">
            LEVEL
          </h4>
          <p className="font-Poltawski">{level}</p>
        </div>
      </div>
    </div>
  );
}

export default InfoBannerComponent;
