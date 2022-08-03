import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charset="UTF-8" />
        {/* <meta http-equiv="X-UA-Compatible" content="IE=edge" /> */}
        <meta
          name="viewport"
          content="user-scalable=no, width=device-width, initial-scale=1.0"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="description"
          content="RAJA Brawijaya adalah singkatan dari Rangkaian Acara Jelajah Almamater Universitas Brawijaya, merupakan serangkaian kegiatan yang bertujuan untuk memfasilitasi mahasiswa baru Universitas Brawijaya untuk mengetahui hal-hal terkait dengan kehidupan kampus, termasuk di dalamnya Pengenalan Kehidupan Kampus Mahasiswa Baru (PK2MB), Open House Lembaga Kedaulatan Mahasiswa dalam (OH)."
        />
        <meta
          name="keywords"
          content="raja brawijaya, rajabrawijaya, ospek ub, ospek ub 2022, raja brawijaya 2022, rabraw 2022"
        />
        <meta name="author" content="PIT RAJA Brawijaya" />
        <meta name="twitter:site" content="@raja_brawjaya" />
        <meta property="og:title" content="RAJA Brawijaya 2022" />
        <meta
          property="og:description"
          content="RAJA Brawijaya adalah singkatan dari Rangkaian Acara Jelajah Almamater Universitas Brawijaya, merupakan serangkaian kegiatan yang bertujuan untuk memfasilitasi mahasiswa baru Universitas Brawijaya untuk mengetahui hal-hal terkait dengan kehidupan kampus, termasuk di dalamnya Pengenalan Kehidupan Kampus Mahasiswa Baru (PK2MB), Open House Lembaga Kedaulatan Mahasiswa dalam (OH)."
        />
        <meta
          property="og:image"
          content="https://rajabrawijaya.ub.ac.id/assets/favicon.ico"
        />
        <meta property="og:url" content="https://rajabrawijaya.ub.ac.id" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
