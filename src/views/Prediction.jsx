import React from "react";
import { Layout } from "../layout/layout";
import Prediction from "../screens/Prediction/index";
const LandingFoodPage = () => {
  return (
    <>
      <Layout>
        <div className="space-y-[200px] phone:space-y-10">
            <Prediction />
        </div>
      </Layout>
    </>
  );
};

export default LandingFoodPage;
