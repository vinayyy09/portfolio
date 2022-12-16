import React from "react";
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase tracking-widest">
            Let's Build something awsome together
          </p>
          <h1 className="py-4 text-black">
            Hey, I'm <span className="text-[#de0f3f]">Vinay</span>
          </h1>
          <h1 className="py-2 text-black">A Front-End Web Developer</h1>
          <p className="py-4 text-black/50 max-w-[70%] m-auto">
            I am focused on building responsive front-end web applications
            integrating back-end technologies.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/vinay-babar"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 text-[#003cff]">
                <BsLinkedin />
              </div>
            </a>
            <Link href="/#contact">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 text-[#ff0000]">
                <FiMail />
              </div>
            </Link>

            <a
              href="https://github.com/vinayyy09"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300 text-[#000000]">
                <FaGithub />
              </div>
            </a>

            <a
              href="https://www.instagram.com/vinayyy_09"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300 text-[#de0f3f]">
                <BsInstagram />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
