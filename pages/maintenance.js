import React from 'react'
import Image from 'next/image'
import { Pattern } from "../constants/Images";

export default function Maintenance() {
  return (
    <div className="w-screen min-h-screen flex justify-center items-center container ">
      <div
        className=" w-full h-full absolute overflow-hidden opacity-10 drop-shadow-md"
        style={{
          backgroundImage: `url(/assets/images/CandiHijau.png)`  ,
          opacity: "0.1",
        }}
      ></div>
      <div className="space-y-2">
        <div className=" w-full md:w-[50vw] h-full mx-auto">
          <Image
            src={Pattern.HeadingFull}
            layout="responsive"
            objectFit="cover"
            alt="RAJA Brawijaya"
          />
        </div>

        <div className="drop-shadow-md">
          <h2 className=" text-grey font-agrandir font-extrabold text-6xl md:text-8xl text-center ">
            MAAF
          </h2>
          <h2 className=" text-black font-agrandir text-base md:text-2xl text-center">
          Halaman ini sedang dalam perbaikan. Silakan cek website secara berkala untuk informasi berikutnya
          </h2>
        </div>
        <div className="w-full md:w-[50vw] h-full mx-auto rotate-180 drop-shadow-md">
          <Image
            src={Pattern.HeadingFull}
            layout="responsive"
            objectFit="cover"
            alt="RAJA Brawijaya"
          />
        </div>
      </div>
    </div>
  )
}
