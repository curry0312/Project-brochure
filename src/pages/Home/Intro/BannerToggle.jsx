import React from "react";
import { IntroImagesBanner } from "../../../data/HomeImageBanner";

function BannerToggle({currentIndex, setCurrentIndex}) {
  return (
    <div className="absolute right-0 top-[50%] bottom-[50%] -rotate-90">
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
