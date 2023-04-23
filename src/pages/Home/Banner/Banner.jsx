import React, { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { banner } from "../../../data/banner";

function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageRef = useRef();

  function transformImage(){
      imageRef.current.style.transform = `translateX(-${(currentIndex/4)*100}%)`
  }

  useEffect(()=>{
    transformImage()
  },[currentIndex])

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentIndex((prev) => {
        if(prev === 3) return prev = 0
        return prev + 1
      });
    }, 4000);
    console.log(currentIndex);
    return () => {
      clearTimeout(timeout);
    };
  }, [currentIndex]);

  return (
    <div className="overflow-hidden">
      <div className="w-[400%] transition duration-1000 ease-in-out" ref={imageRef}>
        <div className="flex">
          {banner.map((image) => {
            return <BannerImage key={image.title} image={image.url} info={image.info} />;
          })}
        </div>
      </div>
    </div>
  );
}

function BannerImage({ image, info }) {
  return (
    <div className="relative w-full h-screen">
      <img className="w-full h-screen object-cover" src={image} alt={image.title} />
      <div className="absolute left-10 bottom-10 w-[100px] h-[100px]">
        <p className="text-white text-[100px] font-sans z-40">{info}</p>
      </div>
    </div>
  );
}

export default Banner;
