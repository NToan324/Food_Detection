import React from "react";
import Logo from "../../public/logo.svg";
import Facebook from "../../public/face.svg";
import Instagram from "../../public/ins.svg";
import Twitter from "../../public/x.svg";
import LinkedIn from "../../public/lin.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div className="w-full min-h-[500px] flex flex-col justify-between items-center bg-yellow-light px-[100px] py-[50px] gap-10 desktop:mt-[200px] phone:px-5 phone:mt-[200px]">
      <div className="flex justify-between items-start w-full flex-wrap gap-10">
        <div className="flex flex-col justify-between gap-4 items-center">
          <div className="logo flex gap-2">
            <img src={Logo} alt="logo" />
            <p>
              VNFOOD.<span className="text-yellow">CO</span>
            </p>
          </div>
          <div className="network flex gap-[8px] flex-wrap">
            <img src={Facebook} alt="facebook" />
            <img src={Instagram} alt="instagram" />
            <img src={Twitter} alt="twitter" />
            <img src={LinkedIn} alt="linkedin" />
          </div>
        </div>
        <div className="condition space-y-3">
          <h3 className="font-bold">Conditions</h3>
          <ul className="space-y-2 text-gray-dark">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
        <div className="Menu space-y-3">
          <h3 className="font-bold">Menu</h3>
          <ul className="space-y-2 text-gray-dark">
            <li>Home</li>
            <li>About</li>
            <li>Food</li>
            <li>Explore</li>
            <li>History</li>
          </ul>
        </div>
        <div className="contact flex flex-col gap-3">
          <h3 className="font-bold">Contact</h3>
          <ul className="space-y-2 text-gray-dark">
            <li>Address: Tan phong, District 7, TPHCM</li>
            <li>Email: support@monanvietnam.com</li>
            <li>Phone number: 12345678</li>
          </ul>
        </div>
        <div className="register space-y-3">
          <h3 className="font-bold">Register</h3>
          <p className=" text-gray-dark max-w-[350px]">
            Nhận thông tin mới nhất về món ăn Việt Nam và các cập nhật từ chúng
            tôi!
          </p>
          <div className="bg-white w-full max-w-[350px] h-[50px] rounded-[30px] border-yellow border pl-3 pr-1 py-2 focus:outline-none focus:ring-orange focus:ring-1 flex justify-between items-center">
            <input
              type="text"
              placeholder="Enter your email"
              className="w-full max-w-[220px] px-2 h-full bg-white focus:outline-none"
            />
            <div className="bg-yellow rounded-full w-[40px] h-[40px] flex justify-center items-center  hover:cursor-pointer">
              <FontAwesomeIcon icon={faArrowRight} style={{ color: "#fff" }} />
            </div>
          </div>
        </div>
      </div>
      <span className="text-gray-dark text-center">
        © 2024 VNFOOD.com. Mọi quyền được bảo lưu.
      </span>
    </div>
  );
}
