import { useEffect, useRef, useState } from "react";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import { IconButton } from "@mui/material";

function InfoBannerComponent({ bannerInfo }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageRef = useRef();

  function transformImage() {
    imageRef.current.style.transform = `translateX(-${
      (currentIndex / 4) * 100
    }%)`;
  }

  useEffect(() => {
    transformImage();
  }, [currentIndex]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentIndex((prev) => {
        if (prev === 3) return (prev = 0);
        return prev + 1;
      });
    }, 5000);
    return () => {
      clearTimeout(timeout);
    };
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
                <div className="">
                  <h3 className="font-Sigmar text-3xl">{info.title}</h3>
                  <p className="font-Poltawski text-xl">{info.subscription}</p>
                </div>
                <div>
                  {info.features.map((feature, index) => {
                    return (
                      <div key={index} className="">
                        <div className="flex">
                          <div className="p-4 border-r-2 border-gray-400">
                            <h4 className="text-black text-2xl font-Poltawski font-bold">
                              CATEGORY
                            </h4>
                            <p className="font-Poltawski">{feature.category}</p>
                          </div>
                          <div className="p-4 border-r-2 border-gray-400">
                            <h4 className="text-black text-2xl font-Poltawski font-bold">
                              RATING
                            </h4>
                            <p className="font-Poltawski">{feature.rating}</p>
                          </div>
                          <div className="p-4">
                            <h4 className="text-black text-2xl font-Poltawski font-bold">
                              LEVEL
                            </h4>
                            <p className="font-Poltawski">{feature.level}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-col justify-end pb-5">
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

export default InfoBannerComponent;
