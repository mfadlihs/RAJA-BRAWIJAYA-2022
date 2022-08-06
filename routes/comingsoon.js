import Image from "next/image";
import { Background, Pattern } from "../constants/Images";
import Link from "next/link";
import { SosialMedia } from "../constants/Dummy";
import { useEffect, useState } from "react";
import Head from "next/head";
export default function ComingSoon() {
  const [hari, setHari] = useState();
  const [jam, setJam] = useState();
  const [menit, setMenit] = useState();
  const [detik, setDetik] = useState();
  useEffect(() => {
    var countDownDate = new Date("August 8, 2022 00:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {
      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setHari(days < 10 ? "0" + days : days);
      setJam(hours < 10 ? "0" + hours : hours);
      setMenit(minutes < 10 ? "0" + minutes : minutes);
      setDetik(seconds < 10 ? "0" + seconds : seconds);
    }, 1000);
  });
  return (
    <div className="w-screen min-h-screen flex justify-center items-center container ">
      <Head>
        <title> RAJA Brawijaya | Adicitta 2020</title>
      </Head>
      <div
        className=" w-full h-full absolute overflow-hidden opacity-10 drop-shadow-md"
        style={{
          backgroundImage: `url(/assets/images/CandiHijau.png)`,
          opacity: "0.1",
        }}
      ></div>
      <div className="space-y-2">
        <div className=" w-full lg:w-[50vw] h-full mx-auto">
          <Image
            src={Pattern.HeadingFull}
            layout="responsive"
            objectFit="cover"
            alt="RAJA Brawijaya"
          />
        </div>

        <div className="drop-shadow-md">
          <h2 className=" text-secondary font-agrandir font-extrabold text-4xl md:text-8xl text-center ">
            Segera Datang!
          </h2>
          <h2 className=" text-primary font-agrandir font-extrabold text-base md:text-2xl text-center">
            Page ini masih dalam tahap pengerjaan. Silahkan kembali lagi nanti
            ya!
          </h2>
          <div className="flex  items-start justify-center bg-white drop-shadow-lg py-5 rounded-xl my-5 space-x-3">
            <div>
              <h2 className=" text-primary font-agrandir font-extrabold text-2xl md:text-8xl text-center ">
                {hari ? hari : "00"}
              </h2>
              <h2 className=" text-secondary font-agrandir text-xl md:text-4xl text-center  ">
                Hari
              </h2>
            </div>
            <h2 className=" text-primary font-agrandir font-extrabold text-2xl md:text-8xl text-center ">
              :
            </h2>
            <div>
              <h2 className=" text-primary font-agrandir font-extrabold text-2xl md:text-8xl text-center ">
                {jam ? jam : "00"}
              </h2>
              <h2 className=" text-secondary font-agrandir text-xl md:text-4xl text-center  ">
                Jam
              </h2>
            </div>
            <h2 className=" text-primary font-agrandir font-extrabold text-2xl md:text-8xl text-center ">
              :
            </h2>
            <div>
              <h2 className=" text-primary font-agrandir font-extrabold text-2xl md:text-8xl text-center ">
                {menit ? menit : "00"}
              </h2>
              <h2 className=" text-secondary font-agrandir text-xl md:text-4xl text-center  ">
                Menit
              </h2>
            </div>
            <h2 className=" text-primary font-agrandir font-extrabold text-2xl md:text-8xl text-center ">
              :
            </h2>
            <div>
              <h2 className=" text-primary font-agrandir font-extrabold text-2xl md:text-8xl text-center ">
                {detik ? detik : "00"}
              </h2>
              <h2 className=" text-secondary font-agrandir text-xl md:text-4xl text-center  ">
                Detik
              </h2>
            </div>
          </div>
        </div>
        <div className="flex justify-center space-x-5  flex-wrap">
          {SosialMedia.map((item, index) => (
            <div key={index}>
              <Link href={item.link}>
                <div className=" w-10 h-10 md:w-12 md:h-12 mt-2 bg-white rounded-full drop-shadow-md p-2 cursor-pointer mx-auto hover:bg-primary">
                  <Image
                    src={item.icon}
                    layout="responsive"
                    objectFit="cover"
                    alt={item.name}
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
