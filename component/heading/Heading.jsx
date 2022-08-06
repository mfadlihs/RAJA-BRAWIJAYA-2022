import React, { useEffect } from "react";
import style from "./style.module.css";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Heading({
  top,
  bottom,
  direction,
  className,
  topWhite,
}) {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  return (
    <div
      data-aos="zoom-in"
      className={`${
        className != undefined ? className : " "
      } flex items-center flex-col drop-shadow-md w-fit ${
        direction == "center" ? "mx-auto" : " "
      } ${direction == "right" ? "ml-auto" : " "}`}
    >
      <div className="flex items-center justify-center mx-auto w-fit">
        <img
          className="w-[45px] md:w-[52px] lg:w-[120px]"
          src="/assets/images/awan.png"
        />
        <h1
          className={` font-agrandir font-bold text-3xl lg:text-7xl md:text-5xl ${
            topWhite ? "text-white" : "text-blue"
          }`}
        >
          {top}
        </h1>
        <img
          className={`w-[45px] md:w-[52px] lg:w-[120px] ${style.reverse}`}
          src="/assets/images/awan.png"
        />
      </div>
      <div>
        <h1 className="text-yellow font-agrandir font-bold text-3xl lg:text-7xl md:text-5xl">
          {bottom}
        </h1>
      </div>
    </div>
  );
}
