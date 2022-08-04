import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import style from "./nav.module.css";
import Navlink from "../../component/navlink/Navlink";

export default function Nav({ bg,variant}) {
  const [scroll, setScroll] = useState(false);
  const [show, setShow] = useState(false);
  const [active, setActive] = useState("beranda");

  // useEffect(() => {
  //   window.onscroll = () => {
  //     if (window.scrollY > 20) {
  //       setScroll(true);
  //     } else {
  //       setScroll(false);
  //     }
  //   };
  // });
  const [onActive,setNav] = useState(false);

  useEffect(()=>{
    window.onscroll = () =>{
      // console.log(window.scrollY);
      if(window.scrollY >= 2){
        setNav(true);
      }else{
        setNav(false);
      }
    };
  })

  useEffect(()=>{
    console.log(onActive);
  })

  return (
    <nav
      className={`transition-all duration-500 fixed w-full py-2 top-0 z-50
      ${variant == 'blue' ?  'bg-blue' : ' '}
      ${onActive ? " " : "bg-trans"}
      ${variant == 'white' ? 'bg-white' : ' '} 
      ${show ? "bg-grey" : " "}`}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* left */}
        <div className="flex justify-between items-center w-full lg:w-fit">
          <div className={`${style.logo}`}>
            <Image
              src={`/assets/${variant == 'white' && !show ? 'logoDark' : 'logo'}.png`}
              layout="responsive"
              objectFit="cover"
              objectPosition="center"
              width={167}
              height={111}
              alt={"logo"}
            />
          </div>
          <button
            type="button"
            className="w-6 h-6 lg:hidden"
            onClick={() => {
              if (!show) {
                setShow(true);
              } else {
                setShow(false);
              }
            }}
          >
            {!show && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={` opacity-50 ${variant == 'white' ? 'fill-blue' : 'fill-white'}`}
                viewBox="0 0 448 512"
              >
                <path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" />
              </svg>
            )}

            {show && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="opacity-50 fill-white"
              >
                <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
              </svg>
            )}
          </button>
        </div>

        <div
          className={`flex lg:static fixed flex-col lg:flex-row top-0 bottom-0 ${
            show ? "left-20 right-0" : "left-full -right-10"
          } px-8 bg-grey lg:bg-trans top-[80px] md:top-[90px] transition-all duration-500`}
        >
          <Navlink variant={variant} show={show} To={"/"}>Beranda</Navlink>
          <Navlink variant={variant} show={show} To={"/adhikara"}>Adicitta Info</Navlink>
          <Navlink variant={variant} show={show} To={"/peta_brawijaya"}>Peta Brawijaya</Navlink>
          <Navlink variant={variant} show={show} To={"/faq"}>FAQ</Navlink>
          <Link href={"/apps"}>
            {/* <div className='lg:hidden font-poppins py-2 px-4 bg-yellow font-semibold rounded-lg text-white mt-4'>
							Raja Apps
						</div> */}
            <button className={`lg:hidden bg-yellow bg-trans border-2  ${variant == 'white' && !show   ? 'text-blue border-blue' : 'text-white border-white'} py-2 px-4 normal-case font-agrandir rounded-lg`}>
              Raja Apps
            </button>
          </Link>
        </div>

        <div>
          <Link href={"/apps"}>
            {/* <a className='lg:block hidden font-poppins py-2 px-4 bg-yellow font-semibold rounded-lg text-white'>
							Raja Apps
						</a> */}
            <button className={`hidden lg:block bg-trans border-2 ${variant == 'white' ? 'text-blue border-blue' : 'text-white border-white'} py-2 px-4 normal-case font-agrandir rounded-lg`}>
              Raja Apps
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
