"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image, { StaticImageData } from "next/image";
import { PhotoProvider, PhotoView } from "react-photo-view";
import Imgjs from "./photos/3d-javascript-logo-design-free-png.png";
import ImgTS from "./photos/OIP (4).png";
import ImgCSS from "./photos/OIP (2).png";
import ImgHTML from "./photos/html5-icon-13.jpg";
import ImgTailwind from "./photos/course_7443_image.png";
import ImgNEXT from "./photos/nextjs7685.logowik.com.png";
import uni from "./photos/uni.png";
import uni1 from "./photos/uni1.png";
import uni2 from "./photos/uni2.png";
import GradientText from "../../../component/GradientText/GradientText";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import Link from "next/link";
import { FaSquareGitlab } from "react-icons/fa6";
import projectImage from "./photos/Screenshot 2025-09-09 055838.png";
import projectImage1 from "./photos/Screenshot 2025-09-09 060133.png";

const justForMap = [
  "Understanding Your Goal – exact needs, target users, priorities",
  "Wireframe & UI – clean, modern design before coding",
  "Development – fast, scalable code with React / Next",
  "Delivery & Support – deploy, optimize, and refine",
];
const mySkill = [
  { img: ImgCSS, name: "CSS" },
  { img: ImgHTML, name: "HTML" },
  { img: ImgNEXT, name: "next", className: "w-30" },
  { img: ImgTS, name: "TypeScript" },
  { img: ImgTailwind, name: "Tailwind" },
  { img: Imgjs, name: "javaScript" },
];
const socialmedia = [
  { icon: <FaInstagram size={50} />, title: "instgram" },
  { icon: <FaTelegram size={50} />, title: "telegram" },
  { icon: <IoLogoLinkedin size={50} />, title: "Linkedin" },
  { icon: <FaGithub size={50} />, title: "github" },
  { icon: <FaSquareGitlab size={50} />, title: "Gitlab" },
];
function PortfolioShowcaseTabs() {
  const renderImage = (image: StaticImageData, alt: string, className = "") => (
    <PhotoView src={image.src}>
      <button
        type="button"
        className=" focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d81b60] rounded-xl"
      >
        <Image alt={alt} src={image} className={className} />
      </button>
    </PhotoView>
  );
  return (
    <PhotoProvider
      maskOpacity={0.8}
      bannerVisible={false}
      overlayRender={({ visible, onClose }) =>
        visible ? (
          <button
            type="button"
            aria-label="Close image viewer"
            className="PhotoView__CustomClose"
            onClick={(event) => {
              event.stopPropagation();
              onClose(event);
            }}
          >
            ×
          </button>
        ) : null
      }
    >
      <Tabs
        defaultValue="Products"
        className="w-[100%] flex justify-center rounded-2xl mt-2  px-5 "
      >
        <TabsList className="w-full bg-[#0b1a2e]">
          <TabsTrigger value="Products">projects</TabsTrigger>
          <TabsTrigger value="mySkill">mySkill</TabsTrigger>
        </TabsList>
        <TabsContent className="bg-transparent w-[100%] " value="Products">
          <div className="flex gap-3 w-full mt-5 mb-16">
            <div>{renderImage(projectImage, "project Image")}</div>{" "}
            <div>{renderImage(projectImage1, "project Image")}</div>{" "}
          </div>{" "}
          <div
            className="flex gap-3
           w-full "
          >
            <div> {renderImage(uni, "project Image")} </div>

            <div> {renderImage(uni2, "project Image")} </div>
          </div>
        </TabsContent>

        <TabsContent
          className="bg-transparent"
          defaultValue={"mySkill"}
          value="mySkill"
        >
          {" "}
          <div className="w-full block ">
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6  mt-5 mb-16  gap-4">
              {mySkill.map((e) => {
                return (
                  <div
                    key={e.name}
                    className=" w-full flex flex-col items-center gap-4"
                  >
                    {renderImage(
                      e.img,
                      e.name,
                      e.className
                        ? e.className
                        : " w-20  flex flex-col justify-between h-20 rounded-full "
                    )}
                    <label className="text-center">{e.name}</label>{" "}
                  </div>
                );
              })}
            </div>
            <div className="block md:flex w-full">
              <div className="flex-1/2 bg-transparent  mr-8  h-[100%] p-2">
                {justForMap.map((e, index) => {
                  return (
                    <div className="flex gap-1 lg:mb-5 md:mb-2 mb-10  xl:mb-3 items-center h-24  ">
                      <div className="w-[20%] h-16 bg-[#d81b60] rounded-full text-white flex justify-center items-center text-xl font-bold">
                        {index + 1}
                      </div>
                      <div
                        className="w-[85%]  bg-[#fce4ec] rounded-3xl mb-3  p-5
                       text-black "
                      >
                        {e}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex-1/2 ">
                <h2 className="text-3xl font-semibold mb-2">
                  my approach that empowers my clients to
                </h2>
                <GradientText
                  colors={[
                    "#ad1457",
                    "#005b8f",
                    "#ad1457",
                    "#4079fd",
                    "#ad1457",
                  ]}
                  animationSpeed={4}
                  showBorder={false}
                  className=" text-3xl md:text-4xl font-bold  h-15 mt-2"
                >
                  2X their revnue
                </GradientText>
                <p className="space-y-2"></p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </PhotoProvider>
  );
}

export default PortfolioShowcaseTabs;
