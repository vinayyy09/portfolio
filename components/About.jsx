import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full md:h-[650px] p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="text-[#de0f3f] uppercase text-xl tracking-widest">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-black/80">
            I specialize in building mobile responsive front-end UI applications
            that connect with API’s and other backend technologies. I’m
            passionate about learning new technologies and understand there is
            more than one way to accomplish a task. Though I am most proficient
            in building front-end applications using HTML, CSS, Javascript, and
            React, I am a quick learner and can pick up new tech stacks as
            needed. I believe that being a great developer is not using one
            specific language, but choosing the best tool for the job.
          </p>
          <p className="py-2 text-black/80">
            Born and raised in Belagavi, Karnataka. I started my journey back in
            2021 with my passion for building minimalistic yet beautiful eye
            pleasing applications.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-black underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            className="rounded-xl"
            src="/../public/assets/about-1.png"
            alt="/"
            width="500"
            height="450"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
