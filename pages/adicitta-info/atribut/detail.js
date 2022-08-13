import {
  ArrowUpOutlined,
  CaretDownFilled,
  DownCircleFilled,
  DownloadOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { Button } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { AtributType } from "../../../constants/Dummy";
import { Background } from "../../../constants/Images";
import SeeOther from "../../../layout/adcittaInfo/SeeOther";
import FotoAtribut from "../../../layout/atribut/Foto";
import Nav from "../../../layout/nav/Nav";

export default function Atribut() {
  const [atributId, setAtributId] = useState(0);
  const [active, setActive] = useState(false);
  return (
    <>
      <Head>
        <title>RAJA Brawijaya 2022 | Info twibbon</title>
      </Head>
      <Nav variant="white" />

      <div
        className="after:candiHijau md:px-16 lg:px-24 px-4 relative pt-24 pb-24"
        id="blog"
      >
        <div className="bg-white shadow-sm p-2 rounded-md atribut">
          <div className=" shadow-lg py-20 rounded-md">
            <div className="container relative">
              <div className="p-11 rounded-lg bg-green relative">
                <div className="hidden lg:block absolute top-0 right-0 aspect-square h-full">
                  <img
                    src="/assets/images/BgCard.png"
                    alt="atribut header"
                    className=" drop-shadow-lg"
                  />
                </div>
                <div>
                  <h2 className="h2 font-agrandir mb-16 text-white leading-snug md:w-1/2">
                    Informasi Atribut yang Dikerjakan dan Dibawa Mahasiswa Baru
                  </h2>
                </div>
                <div className="relative">
                  <button
                    className={`px-4 py-2 text-white rounded-lg bg-yellow hover:bg-orange flex items-center md:w-1/3 justify-between w-full`}
                    onClick={() => setActive(!active)}
                  >
                    {AtributType[atributId].text}
                    <DownOutlined />
                  </button>
                  {active && (
                    <div className="absolute w-full  top-14  z-30 ">
                      <div className=" bg-yellow shadow-md rounded-md p-2 w-full md:w-1/3">
                        {AtributType.map((item, index) => {
                          return (
                            <button
                              className={`px-4 py-2 text-white  bg-yellow hover:bg-orange flex items-center text-start justify-between w-full`}
                              onClick={() => {
                                setAtributId(index);
                                setActive(false);
                              }}
                            >
                              {item.text}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {AtributType[atributId].type !== "heading" && (
                <div className="h2 mt-8 mb-8 w-fit text-green relative ">
                  <div>Ketentuan {AtributType[atributId].text}</div>
                  <div className="absolute w-4/5 h-1 -bottom-2 bg-orange"></div>
                </div>
              )}
              <div className="flex p-5 items-start mt-8 flex-col-reverse md:flex-row  flex-1 md:space-x-10 z-20 relative">
                {AtributType[atributId].type !== "heading" ? (
                  <>
                    <div className="text-justify flex-1 ">
                      <ol>
                        {AtributType[atributId].data.rules.map(
                          (item, index) => {
                            return <li key={index}>{item}</li>;
                          }
                        )}
                      </ol>
                    </div>
                    <div className=" md:max-w-[40%] my-5 md:my-0">
                      <div className="border-yellow  border-4 p-5 rounded-md">
                        <img
                          src={AtributType[atributId].data.image}
                          alt="idCard"
                        />
                        <div className="px-5 pt-5">
                          <a
                            download={AtributType[atributId].data.download}
                            href={AtributType[atributId].data.download}
                            target={"_blank"}
                          >
                            <button className="bg-orange px-3 py-2  w-full font-bold items-center text-white flex justify-center hover:bg-yellow rounded-md shadow-md">
                              <DownloadOutlined /> Download
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <div>
                    {AtributType[atributId].data.map((item, index) => {
                      return (
                        <>
                          <div className="h2 mt-8 mb-8 w-fit text-green relative ">
                            <div>{item.head}</div>
                            <div className="absolute w-4/5 h-1 -bottom-2 bg-orange"></div>
                          </div>
                          <div className="text-justify flex-1">
                            <ol>
                              {item.rules.map((itemRules, indexRules) => {
                                if (index == 1) {
                                  if (indexRules == 0 || indexRules == 5) {
                                    return (
                                      <p key={index} className="!font-bold">
                                        {itemRules}
                                      </p>
                                    );
                                  }
                                  return <p key={index}>{itemRules}</p>;
                                }
                                return <li key={index}>{itemRules}</li>;
                              })}
                            </ol>
                          </div>
                        </>
                      );
                    })}
                  </div>
                )}
              </div>

              <div className="w-1/3 absolute rotate-180 bottom-0 z-0 opacity-50">
                <Image
                  src={Background.Feather}
                  layout="responsive"
                  objectFit="cover"
                  alt="RAJA Brawijaya"
                />
              </div>
            </div>
          </div>
        </div>
        <SeeOther />
      </div>
    </>
  );
}
