import React from "react";
import Heading from "../../component/heading/Heading";
import { motion } from "framer-motion";

export default function Perkenalan() {
  return (
    <div className="bg-white py-24">
      <Heading direction={"center"} top="Pengenalan" bottom="Raja Brawijaya" />
      <div className="container mx-auto mt-10 lg:flex lg:items-center lg:mt-20">
        <motion.img
          animate={{
            scale: [0.95, 1.05, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
          className="md:w-8/12 mx-auto lg:w-1/2 lg:pr-10"
          src="/assets/images/Maskot.svg"
        />
        <div className="lg:pl-10">
          <p className="text-justify font-poppins text-grey text-sm mt-6 md:text-base lg:text-xl">
            <span className="text-yellow font-medium">RAJA Brawijaya</span> atau{" "}
            <span className="text-yellow font-medium">
              Rangkaian Acara Jelajah Almamater Universitas Brawijaya
            </span>{" "}
            merupakan serangkaian kegiatan yang bertujuan untuk memfasilitasi
            mahasiswa baru Universitas Brawijaya untuk mengetahui hal-hal
            terkait kehidupan kampus dimana RAJA Brawijaya terdiri dari tiga
            rangkaian yaitu PKKMB dan OH.
          </p>
        </div>
      </div>
    </div>
  );
}
