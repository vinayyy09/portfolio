import Image from "next/image";
import React from "react";
import crypto from "../public/assets/projects/mycoin-2.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const mycoin = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={crypto}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2 font-black">Crypto App</h2>
          <h3 className="font-black">React JS / API</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="text-[#de0f3f] uppercase tracking-widest p-4">
            Project
          </p>
          <h2 className="p-3">Overview</h2>
          <p>
            I built this app to demonstrate knowledge working in React JS and
            accessing API endpoints. This app was built using React JS and
            Tailwind Css and is hosted on Vercel. This application displays the
            real-time data using Axios and also the top trending crypto
            currencies.This application was built using the Coin Gecko API.
          </p>
          <a
            href="https://github.com/vinayyy09/crypto-app"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="https://crypto-app-drab-psi.vercel.app/"
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
                Coingecko API
              </p>
              <p className="text-gray-800 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React Hooks
              </p>
              <p className="text-gray-800 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                CSS
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

export default mycoin;
