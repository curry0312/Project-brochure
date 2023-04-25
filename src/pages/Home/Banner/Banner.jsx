import React, { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { HeroBanner } from "../../../data/HomeImageBanner";

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
    return () => {
      clearTimeout(timeout);
    };
  }, [currentIndex]);

  return (
    <div className="relative overflow-hidden">
      <div className="w-[400%] transition duration-1000 ease-in-out" ref={imageRef}>
        <div className="flex">
          {HeroBanner.map((image) => {
            return <BannerImage key={image.title} image={image.url} info={image.info} />;
          })}
        </div>
      </div>
      <div className="absolute left-8 bottom-0">
        <p className="text-white text-md font-Poltawski font-bold z-40">
          YOU CAN FIND TONS OF INTERESTING GAMES HERE
        </p>
        <h2 className="text-white text-[100px] font-Sigmar font-bold z-40">GAMES WORLD</h2>
      </div>
    </div>
  );
}

function BannerImage({ image }) {
  return (
    <div className="relative w-full h-screen">
      <img className="w-full h-full object-cover" src={image} alt={image.title} />
    </div>
  );
}

export default Banner;
