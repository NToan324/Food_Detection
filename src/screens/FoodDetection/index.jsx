import React, { useState } from "react";
import FoodDetectionService from "../../services/Food/Detection";

const FoodDetection = () => {
  const [selectFile, setSelectFile] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    setSelectFile(e.target.files[0]);
  };

  const handlePredict = async () => {
    try {
      if (!selectFile) {
        setError("Please select a file!");
        return;
      }
      const data = new FormData();
      data.append("imagefile", selectFile);
      const response = await FoodDetectionService(data);
      console.log("response", response.data);
      if (response.data.success) {
        setPrediction(response.data.prediction);
        setError(null);
      } else {
        setError("Prediction failed!");
      }
    } catch (error) {
      setError("Error: " + error.message);
    }
  };

  return (
    <div>
      <h1>Input file</h1>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handlePredict}>Predict</button>
      {prediction && <h2>Prediction: {prediction}</h2>}
    </div>
  );
};

export default FoodDetection;
