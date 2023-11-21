const products = [
  {
    id: 1,
    product_name: "Whey Protein - Star Nutrition",
    category: "Proteina",
    price: 40.83,
    stock: 1000,
    detalles: "Proteina de suero lacteo",
    images:
      "https://tse1.mm.bing.net/th/id/OIP.VcjKuqErdidspNqyY9DPzQHaHa?rs=1&pid=ImgDetMain",
  },
  {
    id: 2,
    product_name: "Shatter - Muscletech",
    category: "Pre-workout",
    price: 56.68,
    stock: 1000,
    detalles: "Pathological fracture in other disease, right ulna, sequela",
    images:
      "https://tse4.mm.bing.net/th/id/OIP.B9PnDj7bXwsa8jgqp6Q4LAHaHa?w=2000&h=2000&rs=1&pid=ImgDetMain",
  },
  {
    id: 3,
    product_name: "Mutant Mass - Star Nutrition",
    category: "Ganador",
    price: 16.03,
    stock: 1000,
    detalles: "Contusion of right breast, sequela",
    images:
      "https://tse2.mm.bing.net/th/id/OIP.TFHXwc87f70xOdJ3VWGGcAHaMy?rs=1&pid=ImgDetMain",
  },
  {
    id: 4,
    product_name: "Whey Protein - Xtrenght",
    category: "Proteina",
    price: 27.39,
    stock: 1000,
    detalles: "Fistula, unspecified hand",
    images:
      "https://tse4.mm.bing.net/th/id/OIP.SM544yKwKca-1bENPlHkSgHaHa?w=209&h=209&c=7&r=0&o=5&pid=1.7",
  },
  {
    id: 5,
    product_name: "Dynamite - Start Nutrition",
    category: "Pre-workout",
    price: 87.23,
    stock: 1000,
    detalles: "Occ of anml-drn vehicle injured in clsn w 2/3-whl mv, subs",
    images:
      "https://tse4.mm.bing.net/th/id/OIP.L5nlwAaQytjJcd7eGIJBbAAAAA?rs=1&pid=ImgDetMain",
  },
  {
    id: 6,
    product_name: "Nitro Gain - Xtrenght",
    category: "Ganador",
    price: 97.13,
    stock: 1000,
    detalles: "Oth disp fx of upper end of right humerus, init for opn fx",
    images:
      "https://tse3.mm.bing.net/th/id/OIP.k6wwAdp9xpqc8AgelWD2RgAAAA?rs=1&pid=ImgDetMain",
  },
  {
    id: 7,
    product_name: "Truemade Whey Protein - Ena Sport",
    category: "Proteina",
    price: 21.41,
    stock: 1000,
    detalles: "Frostbite w tissue necrosis of right finger(s), init encntr",
    images:
      "https://tse1.mm.bing.net/th/id/OIP.lIAszYUIm4NJtgGuQgiBmgHaHa?rs=1&pid=ImgDetMain",
  },
  {
    id: 8,
    product_name: "Pre War - Ena Sport",
    category: "Pre-workout",
    price: 45.5,
    stock: 1000,
    detalles: "Unspecified injury of thigh",
    images:
      "https://tse3.mm.bing.net/th/id/OIP.SvTgXaQnfWL1B9qiGiWBugHaHa?w=600&h=600&rs=1&pid=ImgDetMain",
  },
  {
    id: 9,
    product_name: "Creatina - Star Nutrition",
    category: "Creatina",
    price: 74.71,
    stock: 1000,
    detalles: "Other myositis, unspecified lower leg",
    images:
      "https://agsuplementos.com/wp-content/uploads/2020/12/Star-Nutrition-Creatina-1000-Grs-Foto-1-scaled-1.jpg",
  },
  {
    id: 10,
    product_name: "Creatina - Xtrength",
    category: "Creatina",
    price: 90.64,
    stock: 1000,
    detalles: "Rheumatoid bursitis, right elbow",
    images:
      "https://tse4.mm.bing.net/th/id/OIP.qdjbdVRHcHlfg1WRzl-0PQHaHa?rs=1&pid=ImgDetMain",
  },
  {
    id: 11,
    product_name: "Creatina - Ena Sort",
    category: "Creatina",
    price: 98.5,
    stock: 1000,
    detalles: "Sltr-haris Type I physl fx upr end r femr, 7thP",
    images:
      "https://http2.mlstatic.com/D_NQ_NP_772770-MLA49211946466_022022-O.jpg",
  },
  {
    id: 12,
    product_name: "Glutamina - Star Nutrition",
    category: "Glutamina",
    price: 40.64,
    stock: 1000,
    detalles: "Burn of unspecified degree of right axilla, subs encntr",
    images:
      "https://tse3.mm.bing.net/th/id/OIP.UVNRcwAuwMN3yOJlW8elcgAAAA?rs=1&pid=ImgDetMain",
  },
  {
    id: 13,
    product_name: "Glutamina - Xtrenght",
    category: "Glutamina",
    price: 59.71,
    stock: 1000,
    detalles: "Insect bite (nonvenomous) of right back wall of thorax",
    images:
      "https://www.demusculos.com/shop/871-large_default/glutamina-xtrenght-nutrition-300.jpg",
  },
  {
    id: 14,
    product_name: "Glutamina - Ena Sport",
    category: "Glutamina",
    price: 63.97,
    stock: 1000,
    detalles: "Oth osteopor w crnt path fx, r humer, subs for fx w nonunion",
    images:
      "https://i2.wp.com/desuplementos.com/wp-content/uploads/2019/12/Ena-Sport-Glutamina.jpg?fit=2517%2C2517&ssl=1",
  },
  {
    id: 15,
    product_name: "Termo Fuel - Star Nutrition",
    category: "Quemador",
    price: 13.58,
    stock: 1000,
    detalles: "Other human herpesvirus encephalitis",
    images:
      "https://http2.mlstatic.com/D_NQ_NP_951405-MLA44495027395_012021-F.jpg",
  },
  {
    id: 16,
    product_name: "Cutter - Xtrength",
    category: "Quemador",
    price: 75.07,
    stock: 1000,
    detalles: "Unsp inj muscles and tendons at ank/ft level, unsp foot",
    images:
      "https://tse2.mm.bing.net/th/id/OIP.ONWJ8yayhsG_iaYA6TzIBQAAAA?w=158&h=320&rs=1&pid=ImgDetMain",
  },
  {
    id: 17,
    product_name: "Riped X - Ena Sport",
    category: "Quemador",
    price: 93.86,
    stock: 1000,
    detalles: "Corros first deg mult sites of left lower limb, ex ank/ft",
    images:
      "https://http2.mlstatic.com/D_NQ_NP_2X_795218-MLA49171989701_022022-F.jpg",
  },
  {
    id: 18,
    product_name: "Whey Protein BSN",
    category: "Proetina",
    price: 77.19,
    stock: 1000,
    detalles: "Miltry op w nuclr radiation eff of nuclr weapon, civ, sqla",
    images:
      "https://tse2.mm.bing.net/th/id/OIP.kfe-PC-p8v_dkjwnm1XolwHaHa?rs=1&pid=ImgDetMain",
  },
  {
    id: 19,
    product_name: "Whey Protein - Muscletech",
    category: "Proteina",
    price: 36.9,
    stock: 1000,
    detalles: "Chronic gout due to renal impairment, left elbow",
    images:
      "https://tse2.mm.bing.net/th/id/OIP.u8Xh5IFYbzZrXPG-kKrvLwHaKo?rs=1&pid=ImgDetMain",
  },
  {
    id: 20,
    product_name: "BCAA - Xtrenght",
    category: "Aminoacidos",
    price: 18.44,
    stock: 1000,
    detalles: "Contact with hot drinks, subsequent encounter",
    images:
      "https://d26lpennugtm8s.cloudfront.net/stores/001/279/419/products/hydro-bcaa-pro1-05ed4966dbd75278e015956904366506-640-0.jpg",
  },
  {
    id: 21,
    product_name: "Amino 4500 - Ena Sport",
    category: "Aminoacidos",
    price: 27.4,
    stock: 1000,
    detalles: "Unsp fx the low end l rad, 7thF",
    images:
      "https://www.farmacialeloir.com.ar/img/articulos/ena_amino_4500_post_work.jpg",
  },
  {
    id: 22,
    product_name: "MTOR BCAA - Star Nutrition",
    category: "Amninoacidos",
    price: 54.76,
    stock: 1000,
    detalles: "Other specified types of non-Hodgkin lymphoma, spleen",
    images:
      "https://www.demusculos.com/shop/594-large_default/mtor-bcaa-star-811.jpg",
  },
  {
    id: 23,
    product_name: "Nitrogain - Muscletech",
    category: "Ganador",
    price: 78.52,
    stock: 1000,
    detalles: "Sltr-haris Type II physeal fx lower end of right femur",
    images:
      "https://tse3.mm.bing.net/th/id/OIP.5r2dBpRIJ_hu8CeFXkEDQQHaHa?rs=1&pid=ImgDetMain",
  },
  {
    id: 24,
    product_name: "True-Mass - BSN",
    category: "Ganador",
    price: 61.34,
    stock: 1000,
    detalles: "Underdosing of mixed bacterial vaccines w/o a pertuss",
    images:
      "https://http2.mlstatic.com/D_NQ_NP_2X_694062-MLM31122674476_062019-F.jpg",
  },
  {
    id: 25,
    product_name: "Prolac - Pullver",
    category: "Proteina",
    price: 76.51,
    stock: 1000,
    detalles: "Nondisp fx of lateral condyle of unsp femur, init",
    images:
      "https://www.demusculos.com/shop/549-large_default/prolac-1-kg-pulver.jpg",
  },
  {
    id: 26,
    product_name: "Egg & Whey - Pullver",
    category: "Proteina",
    price: 63.96,
    stock: 1000,
    detalles: "Perf due to fb acc left in body fol kidney dialysis, sequela",
    images:
      "https://www.farmaciaazul.ar/img/producto/pulver_mix_protein_vai_x_kg1595956592820.jpg",
  },
  {
    id: 27,
    product_name: "Gainer Plus - Pullver",
    category: "Ganador",
    price: 35.81,
    stock: 1000,
    detalles: "Laceration of musc/tend at lower leg level, unsp leg",
    images:
      "https://fundicionesdelnorte.com.ar/wp/wp-content/uploads/2021/09/GAINER-3K-PULVER-FB-600x600.jpg",
  },
  {
    id: 28,
    product_name: "BCAA - Pullver",
    category: "Aminoacidos",
    price: 33.41,
    stock: 1000,
    detalles: "Unspecified superficial injury of oth part of neck",
    images: "https://www.apliton.com/repos/clubsuple/productos/12956_3.jpg",
  },
  {
    id: 29,
    product_name: "Ripped Fast - Pullver",
    category: "Quemador",
    price: 31.44,
    stock: 1000,
    detalles: "Bipolar disorder, in full remis, most recent episode manic",
    images:
      "https://http2.mlstatic.com/D_NQ_NP_2X_932326-MLA45583782159_042021-F.jpg",
  },
  {
    id: 30,
    product_name: "Creatina - Pullver",
    category: "Creatina",
    price: 65.43,
    stock: 1000,
    detalles: "Abrasion of left back wall of thorax, initial encounter",
    images:
      "https://fundicionesdelnorte.com.ar/wp/wp-content/uploads/2021/09/creatina-500g-1.jpg",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductById = (itemId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id == itemId));
    }, 500);
  });
};
export const getProductsByCategory = (category) => {
  return new Promise((resolve, reject) => {
    if (category) {
      const filteredProducts = products.filter(
        (product) => product.category === category
      );
      resolve(filteredProducts);
    } else {
      resolve(products);
    }
  });
};
