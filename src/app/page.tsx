"use client";

import { FaCode } from "react-icons/fa6";
import { MdOutlineDeveloperBoard } from "react-icons/md";
import { MdDeveloperMode } from "react-icons/md";
import { motion } from "framer-motion";
import FadeInWhenVisible from "./components/FadeInWhenVisible";
import About from "./components/About";
import BlurText from "../../component/BlurText/BlurText";
import GradientText from "../../component/GradientText/GradientText";
import ItsMe from "./components/ItsMe";
import PortfolioShowCase from "./components/PortfolioShowCase";
import HaveProjects from "./components/HaveProjects";
import { useEffect, useState } from "react";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import { useSelector } from "react-redux";
export default function Home() {
  const darkSelector = useSelector((state: any) => state.dark.dark);
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  // useEffect(() => {
  //   if (!dark) {
  //     fetch("/translate/translate.json")
  //       .then((res) => res.json())
  //       .then((data) => setTranslate(data));
  //   }
  // }, []);
  const className =
    "bg-gradient-to-tr from-[#5194df]  via-[#7793d0] to-[#ffffff] text-gray-700 ";
  return (
    <>
      <Header
        about={"#about"}
        contact="#Contact"
        home="#home"
        projects="#projects"
      />
      <div
        className={
          darkSelector
            ? className
            : " min-h-screen bg-gradient-to-tr from-[#0b1a2e] via-[#1b2537] to-black "
        }
      >
        <div className="z-100 min-h-screen flex flex-col items-center ">
          <motion.span
            initial={{ opacity: -20, y: 100 }}
            animate={{ opacity: 20, y: 100 }}
            transition={{ duration: 3 }}
          >
            <BlurText
              text="welcome to my"
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="   flex w-full h-1/2 font-bold size-4  justify-center text-5xl text-center  mt-48 "
            />
            <GradientText
              colors={["#ad1457", "#4079ff", "#ad1457", "#4079ff", "#ad1457"]}
              animationSpeed={4}
              showBorder={false}
              className=" text-3xl md:text-5xl font-bold  h-15 mt-2 mx-auto"
            >
              portfolio website{" "}
            </GradientText>
            <div className=" flex justify-center gap-10 mt-5">
              <div className="bg-transparent  rounded-[50%] flex justify-center items-center h-[50px] w-[50px]">
                {" "}
                <FaCode size={40} />{" "}
              </div>
              <div className="bg-transparent rounded-[50%] flex justify-center items-center h-[50px] w-[50px]">
                {" "}
                <MdOutlineDeveloperBoard size={40} />
              </div>
              <div className="bg-transparent rounded-[50%] flex justify-center items-center h-[50px] w-[50px]">
                <MdDeveloperMode size={40} />
              </div>
            </div>
          </motion.span>
        </div>
        <FadeInWhenVisible>
          <section id="home" className="min-h-screen flex items-center ">
            <ItsMe />
          </section>
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <section
            id="about"
            className="min-h-screen flex flex-col justify-center items-center"
          >
            <About />
          </section>
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <section
            className=" flex justify-center  items-center   "
            id="projects"
          >
            <PortfolioShowCase />
          </section>
        </FadeInWhenVisible>{" "}
        <section id="Contact" className="  flex items-center justify-center ">
          <FadeInWhenVisible>
            <div className=" flex flex-col mt-[250px] justify-center items-center">
              <HaveProjects />
            </div>
          </FadeInWhenVisible>
        </section>
        <Footer />
      </div>
    </>
  );
}
