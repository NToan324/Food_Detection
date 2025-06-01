import React, { useEffect, useState } from "react";
import SliderCustom from "../../components/Slider/slider.jsx";
import foodService from "../../services/Food/food.js";

export default function Foods() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const getFood = async () => {
      try {
        const respone = await foodService.getFood();
        if (respone.data.errCode === 0) {
          setFoods(respone.data.data);
        }
      } catch (error) {
        console.log("error", error);
      }
    };
    getFood();
  }, []);

  return (
    <div
      className="px-[100px] bg-white flex flex-col items-center justify-center phone:px-5 phone:py-5"
      id="food"
    >
      <h1 className="font-bold text-[64px] phone:text-4xl">
        Most Popular <span className="text-yellow">Food</span>
      </h1>
      <SliderCustom foodData={foods.length > 0 ? foods : []} />
    </div>
  );
}
