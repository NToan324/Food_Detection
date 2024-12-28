import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import { Layout } from "../layout/layout";
import Home from "../screens/Home/index";
import About from "../screens/About";
import Foods from "../screens/Foods";
import Explore from "../screens/Explore";
import History from "../screens/History";

const LandingFoodPage = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.state?.scrollTo) {
      scroller.scrollTo(location.state.scrollTo, {
        smooth: true,
        duration: 1000,
        offset: -200, // Bù đắp cho header
      });
    }
  }, [location]);
  return (
    <>
      <Layout>
        <div className="space-y-[200px] phone:space-y-10">
          <Home />
          <About />
          <Foods />
          <Explore />
          <History />
        </div>
      </Layout>
    </>
  );
};

export default LandingFoodPage;
