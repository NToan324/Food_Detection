import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
function Index() {
  useEffect(() => {
    window.scrollTo(0, 0); // Cuộn về tọa độ (0, 0)
  }, []);
  const [active, setActive] = useState("introduce");
  const location = useLocation();
  const data = location.state ? location.state[0] : null;
  return (
    <>
      {data ?
        <div className="p-[100px] flex justify-center gap-10 items-center phone:flex-col phone:p-10">
          <div className="w-1/2 flex justify-center items-center phone:w-full">
            <img
              src={data.imgUrl}
              alt={data.foodName}
              className="border-dashed border-8 border-yellow rounded-full object-cover p-3 w-[400px] h-[400px] phone:max-w-[250px] phone:max-h-[250px]"
            />
          </div>
          <div className="flex flex-col justify-between gap-5 w-1/2 phone:w-full">
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
              <p className=" text-[20px]">
                {active === "introduce" && data.description}
                {active === "Address" && data.location}
              </p>
            </div>
          </div>
        </div>
      : <h1 className="text-4xl text-center p-100">Not Found</h1>}
    </>
  );
}

export default Index;
