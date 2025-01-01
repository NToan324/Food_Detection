import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import FoodDetectionService from "../../services/Food/Detection";
import FoodService from "../../services/Food/food";
import { SpinnerContext } from "../../Context/SpinnerContext";

const ImageUploader = () => {
  const navigate = useNavigate();
  const [text, setText] = useState("Upload Image");
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");
  const { setIsLoading } = useContext(SpinnerContext);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type.startsWith("image/")) {
        setText("Change Image");
        setImage(file);
        setError("");
      } else {
        setError("Only image files are allowed.");
      }
    }
  };

  const handlePredict = async () => {
    try {
      setIsLoading(true);
      const data = new FormData();
      data.append("imagefile", image);
      const response = await FoodDetectionService(data);
      if (response.data.success) {
        const getDataAfterPredict = await FoodService.getFoodById(
          response.data.prediction.index
        );
        if (getDataAfterPredict.data.errCode === 0) {
          setIsLoading(false);
          navigate(`/result/${response.data.prediction.index}`, {
            state: getDataAfterPredict.data.data,
          });
        }
      }
    } catch (error) {
      console.log("Error when predict: ", error);
    }
  };

  return (
    <>
      <div style={{ textAlign: "center", padding: "20px" }}>
        <input
          type="file"
          id="image-upload"
          accept="image/*"
          onChange={handleUpload}
          style={{ display: "none" }}
        />

        <label
          htmlFor="image-upload"
          style={{
            display: "inline-block",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          className="bg-yellow rounded-[15px] font-bold p-4 text-white"
        >
          {text}
        </label>

        {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}

        {image && (
          <div style={{ marginTop: "20px" }}>
            <img
              src={URL.createObjectURL(image)}
              alt="Preview"
              style={{
                maxWidth: "300px",
                maxHeight: "300px",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            />
            <button
              onClick={handlePredict}
              style={{
                display: "inline-block",
                marginTop: "20px",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "16px",
                border: "none",
              }}
              className="bg-yellow rounded-[15px] font-bold p-4 text-white"
            >
              Predict
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default ImageUploader;
