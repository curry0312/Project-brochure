import { useEffect, useRef, useState } from "react";

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
                <div className="px-4">
                  <h3 className="font-Poltawski text-3xl">{info.title}</h3>
                  <p className="font-Poltawski text-xl">{info.subscription}</p>
                </div>
                <div>
                  {info.features.map((feature,index) => {
                    return (
                      <div key={index} className="p-5">
                        <div className="flex">
                          <div className="p-4 border-r-2 border-gray-400">
                            <h4 className="text-black font-Poltawski font-bold">
                              CATEGORY
                            </h4>
                            <p className="font-Poltawski">{feature.category}</p>
                          </div>
                          <div className="p-4 border-r-2 border-gray-400">
                            <h4 className="text-black font-Poltawski font-bold">
                              RATING
                            </h4>
                            <p className="font-Poltawski">{feature.rating}</p>
                          </div>
                          <div className="p-4">
                            <h4 className="text-black font-Poltawski font-bold">
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
                  className="bg-red-600 text-white font-Poltawski w-[80px] h-[80px] hover:bg-red-900"
                  onClick={null}
                >
                  {info.title}
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
