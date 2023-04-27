import React from "react";
import { FeaturesImagesBanner } from "../../../data/HomeImageBanner";

function Features() {
  return (
    <section className="py-16">
      <div className="w-[95%] mx-auto">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {FeaturesImagesBanner.map((feature,index)=>{
            return <Feature key={index} image={feature.url} text={feature.title} subscription={feature.subscription}/>
          })}
        </div>
      </div>
    </section>
  );
}

function Feature({image, text, subscription}) {
  return (
    <div className="flex flex-col group cursor-pointer sm:flex-row">
      {/*Image*/}
      <div className="basis-2/5 overflow-hidden">
        <img className="w-full h-full object-cover transition duration-200 ease-out group-hover:scale-110" src={image} alt={text} />
      </div>
      {/*Text*/}
      <div className="basis-3/5 p-10 transition-colors duration-700 ease-in-out bg-gray-100 group-hover:bg-red-600">
        <h4 className="text-black font-Sigmar transition-colors duration-300 ease-in-out group-hover:text-white">{text}</h4>
        <p className="text-black font-Poltawski transition-colors duration-300 ease-in-out group-hover:text-white">{subscription}</p>
      </div>
    </div>
  );
}

export default Features;
