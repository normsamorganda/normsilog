"use client";
import React, { useState, useEffect } from "react";
import Logo from "../assets/logo1.png";
import Image from "next/image";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";
import { Link as Unlink } from "react-scroll";
import { jsPDF } from "jspdf";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [resume, setResume] = useState(false);
  const handleShow = () => {
    setNav((prev) => !prev);
  };

  useEffect(() => {
    nav
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [nav]);

  const handleSaveFile = () => {
    setResume(true);
    const doc = new jsPDF("portrait", "px", "a4", false);
    doc.addImage(
      "https://i.ibb.co/pjg3Yjr/Norman-Amorganda-1.png",
      "PNG",
      0,
      0,
      417,
      653
    );
    doc.save("NormanAmorganda.pdf");
    setResume(false);
  };

  return (
    <div className="fixed w-full h-[80px] flex justify-around items-center px-4 bg-[#0a192f] text-gray-300 z-50 md:justify-between md:px-48">
      <div>
        <Image src={Logo} alt="Logo Image" style={{ width: "50px" }} />
      </div>

      {/* menu */}

      <ul className="hidden md:flex md:gap-10">
        <Unlink
          to="home"
          smooth={true}
          duration={500}
          className="p-2 cursor-pointer"
        >
          Home
        </Unlink>
        {/* <li>Home</li> */}
        <Unlink
          to="about"
          smooth={true}
          duration={500}
          className="p-2 cursor-pointer"
        >
          About
        </Unlink>
        <Unlink
          to="skills"
          smooth={true}
          duration={500}
          className="p-2 cursor-pointer"
        >
          Skills
        </Unlink>
        <Unlink
          to="contact"
          smooth={true}
          duration={500}
          className="p-2 cursor-pointer"
        >
          Contact
        </Unlink>
      </ul>

      {/* hamburger */}
      <div className="md:hidden z-10" onClick={handleShow}>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* mobile menu */}

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center "
        }
      >
        <li className="py-6 text-4xl">
          <Unlink
            onClick={handleShow}
            to="home"
            smooth={true}
            duration={500}
            className="p-2"
          >
            Home
          </Unlink>
        </li>
        <li className="py-6 text-4xl">
          <Unlink
            onClick={handleShow}
            to="about"
            smooth={true}
            duration={500}
            className="p-2"
          >
            About
          </Unlink>
        </li>
        <li className="py-6 text-4xl">
          <Unlink
            onClick={handleShow}
            to="skills"
            smooth={true}
            duration={500}
            className="p-2"
          >
            Skills
          </Unlink>
        </li>
        <li className="py-6 text-4xl">
          <Unlink
            onClick={handleShow}
            to="contact"
            smooth={true}
            duration={500}
            className="p-2"
          >
            Contact
          </Unlink>
        </li>
      </ul>

      {/* social icons */}
      <div className="hidden md:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-blue-600">
            <Link
              href="https://web.facebook.com/dongingots/"
              className="flex justify-between items-center w-full text-gray-300"
              target="_blank"
            >
              Facebook <FaFacebook size={30} />
            </Link>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#333333]">
            <Link
              href="https://github.com/normsamorganda"
              className="flex justify-between items-center w-full text-gray-300"
              target="_blank"
            >
              Github <FaGithub size={30} />
            </Link>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#6fc2b0]">
            <Link
              href="mailto:normanamorganda@gmail.com"
              className="flex justify-between items-center w-full text-gray-300"
              target="_blank"
            >
              Email <HiOutlineMail size={30} />
            </Link>
          </li>
          <li
            className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#565f69]"
            onClick={handleSaveFile}
          >
            <Link
              href="/"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
