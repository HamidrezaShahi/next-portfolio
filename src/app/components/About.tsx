import React from "react";

function About() {
  return (
    <div className=" block w-full mt-52 justify-center  ">
      <span className="text-4xl font-semibold flex justify-center">
        About Me
      </span>
      <div className=" flex mt-32 w-full">
        <div className="flex justify-center">
          <div className=" w-full md:w-1/3 p-5 mb-36 text-justify ">
            Hi there! <br />
            I'm a front-end developer who loves building clean, fast, and
            user-friendly interfaces. Over the years, I've worked with
            technologies like Tailwind CSS, JavaScript, React, Next.js, and REST
            APIs, and now I'm here to showcase what I can do. Creating
            responsive designs that look great on any device is one of my top
            priorities. In all my projects, I strive to write clean code while
            keeping the user experience front and center. This website is my
            portfolio — a place to share some of the projects I've worked on and
            the skills I've developed. If you have a project in mind or want to
            collaborate, feel free to get in touch!
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
