import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import { Button } from "rsuite";
import FoodDetectionService from "../../services/Food/Detection";
import FoodService from "../../services/Food/food";

const videoConstraints = {
  width: 540,
  height: 500,
  facingMode: "environment",
};

const FACING_MODE_USER = "user";
const FACING_MODE_ENVIRONMENT = "environment";

const Camera = ({ data }) => {
  const webcamRef = useRef(null);
  const [url, setUrl] = React.useState(null);
  const [change, setChange] = React.useState(true);
  const [facingMode, setFacingMode] = React.useState(FACING_MODE_USER);
  const [predictValue, setPredictValue] = React.useState(null);

  // Switch between front and back camera
  const handleClick = React.useCallback(() => {
    setFacingMode((prevState) =>
      prevState === FACING_MODE_USER ?
        FACING_MODE_ENVIRONMENT
      : FACING_MODE_USER
    );
  }, []);

  // Capture photo from webcam
  const capturePhoto = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setUrl(imageSrc);
    const output = b64toBlob(imageSrc);
    data(output);
    setChange(false);
  }, [webcamRef, data]);

  // Handle media access
  const onUserMedia = (e) => {
    console.log(e);
  };

  // Handle refresh to retake the photo
  const handleRefresh = () => {
    setUrl(null);
    data(null);
    setChange(true);
  };

  //Convert base64 to image
  const b64toBlob = (b64Data, sliceSize = 512) => {
    if (!b64Data) return null;
    const base64String = b64Data.split(",")[1];
    const byteCharacters = atob(base64String);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, { type: "image/jpeg" });
    return blob;
  };

  const navigate = useNavigate();

  //Predict image
  const predictImage = async () => {
    try {
      const data = new FormData();
      data.append("imagefile", b64toBlob(url));
      const response = await FoodDetectionService(data);
      if (response.data.success) {
        console.log("response", response.data.prediction.index);
        setPredictValue(response.data.prediction);
        const getDataAfterPredict = await FoodService.getFoodById(
          response.data.prediction.index
        );
        if (getDataAfterPredict.data.errCode === 0) {
          navigate(`/result/${response.data.prediction.index}`, {
            state: getDataAfterPredict.data.data,
          });
          console.log("data", getDataAfterPredict.data.data);
        }
      }
    } catch (error) {
      console.log("Error when predict: ", error);
    }
  };

  return (
    <>
      {
        change ?
          // Show the webcam if in capture mode
          <Webcam
            ref={webcamRef}
            audio={false}
            screenshotFormat="image/jpeg"
            videoConstraints={{ ...videoConstraints, facingMode }}
            onUserMedia={onUserMedia}
            className="w-[540px] mb-3" // Điều chỉnh kích thước hiển thị
          />
          // Show the captured image in preview mode
        : <div className="">
            <img src={url} alt="Screenshot" />
          </div>

      }

      {
        change ?
          // Show capture buttons when in webcam mode
          <div className="flex justify-center items-center gap-2">
            <Button
              color="green"
              appearance="primary"
              onClick={capturePhoto}
              className="bg-yellow font-bold text-white rounded-[15px] p-4"
            >
              Take a picture
            </Button>
            &nbsp;
            <Button
              color="red"
              appearance="primary"
              onClick={handleClick}
              className="border-2 border-yellow text-yellow font-bold rounded-[15px] p-4"
            >
              Change camera
            </Button>
          </div>
          // Show refresh button when in image preview mode
        : <div className="space-x-5 mt-5">
            <Button
              appearance="default"
              className="bg-yellow text-white font-bold rounded-[15px] p-4"
              onClick={() => predictImage()}
            >
              Predict
            </Button>
            <Button
              appearance="default"
              onClick={handleRefresh}
              className="border-2 border-yellow text-yellow font-bold rounded-[15px] p-4"
            >
              Refresh
            </Button>
          </div>

      }
    </>
  );
};

export default Camera;
