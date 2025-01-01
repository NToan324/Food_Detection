import React, { useContext } from "react";
import { SpinnerContext } from "../../Context/SpinnerContext";
function SpinnerLoader() {
  const { isLoading } = useContext(SpinnerContext);
  return (
    <>
      {isLoading && (
        <div
          className="w-full h-screen fixed top-0 left-0 z-[1000] flex justify-center items-center"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <span className="loader"></span>
        </div>
      )}
    </>
  );
}

export default SpinnerLoader;
