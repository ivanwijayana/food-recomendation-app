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
    videoLink: "https://youtu.be/H9V5DGGVI6s?si=NZc5O5XPZy66iKcA",
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
    videoLink: "https://youtu.be/wpztU8eWPHA?si=MBhbvEXczrRf5Whe",
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
    videoLink: "https://youtube.com/shorts/wayuTRhG-iM?si=qUIsJOR2q99YAd_2",
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
    videoLink: "https://youtu.be/3RYjE7FgKcQ?si=hHRU1IfJMjFCtr6m",
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
    videoLink: "https://youtu.be/O5gW8frDfzA?si=wfXAxicdLvlalbWV",
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
    videoLink: "https://youtu.be/nER0xlqV3rs?si=6M4ne6ohYGk7Ouvl",
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
    videoLink: "https://youtu.be/u9hGk29FSi4?si=7XJOsNINOyOhzD15",
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
    videoLink: "https://youtu.be/HdgydzRdJPI?si=xKfq4-jVKBlFHQ6T",
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
    videoLink: "https://youtu.be/JeVO80ZA9mE?si=fpsvaTqp_clZ6G2e",
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
    videoLink: "https://youtu.be/nA3KsXYWGxo?si=-Vgai4C2vp7Dp5Wz",
  },
  {
    name: "Tempe Penyet",
    ingredients: ["tempe", "bumbu penyet", "minyak untuk menggoreng"],
    videoLink: "https://youtu.be/Lq501Yn_qFw?si=z3rLyeE44FTSt36k",
  },

  // Telur
  {
    name: "Telur Dadar",
    ingredients: ["telur", "garam", "merica", "minyak untuk menggoreng"],
    videoLink: "https://youtube.com/shorts/xuEzJ1b0Lnc?si=eg5VwLWvtSQM1FXg",
  },
  {
    name: "Omelet",
    ingredients: ["telur", "susu", "garam", "merica", "topping"],
    videoLink: "https://youtu.be/GQpNQo1D-mg?si=LvbI9LlO6N5dGaTb",
  },
  {
    name: "Telur Rebus",
    ingredients: ["telur", "air"],
    videoLink: "https://youtube.com/shorts/-9__X0eG40s?si=XyFVg3_SG_XqSFLj",
  },
  {
    name: "Telur Mata Sapi",
    ingredients: ["telur", "minyak untuk menggoreng"],
    videoLink: "https://youtu.be/ryVustzkY2c?si=aJYJhQDB60pbZqxa",
  },
  {
    name: "Telur Gulung",
    ingredients: ["telur", "garam", "merica", "minyak untuk menggoreng"],
    videoLink: "https://youtu.be/T3oWU4I-jSg?si=RUNWux6fZkeQdFxq",
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
    videoLink: "https://youtu.be/v6ulQhr_Ym8?si=XpAwXBnsaKETuhCi",
  },
  {
    name: "Frittata",
    ingredients: ["telur", "sayuran", "keju", "garam", "merica"],
    videoLink: "https://youtu.be/ZtSvoCZ858I?si=GjZdvXGSz61MaWeL",
  },
  {
    name: "Quiche",
    ingredients: ["telur", "susu", "keju", "sayuran atau daging"],
    videoLink: "https://youtu.be/EwfRDcszaxQ?si=QCGsMKVNNAmvLqmO",
  },
  {
    name: "Telur Balado",
    ingredients: ["telur", "bumbu balado", "minyak untuk menumis"],
    videoLink:
      "https://www.youtube.com/watch?v=sUQwLmK34AA&ab_channel=DapurTomatCeri",
  },
  {
    name: "Telur Pindang",
    ingredients: ["telur", "kuah pindang"],
    videoLink:
      "https://www.youtube.com/watch?v=xLSHCEzAKfI&ab_channel=DapurHeni",
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
      "https://www.youtube.com/watch?v=ycQUHySxSlA&ab_channel=resepsimbok",
  },
  {
    name: "Sayur Lodeh",
    ingredients: ["sayuran", "santan", "bumbu rempah", "garam"],
    videoLink:
      "https://www.youtube.com/watch?v=K__oFZwivZI&ab_channel=NuraainiSoewarto",
  },
  {
    name: "Gado-gado",
    ingredients: ["sayuran", "bumbu kacang"],
    videoLink:
      "https://www.youtube.com/watch?v=Jm1ThTdVgwo&ab_channel=YongkiGunawan",
  },
  {
    name: "Sayur Asem",
    ingredients: ["sayuran", "asam Jawa", "bumbu", "garam"],
    videoLink:
      "https://www.youtube.com/watch?v=iy4iAaUjh0A&ab_channel=DevinaHermawan",
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
      "https://www.youtube.com/watch?v=2ulX5MZp5sw&ab_channel=ArdiyantiUlyana",
  },
  {
    name: "Sayur Bening",
    ingredients: ["sayuran", "air", "bawang putih", "garam"],
    videoLink:
      "https://www.youtube.com/watch?v=mLQYV4zNtr0&ab_channel=SimpleRudyTV",
  },
  {
    name: "Lalapan",
    ingredients: ["sayuran segar", "sambal/kecap"],
    videoLink:
      "https://www.youtube.com/watch?v=TRbPybuVJsY&ab_channel=resepsimbok",
  },
  {
    name: "Rujak",
    ingredients: ["buah-buahan segar", "bumbu rujak"],
    videoLink:
      "https://www.youtube.com/watch?v=LthIztQsx34&ab_channel=SajianBunda",
  },
  {
    name: "Salad Sayuran",
    ingredients: ["sayuran hijau", "topping", "dressing"],
    videoLink:
      "https://www.youtube.com/watch?v=Oj7WWQz2rNA&ab_channel=ResepDapurSimple",
  },
  {
    name: "Sayur Mayur",
    ingredients: ["sayuran", "bumbu"],
    videoLink:
      "https://www.youtube.com/watch?v=8GGqcHS5zv4&ab_channel=tripujis",
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
      "https://www.youtube.com/watch?v=HwU_wxLusrw&ab_channel=MasakManiak",
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
      "https://www.youtube.com/watch?v=9BeuyqyO-z8&ab_channel=MbakNing",
  },
  {
    name: "Karedok Jengkol",
    ingredients: ["jengkol", "sayuran segar", "bumbu kacang"],
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
      "https://www.youtube.com/watch?v=IrXcWILVSkQ&ab_channel=RuriAprilia",
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
      "https://www.youtube.com/watch?v=jUEFLZ7KD3k&ab_channel=hobymasakchannel",
  },
  {
    name: "Sayur Lodeh Jengkol",
    ingredients: ["jengkol", "sayuran", "santan", "bumbu rempah", "garam"],
    videoLink:
      "https://www.youtube.com/watch?v=K-kKVkaEs98&ab_channel=THEBESTIKRTV",
  },
  {
    name: "Rendang Jengkol",
    ingredients: ["jengkol", "santan", "bumbu rendang"],
    videoLink:
      "https://www.youtube.com/watch?v=lOjYYJbT6bo&ab_channel=MelvinChandFamily",
  },
  {
    name: "Soto Jengkol",
    ingredients: ["jengkol", "bumbu soto", "santan", "bahan pelengkap soto"],
    videoLink:
      "https://www.youtube.com/watch?v=oY_MjPVbWts&ab_channel=SayangKeluarga",
  },
  {
    name: "Gulai Jengkol",
    ingredients: ["jengkol", "bumbu gulai", "santan", "daun jeruk"],
    videoLink:
      "https://www.youtube.com/watch?v=KL2LFjkq_xM&ab_channel=MelvinChandFamily",
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
      "https://www.youtube.com/watch?v=w9fTkRsF3qo&ab_channel=TitiGaleri",
  },

  // Ikan
  {
    name: "Pindang Ikan",
    ingredients: ["ikan", "asam Jawa", "bumbu rempah", "garam"],
    videoLink:
      "https://www.youtube.com/watch?v=C_cvksbzVZk&ab_channel=TheHasanVideo",
  },
  {
    name: "Pepes Ikan",
    ingredients: ["ikan", "bumbu rempah", "daun pisang"],
    videoLink:
      "https://www.youtube.com/watch?v=Mjkn-gPYx8k&ab_channel=DailyMamaRiss",
  },
  {
    name: "Ikan Bakar",
    ingredients: ["ikan", "bumbu marinasi", "bumbu taburan"],
    videoLink:
      "https://www.youtube.com/watch?v=ytg0nSt6k4k&ab_channel=DapurMamahHawa",
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
      "https://www.youtube.com/watch?v=ad7Q4MI50Pk&ab_channel=LimauNipis",
  },
  {
    name: "Pecel Lele",
    ingredients: [
      "ikan",
      "ikan lele",
      "bumbu tepung",
      "minyak untuk menggoreng",
    ],
    videoLink: "https://www.youtube.com/watch?v=uwMA9TygWEM&ab_channel=CRCOOK",
  },
  {
    name: "Sambal Ikan Roa",
    ingredients: ["ikan", "ikan roa", "bumbu sambal"],
    videoLink:
      "https://www.youtube.com/watch?v=YaBSXcell2k&ab_channel=CeceromedKitchen",
  },
  {
    name: "Ikan Asam Pedas",
    ingredients: ["ikan", "bumbu asam pedas"],
    videoLink:
      "https://www.youtube.com/watch?v=_-SLybF0d5E&ab_channel=IndoculinaireHunter",
  },
  {
    name: "Sayur Laut Kuah Asam",
    ingredients: ["ikan", "sayuran", "asam Jawa", "bumbu"],
    videoLink:
      "https://www.youtube.com/watch?v=81zzTTyYaxM&ab_channel=TRANS7OFFICIAL",
  },
  {
    name: "Ikan Pepes Pedas",
    ingredients: ["ikan", "bumbu pedas", "daun pisang"],
    videoLink:
      "https://www.youtube.com/watch?v=PbYENZf81uw&ab_channel=CeceromedKitchen",
  },
  {
    name: "Ikan Kuah Kuning",
    ingredients: ["ikan", "bumbu kuah kuning"],
    videoLink:
      "https://www.youtube.com/watch?v=OjrQs9YZ8g0&ab_channel=AdeKoerniawan",
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