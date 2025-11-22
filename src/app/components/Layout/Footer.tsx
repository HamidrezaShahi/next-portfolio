import React from "react";
import GradientText from "../../../../component/GradientText/GradientText";
import { MdEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <footer className="w-full min-h-64 bg-[#000000] shadow-2xl text-white  p-5">
        <div className="flex justify-around ">
          <div className="block gap-3">
            {" "}
            <div className="flex flex-col gap-5">
              <div className="gap-1 grid">
                <MdEmail size={32} />
                <span>Email</span>
                <span>hamideveloper84@gmail.com</span>
              </div>
              <div className="grid gap-1">
                <FaPhoneSquareAlt size={30} />
                <span>Contact</span>
                <span>+98-930-973-9936</span>
              </div>
              <div></div>
            </div>{" "}
          </div>
          <div className="hidden md:block gap-3 ">
            <GradientText
              colors={["#ad1457", "#005b8f", "#ad1457", "#4079fd", "#ad1457"]}
              animationSpeed={4}
              showBorder={false}
              className=" text-2xl md:text-xl font-bold  h-15 mt-2 mx-auto"
            >
              Quick Links
            </GradientText>
            <div className="flex flex-col items-center">
              <p>Home</p>
              <p>About</p>
              <p>Content</p>
              <p>projects</p>
            </div>
          </div>
        </div>
        {/* <div>gfgfgfg</div> */}
      </footer>
    </div>
  );
}

export default Footer;
