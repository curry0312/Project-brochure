import { useEffect, useRef, useState } from "react";

function ImageBannerComponent({ bannerImages, speed, header, subscription }) {
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
    }, speed*1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [currentIndex]);

  return (
    <div className="relative overflow-hidden">
      <div
        className="w-[400%] transition duration-700 ease-in-out"
        ref={imageRef}
      >
        <div className="flex">
          {bannerImages?.map((image) => {
            return (
              <BannerImage
                key={image.title}
                image={image.url}
                info={image.info}
              />
            );
          })}
        </div>
      </div>
      <div className="absolute left-8 bottom-0">
        <p className="text-white text-md font-Poltawski font-bold z-40">
          {header}
        </p>
        <h2 className="text-white text-[100px] font-Poltawski font-bold z-40">
          {subscription}
        </h2>
      </div>
    </div>
  );
}

function BannerImage({ image }) {
  return (
    <div className="relative w-full h-full">
      <img
        className="w-full h-full object-cover"
        src={image}
        alt={image.title}
      />
    </div>
  );
}

export default ImageBannerComponent;
