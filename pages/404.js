import Image from "next/image";
import { Background, Pattern } from "../constants/Images";
import Link from "next/link";
import LoadingPage from "../component/LoadingPage";
export default function Custom404() {
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
          <h2 className=" text-secondary font-agrandir font-extrabold text-6xl md:text-8xl text-center ">
            404
          </h2>
          <h2 className=" text-secondary font-agrandir font-extrabold text-base md:text-2xl text-center">
            Emangnya perasaan kamu doang yang bisa error? Page RAJA Brawijaya
            juga bisa error. Cek lagi di lain kesempatan ya! balik ke{" "}
            <Link href="/">
              <span className="!text-primary underline cursor-pointer">
                landing page
              </span>
            </Link>
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
  );
}
