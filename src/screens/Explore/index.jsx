import React, { useState } from "react";
import ReactModal from "react-modal";
import Modal from "../../components/Modal/Modal";
ReactModal.setAppElement("#root"); // Gán root element

export default function Explore() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [kind, setKind] = useState("");

  const handleModal = (kind) => {
    setKind(kind);
    setModalIsOpen(true);
  };
  return (
    <div
      className="px-[100px] flex flex-col items-center justify-center bg-white phone:px-5 phone:py-5"
      id="explore"
    >
      <Modal
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        kind={kind}
      />
      <div className="w-1/3 space-y-5 phone:min-w-[250px]">
        <h1 className="font-bold text-[64px] phone:text-4xl">
          Explore <span className="text-yellow">Now</span>
        </h1>
        <p className="phone:text-sm">
          Finding Vietnamese food has never been easier! Just upload an image,
          the system will help you identify the dish, provide information about
          the name, ingredients and cultural story behind it. Discover the
          flavors of Vietnam right from the picture in your hand!
        </p>
        <div className="flex justify-start items-center gap-5">
          <button
            className="w-40 h-16 rounded-[30px] bg-yellow shadow-custom-light font-bold text-white"
            onClick={() => handleModal("camera")}
          >
            Take a photo
          </button>
          <button
            className="w-40 h-16 rounded-[30px] border-2 border-yellow shadow-custom-light font-bold text-yellow"
            onClick={() => handleModal("upload")}
          >
            Upload a photo
          </button>
        </div>
      </div>
      <div className=" w-2/3"></div>
    </div>
  );
}
