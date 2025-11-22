import React from "react";
import GradientText from "../../../component/GradientText/GradientText";
import Tabs from "./PortfolioShowcaseTabs";

function PortfolioShowCase() {
  return (
    <div className="w-[80%]">
      <div>
        <GradientText
          colors={["#ad1457", "#005b8f", "#ad1457", "#4079fd", "#ad1457"]}
          animationSpeed={4}
          showBorder={false}
          className="text-3xl  md:text-5xl font-bold  h-15 mt-2 mx-auto"
        >
          Portfolio Showcase
        </GradientText>
        <p className=" m-auto text-center w-[100%]"> </p>
        <div className="flex w-[100%] justify-center mt-10">
          <Tabs />
        </div>
      </div>
    </div>
  );
}

export default PortfolioShowCase;
