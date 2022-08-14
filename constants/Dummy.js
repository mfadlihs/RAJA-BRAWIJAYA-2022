import { Icons } from "./Images";

export const SosialMedia = [
  {
    name: "Line",
    icon: Icons.Line,
    link: "https://rajabrawijaya.ub.ac.id/ln",
  },
  {
    name: "Instagram",
    icon: Icons.Instagram,
    link: "https://rajabrawijaya.ub.ac.id/ig",
  },
  {
    name: "Twitter",
    icon: Icons.Twitter,
    link: "https://rajabrawijaya.ub.ac.id/tw",
  },
  {
    name: "Telegram",
    icon: Icons.Telegram,
    link: "https://rajabrawijaya.ub.ac.id/tl",
  },
  {
    name: "Tiktok",
    icon: Icons.Tiktok,
    link: "https://rajabrawijaya.ub.ac.id/tt",
  },
  {
    name: "Youtube",
    icon: Icons.Youtube,
    link: "https://rajabrawijaya.ub.ac.id/yt",
  },
  {
    name: "Spotify",
    icon: Icons.Spotify,
    link: "https://rajabrawijaya.ub.ac.id/sp",
  },
];
export const AtributData = (isMan) => {
  const Cowok = [
    {
      text: "Rambut tidak boleh dicat, harus dipotong pendek, tidak bermodel skin hairstyle, rapi dan tidak melebihi leher, telinga, maupun alis.",
    },
    {
      text: "Memakai kemeja lengan panjang berwarna putih berkerah berbahan kain (bukan berbahan kaos ataupun jeans), rapi, tidak ketat dan tidak transparan.",
    },
    {
      text: "Memakai celana panjang berwarna hitam berbahan kain (bukan berbahan kaos ataupun jeans) rapi, tidak ketat, tidak transparan, tidak bermotif bukan cutbray atau skinny.",
    },
    {
      text: "Memakai dasi berwarna hitam.",
    },
    {
      text: "Memakai ikat pinggang berwarna hitam polos dengan mata gesper yang tidak besar dan mencolok.",
    },
    {
      text: "Memakai sepatu pantofel berwarna hitam.",
    },
    {
      text: "Memakai kaos kaki berwarna putih tidak transparan, polos dengan tinggi minimal 10 cm diatas mata kaki.",
    },
    {
      text: "Memakai tas ransel.",
    },
    {
      text: "Memasang gantungan kunci / bag tag (terlampir) pada tas ransel.",
    },
    {
      text: "Memakai nametag serta membawa kartu kendali kesehatan selama kegiatan RAJA BRAWIJAYA berlangsung",
    },
    {
      text: "Bagi mahasiswa baru yang memiliki penyakit kronis seperti jantung, paru-paru, maag kronis, dll wajib menyematkan pita berwarna hitam pada bagian kiri lengan.**",
    },
    {
      text: "Tidak menggunakan perhiasan.",
    },
    {
      text: "Untuk maba difable menggunakan pita berwarna hijau yang disematkan pada bagian kiri lengan",
    },
  ];
  const Cewek = [
    {
      text: "Tidak berjilbab : <br/>Rambut ditata rapi tidak boleh di cat. harus dikuncir satu model ekor kuda (kuncir rambut berwarna hitam) tanpa poni. diperbolehkan memakai jepit berwarna putih. ",
    },
    {
      text: "Berjilbab : <br/> Memakai jilbab berwarna hitam segiempat simetris. tidak transparan. tidak bermotif. tidak berenda. tanpa aksesoris tambahan kecuali peniti ataupun jarum pentul.  ",
    },
    {
      text: "Semua Maba Perempuan : <br/> Memakai kemeja lengan panjang berwarna putih polos berkerah berbahan kain (bukan berbahan kaos ataupun jeans). rapi. tidak ketat. tidak bermotif. dan tidak transparan.  ",
    },
    {
      text: "Memakai rok panjang berwarna hitam polos berbahan kain (bukan berbahan kaos ataupun chiffon). rapi. tidak ketat. tidak transparan. tidak bermotif dan tanpa belahan. (rok wiru/ramplel)",
    },
    {
      text: "Bagi yang sedang berhalangan memakai pita berwarna merah dan disematkan pada bagian kiri lengan (tidak berjilbab). di sematkan pada bagian dada kiri (berjilbab).",
    },
    {
      text: "Memakai dasi berwarna hitam polos.",
    },
    {
      text: "Memakai ikat pinggang berwarna hitam polos dengan mata gesper yang tidak besar dan mencolok",
    },
    {
      text: "Memakai sepatu pantofel berwarna hitam polos tidak ber hak.",
    },
    {
      text: "Memakai kaos kaki berwarna putih. tidak transparan. polos dengan tinggi minimal 10 cm diatas mata kaki.",
    },
    {
      text: "Memakai tas ransel berwarna hitam",
    },
    {
      text: "Memasang gantungan tas (terlampir) pada tas ransel",
    },
    {
      text: "Memakai nametag serta membawa kartu kendali kesehatan selama kegiatan RAJA BRAWIJAYA berlangsung (terlampir)",
    },
    {
      text: "Bagi Mahasiswa baru yang memiliki penyakit kronis seperti jantung. paruparu. maag kronis dan lain-lain wajib menyematkan pita warna hitam pada bagian kiri lengan (tidak berjilbab) di sematkan pada bagian dada kiri (berjilbab).",
    },
    {
      text: "Tidak mengenakan perhiasan apapun.",
    },
    {
      text: "Untuk maba difable menggunakan pita berwarna hijau yang disematkan pada bagian kiri lengan.",
    },
  ];
  if (isMan) {
    return Cowok;
  } else {
    return Cewek;
  }
};
export const AtributType = [
  {
    text: "Name Tag",
    data: {
      rules: [
        "Mahasiswa baru mencetak name tag berukuran B4 (15 x 10,5 cm) (format di download)",
        "Name tag dimasukan ke dalam Id Case dengan Tali Id Card (Lanyard) warna biru.",
        "Foto berukuran 3x4 cm menggunakan foto SIAM UB",
      ],
      image: "/assets/images/IdCard.png",
      download:
        "https://drive.google.com/file/d/19Di5BXzeYeF-02JD6LmC2n4L2a6FTk8y/view?usp=sharing",
    },
  },
  {
    text: "Bag Tag",
    data: {
      rules: [
        "Mahasiswa baru mencetak name tag berukuran panjang 8 cm dan lebar 5 cm (format di download)",
        "Bag tag dimasukan kedalam Id Case kemudian diikat pada ransel dengan pita berwarna biru.",
      ],
      image: "/assets/images/BackCard.png",
      download:
        "https://drive.google.com/file/d/1qBI5z8VDjEi5ALN9ZgmnMT3rlYukWJ83/view?usp=sharing",
    },
  },
  {
    text: "Kartu Kendali Kesehatan",
    data: {
      rules: [
        "Mahasiswa membuat kartu kendali dengan ketentuan yang telah ditetapkan oleh panitia (berukuran B4)",
        "Kartu kendali kesehatan diprint dan ditempel di belakang name tag.",
        "Kartu kendali kesehatan bertujuan untuk mengetahui riwayat kesehatan mahasiswa baru.",
        "Mahasiswa baru menempelkan foto berukuran 3x4 (foto SIAM) serta mengisi format kartu kendali sesuai kondisi masing-masing dengan sebenar-benarnya.",
      ],
      image: "/assets/images/KartuKK.png",
      download:
        "https://drive.google.com/file/d/1wrWq8Cx_4KFd9eLtmOIm1TAPIFkIVYXB/view?usp=sharing",
    },
  },
  {
    text: "Blocknote Catatan Perjuangan",
    data: {
      rules: [
        "Mahasiswa baru membuat blocknote catatan perjuangan sesuai dengan ketentuan yang telah ditetapkan panitia.",
        "Cover blocknote catatan perjuangan dicetak dengan ukuran A5.",
      ],
      image: "/assets/images/BnCard.png",
      download:
        "https://drive.google.com/file/d/1YzeDWyBuVyEl5IOyH1GJ9hHLtj8XCXB2/view?usp=sharing",
    },
  },
  {
    text: "Pita Cluster Luring",
    data: {
      rules: [
        "PITA WAJIB DIPAKAI DI LENGAN KANAN",
        "Sesi 1: Memakai pita warna kuning",
        "Sesi 2: Memakai pita warna merah",
        "Sesi 3: Memakai pita warna hijau",
        "Sesi 4: Memakai pita warna biru",
        "Sesi 5: Memakai pita warna kuning",
        "Sesi 6: Memakai pita warna merah",
        "Sesi 7: Memakai pita warna hijau",
        "Sesi 8: Memakai pita warna biru",
      ],
    },
  },
  {
    text: "Ketentuan Tambahan",
    type: "heading",
    data: [
      {
        head: "Barang yang Wajib Dibawa",
        rules: [
          "Makanan Ringan seperti Roti dan Susu (Apabila dibutuhkan)",
          "Obat-Obatan Pribadi",
          "Print Out KTMS ",
          "Botol Bekas berukuran 600 ml sebanyak 2 pcs",
          "Buku Bekas sebanyak 1 pcs",
          "Alat Sholat (bagi yang beragama Islam)",
          "Payung atau Jas Hujan",
          "Alat Tulis",
          "Hand Sanitizer",
        ],
      },
      {
        head: "Ketentuan Buku yang Dibawa",
        rules: [
          "Aturan pengumpulan buku",
          "Buku cerita bergambar/fabel",
          "Buku tematik Mata pelajaran SD/MI Sederajat, mata pelajaran apapun dan bebas kelas berapapun (kelas 1-6) dengan ketentuan sebagai berikut: ",
          "- Tematik bebas (Tema 1-5 ",
          "- Buku pegangan Mata Pelajaran Bahasa Inggri",
          "Kriteria buku:",
          "Kondisi buku masih layak digunakan (80%)",
          "Tidak ada bagian buku yang sobek / dilakban /disolasi / di staple",
          "Tidak ada coretan melebihi 10% dari keseluruhan isi buk",
        ],
      },
      {
        head: "Ketentuan Masker",
        rules: [
          "Mahasiswa baru wajib memakai masker KN95",
          "Masker berwarna putih",
        ],
      },
    ],
  },
];
export const PreviewAtribut = (isMan) => {
  const cowok = [
    {
      image: "/assets/images/atribut1.png",
      title: "Tampak Depan",
    },
    {
      image: "/assets/images/atribut2.png",
      title: "Tampak Samping",
    },
    {
      image: "/assets/images/atribut3.png",
      title: "Tampak Belakang",
    },
  ];

  const cewek = [
    {
      image: "/assets/images/atribut4.png",
      title: "Tampak Depan",
    },
    {
      image: "/assets/images/atribut5.png",
      title: "Tampak Samping",
    },
    {
      image: "/assets/images/atribut6.png",
      title: "Tampak Belakang",
    },
  ];
  if (isMan) {
    return cowok;
  }
  return cewek;
};
export const AtributJaringan = (offline) => {
  if (offline) {
    return AtributType;
  } else {
    return [AtributType[0], AtributType[2], AtributType[3]];
  }
};
