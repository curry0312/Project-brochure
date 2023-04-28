import React from "react";
import { IntroImagesBanner } from "../../../data/HomeImageBanner";

function BannerToggle({currentIndex, setCurrentIndex}) {
  return (
    <div className="flex justify-center items-center mt-5 md:absolute md:right-0 md:top-[50%] md:bottom-[50%] md:-rotate-90">
      <div className="flex gap-4">
        {IntroImagesBanner.map((e, index) => {
          return (
            <div
              key={index}
              className={
                currentIndex === index
                  ? "text-gray-700 font-Sigmar cursor-pointer"
                  : "text-gray-400 font-Sigmar cursor-pointer"
              }
              onClick={() => setCurrentIndex((prev) => (prev = index))}
            >
              {e.title}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BannerToggle;
