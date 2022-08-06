import { useState, useEffect, Component } from "react";
import Nav from "../layout/nav/Nav";
import style from "../style/faq.module.css";
import Groupfaq from "../component/faq/Groupfaq";
import Dropfaq from "../component/faq/Dropfaq";

import axios from "axios";
import Head from "next/head";
import { apiFaq } from "../lib/api";
// import Loading from "../component/loading";

const questData = [
  {
    id: "umumA",
    id_category: "umum",
    quest: "Lorem ipsum dolor sit amet. quest umumA",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, nulla! answer umumA",
  },
  {
    id: "umumB",
    id_category: "umum",
    quest: "Lorem ipsum dolor sit amet. quest umumB",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, nulla! answer umumB",
  },
  {
    id: "rangkaianB",
    id_category: "rangkaian",
    quest: "Lorem ipsum dolor sit amet. quest rangkaianB",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, nulla! answer rangkaianB",
  },
  {
    id: "penugasanB",
    id_category: "penugasan",
    quest: "Lorem ipsum dolor sit amet. quest penugasanB",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, nulla! answer penugasanB",
  },
  {
    id: "acaraB",
    id_category: "acara",
    quest: "Lorem ipsum dolor sit amet. quest acaraB",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, nulla! answer acaraB",
  },
  {
    id: "acaraA",
    id_category: "acara",
    quest: "Lorem ipsum dolor sit amet. quest acaraA",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, nulla! answer acaraA",
  },
  {
    id: "acaraD",
    id_category: "acara",
    quest: "Lorem ipsum dolor sit amet. quest acaraD",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, nulla! answer acaraD",
  },
  {
    id: "acaraC",
    id_category: "acara",
    quest: "Lorem ipsum dolor sit amet. quest acaraC",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, nulla! answer acaraC",
  },
];

const groupData = [
  {
    id: "umum",
    title: "umum",
  },
  {
    id: "rangkaian",
    title: "rangkaian",
  },
  {
    id: "penugasan",
    title: "penugasan",
  },
  {
    id: "acara",
    title: "acara",
  },
  {
    id: "lokasi",
    title: "lokasi",
  },
];

export default function Faq() {
  const [quest, setQuest] = useState(null);
  const [search, setSearch] = useState(null);
  const [group, setGroup] = useState(null);
  const [loading, setLoading] = useState(true);
  const [datagroup, setDataGroup] = useState(groupData);
  const [dataquest, setDataQuest] = useState(questData);
  // const

  const getData = async () => {
    apiFaq()
      .then((res) => {
        if (res.data.faqs.length > 0) {
          setDataQuest(res.data.faqs);
          setDataGroup(res.data.category_faqs);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Head>
        <title>RAJA Brawijaya 2022 | FAQ</title>
      </Head>
      <div className="bg-white font-poppins pb-8 min-h-screen">
        {/* {loading && <Loading /> } */}
        <Nav variant="white" />
        <div className="container mx-auto pt-24">
          <h1 className="font-agrandir text-blue font-bold text-2xl text-center">
            Halo Abhiseka, ada yang bisa kami bantu?
          </h1>
          {loading ? (
            <div role="status" class="w-full animate-pulse space-y-5">
              <div class="h-7 bg-gray-200 rounded-md dark:bg-gray-500 w-full "></div>
              <div class="flex items-center space-x-2 w-full">
                {Array.from(Array(12).keys()).map((i) => (
                  <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-500 w-1/12"></div>
                ))}
              </div>
              <div className="px-5 space-y-3 bg-white shadow-inner py-5 rounded-md">
                {Array.from(Array(7).keys()).map((i) => (
                  <div class="h-4 bg-gray-200 rounded-lg dark:bg-gray-500 w-full "></div>
                ))}
              </div>
            </div>
          ) : (
            <>
              <div className="bg-white rounded-lg flex py-2 px-4 items-center mt-4 border-blue border-2">
                <img
                  src="/assets/icons/fe_search.svg"
                  className={`${style.icSearch}`}
                />
                <input
                  className="bg-trans rounded-lg w-full ml-3 focus-visible:outline-0 lg:text-body md:text-body-md sm:text-body-sm text-body-sm font-medium text-blue"
                  placeholder="Cari apa sayang?"
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
              </div>

              <div
                className={`flex w-full overflow-x-scroll mt-4 ${style.hideScroll}`}
              >
                <Groupfaq
                  key={1}
                  id={null}
                  active={group}
                  changeGroup={(n) => setGroup(n)}
                  name={"Semua"}
                />
                {datagroup.map((g) => {
                  return (
                    <Groupfaq
                      key={g.id}
                      id={g.id}
                      active={group}
                      changeGroup={(n) => {
                        setGroup(n);
                      }}
                      name={g.title}
                    />
                  );
                })}
              </div>

              <div
                className={`${style.shadowInset} w-full rounded-lg p-2 flex flex-col overflow-y-scroll ${style.box}`}
              >
                {dataquest
                  .filter((Q) => {
                    if (group == null) {
                      return Q;
                    } else {
                      return Q.id_category == group;
                    }
                  })
                  .filter((Q) => {
                    if (search != null) {
                      return Q.quest.toLowerCase().match(search.toLowerCase());
                    } else {
                      return Q;
                    }
                  })
                  .map((e) => {
                    return (
                      <Dropfaq
                        key={e.id}
                        id={e.id}
                        active={quest}
                        toggle={(e) => {
                          setQuest(e);
                        }}
                        question={e.quest}
                        answer={e.answer}
                      />
                    );
                  })}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
