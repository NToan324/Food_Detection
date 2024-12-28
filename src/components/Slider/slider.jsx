import BanhXeo from "../../public/banhxeo.png";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CustomNextArrow, CustomPrevArrow } from "./customArrow";
import { responsiveFontSizes } from "@mui/material";
const data = [
  {
    imageUrl: BanhXeo,
    title: "Bánh xèo",
    description:
      "Bánh xèo là một món ăn truyền thống của người Việt Nam, một món ăn ngon và hấp dẫn, được nhiều người yêu thích.",
  },
  {
    imageUrl: BanhXeo,
    title: "Bánh xèo",
    description:
      "Bánh xèo là một món ăn truyền thống của người Việt Nam, một món ăn ngon và hấp dẫn, được nhiều người yêu thích.",
  },
  {
    imageUrl: BanhXeo,
    title: "Bánh xèo",
    description:
      "Bánh xèo là một món ăn truyền thống của người Việt Nam, một món ăn ngon và hấp dẫn, được nhiều người yêu thích.",
  },
];

const SliderCustom = ({ foodData }) => {
  const data = foodData;
  console.log(data);
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Số lượng slide hiển thị trên màn hình lớn
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Kích thước màn hình dưới 1024px
        settings: {
          slidesToShow: 2, // Hiển thị 2 slide
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768, // Kích thước màn hình dưới 640px
        settings: {
          slidesToShow: 1, // Hiển thị 1 slide
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="w-full h-[600px] space-x-[10px] p-10 phone:h-[500px]">
      <Slider
        {...settings}
        nextArrow={<CustomNextArrow />}
        prevArrow={<CustomPrevArrow />}
      >
        {data.map((item, index) => (
          <div key={index} className="p-5 phone:p-2">
            <div className="max-w-[350px] max-h-[450px] bg-white shadow-custom-dark rounded-[30px] ml-2 phone:border phone:shadow-none">
              <img
                src={item.imgUrl}
                alt={item.foodName}
                className="w-full h-[250px] rounded-t-[30px] phone:h-[200px] object-cover"
              />
              <div className="p-4 ">
                <div className="flex justify-between items-center w-full gap-1">
                  <h1 className="text-2xl font-bold phone:text-xl">
                    {item.foodName}
                  </h1>
                  <button className="bg-yellow rounded-[15px] w-[110px] h-[45px] text-white font-bold phone:text-sm">
                    See details
                  </button>
                </div>
                <p className="mt-2 text-gray-600 phone:text-sm line-clamp-3">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderCustom;
