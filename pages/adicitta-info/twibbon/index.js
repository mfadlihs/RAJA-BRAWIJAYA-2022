import { IconButton } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import Nav from "../../../layout/nav/Nav";
import Header from "../../../layout/twibbon/Header";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { useRef, useState } from "react";
import SeeOther from "../../../layout/adcittaInfo/SeeOther";
import Clipboard from "clipboard";
export default function Index() {
  const [name, setName] = useState("");
  const [fakultas, setFakultas] = useState("");

  const captionRef = useRef(null);
  useEffect(() => {
    new Clipboard(".clipboard-btn");
  }, []);
  return (
    <>
      <Head>
        <title>RAJA Brawijaya 2022 | Info twibbon</title>
      </Head>
      <Nav variant="white" />

      <div
        className="after:candiHijau md:px-16 lg:px-24 relative pt-24 pb-24"
        id="blog"
      >
        <div className="bg-white shadow-sm p-2 rounded-md">
          <div className=" shadow-lg py-20 rounded-md">
            <div className="container relative">
              <Header />
              <p className="mt-8 mb-8">
                Halo Adiccita 60!
                <br />
                <br />
                Ayo ikut ramaikan kegiatan RAJA BRAWIJAYA 2022 dengan mengunduh
                twibbon yang telah tersedia dan mengunggah di akun instagram
                kalian masing-masing ya!!
              </p>

              {/* <img
								src='/assets/images/feather.png'
								className='absolute bottom-0 right-0'
							/> */}
              {/* <div className='opacity-0'>.</div> */}
            </div>
            <div className="container relative">
              <div className="mb-4 sm:flex gap-2 space-y-2 sm:space-y-0">
                <input
                  placeholder="Masukkan Nama"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  className="grow twibbon w-full"
                />
                <input
                  placeholder="Masukkan Fakultas"
                  onChange={(e) => {
                    setFakultas(e.target.value);
                  }}
                  className="grow twibbon w-full"
                />
              </div>
              <div className="h2 mb-8 text-green relative w-min">
                Caption
                <div className="absolute w-4/5 h-1 -bottom-2 bg-orange"></div>
              </div>
              <div
                style={{
                  boxShadow: "inset 0px 8.38095px 20.9524px rgba(0, 0, 0, 0.1)",
                }}
                className="w-full h-96 sm:h-80 md:h-80 mb-24 lg:h-72 rounded-3xl p-7 overflow-auto relative overflow-style"
              >
                <p ref={captionRef} className="text-justify" id="caption">
                  [Sura Dira Jayaningrat, Lebur Dening Pangastuti]
                  <br />
                  <br />
                  Bulan menuju hari, hingga kini hitungan detik dapat dihitung
                  jari. Segala bentuk perjuangan sudah sepatutnya mendapat
                  penghargaan. Segala tindakan sudah sepantasnya menagih
                  pertanggungjawaban. Selayaknya mahasiswa yang menyandang gelar
                  “MAHA” di atas kata “SISWA”.
                  <br />
                  <br />
                  Gelora Brawijaya Muda melangkah pasti menggapai mimpi di
                  kampus biru, kampus perjuangan, Universitas Brawijaya.
                  <br />
                  <br />
                  Saya {name === "" ? "[Nama Lengkap]" : name} dari{" "}
                  {fakultas === "" ? "[Fakultas]" : fakultas} Adicitta 60 dengan
                  berani menapaki cakrawala, siap mengikuti RAJA Brawijaya 2022
                  <br />
                  <br />
                  Bersinergi Meraih Prestasi Dengan Langkah Penuh Aksi
                  <br />
                  <br />
                  Brawijaya Muda!
                  <br />
                  Kita Satu Brawijaya!
                  <br />
                  <br />
                  #Adicitta60
                  <br />
                  #RAJABrawijaya2022
                  <br />
                  #RABRAW22
                  <br />
                  #MabaUB2022
                  <br />
                  #KitaSatuBrawijaya
                  <br />
                </p>
                <div className="absolute top-4 right-4">
                  <IconButton
                    className="clipboard-btn"
                    data-clipboard-target="#caption"
                  >
                    <ContentCopyIcon />
                  </IconButton>
                </div>
              </div>
              <div className="opacity-0">.</div>
              <img
                src="/assets/images/feather.png"
                className="absolute bottom-0 right-0"
              />
            </div>
          </div>
        </div>
        <SeeOther />
      </div>
    </>
  );
}
