/* eslint react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import car from "../public/assets/projects/tesla.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const tesla = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={car}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2 font-black">Tesla Clone</h2>
          <h3 className="font-black">React JS / Styled Components</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="text-[#de0f3f] uppercase tracking-widest p-4">
            Project
          </p>
          <h2 className="p-3">Overview</h2>
          <p>
            This app was built using React JS and is hosted on Vercel. It is
            styled using a package called 'Styled Components' and basically has
            a bunch of reusable components which makes the process less lengthy.
            It is just an attempt to clone the original Tesla website and may
            have some minor changes here and there. This application is fully
            reponsive on all different devices.
          </p>
          <a
            href="https://github.com/vinayyy09/tesla"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="https://tesla-green-alpha.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2 text-[#de0f3f]">
              Technologies
            </p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-800 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React Js
              </p>
              <p className="text-gray-800 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                JavaScript
              </p>
              <p className="text-gray-800 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Smooth Scrolling
              </p>
              <p className="text-gray-800 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Styled Components
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default tesla;
