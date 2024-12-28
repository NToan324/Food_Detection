import React from "react";
import NuocMia from "../../public/nuocmia.png";
import ComTam from "../../public/comtam.png";
import Graphic from "../../public/graphic_1.svg";
export default function About() {
  return (
    <div
      className="w-full px-[100px] flex justify-center items-center phone:px-5 bg-white"
      id="about"
    >
      <div className="w-1/2 relative">
        <img
          src={ComTam}
          alt="ComTam"
          className="absolute left-36 phone:w-[100px] phone:left-16 phone:top-6"
        />
        <img
          src={NuocMia}
          alt="NuocMia"
          className="absolute top-24 left-2 phone:w-[100px] phone:top-14"
        />
        <img src={Graphic} alt="Graphic" className="phone:w-[110px]" />
      </div>
      <div className="w-1/2 space-y-[50px]">
        <div className="space-y-2">
          <h1 className="font-bold text-[64px] phone:text-4xl">
            About <span className="text-yellow">Us</span>
          </h1>
          <p className="phone:text-sm">
            Welcome to the journey of discovering Vietnamese cuisine - a place
            that preserves the traditional flavors and cultural stories of the
            homeland. From simple dishes like pho, broken rice, to unique
            regional specialties, each dish is not only a delicate combination
            of ingredients but also a symbol of the history, people and country
            of Vietnam. Male.
          </p>
          <p className="phone:hidden">
            We hope to bring you closer to unique culinary values, helping you
            easily identify, enjoy and better understand the meaning of each
            dish. Join us to explore, feel and preserve the beauty of Vietnamese
            cuisine today! Start this flavorful journey now!
          </p>
        </div>
        <button className="w-42 h-16 border-[3px] border-yellow rounded-[30px] font-bold text-yellow px-4">
          See details
        </button>
      </div>
    </div>
  );
}
