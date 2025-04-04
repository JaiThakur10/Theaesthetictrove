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
];

export default products;
