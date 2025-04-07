const products = [
  {
    id: 1,
    name: "Brass Drop Earrings",
    category: "earrings",
    images: {
      red: "/bdered.jpg",
      mustard: "/bdeorange.jpg",
      black: "/bdeblack.jpg",
      green: "/bdegreen.jpg",
    },
    defaultImage: "/bdered.jpg", // Default image for Shop page
    price: 340,
    description:
      "Gold-plated brass earrings with Mother of Pearl (MOP) and Monalisa stone embedded beautifully.",
    colors: ["red", "mustard", "black", "green"],
  },

  {
    id: 2,
    name: "Medium Size Brass Jhumka",
    category: "earrings",
    image: "/mj.jpg", // Only one image, so no need for images object
    price: 480,
    description: "Medium size brass jhumka without meenakari.",
  },

  {
    id: 3,
    name: "Medium Size Brass Jhumka (Meenakari)",
    category: "earrings",
    image: "/mjmr.png",
    price: 550,
    description: "Medium size brass jhumka with meenakari.",
  },

  {
    id: 4,
    name: "Maharani Collection",
    category: "earrings",
    image: "/mc.jpg",
    price: 1700,
    description:
      "Gold-plated brass triple Jhumka with multicolour stones and fine pearl detailing, 15cm in length.",
  },

  {
    id: 5,
    name: "Brass Chandbali Earrings",
    category: "earrings",
    image: "/bce.jpg",
    price: 340,
    description: "Elegant brass Chandbali earrings with intricate detailing.",
  },

  {
    id: 6,
    name: "Traditional Long Chain Brass Jhumka (Lightweight)",
    category: "earrings",
    image: "/tlc.jpg",
    price: 999,
    description:
      "Lightweight traditional long chain brass Jhumka with intricate craftsmanship.",
  },

  {
    id: 7,
    name: "Rectangle Brass Earrings",
    category: "earrings",
    images: {
      red: "/rber.jpg",
      green: "/rbeg.jpg",
    },
    defaultImage: "/rber.jpg",
    price: 350,
    description:
      "Sleek and stylish rectangle-shaped brass earrings with a modern touch.",
    colors: ["red", "green"],
  },

  {
    id: 8,
    name: "MOP Inverted Feather Brass Earrings",
    category: "earrings",
    image: "/ifb.jpg",
    price: 280,
    description:
      "Elegant brass earrings featuring an inverted feather design with Mother of Pearl (MOP) detailing.",
  },

  {
    id: 9,
    name: "Gold-Plated Brass Earrings with Engraved Thappa & Monalisa Stone Studs",
    category: "earrings",
    image: "/gps.jpg",
    price: 380,
    description:
      "Gold-plated brass earrings featuring beautifully engraved thappa and Monalisa stone studs for an elegant look.",
  },

  {
    id: 10,
    name: "Beautiful Brass Jhumka with Monalisa Stone",
    category: "earrings",
    images: {
      darkgreen: "/bbjdg.jpg",
      mintgreen: "/bbjmg.jpg",
      peach: "/bbjp.jpg",
      mustard: "/bbjm.jpg",
    },
    defaultImage: "/bbjdg.jpg",
    price: 500,
    description:
      "Elegant brass Jhumka adorned with Monalisa stone, perfect for traditional and festive occasions.",
    colors: ["darkgreen", "mintgreen", "peach", "mustard"],
  },
  {
    id: 11,
    name: "Green Stone & White Pearl Earrings",
    category: "earrings",
    price: 470,
    description:
      "Elegant earrings featuring a stunning combination of green stones and white pearls, perfect for festive and traditional occasions.",
    image: "/wpe.jpg",
  },
  {
    id: 12,
    name: "Indo Western Brass Earings",
    category: "earrings",
    price: 470,
    description:
      "Elegant earrings featuring green stone and white pearl embellishments.",
    defaultImage: "/ibe.jpg",
    images: {
      yellow: "/ibe.jpg",
      green: "/ibeg.jpg",
      red: "/iber.jpg",
    },
    colors: ["yellow", "green", "red"],
  },
  {
    id: 13,
    name: "Gold Plated Drop Earrings",
    category: "earrings",
    price: 420,
    description:
      "Elegant gold-plated drop earrings available in mint green and pink colors.",
    colors: ["mintgreen", "pink"],
    images: {
      pink: "/gpp.jpg",
      mintgreen: "/gpmg.jpg",
    },
    defaultImage: "/gpp.jpg",
  },
  {
    id: 14,
    name: "Monalisa Drop Stone Earrings",
    category: "earrings",
    price: 340,
    material: "brass",
    description:
      "Brass Monalisa drop stone earrings with a sleek and modern design.",
    images: {
      green: "/mdse.jpg",
      white: "/mdsew.jpg",
    },
    defaultImage: "/mdse.jpg",
    colors: ["green", "white"],
  },
  {
    id: 15,
    name: "Traditional Maharashtrian Earrings",
    category: "earrings",
    price: 360,
    description:
      "Traditional Maharashtrian earrings featuring green emerald with fine kundan and pearl details.",
    image: "/tme.jpg",
  },
  {
    id: 16,
    name: "Black Stone Gold Plated Drop Earrings",
    category: "earrings",
    price: 360,
    description:
      "Stylish gold-plated drop earrings with black stone embellishment.",
    image: "/bsg.jpg",
  },
  {
    id: 17,
    name: "Triangular Gold Plated Chandbali",
    category: "earrings",
    price: 290,
    description: "Beautiful triangular-shaped gold-plated Chandbali earrings.",
    image: "/tgc.jpg",
  },
  {
    id: 18,
    name: "Long Jhumka with Pearls & Monalisa Stones",
    category: "earrings",
    price: 500,
    description:
      "Elegant long earrings adorned with pearls and Monalisa stones.",
    images: {
      black: "/ljpms.jpg",
      green: "/ljpmsg.jpg",
    },
    defaultImage: "/ljpms.jpg",
    colors: ["black", "green"],
  },
  {
    id: 19,
    name: "Traditional Style Gold Plated Brass Earrings",
    category: "earrings",
    price: 300,
    description:
      "Traditional gold-plated brass earrings, perfect for festive occasions.",
    images: {
      orange: "/tsg.jpg",
      yellow: "/tsgy.jpg",
      red: "/tsgr.jpg",
    },
    defaultImage: "/tsg.jpg",
    colors: ["orange", "yellow", "red"],
  },
  {
    id: 20,
    name: "Long Gold Plated Brass Jhumka",
    category: "earrings",
    price: 600,
    description: "Classic long gold-plated brass earrings.",
    images: {
      brown: "/lgpbj.jpg",
      grey: "/lgpbjw.jpg",
    },
    defaultImage: "/lgpbj.jpg",
    colors: ["brown", "grey"],
  },
  {
    id: 21,
    name: "Bahubali Jhumka",
    category: "earrings",
    price: 820,
    description: "Majestic Bahubali-style earrings in grey color.",
    image: "/bjg.jpg",
  },
  {
    id: 22,
    name: "Monalisa Stone Gold Plated Brass Jhumka",
    category: "earrings",
    price: 550,
    description:
      "Elegant gold-plated brass jhumka with Monalisa stone detailing.",
    defaultImage: "/msgpbj.jpg",
    images: {
      green: "/msgpbj.jpg",
      darkblue: "/msgpbjdb.jpg",
    },
    colors: ["green", "darkblue"],
  },
  {
    id: 23,
    name: "Premium Brass Jhumka",
    category: "earrings",
    price: 550,
    description: "Premium-quality brass jhumka with intricate craftsmanship.",
    defaultImage: "/pbjb.jpg",
    images: {
      blue: "/pbjb.jpg",
      red: "/pbjr.jpg",
    },
    colors: ["blue", "red"],
  },
  {
    id: 24,
    name: "S-Shaped Earrings with Monalisa Stone",
    category: "earrings",
    price: 350,
    description: "Stylish S-shaped earrings adorned with Monalisa stone.",
    defaultImage: "/sshapedb.jpg",
    images: {
      black: "/sshapedb.jpg",
      green: "/sshapedg.jpg",
    },
    colors: ["black", "green"],
  },
  {
    id: 25,
    name: "Doublebali Monalisa Stone Earrings",
    category: "earrings",
    price: 290,
    description:
      "Elegant Doublebali earrings with Monalisa stone embellishments.",
    defaultImage: "/dmse.jpg",
    images: {
      blue: "/dmse.jpg",
      pink: "/dmsep.jpg",
      white: "/dmsew.jpg",
      yellow: "/dmsey.jpg",
    },
    colors: ["blue", "pink", "white", "yellow"],
  },
  {
    id: 26,
    name: "Red & White Gold Plated Earrings",
    category: "earrings",
    price: 300,
    description:
      "Beautiful gold-plated earrings in red and white color combination.",
    colors: ["red", "white"],
    image: "/rwgpe.jpg",
  },

  {
    id: 27,
    name: "Dual Tone Brass Jhumka",
    category: "earrings",
    price: 450,
    description:
      "Beautifully handcrafted dual-tone brass jhumka with intricate designs, perfect for traditional outfits.",
    defaultImage: "/dtbj1.jpg",
  },
  {
    id: 28,
    name: "Silver Replica Brass Jhumka",
    category: "earrings",
    price: 790,
    description:
      "A stunning silver-plated brass jhumka with fine detailing, ideal for festive occasions.",
    image: "/srbj.jpg",
  },
  {
    id: 29,
    name: "Dual Tone Radha Krishna Jhumka",
    category: "earrings",
    price: 500,
    description:
      "Traditional Radha-Krishna themed jhumka with exquisite craftsmanship in dual-tone brass.",
    image: "/dtrk.jpg",
  },
  {
    id: 30,
    name: "Dual Tone Medium Size Jhumka",
    category: "earrings",
    price: 390,
    description:
      "A medium-sized jhumka with intricate patterns, great for everyday wear.",
    image: "/dtmsj.jpg",
  },
  {
    id: 31,
    name: "Dual Tone Cow Earrings",
    category: "earrings",
    price: 365,
    description:
      "Uniquely designed cow-themed earrings in dual-tone brass for a quirky, traditional touch.",
    image: "/dtce.jpg",
  },
  {
    id: 32,
    name: "Dailywear Dual Tone Loop Earrings",
    category: "earrings",
    price: 320,
    description:
      "Elegant dual-tone loop earrings, perfect for daily wear and casual outfits.",
    image: "/dtdle.jpg",
  },
  {
    id: 33,
    name: "Multicolour Drop Earrings",
    category: "earrings",
    price: 380,
    description:
      "Vibrant drop earrings featuring multicolor stones, great for festive and party looks.",
    image: "/mde.jpg",
  },
  {
    id: 34,
    name: "Silver Replica Jhumka",
    category: "earrings",
    price: 550,
    description:
      "Classic silver replica jhumka with traditional patterns, ideal for ethnic wear.",
    image: "/srj.jpg",
  },
  {
    id: 35,
    name: "Heavy Brass Hasli",
    category: "necklaces",
    price: 1200,
    description:
      "A bold and heavy brass hasli necklace available in black, green, and red.",
    colors: ["black", "green", "red"],
    defaultImage: "/hbhb.jpg",
    images: {
      black: "/hbhb.jpg",
      green: "/hbhg.jpg",
      red: "/hbh.jpg",
    },
  },
  {
    id: 36,
    name: "Brass Hasli",
    category: "necklace",
    price: 800,
    description:
      "A stylish and elegant brass hasli necklace, suitable for all traditional attires.",
    image: "/bh.jpg",
  },
  {
    id: 37,
    name: "Grey & Sky Blue Hasli",
    category: "necklaces",
    price: 850,
    description:
      "A unique color combination of grey and sky blue, making this hasli stand out.",
    image: "/gsbh.jpg",
  },
  {
    id: 38,
    name: "Pearl Set",
    category: "necklaces",
    price: 350,
    description:
      "A classic pearl necklace set for a graceful and timeless look.",
    image: "/ps.jpg",
  },
  {
    id: 39,
    name: "Indowestern Hasli",
    category: "necklaces",
    price: 850,
    description:
      "A fusion of Indian and Western styles, this hasli is perfect for modern ethnic wear.",
    image: "/iwh.jpg",
  },
  {
    id: 40,
    name: "Premium Brass Earrings",
    category: "earrings",
    price: 590,
    description:
      "Premium quality brass earrings available in three elegant colors.",
    colors: ["red", "green", "majenta"],
    defaultImage: "/pbe.jpg",
    images: {
      red: "/pbe.jpg",
      green: "/pbeg.jpg",
      majenta: "/pbem.jpg",
    },
  },
  {
    id: 41,
    name: "Long Pendant Set",
    category: "necklaces",
    price: 750,
    description:
      "A sophisticated long pendant set that adds charm to any outfit.",
    image: "/lps.jpg",
  },
  {
    id: 42,
    name: "Flower Choker Set",
    category: "necklaces",
    price: 350,
    description:
      "A delicate flower-designed choker set, perfect for a minimalist ethnic look.",
    image: "/fcs.jpg",
  },
  {
    id: 43,
    name: "Deer Neck Set",
    category: "necklaces",
    price: 750,
    description:
      "A beautifully designed neck set featuring deer motifs for a unique appeal.",
    image: "/dns.jpg",
  },
  {
    id: 44,
    name: "Chain Hanging Earrings",
    category: "earrings",
    price: 490,
    description:
      "Elegant chain hanging earrings available in multiple vibrant colors.",
    colors: ["green", "red", "multicolor", "pink", "black", "blue", "wine"],
    defaultImage: "/cheb.jpg",
    images: {
      green: "/cheg.jpg",
      red: "/cher.jpg",
      multicolor: "/chem.jpg",
      pink: "/chep.jpg",
      black: "/cheb.jpg",
      blue: "/chebl.jpg",
      wine: "/chew.jpg",
    },
  },
  {
    id: 45,
    name: "Dual Tone Brass Jhumka",
    category: "earrings",
    price: 450,
    description:
      "Beautifully handcrafted dual-tone brass jhumka with intricate designs, perfect for traditional outfits.",
    defaultImage: "/dtbj2.jpg",
  },
  {
    id: 46,
    name: "Dual Tone Brass Jhumka",
    category: "earrings",
    price: 450,
    description:
      "Beautifully handcrafted dual-tone brass jhumka with intricate designs, perfect for traditional outfits.",
    defaultImage: "/dtbj3.jpg",
  },
  {
    id: 47,
    name: "Dual Tone Brass Jhumka Large",
    category: "earrings",
    price: 600,
    description:
      "Beautifully handcrafted dual-tone brass jhumka with intricate designs, perfect for traditional outfits.",
    defaultImage: "/dtbj4.jpg",
  },
  {
    id: 48,
    name: "Dual Tone Brass Jhumka Silver",
    category: "earrings",
    price: 699,
    description:
      "Beautifully handcrafted dual-tone brass jhumka with intricate designs, perfect for traditional outfits.",
    defaultImage: "/dtbj5.jpg",
  },
  {
    id: 49,
    name: "Brass Hasli with Studs",
    category: "necklaces",
    price: 699,
    description:
      "Beautifully handcrafted dual-tone brass jhumka with intricate designs, perfect for traditional outfits.",
    image: "/bhws.jpg",
  },
  {
    id: 50,
    name: "Beautiful Morni Jhumki",
    description:
      "Gold plated brass earrings with elegant morni (peacock) design.",
    price: 350,
    category: "Earrings",
    defaultImage: "/bmj.jpg",
    images: {
      black: "/bmjb.jpg",
      pink: "/bmj.jpg",
    },
    colors: ["black", "pink"],
  },
  {
    id: 51,
    name: "Elephant Earrings",
    description:
      "All colours available in elephant earrings, with both gold and silver plated options.",
    price: 250,
    category: "Earrings",
    colors: ["black", "green", "red"],
    images: {
      black: "/eeb.jpg",
      green: "/eeg.jpg",
      red: "/ee.jpg",
    },
    defaultImage: "/ee.jpg",
  },
  {
    id: 52,
    name: "Monalisa Stone Studs",
    description: "Gold plated brass earrings with sparkling Monalisa stones.",
    price: 320,
    category: "Earrings",
    colors: ["darkgreen", "black", "cyan", "green"],
    images: {
      darkgreen: "/mss.jpg",
      black: "/mssb.jpg",
      cyan: "/mssc.jpg",
      green: "/msspg.jpg",
    },
    image: "/mss.jpg",
  },
];

export default products;
