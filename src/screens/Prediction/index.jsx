import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ComTam from "../../public/comtam2.png";
function Index() {
  const [active, setActive] = useState("introduce");
  const location = useLocation();
  const data = location.state[0];
  console.log(data);
  return (
    <div className="p-[100px] flex justify-center gap-14 items-start phone:flex-col phone:p-10">
      <img
        src={data.imgUrl}
        alt={data.foodName}
        className="border-dashed border-8 border-yellow rounded-full object-cover p-3 max-w-[400px] h-auto phone:max-w-[250px]"
      />
      <div className="flex flex-col justify-between gap-5">
        <h1 className="font-bold text-[64px] text-4xl">{data.foodName}</h1>
        <div className="space-y-5">
          <ul className="font-bold text-xl flex justify-start gap-7 items-center max-w-[600px] phone:max-w-[400px] flex-wrap">
            <li
              className={`${active === "introduce" ? "li-underline relative" : ""}`}
              onClick={() => setActive("introduce")}
            >
              Introduce
            </li>
            <li
              className={`${active === "ingredients" ? "li-underline relative" : ""}`}
              onClick={() => setActive("ingredients")}
            >
              Ingredients
            </li>
            <li
              className={`${active === "Story" ? "li-underline relative" : ""}`}
              onClick={() => setActive("Story")}
            >
              Story
            </li>
            <li
              className={`${active === "Address" ? "li-underline relative" : ""}`}
              onClick={() => setActive("Address")}
            >
              Address
            </li>
          </ul>
          <p className="max-w-[500px] text-[20px]">
            {active === "introduce" && data.description}
            {active === "Address" && data.location}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Index;
