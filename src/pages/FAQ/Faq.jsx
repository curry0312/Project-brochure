import React, { useState } from "react";
import SouthIcon from "@mui/icons-material/South";
import { FaqQuestionBanner } from "../../data/FaqInfoBanner";

function Faq() {
  return (
    <section className="pt-[120px]">
      {/*Header*/}
      <div className="flex justify-center items-center w-[90%] mx-auto">
        <h6 className="text-gray-300 font-Sigmar text-[100px] sm:text-[200px] md:text-[300px]">FAQS</h6>
      </div>

      {/*Questions section*/}
      <div className="bg-gray-100 p-10">
        {/*Questions container*/}
        <div className="flex flex-col gap-8 w-[90%] mx-auto">
          {FaqQuestionBanner.map((q, index) => {
            return (
              <Question key={index} question={q.question} answer={q.answer} />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Question({ question, answer }) {
  const [slideown, setSlidedown] = useState(false);
  return (
    <div className="bg-white shadow-md overflow-hidden">
      {/*Question*/}
      <div
        onClick={() => setSlidedown((prev) => !prev)}
        className="flex cursor-pointer"
      >
        {/*Text*/}
        <div className="relative p-5 flex-1">
          <p className="w-[90%] font-Sigmar text-sm md:text-xl">{question}</p>
        </div>
        {/*Slide down button*/}
        <div className="w-[90px] bg-red-800 overflow-hidden">
          <div
            className={
              slideown === true
                ? "flex justify-center items-center bg-red-800 w-full h-full rotate-180 transition duration-200 ease-in-out"
                : "flex justify-center items-center bg-red-800 w-full h-full transition duration-200 ease-in-out"
            }
          >
            <SouthIcon sx={{ color: "white", fontSize: "1.5rem" }} />
          </div>
        </div>
      </div>
      {/*Answer*/}
      <div
        className={
          slideown === true
            ? `h-[200px] transition-height duration-300 ease-in-out md:h-[150px]`
            : `h-0 transition-height duration-300 ease-in-out`
        }
      >
        <p className="p-5 font-Poltawski">{answer}</p>
      </div>
    </div>
  );
}

export default Faq;
