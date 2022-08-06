import React from "react";
import Heading from "../../component/heading/Heading";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import RangkaianSlide from "../../component/rangkaian/RangkaianSlide";

export default function Rangkaian() {
  return (
    <div className="bg-blue py-24">
      <Heading topWhite top="Rangkaian" bottom="Utama" direction="center" />

      <Swiper slidesPerView={1}>
        <SwiperSlide>
          <RangkaianSlide
            img="/assets/images/icPKKMB.png"
            name="PKKMB"
            date="16 Agustus - 19 Agustus 2022"
          >
            PKKMB atau Pengenalan Kehidupan Kampus Baru Mahasiswa Baru
            Universitas Brawijaya merupakan kegiatan penyambutan mahasiswa baru
            yang bertujuan untuk mengenal lebih dekat Universitas Brawijaya
            dengan harapan terbentuk rasa cinta dan rasa bangga akan
            almamaternya.
          </RangkaianSlide>
        </SwiperSlide>
        <SwiperSlide>
          <RangkaianSlide
            img="/assets/images/icOH.png"
            name="Open House"
            date="Coming Soon"
          >
            OH merupakan kegiatan penutup dari rangkaian acara RAJA Brawijaya
            dimana mahasiswa baru dapat mengenal dan memilih LKM atau UKM yang
            ada di kampus Universitas Brawijaya sesuai dengan bakat serta minat
            yang dimiliki.
          </RangkaianSlide>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
