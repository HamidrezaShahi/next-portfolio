import React from "react";
import GradientText from "../../../component/GradientText/GradientText";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { FaGithub, FaInstagram, FaTelegram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareGitlab } from "react-icons/fa6";
import Link from "next/link";

function HaveProjects() {
  const socialmedia = [
    {
      icon: <FaInstagram size={50} />,
      title: "instagram",
      link: "https://www.instagram.com/hamidreza._.sha7",
    },
    {
      icon: <FaTelegram size={50} />,
      title: "telegram",
      link: "https://web.telegram.org/k/#@Hamidreza_Shahii",
    },
    {
      icon: <IoLogoLinkedin size={50} />,
      title: "Linkedin",
      link: "https://linkedin.com/in/hamidreza-shahi-736652396",
    },
    {
      icon: <FaGithub size={50} />,
      title: "github",
      link: "https://github.com/HamidrezaShahi",
    },
    { icon: <FaSquareGitlab size={50} />, title: "Gitlab", link: "" },
  ];
  const router = useRouter();
  return (
    <div className=" mb-10">
      <GradientText
        colors={["#ad1457", "#005b8f", "#ad1457", "#4079fd", "#ad1457"]}
        animationSpeed={4}
        showBorder={false}
        className=" text-3xl md:text-4xl font-bold  h-15 mt-2 mx-auto"
      >
        Have Projects In Mind?{" "}
      </GradientText>
      <div className="flex flex-col justify-center w-full items-center gap-5">
        {" "}
        <span className="font-bold text-3xl text-white text-center flex justify-center">
          let's work together
        </span>
        <div className="grid w-full justify-around mt-8 grid-cols-3 gap-6  sm:grid-cols-3 md:grid-cols-5">
          {socialmedia.map((e) => {
            return (
              <div
                key={e.title}
                className="flex flex-col w-full justify-center items-center"
              >
                <Link href={e.link}>{e.icon}</Link>
                <span className="text-center">{e.title}</span>
              </div>
            );
          })}
        </div>
        <Button
          className="bg-[#fce4ec] text-[#ad1457] hover:bg-white mt-4"
          onClick={() => router.push("/book")}
        >
          {" "}
          Lets Book A Call
        </Button>
      </div>
    </div>
  );
}

export default HaveProjects;
