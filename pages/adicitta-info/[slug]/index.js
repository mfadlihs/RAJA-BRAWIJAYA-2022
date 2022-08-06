import { useRouter } from "next/dist/client/router";
import { Background, Pattern } from "../../../constants/Images";
import Image from "next/dist/client/image";
import Nav from "../../../layout/nav/Nav";
import Head from "next/dist/shared/lib/head";
import AdicittaCard from "../../../layout/adcittaInfo/AdicittaCard";
import HeadingMini from "../../../component/heading/HeadingMini";
import AdicittaCardMini from "../../../layout/adcittaInfo/AdicittaCardMini";
import AdicittaCardFull from "../../../layout/adcittaInfo/AdicittaCardFull";

export default function Index() {
  const router = useRouter();

  const { slug } = router.query;

  // useEffect(async () => {
  // 	if (slug != null) {
  // 		if (!(slug == "twibbon" || slug == "atribut")) {
  // 			router.push("/404");
  // 		}
  // 	}
  // });

  return (
    <>
      <Head>
        <title>RAJA Brawijaya 2022 | Adiciitta Info</title>
      </Head>

      <Nav variant="white" />

      <div className="after:candiHijau relative pt-24 pb-20">
        <div>
          <div className="container pt-20 ">
            <div className="flex lg:flex-row flex-col  lg:space-x-5 h-full items-center pt-5 ">
              <AdicittaCardFull
                title="Twibbon"
                descipriton={
                  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam aperiam libero quos sequi facere ex minus omnis! Ipsam animi illum dolor molestiae magnam est ex provident ducimus reprehenderit asperiores quisquam alias eius, accusantium, consectetur hic laborum assumenda suscipit reiciendis. Assumenda dolorum neque quis itaque doloremque mollitia quibusdam, delectus, obcaecati officia minus eum enim ullam, quidem blanditiis rerum repudiandae sed voluptatum nihil consectetur debitis qui. Impedit aspernatur  ..."
                }
                slug="twibbon"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
