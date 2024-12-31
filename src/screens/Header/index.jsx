import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";
import Logo from "../../public/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import Sidebar from "../../components/Sidebar/Sidebar";
export default function Header() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = (route, section) => {
    if (window.location.pathname === route) {
      // Nếu đang ở đúng route, cuộn tới section
      scroller.scrollTo(section, {
        smooth: true,
        duration: 1000,
        offset: -200, // Bù đắp cho header hoặc khoảng trống trên
      });
    } else {
      // Nếu không, chuyển route và truyền thông tin cuộn
      navigate(route, { state: { scrollTo: section } });
    }
  };

  return (
    <div className="w-full min-w-[360px] h-[100px] flex-wrap flex justify-between items-center px-[100px] sticky top-0 bg-white z-50 phone:px-5 tablet:justify-center gap-5">
      <div className="header-logo flex items-center gap-2">
        <img src={Logo} alt="logo" />
        <p>
          VNFOOD.<span className="text-yellow">CO</span>
        </p>
      </div>
      <div className="menu">
        <ul className="flex justify-between items-center font-bold gap-10 phone:hidden">
          <li onClick={() => handleNavigate("/Home", "home")}>Home</li>
          <li onClick={() => handleNavigate("/Home", "about")}>About</li>
          <li onClick={() => handleNavigate("/Home", "food")}>Food</li>
          <li onClick={() => handleNavigate("/Home", "explore")}>Explore</li>
          <li onClick={() => handleNavigate("/Home", "history")}>History</li>
        </ul>
      </div>
      <div className="account flex justify-between items-center gap-[30px]">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <FontAwesomeIcon icon={faUser} />
        <FontAwesomeIcon
          icon={faBars}
          className="phone:block hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      <Sidebar isOpen={isOpen} handleNavigate={handleNavigate} />
    </div>
  );
}
