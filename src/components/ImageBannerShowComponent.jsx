import { useEffect, useRef, useState } from "react";

function ImageBannerComponent({ bannerImages, speed, header, subscription }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageRef = useRef();

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
        className=""
        ref={imageRef}
      >
        <div className="">
          {bannerImages?.map((image,index) => {
            return (
              <BannerImage
                key={image.title}
                image={image.url}
                currentIndex={currentIndex}
                index={index}
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

function BannerImage({ image, currentIndex, index }) {
  return (
    <div className={currentIndex === index ? `imagesetting showup`:`imagesetting showdown`}>
      <img
        className="w-full h-full object-cover"
        src={image}
        alt={image.title}
      />
    </div>
  );
}

export default ImageBannerComponent;
