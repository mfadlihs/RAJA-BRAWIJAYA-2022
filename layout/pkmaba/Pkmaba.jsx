import React, { useState } from "react";
import Dropdown from "../../component/button/Dropdown";
import Heading from "../../component/heading/Heading";
import Pkdata from "../../component/pkmaba/Pkdata";
import dataPk from "../../constants/pkmaba";

export default function Pkmaba() {
  const [active, setActive] = useState("PK2MABA FILKOM_ID");

  const getData = () => {
    return dataPk.filter((e) => {
      return e.id == active;
    })[0];
  };

  return (
    <div className="-mt-10 md:-mt-32">
      <img src="/assets/images/wavepk.svg" className="w-full" alt="" />
      <div className="bg-sea py-20">
        <Heading top="Ragam" bottom="Brawijaya" direction="center" />
        <Dropdown
          setActive={(e) => {
            setActive(e);
          }}
          data={dataPk}
          active={getData().fakultas}
        />
        <Pkdata
          name={getData().name}
          description={getData().description}
          img={getData().img == undefined ? "/assets/UB.png" : getData().img}
          spotify={getData().spotify}
          youtube={getData().youtube}
          tiktok={getData().tiktok}
          telegram={getData().telegram}
          twitter={getData().twitter}
          instagram={getData().instagram}
          line={getData().line}
        />
      </div>
    </div>
  );
}
