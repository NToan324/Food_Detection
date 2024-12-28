import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

const CustomNextArrow = ({ className, onClick, kind }) => (
  <div
    className={`${className} bg-yellow-500 hover:bg-yellow-600 text-white rounded-full flex justify-center items-center ${kind === "Vertical" ? "phone:left-[45%]" : "phone:left-[99%]"}`}
    style={{
      width: "40px",
      height: "40px",
      zIndex: 0,
      top: kind === "Vertical" ? "100%" : "50%",
      left: kind === "Vertical" ? "35%" : "100%",
      transform: kind === "Vertical" ? "rotate(90deg)" : "rotate(0deg)",
    }}
    onClick={onClick}
  >
    <FontAwesomeIcon
      icon={faChevronRight}
      className="text-yellow text-[40px]"
    />
  </div>
);

const CustomPrevArrow = ({ className, onClick, kind }) => (
  <div
    className={`${className} bg-yellow-500 hover:bg-yellow-600 text-white rounded-full flex justify-center items-center ${kind === "Vertical" ? "phone:left-[45%]" : "phone:-left-8"}`}
    style={{
      width: "40px",
      height: "40px",
      zIndex: 0,
      top: kind === "Vertical" ? "-40px" : "50%",
      left: kind === "Vertical" ? "35%" : "-32px",
      transform: kind === "Vertical" ? "rotate(90deg)" : "rotate(0deg)",
    }}
    onClick={onClick}
  >
    <FontAwesomeIcon icon={faChevronLeft} className="text-yellow text-[40px]" />
  </div>
);

export { CustomNextArrow, CustomPrevArrow };
