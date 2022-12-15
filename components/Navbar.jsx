import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { useRouter } from "next/router";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#000000");
  const router = useRouter();

  useEffect(() => {
    if (
      router.asPath === "/moments" ||
      router.asPath === "/pizza" ||
      router.asPath === "/tesla" ||
      router.asPath === "/mycoin"
    ) {
      setNavBg("transparent");
      setLinkColor("#ecf0f3");
    } else {
      setNavBg("#ecf0f3");
      setLinkColor("#000000");
    }
  }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image
            className="p-2"
            src="/../public/assets/vb.png"
            alt="/"
            width="75"
            height="50"
          />
        </Link>

        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:text-[#de0f3f] hover:font-bold">
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:text-[#de0f3f] hover:font-bold">
                About
              </li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:text-[#de0f3f] hover:font-bold">
                Skills
              </li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:text-[#de0f3f] hover:font-bold">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:text-[#de0f3f] hover:font-bold">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden cursor-pointer">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between mt-[-2rem]">
              <Link href="/">
                <Image
                  className="ml-[-2rem] p-2"
                  src="/../public/assets/vb.png"
                  width="80"
                  height="35"
                  alt="/"
                />
              </Link>

              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-grey-400 p-2 cursor-pointer"
              >
                <AiOutlineClose size={20} />
              </div>
            </div>
            <div className="border-b border-gray-300">
              <p className="w-[85%] md:w-[90%] py-4">
                `Let's` build something awsome together
              </p>
            </div>
          </div>
          <div>
            <div className="py-4 flex flex-col">
              <ul className="uppercase">
                <Link href="/">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Home
                  </li>
                </Link>
                <Link href="/#about">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    About
                  </li>
                </Link>
                <Link href="/#skills">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Skills
                  </li>
                </Link>
                <Link href="/#projects">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Projects
                  </li>
                </Link>
                <Link href="/#contact">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Contact
                  </li>
                </Link>
              </ul>
              <div className="pt-40">
                <p className="uppercase font-bold text-[#de0f3f]">
                  Let's Conect
                </p>
                <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <BsLinkedin />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FiMail />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <BsInstagram />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
