import React from "react";
import SliderVerticalCustom from "../../components/Slider/sliderVerticel";
export default function History() {
  return (
    <div
      className="px-[100px] phone:px-5 phone:py-5 bg-white flex justify-between items-start phone:flex-col-reverse phone:items-center gap-16"
      id="history"
    >
      <div className="w-2/3 space-y-[50px] phone:w-full">
        <SliderVerticalCustom />
      </div>
      <div className="w-1/3 phone:w-full phone:space-y-4">
        <h1 className="font-bold text-[64px] phone:text-4xl phone:text-center">
          Search <span className="text-yellow">History</span>
        </h1>
        <p>
          Finding Vietnamese food has never been easier! Just upload an image,
          the system will help you identify the dish, provide information about
          the name, ingredients and cultural story behind it. Discover the
          flavors of Vietnam right from the picture in your hand!
        </p>
      </div>
    </div>
  );
}
