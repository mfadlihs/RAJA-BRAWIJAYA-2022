import Adicitta from "../layout/adicitta/Adicitta";
import Jumbotron from "../layout/jumbotron/Jumbotron";
import Nav from "../layout/nav/Nav";
import Perkenalan from "../layout/perkenalan/Perkenalan";
import Sekilas from "../layout/sekilas/Sekilas";
import Rangkaian from "../layout/rangkaian/Rangkaian";
import Pkmaba from "../layout/pkmaba/Pkmaba";

export default function Home() {
  return (
    <div>
      <Nav />
      <Jumbotron />
      <Perkenalan />
      <Adicitta />
      <Sekilas />
      <Rangkaian />
      <Pkmaba/>
    </div>
  );
}
