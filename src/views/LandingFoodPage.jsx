import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import { Layout } from "../layout/layout";
import Home from "../screens/Home/index";
import About from "../screens/About";
import Foods from "../screens/Foods";
import Explore from "../screens/Explore";
import History from "../screens/History";
import { SpinnerProvider } from "../Context/SpinnerContext";
import SpinnerLoader from "../components/Spinner/SpinnerLoader";

const LandingFoodPage = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.state?.scrollTo) {
      scroller.scrollTo(location.state.scrollTo, {
        smooth: true,
        duration: 1000,
        offset: -200,
      });
    }
  }, [location]);

  return (
    <>
      <SpinnerProvider>
        <SpinnerLoader />
        <Layout>
          <div className="space-y-[200px] phone:space-y-10">
            <Home />
            <About />
            <Foods />
            <Explore />
            <History />
          </div>
        </Layout>
      </SpinnerProvider>
    </>
  );
};

export default LandingFoodPage;
