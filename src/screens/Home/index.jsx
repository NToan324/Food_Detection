import React from "react";
import { Link } from "react-scroll";
import MapVietNam from "../../public/map.svg";
import Location from "../../public/location.svg";
import Pho from "../../public/pho.png";
import BanhMi from "../../public/banhmi.png";
export default function Home() {
  return (
    <div
      className="w-full px-[100px] flex justify-between items-center gap-5 bg-white phone:px-5 phone:py-5"
      id="home"
    >
      <div className="title space-y-5 w-1/2">
        <h1 className="font-bold text-6xl relative phone:text-2xl">
          EXPLORE THE
          <span className="absolute right-48 top-12 phone:relative phone:hidden">
            <img src={Location} alt="location" />
          </span>
          DIVERSITY OF
          <span className="text-yellow"> VIETNAMESE</span> CUISINE
        </h1>
        <p className="text-gray-dark font-bold phone:text-sm phone:line-clamp-4">
          Discover the diversity and uniqueness of Vietnamese cuisine through
          each dish. From traditional pho, famous banh mi to sweet desserts,
          let's learn and identify the unique flavors that captivate diners.
        </p>
        <Link to="explore" smooth={true} duration={1000} offset={-200}>
          <button className="w-52 h-16 rounded-[30px] bg-yellow shadow-custom-light phone:w-36 mt-5">
            <span className="text-white font-bold">Explore Now</span>
          </button>
        </Link>
      </div>
      <div className="relative w-1/2 flex justify-end items-center">
        <img
          src={MapVietNam}
          alt="MapVietNam"
          className="h-full max-h-[700px] w-auto "
        />
        <img
          src={Pho}
          alt="Pho"
          className="absolute top-48 left-10 w-full max-w-[450px] h-auto phone:max-w-[100px] phone:top-16 phone:-left-7"
        />
        <img
          src={BanhMi}
          alt="BanhMi"
          className="absolute top-28 right-5 w-full max-w-[200px] h-auto phone:max-w-[60px] phone:top-12"
        />
        <button className="text-white font-bold phone:text-[7px] w-[100px] h-[40px] rounded-[15px] bg-yellow absolute bottom-20 left-44 rotate-6 phone:w-[50px] phone:h-[20px] phone:left-0 phone:bottom-12">
          "Pho"
        </button>
        <button className="text-white font-bold phone:text-[7px] w-[100px] h-[40px] rounded-[15px] bg-yellow absolute top-14 rotate-6 phone:w-[50px] phone:h-[20px] phone:top-7 phone:right-0">
          "Banh Mi"
        </button>
      </div>
    </div>
  );
}
