import React, { useState } from "react";
import ReactModal from "react-modal";
import UploadFile from "../Upload/upload";

import Camera from "../Camera/Camera";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Modal({ modalIsOpen, setModalIsOpen, kind }) {
  const handleImageData = (data) => {
    console.log(data);
  };
  return (
    <div>
      <ReactModal
        isOpen={modalIsOpen} // Kiểm soát trạng thái mở/đóng
        onRequestClose={() => setModalIsOpen(false)} // Đóng khi nhấn bên ngoài hoặc ESC
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1000, // Màu nền overlay
            transition: "all 1s",
          },
          content: {
            width: "90%",
            height: "80%",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "30px",
            padding: "10px",
            position: "relative",
            backgroundColor: "#fff", // Màu nền modal
          },
        }}
      >
        <button>
          <FontAwesomeIcon
            icon={faXmark}
            className="text-black text-2xl absolute top-5 right-5"
            onClick={() => setModalIsOpen(false)}
          />
        </button>
        {kind === "camera" ?
          <div>
            <Camera data={handleImageData} />
          </div>
        : <UploadFile />}
      </ReactModal>
    </div>
  );
}

export default Modal;
