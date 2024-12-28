import React from "react";
import SliderCustom from "../../components/Slider/slider.jsx";

export default function Foods() {
  return (
    <div
      className="px-[100px] bg-white flex flex-col items-center justify-center phone:px-5 phone:py-5"
      id="food"
    >
      <h1 className="font-bold text-[64px] phone:text-4xl">
        Most Popular <span className="text-yellow">Food</span>
      </h1>
      <SliderCustom />
    </div>
  );
}
