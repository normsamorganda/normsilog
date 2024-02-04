import React from "react";
import Image from "next/image";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import next from "../assets/nextjs.png";
import typescript from "../assets/typescript.png";
import git from "../assets/git.png";
const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Skills
          </p>
          <p className="py-4">// These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] grayscale hover:filter-none hover:scale-110 duration-500">
            <Image src={html} alt="html-icon" className="w-20 mx-auto"></Image>
            <p>HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] grayscale hover:filter-none hover:scale-110  duration-500">
            <Image src={css} alt="css-icon" className="w-20 mx-auto"></Image>
            <p>CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] grayscale hover:filter-none hover:scale-110 duration-500">
            <Image
              src={javascript}
              alt="javascript-icon"
              className="w-20 mx-auto"
            ></Image>
            <p>Javascript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] grayscale hover:filter-none  hover:scale-110 duration-500">
            <Image
              src={react}
              alt="react-icon"
              className="w-20 mx-auto"
            ></Image>
            <p>React JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] grayscale hover:filter-none hover:scale-110 duration-500">
            <Image
              src={tailwind}
              alt="tailwind-icon"
              className="w-20 mx-auto"
            ></Image>
            <p>Tailwind</p>
          </div>
          <div className="shadow-md shadow-[#040c16] grayscale hover:filter-none hover:scale-110 duration-500">
            <Image src={next} alt="next-icon" className="w-20 mx-auto"></Image>
            <p>Next JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] grayscale hover:filter-none hover:scale-110 duration-500">
            <Image
              src={typescript}
              alt="typescript-icon"
              className="w-20 mx-auto"
            ></Image>
            <p>Typescript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] grayscale hover:filter-none hover:scale-110 duration-500">
            <Image src={git} alt="git-icon" className="w-20 mx-auto"></Image>
            <p>Git</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
