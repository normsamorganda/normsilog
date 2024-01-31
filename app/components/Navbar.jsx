"use client";
import React, { useState } from "react";
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
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleShow = () => {
    setNav((prev) => !prev);
  };
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <Image src={Logo} alt="Logo Image" style={{ width: "50px" }} />
      </div>

      {/* menu */}

      <ul className="hidden md:flex">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Contact</li>
      </ul>

      {/* hamburger */}
      <div className="md:hidden z-10" onClick={handleShow}>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* mobile menu */}

      {nav && (
        <ul className="absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center">
          <li className="py-6 text-4xl">Home</li>
          <li className="py-6 text-4xl">About</li>
          <li className="py-6 text-4xl">Skills</li>
          <li className="py-6 text-4xl">Contact</li>
        </ul>
      )}

      {/* social icons */}
      <div className="flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-blue-600">
            <Link
              href="/"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Linkedin <FaLinkedin size={30} />
            </Link>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#333333]">
            <Link
              href="/"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Github <FaGithub size={30} />
            </Link>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#6fc2b0]">
            <Link
              href="/"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Email <HiOutlineMail size={30} />
            </Link>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#565f69]">
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
