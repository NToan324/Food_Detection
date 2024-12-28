import React from "react";
import Header from "../screens/Header/index";
import Footer from "../screens/Footer/index";

import "../index.css";
export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="w-full min-h-screen bg-white flex flex-col">
        {children}
      </main>
      <Footer />
    </>
  );
};
