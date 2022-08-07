import React, { useEffect } from "react";
import style from "./style.module.css";
import Aos from "aos";
import "aos/dist/aos.css";

export default function HeadingMini({
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
          className="w-[24px] md:w-[40px] lg:w-[90px]"
          src="/assets/images/awan.png"
        />
        <h1
          className={` font-agrandir font-bold text-lg lg:text-3xl md:text-xl ${
            topWhite ? "text-white" : "text-blue"
          }`}
        >
          {top}
          <span className="text-yellow ">{bottom}</span>
        </h1>
        <img
          className={`w-[24px] md:w-[40px] lg:w-[90px] ${style.reverse}`}
          src="/assets/images/awan.png"
        />
      </div>
    </div>
  );
}
