import React, { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { HeroImagesBanner } from "../../../data/HomeImageBanner";
import { motion } from "framer-motion";
import { enterInLeft, showup } from "../../../assets/animation/motion";

function Banner() {
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
    }, 4000);
    return () => {
      clearTimeout(timeout);
    };
  }, [currentIndex]);

  return (
    <div className="relative overflow-hidden">
      <div
        className="w-[400%] transition duration-1000 ease-in-out"
        ref={imageRef}
      >
        <div className="flex">
          {HeroImagesBanner.map((image) => {
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
        <motion.p
          className="text-white text-xs font-Poltawski font-bold z-40 md:text-md"
          variants={enterInLeft(-200,1.4,0.9).container}
          viewport={{ once: true }}
          initial="hidden"
          whileInView="show"
        >
          YOU CAN FIND TONS OF INTERESTING GAMES HERE
        </motion.p>
        <motion.h2
          className="text-white text-[50px] font-Sigmar font-bold z-40 sm:text-[70px] md:text-[100px]"
          variants={enterInLeft(-200,0.4,0.9).container}
          viewport={{ once: true }}
          initial="hidden"
          whileInView="show"
        >
          GAMES WORLD
        </motion.h2>
      </div>
    </div>
  );
}

function BannerImage({ image }) {
  return (
    <div className="relative w-full h-screen">
      <img
        className="w-full h-full object-cover"
        src={image}
        alt={image.title}
      />
    </div>
  );
}

export default Banner;
