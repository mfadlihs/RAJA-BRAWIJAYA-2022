import Adicitta from "../layout/adicitta/Adicitta";
import Jumbotron from "../layout/jumbotron/Jumbotron";
import Nav from "../layout/nav/Nav";
import Perkenalan from "../layout/perkenalan/Perkenalan";
import Sekilas from "../layout/sekilas/Sekilas";
import Rangkaian from "../layout/rangkaian/Rangkaian";
import Pkmaba from "../layout/pkmaba/Pkmaba";
import Logo from "../layout/logo/Logo";
import { useEffect, useState } from "react";
import Head from "next/head";
import Footer from "../layout/footer/Footer";

export default function Home() {

  const [nav,setNav] = useState(false);

  useEffect(()=>{
    window.onscroll = () =>{
      // console.log(window.scrollY);
      if(window.scrollY >= 50){
        setNav(true);
      }else{
        setNav(false);
      }
    };
  })
  return (
    <div>
      <Head>
        <title>Raja Brawijaya 2022</title>
      </Head>
      <Nav onActive={nav}/>
      <Jumbotron />
      <Perkenalan />
      <Adicitta />
      <Logo />
      <Sekilas />
      <Rangkaian />
      <Pkmaba/>
      <Footer/>
    </div>
  );
}
