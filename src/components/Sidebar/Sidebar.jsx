import React from "react";
import {
  faHouse,
  faAddressCard,
  faBowlFood,
  faMagnifyingGlassLocation,
  faClockRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { set } from "mongoose";

function Sidebar({ setIsOpen, isOpen, handleNavigate }) {
  const menuItems = [
    { label: "Home", icon: faHouse, path: "/Home", section: "home" },
    { label: "About", icon: faAddressCard, path: "/Home", section: "about" },
    { label: "Food", icon: faBowlFood, path: "/Home", section: "food" },
    {
      label: "Explore",
      icon: faMagnifyingGlassLocation,
      path: "/Home",
      section: "explore",
    },
    {
      label: "History",
      icon: faClockRotateLeft,
      path: "/Home",
      section: "history",
    },
  ];

  const handleSidebar = (path, section) => {
    handleNavigate(path, section);
    setIsOpen(false);
  };

  return (
    <>
      <aside
        className={`desktop:hidden tablet:hidden opacity-0 max-w-[250px] right-0 w-2/3 menu-sidebar h-screen bg-white border-l border-t border-gray-light p-5 shadow-xl absolute top-[100px] transition duration-500 ease-in-out ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full"
        }`}
      >
        <nav className="menu-nav">
          <ul className="flex flex-col justify-between items-start font-bold gap-5">
            {menuItems.map((item, index) => (
              <li
                key={index}
                onClick={() => handleSidebar(item.path, item.section)}
                className="hover:bg-yellow-light hover:text-yellow w-full rounded-[10px] p-2 flex items-center gap-3 cursor-pointer"
              >
                <FontAwesomeIcon icon={item.icon} className="text-blue-500" />
                {item.label}
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
