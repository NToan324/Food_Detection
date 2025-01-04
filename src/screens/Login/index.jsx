import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  faLock,
  faEnvelope,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Facebook from "../../public/Facebook-Logosu.png";
import Google from "../../public/Logo-google-icon-PNG (1).png";
function Login() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <div className="bg-yellow w-full h-screen flex justify-center items-center">
        <div className="w-full max-w-[400px] gap-4 flex flex-col justify-between items-center bg-white p-10 rounded-4xl shadow-lg">
          <h1 className="font-bold text-3xl mb-4">Login</h1>
          <form action="" className="w-full">
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
            <div className="flex justify-end w-full mb-4">
              <a href="#" className="text-yellow text-sm">
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="bg-yellow font-bold text-white p-3 w-full rounded-xl"
            >
              Login
            </button>
          </form>
          <p className="text-sm">Or sign in with</p>
          <div className="flex justify-between w-full gap-2">
            <button className="border border-gray text-white p-2 w-full rounded-xl flex justify-center items-center shadow-sm">
              <img src={Facebook} alt="facebook" width={40} height={40} />
            </button>
            <button className="border border-gray text-white p-2 w-full rounded-xl flex justify-center items-center shadow-sm">
              <img src={Google} alt="google" width={20} height={20} />
            </button>
          </div>
          <p className="text-sm">
            Don't have an account?{" "}
            <Link to={"/Register"} className="text-yellow">
              Register
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
