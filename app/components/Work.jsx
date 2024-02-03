import React from "react";
import Link from "next/link";
import azor from "../assets/projects/azor.PNG";
import fhi from "../assets/projects/fhi.PNG";
import casino from "../assets/projects/casino.PNG";
import traview from "../assets/projects/traview.PNG";

import styles from "./work.module.css";
const Work = () => {
  return (
    <div className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p>// Check out some of recent work</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div
            style={{ backgroundImage: `url(${azor.src})` }}
            className={`shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto ${styles.contentDiv}`}
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <Link href={"/"}>
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </Link>
                <Link href={"/"}>
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </Link>
              </div>
            </div>
            {/* end card */}
          </div>
          <div
            style={{ backgroundImage: `url(${fhi.src})` }}
            className={`shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto ${styles.contentDiv}`}
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <Link href={"/"}>
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </Link>
                <Link href={"/"}>
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </Link>
              </div>
            </div>
            {/* end card */}
          </div>
          <div
            style={{ backgroundImage: `url(${casino.src})` }}
            className={`shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto ${styles.contentDiv}`}
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <Link href={"/"}>
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </Link>
                <Link href={"/"}>
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </Link>
              </div>
            </div>
            {/* end card */}
          </div>
          <div
            style={{ backgroundImage: `url(${traview.src})` }}
            className={`shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto ${styles.contentDiv} duration-300`}
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <Link href={"/"}>
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </Link>
                <Link href={"/"}>
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </Link>
              </div>
            </div>
            {/* end card */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
