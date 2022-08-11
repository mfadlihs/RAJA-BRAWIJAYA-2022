import { useEffect, useState } from "react";
import HeadingMini from "../../component/heading/HeadingMini";
import { apiNews } from "../../lib/api";
import AdicittaCardMini from "./AdicittaCardMini";

export default function SeeOther() {
  const [newsOther, setNewsOther] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiNews()
      .then((res) => {
        setNewsOther(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  });

  const date = (date) => {
    const dateSplit = date.split("-");
    const year = dateSplit[0];
    const month = dateSplit[1];
    let day = dateSplit[2];
    day = day.split("T")[0];
    return `${day}-${month}-${year}`;
  };

  return (
    <div className="pt-20 ">
      <HeadingMini top={"Lihat"} bottom=" Lainya" />
      <div className="flex md:flex-row flex-col  md:space-x-5 h-full items-center pt-5  ">
        <div className="flex-1  md:space-y-2 items-between  justify-between flex md:flex-row flex-col space-y-5  ">
          {newsOther.map((item, index) => {
            if (index < 3) {
              return (
                <div className="md:w-1/3 md:h-1/3">
                  <AdicittaCardMini
                    title={item.title}
                    descipriton={item.description}
                    thumbnail={item.thumbnail}
                    slug={item.slug}
                    tanggal={date(item.created_at)}
                  />
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
