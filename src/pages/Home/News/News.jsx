import React from "react";
import { NewsImagesBanner } from "../../../data/HomeImageBanner";

function News() {
  return (
    <section className="bg-gray-100 py-10">
      <div className="flex flex-col w-[95%] mx-auto bg-gray-100">
        {/*News*/}
        <div className="flex flex-col gap-10 md:flex-row">
          {/*Each News*/}
          {NewsImagesBanner.map((eachNews) => {
            return (
              <New
                key={eachNews.title}
                title={eachNews.title}
                image={eachNews.url}
                subscription={eachNews.subscription}
                date={eachNews.date}
              />
            );
          })}
        </div>
        {/*More News Link*/}
        <div className="flex justify-center items-center py-16">
          <button className="bg-red-700 px-10 py-5 text-white font-Poltawski font-bold transition-colors duration-300 ease-in-out hover:bg-gray-800">
            READ MORES NEWS & REVIEWS
          </button>
        </div>
      </div>
    </section>
  );
}

function New({ title, image, subscription, date }) {
  return (
    <div className="flex flex-col">
      {/*Image*/}
      <div>
        <img src={image} alt={title} />
      </div>
      {/*Text*/}
      <div className="p-5 bg-white">
        <h5 className="text-black font-Sigmar text-3xl">{title}</h5>
        <p className="text-red-500 font-Sigmar text-3xl">{date}</p>
        <p className="text-black font-Poltawski">{subscription}</p>
      </div>
    </div>
  );
}

export default News;
