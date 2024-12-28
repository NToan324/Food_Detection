import BanhXeo from "../../public/banhxeo.png";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CustomNextArrow, CustomPrevArrow } from "./customArrow";
const data = [
  {
    imageUrl: BanhXeo,
    title: "Bánh xèo",
    time: "5 minutes",
    description:
      "Crispy, fragrant cake filled with shrimp, meat, bean sprouts, combined with a rich dipping sauce.",
  },
  {
    imageUrl: BanhXeo,
    title: "Bánh xèo",
    time: "5 minutes",
    description:
      "Crispy, fragrant cake filled with shrimp, meat, bean sprouts, combined with a rich dipping sauce.",
  },
  {
    imageUrl: BanhXeo,
    title: "Bánh xèo",
    time: "5 minutes",
    description:
      "Crispy, fragrant cake filled with shrimp, meat, bean sprouts, combined with a rich dipping sauce.",
  },
];

const SliderCustom = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className="w-full h-[600px] phone:h-[350px] space-x-[10px]">
      <Slider
        {...settings}
        nextArrow={<CustomNextArrow kind="Vertical" />}
        prevArrow={<CustomPrevArrow kind="Vertical" />}
      >
        {data.map((item, index) => (
          <div key={index} className="p-5">
            <div className="w-[600px] h-[250] shadow-custom-dark flex justify-between gap-4 items-center p-6 rounded-[30px] phone:w-full">
              <img
                src={BanhXeo}
                alt="BanhXeo"
                className="rounded-full w-[200px] h-[200px] phone:w-[100px] phone:h-[100px]"
              />
              <div className="flex flex-col justify-between gap-5">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-2xl">{item.title}</h3>
                  <span className="font-bold text-gray-dark">{item.time}</span>
                </div>
                <p>{item.description}</p>
                <button className="bg-yellow text-white px-4 py-2 rounded-[15px] font-bold">
                  Review
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderCustom;
