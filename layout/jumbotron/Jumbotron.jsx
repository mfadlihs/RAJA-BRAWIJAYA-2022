import React, { useEffect } from "react";
import styled from "styled-components";
import style from "./style.module.css";

import Aos from "aos";
import "aos/dist/aos.css";

export default function Jumbotron() {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  return (
    <div className="relative h-screen overflow-y-hidden">
      <div className={`relative w-full h-screen ${style.video}`}>
        <video
          muted={true}
          className="object-cover z-10 w-full h-full"
          autoPlay={true}
          loop
          controls={false}
        >
          <source src="/assets/videos/v.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="absolute inset-0">
        <div className="container mx-auto relative flex flex-col h-full lg:flex-row lg:items-center">
          <div>
            <h1
              data-aos="zoom-in"
              className="font-droid mt-52 lg:mt-0 text-6xl md:text-[120px] lg:w-4/6 text-white"
            >
              RAJA Brawijaya
            </h1>
            <hr className="h-1 mt-3 lg:mt-5 stroke-0 rounded-full bg-white" />
            <p className="text-lg mt-3 text-white md:text-xl font-poppins">
              Rangkaian Acara Jelajah Almamater Universitas Brawijaya
            </p>
          </div>
          <h2
            className={`text-8xl md:text-[146px] mt-28 lg:mt-0 font-droid text-trans stroke-white lg:rotate-90 lg:absolute lg:right-0  ${style.stroke}`}
          >
            2022
          </h2>
        </div>
      </div>
      <img
        src="/assets/images/awanJumbotron.svg"
        className="w-full object-cover absolute -bottom-[16px] md:-bottom-[28px] lg:-bottom-14"
      />
    </div>
  );
}
