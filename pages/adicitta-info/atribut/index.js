import { Button, IconButton } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useRef, useState } from "react";
import Nav from "../../../layout/nav/Nav";
import Header from "../../../layout/atribut/Header";
import Peraturan from "../../../layout/atribut/Peraturan";
import { apiNews, apiNewsOnce } from "../../../lib/api";
import { useRouter } from "next/router";
import FotoAtribut from "../../../layout/atribut/Foto";
import SeeOther from "../../../layout/adcittaInfo/SeeOther";
import { AtributData } from "../../../constants/Dummy";
import Link from "next/link";

export default function Atribut() {
  const [isMan, setIsMan] = useState(true);
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
                    src="/assets/images/atributHeader.png"
                    alt="atribut header"
                  />
                </div>
                <div>
                  <h2 className="h2 font-agrandir mb-16 text-white leading-snug">
                    Informasi
                    <br />
                    Atribut Peserta
                    <br />
                    RAJA Brawijaya
                  </h2>
                </div>
                <div className="bg-orange w-fit hover:bg-orange flex items-center rounded-lg body text-white shadow-2xl">
                  {/* <DownloadOutlined className='mr-3' />
				Download Twibbon */}
                  <button
                    className={`py-3 px-6 text-white rounded-lg ${
                      isMan && "bg-yellow hover:bg-yellow"
                    }`}
                    sx={{
                      boxShadow:
                        "inset 0px 8.38095px 20.9524px rgba(0, 0, 0, 0.1)",
                    }}
                    onClick={() => {
                      setIsMan(true);
                    }}
                  >
                    Laki-Laki
                  </button>
                  <button
                    className={`py-3 px-6 text-white rounded-lg ${
                      !isMan && "bg-yellow hover:bg-yellow"
                    }`}
                    onClick={() => {
                      setIsMan(false);
                    }}
                  >
                    Perempuan
                  </button>
                </div>
              </div>
              <div className="h2 mt-8 mb-8 w-fit text-green relative ">
                <div>Atribut yang Benar</div>
                <div className="absolute w-4/5 h-1 -bottom-2 bg-orange"></div>
              </div>
              <div className="md:flex flex-row-reverse items-start mt-8 gap-6">
                <FotoAtribut isMan={isMan} />
                <div className="text-justify">
                  <ol>
                    {AtributData(isMan).map((item, index) => (
                      <>
                        {item.text.charAt(0) === "0" ||
                        item.text.charAt(0) === "1" ||
                        item.text.charAt(0) === "2" ||
                        item.text.charAt(0) === "3" ||
                        item.text.charAt(0) === "4" ||
                        item.text.charAt(0) === "5" ||
                        item.text.charAt(0) === "6" ||
                        item.text.charAt(0) === "7" ||
                        item.text.charAt(0) === "8" ||
                        item.text.charAt(0) === "9" ? (
                          <li
                            className=" font-bold "
                            dangerouslySetInnerHTML={{ __html: item.text }}
                          ></li>
                        ) : (
                          <li
                            className=" my-1"
                            dangerouslySetInnerHTML={{ __html: item.text }}
                          ></li>
                        )}
                      </>
                    ))}
                  </ol>
                </div>
              </div>
              <Link href={"atribut/detail"}>
                <button
                  className={`py-3 px-6 mt-5 text-white rounded-lg bg-yellow hover:bg-orange`}
                >
                  Ketentuan Atribut
                </button>
              </Link>
            </div>
          </div>
        </div>
        <SeeOther />
      </div>
    </>
  );
}
