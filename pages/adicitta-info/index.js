import { Background, Pattern } from "../../constants/Images";
import Image from "next/dist/client/image";
import Nav from "../../layout/nav/Nav";
import Head from "next/dist/shared/lib/head";
import AdicittaCard from "../../layout/adcittaInfo/AdicittaCard";
import HeadingMini from "../../component/heading/HeadingMini";
import AdicittaCardMini from "../../layout/adcittaInfo/AdicittaCardMini";

export default function AdiciittaInfo() {
  const x = "asd<br />asd";

  return (
    <>
      <Head>
        <title>RAJA Brawijaya 2022 | Adiciitta Info</title>
      </Head>

      <Nav variant="white" />

      <div className="after:candiHijau relative pt-24 pb-20">
        <div>
          <div className="md:w-[50vw] h-full mx-4 md:mx-auto drop-shadow-md">
            <Image
              src={Pattern.HeadingFull}
              layout="responsive"
              objectFit="cover"
              alt="RAJA Brawijaya"
            />
          </div>
          <h1 className="text-center py-2 text-blue font-agrandir font-bold  text-3xl lg:text-[4rem] md:text-5xl">
            Adiciitta <span className="text-orange">Info</span>
          </h1>
          <div className="rotate-180 mx-4 md:w-[50vw] h-full md:mx-auto">
            <Image
              src={Pattern.HeadingFull}
              layout="responsive"
              objectFit="cover"
              alt="RAJA Brawijaya"
            />
          </div>
          <div className="container pt-20 ">
            <HeadingMini top={"Adicitta"} bottom=" Baru" />
            <div className="flex lg:flex-row flex-col  lg:space-x-5 h-full items-center pt-5 ">
              <div className="lg:w-1/2  flex-1 h-full ">
                <AdicittaCard
                  title="Twibbon"
                  descipriton={
                    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam aperiam libero quos sequi facere ex minus omnis! Ipsam animi illum dolor molestiae magnam est ex provident ducimus reprehenderit asperiores quisquam alias eius, accusantium, consectetur hic laborum assumenda suscipit reiciendis. Assumenda dolorum neque quis itaque doloremque mollitia quibusdam, delectus, obcaecati officia minus eum enim ullam, quidem blanditiis rerum repudiandae sed voluptatum nihil consectetur debitis qui. Impedit aspernatur  ..."
                  }
                />
              </div>
              <div className="flex-1   md:space-y-2 items-between ">
                {Array.from({ length: 2 }, (_, i) => (
                  <div className="flex flex-1 md:space-x-5 md:flex-row flex-col">
                    <div className="md:w-1/2 md:h-1/2">
                      <AdicittaCardMini
                        title="Twibbon"
                        descipriton={
                          "lorem ipsum dolor sit amet kas tiua skzmah wqoas... "
                        }
                      />
                    </div>
                    <div className="md:w-1/2 md:h-1/2">
                      <AdicittaCardMini
                        title="Twibbon"
                        descipriton={
                          "lorem ipsum dolor sit amet kas tiua skzmah wqoas..."
                        }
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="container pt-20  ">
            <HeadingMini top={"Adicitta"} bottom=" Lama" />
            <div className="flex md:flex-row flex-col  md:space-x-5 h-full items-center pt-5 ">
              <div className="flex-1  md:space-y-2 items-between  justify-between ">
                {Array.from({ length: 3 }, (_, i) => (
                  <div className="flex flex-1 md:space-x-5 md:flex-row flex-col justify-between">
                    {Array.from({ length: 3 }, (_, i) => (
                      <AdicittaCardMini
                        title="Twibbon"
                        descipriton={
                          "lorem ipsum dolor sit amet kas tiua skzmah wqoas... "
                        }
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
