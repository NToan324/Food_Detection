import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const ImageUploader = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState(null); // Lưu URL của hình ảnh
  const [error, setError] = useState(""); // Lưu lỗi nếu có

  // Hàm xử lý khi tải file
  const handleUpload = (e) => {
    const file = e.target.files[0]; // Lấy file đầu tiên
    if (file) {
      if (file.type.startsWith("image/")) {
        // Kiểm tra nếu là file ảnh
        setImage(URL.createObjectURL(file)); // Lưu URL ảnh để hiển thị
        setError(""); // Xóa thông báo lỗi nếu có
      } else {
        setError("Only image files are allowed."); // Hiển thị lỗi
      }
    }
  };

  const handlePredict = () => {
    navigate("/result");
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      {/* Input file ẩn */}
      <input
        type="file"
        id="image-upload"
        accept="image/*" // Chỉ cho phép chọn file ảnh
        onChange={handleUpload}
        style={{ display: "none" }} // Ẩn input mặc định
      />

      {/* Nút tải file tùy chỉnh */}
      <label
        htmlFor="image-upload"
        style={{
          display: "inline-block",
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          color: "white",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Upload Image
      </label>

      {/* Hiển thị lỗi nếu có */}
      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}

      {/* Hiển thị hình ảnh xem trước */}
      {image && (
        <div style={{ marginTop: "20px" }}>
          <h4>Preview:</h4>
          <img
            src={image}
            alt="Preview"
            style={{
              maxWidth: "300px",
              maxHeight: "300px",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          />
          {/* Nút Predict */}
          <button
            onClick={handlePredict}
            style={{
              display: "inline-block",
              marginTop: "20px",
              padding: "10px 20px",
              backgroundColor: "#28a745",
              color: "white",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
              border: "none",
            }}
          >
            Predict
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;