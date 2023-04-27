import React, { useState } from "react";
import { AboutUsImagesBanner } from "../../../data/HomeImageBanner";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { AboutUsTextBanner } from "../../../data/HomeInfoBanner";
import { useEffect } from "react";
import { useRef } from "react";

function AboutUs() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  function togglePrev() {
    setCurrentIndex((prevIndex) => {
        if(currentIndex === 0) return prevIndex
        return prevIndex - 1
    });
  }
  function toggleNext() {
    setCurrentIndex((prevIndex) => { 
        if(currentIndex === 3) return prevIndex
        return prevIndex + 1
    });
  }

  useEffect(() => {
    textRef.current.style.transform = `translateX(-${
      (currentIndex / 4) * 100
    }%)`;
    imageRef.current.style.transform = `translateX(-${
      (currentIndex / 4) * 100
    }%)`;
  }, [currentIndex]);

  console.log(currentIndex);

  return (
    <div className="px-4">
      <div className="w-[90%] mx-auto">
        <div className="flex flex-col md:flex-row">
          {/*Text Banner*/}
          <div className="basis-1/2 flex flex-col justify-between">
            {/*Header*/}
            <div>
              <h2 className="text-black text-[3rem] font-Sigmar font-bold">
                WE ARE GAMES WORLD
              </h2>
            </div>
            {/*Text*/}
            <div className="overflow-hidden basis-1/2">
              <div ref={textRef} className="w-[400%] flex transition duration-1000 ease-in-out">
                {AboutUsTextBanner.map((e, index) => {
                  return (
                    <div className="w-full h-full" key={index}>
                      <p className="text-gray-600 font-Poltawski w-[50%]">{e.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            {/*Control Buttons*/}
            <div>
              <button
                className={currentIndex === 0 ? `w-10 h-10 bg-gray-400 text-white` : `w-10 h-10 bg-red-700 text-white`}
                onClick={() => togglePrev()}
              >
                <NavigateBeforeIcon />
              </button>
              <button
                className={currentIndex === 3 ? `w-10 h-10 bg-gray-400 text-white` : `w-10 h-10 bg-red-700 text-white`}
                onClick={() => toggleNext()}
              >
                <NavigateNextIcon />
              </button>
            </div>
          </div>
          {/*Images Banner*/}
          <div className="overflow-hidden basis-1/2 md:h-[600px]">
            <div ref={imageRef} className="w-[400%] h-full flex transition duration-1000 ease-in-out">
              {AboutUsImagesBanner.map((e, index) => {
                return (
                  <div className="w-[100%] h-full" key={index}>
                    <img
                      className="w-full h-full object-scale-down md:object-cover"
                      src={e.url}
                      alt={e.title}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
