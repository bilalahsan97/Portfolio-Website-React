import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo2.png";
import { Link, link } from "react-scroll";
import resume from "../assets/resume/CV-BILAL AHSAN.pdf";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 ">
      <div>
        <img src={Logo} alt="Logo Image" style={{ width: "70px" }} />
      </div>
      {/* menu */}{" "}
      {/*md: flex = medium flex, displays when viewport is higher than 700px*/}
      <ul className="hidden md:flex">
        <li>
          <Link
            className="hover:text-[rgb(223,162,32)]"
            to="home"
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-[rgb(223,162,32)]"
            to="about"
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-[rgb(223,162,32)]"
            to="skills"
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-[rgb(223,162,32)]"
            to="work"
            smooth={true}
            duration={500}
          >
            Work
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-[rgb(223,162,32)]"
            to="contact"
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
      {/* Hamburger */}
      <div onClick={handleClick} className="cursor-pointer md:hidden z-10">
        {!nav ? (
          <FaBars className="hover:text-[rgb(223,162,32)]" />
        ) : (
          <FaTimes className="hover:text-[rgb(223,162,32)]" />
        )}
      </div>
      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link
            className="hover:text-[rgb(223,162,32)]"
            onClick={handleClick}
            to="home"
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            className="hover:text-[rgb(223,162,32)]"
            onClick={handleClick}
            to="about"
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            className="hover:text-[rgb(223,162,32)]"
            onClick={handleClick}
            to="skills"
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            className="hover:text-[rgb(223,162,32)]"
            onClick={handleClick}
            to="work"
            smooth={true}
            duration={500}
          >
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            className="hover:text-[rgb(223,162,32)]"
            onClick={handleClick}
            to="contact"
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
      {/* Social Icons */}
      <div className={nav ? "hidden" : "flex fixed flex-col top-[35%] left-0"}>
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-95px] hover:ml-[-10px] duration-500 bg-blue-700">
            <a
              href="https://www.linkedin.com/in/bilal-ahsan/"
              target="_blank"
              className="flex justify-between items-center w-full text-gray-300"
            >
              LinkedIn <FaLinkedin size={40} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-95px] hover:ml-[-10px] duration-500 bg-[#333333]">
            <a
              href="https://github.com/bilalahsan97"
              target="_blank"
              className="flex justify-between items-center w-full text-gray-300"
            >
              GitHub <FaGithub size={40} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-95px] hover:ml-[-10px] duration-500 bg-[#6fc2b0]">
            <Link
              className="flex justify-between items-center w-full text-gray-300"
              to="contact"
              smooth={true}
              duration={500}
            >
              <a className="flex justify-between items-center w-full text-gray-300">
                Email <HiOutlineMail size={40} />
              </a>
            </Link>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-95px] hover:ml-[-10px] duration-500 bg-[#565f69]">
            <a
              href={resume}
              download="Resume-Bilal Ahsan"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Resume <BsFillPersonLinesFill size={40} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
