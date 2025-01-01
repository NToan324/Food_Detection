import React, {
  useContext,
  useRef,
  useEffect,
  useState,
  useCallback,
} from "react";
import Webcam from "react-webcam";
import { useNavigate } from "react-router-dom";
import { Button } from "rsuite";
import FoodDetectionService from "../../services/Food/Detection";
import FoodService from "../../services/Food/food";
import { SpinnerContext } from "../../Context/SpinnerContext";

const videoConstraints = {
  width: 540,
  height: 500,
  facingMode: "environment",
};

const FACING_MODE_USER = "user";
const FACING_MODE_ENVIRONMENT = "environment";

const Camera = ({ data }) => {
  const webcamRef = useRef(null);
  const [url, setUrl] = useState(null);
  const [change, setChange] = useState(true);
  const [facingMode, setFacingMode] = useState(FACING_MODE_USER);
  const { setIsLoading } = useContext(SpinnerContext);
  const [showButton, setShowButton] = useState(false);

  const handleClick = useCallback(() => {
    setFacingMode((prevState) =>
      prevState === FACING_MODE_USER ?
        FACING_MODE_ENVIRONMENT
      : FACING_MODE_USER
    );
  }, []);

  // Capture photo from webcam
  const capturePhoto = useCallback(() => {
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
      setIsLoading(true);
      const data = new FormData();
      data.append("imagefile", b64toBlob(url));
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

  useEffect(() => {
    setTimeout(() => {
      setShowButton(true);
    }, 1000);
  }, []);

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

      {change ?
        <div className="flex justify-center items-center gap-2">
          {showButton && (
            <>
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
            </>
          )}
        </div>
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
