import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  faLock,
  faEnvelope,
  faEye,
  faEyeSlash,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <div className="bg-yellow w-full h-screen flex justify-center items-center">
        <div className="w-full max-w-[400px] gap-4 flex flex-col justify-between items-center bg-white p-10 rounded-4xl shadow-lg">
          <h1 className="font-bold text-3xl mb-4">Register</h1>
          <form action="" className="w-full">
            <div className="p-3 rounded-xl flex items-center w-full bg-gray-light mb-4 px-4">
              <label htmlFor="name">
                <FontAwesomeIcon icon={faUser} />
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                className="border-none outline-none pl-2 bg-gray-light w-full"
              />
            </div>
            <div className="p-3 rounded-xl flex items-center w-full bg-gray-light mb-4 px-4">
              <label htmlFor="email">
                <FontAwesomeIcon icon={faEnvelope} />
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="border-none outline-none pl-2 bg-gray-light w-full"
              />
            </div>
            <div className="p-3 rounded-xl flex items-center w-full bg-gray-light mb-4 px-4">
              <label htmlFor="password">
                <FontAwesomeIcon icon={faLock} />
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Password"
                className="border-none outline-none pl-2 bg-gray-light w-full"
              />
              {!showPassword ?
                <FontAwesomeIcon
                  icon={faEyeSlash}
                  className="cursor-pointer"
                  onClick={() => setShowPassword(true)}
                />
              : <FontAwesomeIcon
                  icon={faEye}
                  className="cursor-pointer"
                  onClick={() => setShowPassword(false)}
                />
              }
            </div>
            <button
              type="submit"
              className="bg-yellow font-bold text-white p-3 w-full rounded-xl"
            >
              Register
            </button>
          </form>
          <p className="text-sm">
            Already have an account?{" "}
            <Link to={"/Login"} className="text-yellow">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Register;
