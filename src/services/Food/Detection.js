import axios from "../../axiosModel";
import endPoints from "../endPoints";

const foodDetectionPredict = (imageFile) => {
  console.log("imageFile", imageFile);
  return axios.post(endPoints.API.PREDICT, imageFile, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export default foodDetectionPredict;
