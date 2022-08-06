import style from "./style.module.css";
import { SendOutlined } from "@ant-design/icons";
import Image from "next/image";
import { Background, Icons } from "../../constants/Images";

export default function AdicittaCardMini({
  tanggal,
  slug,
  title,
  descipriton,
}) {
  return (
    <div className="p-2 rounded-lg bg-white shadow-sm ">
      <div className={`rounded-lg bg-white ${style.addicitaCard} pb-5 group`}>
        <div className="flex flex-col">
          <div className="flex justify-between items-center w-full  px-5 py-1">
            <div className="flex items-center drop-shadow-md">
              <div className="w-8 h-8">
                <div className=" w-9/12 h-9/12   ">
                  <Image
                    src={Icons.Raja}
                    layout="responsive"
                    objectFit="contain"
                    alt="RAJA Brawijaya"
                  />
                </div>
              </div>
              <div className="">
                <h3 className="text-primary font-semibold text-sm">
                  {" "}
                  RAJA Brawijaya
                </h3>
                <h3 className="text-yellow text-xs"> 01 Agustus 2022</h3>
              </div>
            </div>
            <div className=" w-6 h-6 bg-yellow rounded-md p-1 ">
              <Image
                src={Icons.Share}
                layout="responsive"
                objectFit="cover"
                alt="RAJA Brawijaya"
              />
            </div>
          </div>
          <div className="relative ">
            <div className=" w-full h-full bg-yellow rounded-md ">
              <Image
                src={Background.News}
                layout="responsive"
                objectFit="cover"
                alt="RAJA Brawijaya"
              />
            </div>
            <div className="bg-yellow w-full h-0 group-hover:h-full absolute bottom-0 right-0 bg-opacity-30 " />
          </div>
          <div className="px-5 text-primary py-2">
            <h3 className=" font-semibold text-sm">{title}</h3>
            <h5 className="text-xs">{descipriton}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}