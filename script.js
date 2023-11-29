const database = [
  // Bahan Ayam
  {
    name: "Ayam Goreng",
    ingredients: ["ayam", "tepung terigu", "telur", "bumbu", "minyak"],
    videoLink:
'<iframe width="560" height="315" src="https://www.youtube.com/embed/j9a9EB0pGTo?si=ci84Ol_BhqZmxTWM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'  },
  {
    name: "Sup Ayam",
    ingredients: [
      "daging ayam",
      "bawang putih",
      "bawang bombay",
      "wortel",
      "kentang",
      "kaldu ayam",
      "garam",
      "lada",
    ],
    videoLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/5VI2DRgsXdw?si=a2EzM_sGKDWs2EsQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  },
  {
    name: "Ayam Bakar",
    ingredients: ["ayam", "bumbu marinasi", "saus sambal/saus barbekyu"],
    videoLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/4Z19mKLvi84?si=QSOJPJRowVpSuVAj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  },
  {
    name: "Chicken Nugget",
    ingredients: [
      "daging ayam cincang",
      "tepung roti/tepung panir",
      "telur",
      "bumbu",
      "minyak",
    ],
    videoLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/P3Qz3euk46c?si=2C7Qz3VYuocnEpkd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  },
  {
    name: "Ayam Rendang",
    ingredients: ["ayam", "santan", "bumbu rendang"],
    videoLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/83rm_xGm-YM?si=KhwxNn7QR1lGgN4B" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  },
  {
    name: "Chicken Teriyaki",
    ingredients: ["ayam", "saus teriyaki", "minyak"],
    videoLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/xGa3c5NxUAY?si=FPrAdVIJJgB9AX9Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  },
  {
    name: "Ayam Masak Kicap",
    ingredients: [
      "ayam",
      "kecap manis",
      "bawang putih",
      "bawang merah",
      "cabe",
      "minyak",
    ],
    videoLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/kWcbkod-Guk?si=DAaJRhsj0DsoKX20" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  },
 
  {
    name: "Ayam Goreng Tepung",
    ingredients: [
      "ayam",
      "tepung terigu",
      "tepung roti/tepung panir",
      "telur",
      "bumbu",
      "minyak",
    ],
    videoLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/P4mnaAiSNXs?si=GwjG5vktTOqTL_rI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  },
  {
    name: "Ayam Penyet",
    ingredients: ["ayam", "bumbu penyet", "minyak"],
    videoLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/H9V5DGGVI6s?si=6YL8JuDWfT9YCjsn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  },

  // Bahan Tempe
  // Bahan Tahu

  {
    name: "Tahu Goreng",
    ingredients: [
      "tahu",
      "tepung terigu",
      "garam",
      "merica",
      "minyak untuk menggoreng",
    ],
    videoLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/wpztU8eWPHA?si=Did-X_KfAQqOLCVt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  },
  {
    name: "Tempe Goreng",
    ingredients: [
      "tempe",
      "tepung bumbu",
      "garam",
      "merica",
      "minyak untuk menggoreng",
    ],
    videoLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/gZ7T47eZ7mI?si=pcCoFcny9rveT1IA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  },
  {
    name: "Tahu Isi",
    ingredients: [
      "tahu",
      "daging ayam/daging cincang",
      "bawang putih",
      "bawang merah",
      "wortel",
      "sawi",
      "garam",
      "merica",
      "minyak untuk menggoreng",
    ],
    videoLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/3RYjE7FgKcQ?si=Lv4KwHid-PRNNoJY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  },
  {
    name: "Tempe Bacem",
    ingredients: [
      "tempe",
      "gula merah",
      "daun salam",
      "santan",
      "garam",
      "air",
    ],
    videoLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/O5gW8frDfzA?si=p3GH811C692Zvguv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  },
  {
    name: "Tahu Telur",
    ingredients: [
      "tahu",
      "telur",
      "bawang putih",
      "garam",
      "merica",
      "minyak untuk menggoreng",
    ],
    videoLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/nER0xlqV3rs?si=-9qM2QIRNP1kFWln" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  },
  {
    name: "Tempe Mendoan",
    ingredients: [
      "tempe",
      "tepung terigu",
      "garam",
      "merica",
      "daun bawang",
      "minyak untuk menggoreng",
    ],
    videoLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/u9hGk29FSi4?si=V1JMW0kgw3848Myb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  },
  {
    name: "Tahu Lada Hitam",
    ingredients: [
      "tahu",
      "saus tiram",
      "saus cabe",
      "bawang putih",
      "lada hitam",
      "garam",
      "minyak untuk menumis",
    ],
    videoLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/HdgydzRdJPI?si=4W7UyN1dkf0h-T4L" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  },
  {
    name: "Tempe Orek",
    ingredients: [
      "tempe",
      "bawang putih",
      "bawang merah",
      "tomat",
      "kecap manis",
      "garam",
      "merica",
      "minyak untuk menumis",
    ],
    videoLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/JeVO80ZA9mE?si=gJcK9uddlB25LCeQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  },
  {
    name: "Tahu Sambal",
    ingredients: [
      "tahu",
      "sambal",
      "bawang putih",
      "bawang merah",
      "garam",
      "minyak untuk menumis",
    ],
    videoLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/nA3KsXYWGxo?si=7IjrH8R8uukFCh1s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  },
  {
    name: "Tempe Penyet",
    ingredients: ["tempe", "bumbu penyet", "minyak untuk menggoreng"],
    videoLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Lq501Yn_qFw?si=684oLsdJIv0To_q5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  },

  // Baru sampe sini
  // Telur
  {
    name: "Telur Dadar",
    ingredients: ["telur", "garam", "merica", "minyak untuk menggoreng"],
    videoLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/cIbaMvN6sUk?si=S8xsBFgTaYP_q0U3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  },
  {
    name: "Omelet",
    ingredients: ["telur", "susu", "garam", "merica", "topping"],
    videoLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/GQpNQo1D-mg?si=TMvAOLYa91d-Td_H" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  },
  {
    name: "Telur Rebus",
    ingredients: ["telur", "air"],
    videoLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/YIgXYz9cHvI?si=OpJ1aLSr3k5LZA_5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  },
  {
    name: "Telur Mata Sapi",
    ingredients: ["telur", "minyak untuk menggoreng"],
    videoLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/ryVustzkY2c?si=WxfWnu0oWPsglljQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  },
  {
    name: "Telur Gulung",
    ingredients: ["telur", "garam", "merica", "minyak untuk menggoreng"],
    videoLink: <iframe width="560" height="315" src="https://www.youtube.com/embed/T3oWU4I-jSg?si=E_JVFayA4t4NYiVF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
  },
  {
    name: "Egg Benedict",
    ingredients: [
      "telur",
      "roti English muffin",
      "ham",
      "Hollandaise sauce",
      "bawang putih",
      "cuka",
    ],
    videoLink: <iframe width="560" height="315" src="https://www.youtube.com/embed/v6ulQhr_Ym8?si=OABFfGmsyjuMzs1O" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
  },
  {
    name: "Frittata",
    ingredients: ["telur", "sayuran", "keju", "garam", "merica"],
    videoLink: <iframe width="560" height="315" src="https://www.youtube.com/embed/ZtSvoCZ858I?si=MPKr-zJYrM3j6DM7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
  },
  {
    name: "Quiche",
    ingredients: ["telur", "susu", "keju", "sayuran atau daging"],
    videoLink: <iframe width="560" height="315" src="https://www.youtube.com/embed/EwfRDcszaxQ?si=NPKYSIAVlexpbbz5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
  },
  {
    name: "Telur Balado",
    ingredients: ["telur", "bumbu balado", "minyak untuk menumis"],
    videoLink:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/sUQwLmK34AA?si=VFUnACI10Z8f68j8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  },
  {
    name: "Telur Pindang",
    ingredients: ["telur", "kuah pindang"],
    videoLink:
    <iframe width="560" height="315" src="https://www.youtube.com/embed/xLSHCEzAKfI?si=1Xf_uAt3gNiGxqeo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
  },

  // Sayuran
  {
    name: "Capcay",
    ingredients: [
      "sayuran",
      "ayam/udang",
      "saus tiram",
      "bawang putih",
      "minyak untuk menumis",
    ],
    videoLink:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/ycQUHySxSlA?si=W9Hdld7b_OVETJbJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  },
  {
    name: "Sayur Lodeh",
    ingredients: ["sayuran", "santan", "bumbu rempah", "garam"],
    videoLink:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/K__oFZwivZI?si=qqohtFt9ALwK8ABA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  },
  {
    name: "Gado-gado",
    ingredients: ["sayuran", "bumbu kacang"],
    videoLink:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/Jm1ThTdVgwo?si=D3-kH1Q3OmFHUYrT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  },
  {
    name: "Sayur Asem",
    ingredients: ["sayuran", "asam Jawa", "bumbu", "garam"],
    videoLink:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/iy4iAaUjh0A?si=AP1rUG8FzAxojRY4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  },
  {
    name: "Sop Sayuran",
    ingredients: [
      "sayuran",
      "kaldu sayuran/air",
      "bawang putih",
      "garam dan merica",
    ],
    videoLink:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/2ulX5MZp5sw?si=xOySVTtl346FMxts" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  },
  {
    name: "Sayur Bening",
    ingredients: ["sayuran", "air", "bawang putih", "garam"],
    videoLink:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/mLQYV4zNtr0?si=gbB6rh-vdJm9kRyP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  },
  {
    name: "Lalapan",
    ingredients: ["sayuran segar", "sambal/kecap"],
    videoLink:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/TRbPybuVJsY?si=rufwW53PD2a0oGVO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  },
  {
    name: "Rujak",
    ingredients: ["buah-buahan segar", "bumbu rujak"],
    videoLink:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/LthIztQsx34?si=EfnKxu5wnXidG5BN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  },
  {
    name: "Salad Sayuran",
    ingredients: ["sayuran hijau", "topping", "dressing"],
    videoLink:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/Oj7WWQz2rNA?si=rRvpEWX4OgdtnDuD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  },
  {
    name: "Sayur Mayur",
    ingredients: ["sayuran", "bumbu"],
    videoLink:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/8GGqcHS5zv4?si=Rzym1crcIqdsCxzp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  },

  // Jengkol
  {
    name: "Semur Jengkol",
    ingredients: [
      "jengkol",
      "bawang merah",
      "bawang putih",
      "kecap manis",
      "gula merah",
      "santan",
      "serai",
      "daun salam",
    ],
    videoLink:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/HwU_wxLusrw?si=fTap_62Gahg2vDIz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  },
  {
    name: "Sambal Jengkol",
    ingredients: [
      "jengkol",
      "bawang merah",
      "bawang putih",
      "cabai",
      "terasi",
      "gula",
      "garam",
    ],
    videoLink:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/9BeuyqyO-z8?si=tU53n8lBFHke4VuN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  },

  {
    name: "Jengkol Goreng Balado",
    ingredients: [
      "jengkol",
      "bawang merah",
      "bawang putih",
      "cabai merah",
      "tomat",
      "gula",
      "garam",
    ],
    videoLink:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/IrXcWILVSkQ?si=rqtak3aIaPJ_wccM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  },
  {
    name: "Orek Jengkol",
    ingredients: [
      "jengkol",
      "bawang merah",
      "bawang putih",
      "cabai rawit",
      "garam",
      "gula",
    ],
    videoLink:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/jUEFLZ7KD3k?si=34SbWes0qGW10ipL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  },
  {
    name: "Sayur Lodeh Jengkol",
    ingredients: ["jengkol", "sayuran", "santan", "bumbu rempah", "garam"],
    videoLink:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/K-kKVkaEs98?si=pq8RdQKOIUxiUVRb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  },
  {
    name: "Rendang Jengkol",
    ingredients: ["jengkol", "santan", "bumbu rendang"],
    videoLink:
      '',
  },
  {
    name: "Soto Jengkol",
    ingredients: ["jengkol", "bumbu soto", "santan", "bahan pelengkap soto"],
    videoLink:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/oY_MjPVbWts?si=Yldzw90ufDVxWcBF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  },
  {
    name: "Gulai Jengkol",
    ingredients: ["jengkol", "bumbu gulai", "santan", "daun jeruk"],
    videoLink:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/KL2LFjkq_xM?si=oB4FUXWQCZUfB2kh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  },
  {
    name: "Keripik Jengkol",
    ingredients: [
      "jengkol",
      "tepung terigu",
      "tepung beras",
      "garam",
      "minyak untuk menggoreng",
    ],
    videoLink:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/w9fTkRsF3qo?si=l4XIFr_7M0qy-ppV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  },

  // Ikan
  {
    name: "Pindang Ikan",
    ingredients: ["ikan", "asam Jawa", "bumbu rempah", "garam"],
    videoLink:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/C_cvksbzVZk?si=1txI_yWm5VXbpqVV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  },
  {
    name: "Pepes Ikan",
    ingredients: ["ikan", "bumbu rempah", "daun pisang"],
    videoLink:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/Mjkn-gPYx8k?si=vN0KD5NFpv83BRKX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  },
  {
    name: "Ikan Bakar",
    ingredients: ["ikan", "bumbu marinasi", "bumbu taburan"],
    videoLink:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/ytg0nSt6k4k?si=jjBBzKrOd9ji8JOr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  },
  {
    name: "Ikan Goreng Tepung",
    ingredients: [
      "potongan ikan",
      "tepung terigu",
      "tepung roti/tepung panir",
      "telur",
      "bumbu",
    ],
    videoLink:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/ad7Q4MI50Pk?si=gf5bF9hyd_kBVUNe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  },
  {
    name: "Pecel Lele",
    ingredients: [
      "ikan",
      "ikan lele",
      "bumbu tepung",
      "minyak untuk menggoreng",
    ],
    videoLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/uwMA9TygWEM?si=XV99SrXCAzGskVJu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  },
  {
    name: "Sambal Ikan Roa",
    ingredients: ["ikan", "ikan roa", "bumbu sambal"],
    videoLink:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/YaBSXcell2k?si=w19tee4bGv2jdkus" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  },
  {
    name: "Ikan Asam Pedas",
    ingredients: ["ikan", "bumbu asam pedas"],
    videoLink:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/_-SLybF0d5E?si=18qqpkx5ACE0qhtm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  },
  {
    name: "Sayur Laut Kuah Asam",
    ingredients: ["ikan", "sayuran", "asam Jawa", "bumbu"],
    videoLink:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/81zzTTyYaxM?si=PZqoVkaHUHdWMZY8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  },
 
  {
    name: "Ikan Kuah Kuning",
    ingredients: ["ikan", "bumbu kuah kuning"],
    videoLink:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/OjrQs9YZ8g0?si=10udVQaGhOfQgwgD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  },
];

function getRecommendations() {
  const input = document
    .getElementById("ingredients")
    .value.toLowerCase()
    .split("\n")
    .map((item) => item.trim());

  displayUserIngredients(input);

  const matchedFoods = [];

  database.forEach((food) => {
    const foodIngredients = food.ingredients.map((ingredient) =>
      ingredient.toLowerCase()
    );
    const matchingIngredients = foodIngredients.filter((item) =>
      input.includes(item)
    );
    if (matchingIngredients.length > 0) {
      matchedFoods.push(food.name);
    }
  });

  displayRecommendations(matchedFoods);

  // Menampilkan hasil pencarian
  const resultDiv = document.getElementById("result");
  resultDiv.style.display = "block";

  const userIngredientsDiv = document.getElementById("userIngredients");
  userIngredientsDiv.innerHTML = "";
}

function displayUserIngredients(ingredients) {
  const userIngredientsDiv = document.getElementById("userIngredients");
  userIngredientsDiv.innerHTML = "";

  const heading = document.createElement("h3");
  heading.textContent = "Bahan yang Dimasukkan:";
  userIngredientsDiv.appendChild(heading);

  const list = document.createElement("ul");
  ingredients.forEach((ingredient) => {
    const listItem = document.createElement("li");
    listItem.textContent = ingredient;
    list.appendChild(listItem);
  });
  userIngredientsDiv.appendChild(list);
}

function displayRecommendations(foods) {
  const resultList = document.getElementById("foodList");
  resultList.innerHTML = "";

  if (foods.length === 0) {
    resultList.innerHTML =
      "<li class='list-group-item'>Tidak ada makanan yang cocok dengan bahan yang dimiliki.</li>";
  } else {
    foods.forEach((food, index) => {
      const listItem = document.createElement("li");
      listItem.classList.add("list-group-item");
      listItem.textContent = `${index + 1}. ${food}`;
      listItem.addEventListener("click", () => showFoodDetails(food));
      resultList.appendChild(listItem);
    });
  }
}

function showFoodDetails(food) {
  const selectedFood = database.find((item) => item.name === food);
  if (selectedFood) {
    const foodIngredients = document.getElementById("foodIngredients");
    const ingredientsList = selectedFood.ingredients;

    const listItems = ingredientsList
      .map((ingredient) => {
        return `<li>${ingredient}</li>`;
      })
      .join("");

    foodIngredients.innerHTML = `<h2>Bahan-bahan Makanan:</h2><ul>${listItems}</ul>`;

    const videoLink = selectedFood.videoLink;
    const foodVideoContainer = document.getElementById("foodVideo");
    if (videoLink) {
      foodVideoContainer.innerHTML = `<h2>Video Tutorial Pembuatan Makanan:</h2>${videoLink}`;
    } else {
      foodVideoContainer.innerHTML =
        "<p>Video tidak tersedia untuk makanan ini.</p>";
    }

    document.getElementById("foodDetails").style.display = "block";
  } else {
    console.log("Makanan tidak ditemukan dalam database.");
  }
}

// Function to hide food details
function hideFoodDetails() {
  document.getElementById("foodDetails").style.display = "none";
}
