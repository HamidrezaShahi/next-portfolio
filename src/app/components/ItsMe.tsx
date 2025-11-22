"use client";
import React from "react";
import FadeInFromRight from "./FadeInFromRight";
import Image from "next/image";
import FadeInFromLeft from "./FedeInFromLeft";
import GradientText from "../../../component/GradientText/GradientText";
import Skils from "./Skils";
import { Button } from "@/components/ui/button";
import image from "./photos/IMG_1205_11zon.webp";
import { Router } from "lucide-react";
import { useRouter } from "next/router";
import Link from "next/link";

function ItsMe() {
  const mySkills = [
    { name: "javaScript", id: "1212" },
    { name: "css", id: "1313" },
    { name: "Next js", id: "1414" },
    { name: "React js", id: "1616" },
  ];

  return (
    <div className="flex flex-col xl:flex-row lg:mt-40 w-full gap-8 px-4 md:px-8">
      <div className="w-full xl:w-1/2 flex justify-center items-center">
        <div className="w-full max-w-md flex justify-center ">
          <Image
            alt="my photo"
            src={image}
            className="rounded-full border-2  w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 object-cover"
          />
        </div>
      </div>
      <div className="w-full xl:w-1/2 flex flex-col space-y-3 p-4 sm:p-6 md:p-8 lg:p-10">
        <span className="font-bold text-xl sm:text-2xl">Hello It's me</span>
        <GradientText
          colors={["#ad1457", "#4079ff", "#ad1457", "#4079ff", "#ad1457"]}
          animationSpeed={4}
          showBorder={false}
          className="text-2xl sm:text-3xl font-black mt-2"
        >
          Happy Dude
        </GradientText>
        <span className="font-bold text-xl sm:text-2xl">
          Web developer & softWare Student
        </span>

        <div className="mt-4 text-sm sm:text-base">
          Hi there! <br />
          I'm a front-end developer who loves building clean, fast, and
          user-friendly interfaces.
        </div>
        <div className="flex flex-wrap gap-3 sm:gap-4">
          {mySkills.map((event) => {
            return <Skils key={event.id} skill={event.name} />;
          })}
        </div>
        <Button className="dark:bg-pink-700/20 backdrop:backdrop-blur-md border border-pink-500/30 dark:border-pink-300/20 rounded-2xl shadow-lg p-3 hover:bg-pink-500/25 transition w-full sm:w-48 mt-5">
          <Link href={"/book"}> Lets Book A Call </Link>
        </Button>
      </div>
    </div>
  );
}

export default ItsMe;
