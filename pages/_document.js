import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
export default function Document() {
  return (
    <Html>
      <Head>
        {/* <meta http-equiv="X-UA-Compatible" content="IE=edge" /> */}
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
        <Script
          strategy="lazyOnload"
          src="https://embed.tawk.to/62e72b6254f06e12d88c3a77/1g9bg2v97"
        />
        <Script
          strategy="lazyOnload"
          src="https://embed.tawk.to/62e72b6254f06e12d88c3a77/1g9bg2v97"
        />
        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-SR9L2P69VH');`,
          }}
        ></Script>
      </body>
    </Html>
  );
}
