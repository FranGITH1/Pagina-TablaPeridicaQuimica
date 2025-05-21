document.addEventListener("DOMContentLoaded", function () {
  const periodicTable = document.getElementById("periodic-table");
  const pagesContainer = document.getElementById("pages");
  const prevButton = document.getElementById("prevPage");
  const nextButton = document.getElementById("nextPage");

  const modal = document.getElementById("element-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalSymbol = document.getElementById("modal-symbol");
  const modalNumber = document.getElementById("modal-number");
  const modalWeight = document.getElementById("modal-weight");
  const modalType = document.getElementById("modal-type");
  const modalCuriosity = document.getElementById("modal-curiosity");
  const modalGroup = document.getElementById("modal-group");
  const modalPeriod = document.getElementById("modal-period");
  const modalState = document.getElementById("modal-state");  
  const closeModal = document.querySelector(".close");

  let currentPage = 0;
  const elementsPerPage = 20;
  let pages = [];


  const PeriodicTable = [
    
  {
    symbol: "H",
    number: 1,
    name: "Hidrógeno",
    weight: "1.008",
    type: "No-metal",
    curiosity:"El hidrógeno es el elemento más abundante en el universo y representa aproximadamente el 75% de su masa elemental.",
    group: 1,
    period: 1,
    state:"Gaseoso",
  },
  {
    symbol: "He",
    number: 2,
    name: "Helio",
    weight: "4.0026",
    type: "Gas-noble",
    state:"Gas",
    group:18,
    period:1,
  },
  {
    symbol: "Li",
    number: 3,
    name: "Litio",
    weight: "6.94",
    type: "Metal-alcalino",
    curiosity: "El litio se utiliza en baterías recargables para teléfonos móviles, laptops y vehículos eléctricos.",
    state:"Sólido",
    group:1,
    period:2,
  },
  {
    symbol: "Be",
    number: 4,
    name: "Berilio",
    weight: "9.0122",
    type: "Metal-alcalinoterreo",
    curiosity: "El berilio se utiliza en aleaciones para aviones y satélites debido a su ligereza y resistencia.",
    state:"Sólido", 
    group:2,
    period:2,
  },
  {
    symbol: "B",
    number: 5,
    name: "Boro",
    weight: "10.81",
    type: "Metaloide",
    curiosity: "El boro se encuentra en detergentes y vidrios resistentes al calor, como el Pyrex.",
    state: "Sólido",
    group: 13,
    period: 2,
},
{
    symbol: "C",
    number: 6,
    name: "Carbono",
    weight: "12.011",
    type: "No-metal",
    curiosity: "El carbono es la base de la vida en la Tierra y forma compuestos como el grafito y los diamantes.",
    state: "Sólido",
    group: 14,
    period: 2,
},
{
    symbol: "N",
    number: 7,
    name: "Nitrógeno",
    weight: "14.007",
    type: "No-metal",
    curiosity: "El nitrógeno constituye el 78% del aire que respiramos y es esencial para los fertilizantes.",
    state: "Gas",
    group: 15,
    period: 2,
},
{
    symbol: "O",
    number: 8,
    name: "Oxígeno",
    weight: "15.999",
    type: "No-metal",
    curiosity: "El oxígeno es vital para la respiración y constituye aproximadamente el 21% del aire.",
    state: "Gas",
    group: 16,
    period: 2,
},
{
    symbol: "F",
    number: 9,
    name: "Flúor",
    weight: "18.998",
    type: "Halogeno",
    curiosity: "El flúor se utiliza en pastas dentales para prevenir caries y en la fabricación de teflón.",
    state: "Gas",
    group: 17,
    period: 2,
},
{
    symbol: "Ne",
    number: 10,
    name: "Neón",
    weight: "20.180",
    type: "Gas-noble",
    curiosity: "El neón se utiliza en letreros luminosos debido a su capacidad para emitir luz brillante.",
    state: "Gas",
    group: 18,
    period: 2,
},
{
    symbol: "Na",
    number: 11,
    name: "Sodio",
    weight: "22.990",
    type: "Metal-alcalino",
    curiosity: "El sodio es un componente esencial de la sal de mesa y regula el equilibrio de líquidos en el cuerpo.",
    state: "Sólido",
    group: 1,
    period: 3,
},
{
    symbol: "Mg",
    number: 12,
    name: "Magnesio",
    weight: "24.305",
    type: "Metal-alcalinoterreo",
    curiosity: "El magnesio se utiliza en fuegos artificiales para producir chispas blancas brillantes.",
    state: "Sólido",
    group: 2,
    period: 3,
},
{
    symbol: "Al",
    number: 13,
    name: "Aluminio",
    weight: "26.982",
    type: "Metal-pobre",
    curiosity: "El aluminio es ligero y resistente, lo que lo hace ideal para aviones y latas de bebidas.",
    state: "Sólido",
    group: 13,
    period: 3,
},
{
    symbol: "Si",
    number: 14,
    name: "Silicio",
    weight: "28.085",
    type: "Metaloide",
    curiosity: "El silicio es el componente principal de los chips electrónicos y los paneles solares.",
    state: "Sólido",
    group: 14,
    period: 3,
},
{
    symbol: "P",
    number: 15,
    name: "Fósforo",
    weight: "30.974",
    type: "No-metal",
    curiosity: "El fósforo se encuentra en los fósforos y es esencial para el ADN y los huesos.",
    state: "Sólido",
    group: 15,
    period: 3,
},
{
    symbol: "S",
    number: 16,
    name: "Azufre",
    weight: "32.06",
    type: "No-metal",
    curiosity: "El azufre se utiliza en la fabricación de pólvora, fósforos y fertilizantes.",
    state: "Sólido",
    group: 16,
    period: 3,
},
{
    symbol: "Cl",
    number: 17,
    name: "Cloro",
    weight: "35.45",
    type: "Halogeno",
    curiosity: "El cloro se utiliza para desinfectar el agua potable y en piscinas.",
    state: "Gas",
    group: 17,
    period: 3,
},
{
    symbol: "Ar",
    number: 18,
    name: "Argón",
    weight: "39.948",
    type: "Gas-noble",
    curiosity: "El argón se utiliza en bombillas incandescentes para evitar que el filamento se queme.",
    state: "Gas",
    group: 18,
    period: 3,
},
{
    symbol: "K",
    number: 19,
    name: "Potasio",
    weight: "39.098",
    type: "Metal-alcalino",
    curiosity: "El potasio es esencial para la función muscular y nerviosa en el cuerpo humano.",
    state: "Sólido",
    group: 1,
    period: 4,
},
{
    symbol: "Ca",
    number: 20,
    name: "Calcio",
    weight: "40.078",
    type: "Metal-alcalinoterreo",
    curiosity: "El calcio es el componente principal de los huesos y los dientes.",
    state: "Sólido",
    group: 2,
    period: 4,
},
{
    symbol: "Sc",
    number: 21,
    name: "Escandio",
    weight: "44.956",
    type: "Metal-de-transicion",
    curiosity: "El escandio se utiliza en aleaciones ligeras para aviones y equipos deportivos.",
    state: "Sólido",
    group: 3,
    period: 4,
},
{
    symbol: "Ti",
    number: 22,
    name: "Titanio",
    weight: "47.867",
    type: "Metal-de-transicion",
    curiosity: "El titanio es conocido por su alta resistencia y se utiliza en implantes médicos y aviones.",
    state: "Sólido",
    group: 4,
    period: 4,
},
{
    symbol: "V",
    number: 23,
    name: "Vanadio",
    weight: "50.942",
    type: "Metal-de-transicion",
    curiosity: "El vanadio se utiliza en aleaciones de acero para mejorar su resistencia y durabilidad.",
    state: "Sólido",
    group: 5,
    period: 4,
},
{
    symbol: "Cr",
    number: 24,
    name: "Cromo",
    weight: "51.996",
    type: "Metal-de-transicion",
    curiosity: "El cromo se utiliza para dar brillo a los metales y en la fabricación de acero inoxidable.",
    state: "Sólido",
    group: 6,
    period: 4,
},
{
    symbol: "Mn",
    number: 25,
    name: "Manganeso",
    weight: "54.938",
    type: "Metal-de-transicion",
    curiosity: "El manganeso se utiliza en la producción de acero y en baterías recargables.",
    state: "Sólido",
    group: 7,
    period: 4,
},
{
    symbol: "Fe",
    number: 26,
    name: "Hierro",
    weight: "55.845",
    type: "Metal-de-transicion",
    curiosity: "El hierro es el metal más utilizado en la industria y es esencial para la hemoglobina en la sangre.",
    state: "Sólido",
    group: 8,
    period: 4,
},
{
    symbol: "Co",
    number: 27,
    name: "Cobalto",
    weight: "58.933",
    type: "Metal-de-transicion",
    curiosity: "El cobalto se utiliza en baterías recargables y en la fabricación de imanes permanentes.",
    state: "Sólido",
    group: 9,
    period: 4,
},
{
    symbol: "Ni",
    number: 28,
    name: "Níquel",
    weight: "58.693",
    type: "Metal-de-transicion",
    curiosity: "El níquel se utiliza en la fabricación de monedas y en aleaciones resistentes a la corrosión.",
    state: "Sólido",
    group: 10,
    period: 4,
},
{
    symbol: "Cu",
    number: 29,
    name: "Cobre",
    weight: "63.546",
    type: "Metal-de-transicion",
    curiosity: "El cobre es un excelente conductor de electricidad y se utiliza en cables eléctricos y monedas.",
    state: "Sólido",
    group: 11,
    period: 4,
},
{
    symbol: "Zn",
    number: 30,
    name: "Zinc",
    weight: "65.38",
    type: "Metal-de-transicion",
    curiosity: "El zinc se utiliza para recubrir otros metales y prevenir la corrosión.",
    state: "Sólido",
    group: 12,
    period: 4,
},
{
    symbol: "Ga",
    number: 31,
    name: "Galio",
    weight: "69.723",
    type: "Metal-pobre",
    curiosity: "El galio se funde a temperaturas ligeramente superiores a la del agua y se utiliza en semiconductores.",
    state: "Sólido",
    group: 13,
    period: 4,
},
{
    symbol: "Ge",
    number: 32,
    name: "Germanio",
    weight: "72.63",
    type: "Metaloide",
    curiosity: "El germanio se utiliza en la fabricación de transistores y diodos semiconductores.",
    state: "Solido",
    group: 14,
    period: 4,
},
{
    symbol: "As",
    number: 33,
    name: "Arsénico",
    weight: "74.922",
    type: "Metaloide",
    curiosity: "El arsénico se utiliza en la fabricación de semiconductores y en pesticidas.",
    state: "Solido",
    group: 15,
    period: 4,
},
{
    symbol: "Se",
    number: 34,
    name: "Selenio",
    weight: "78.971",
    type: "No-metal",
    curiosity: "El selenio se utiliza en la fabricación de paneles solares y en productos electrónicos.",
    state: "Sólido",
    group: 16,
    period: 4,
},
{
    symbol: "Br",
    number: 35,
    name: "Bromo",
    weight: "79.904",
    type: "Halogeno",
    curiosity: "El bromo se utiliza en productos químicos industriales y en la fabricación de retardantes de llama.",
    state: "Líquido",
    group: 17,
    period: 4,
},
{
    symbol: "Kr",
    number: 36,
    name: "Kriptón",
    weight: "83.798",
    type: "Gas-noble",
    curiosity: "El criptón se utiliza en luces de alta intensidad y en láseres.",
    state: "Gas",
    group: 18,
    period: 4,
},
{
    symbol: "Rb",
    number: 37,
    name: "Rubidio",
    weight: "85.468",
    type: "Metal-alcalino",
    curiosity: "El rubidio se utiliza en relojes atómicos y en investigación científica.",
    state: "Sólido",
    group: 1,
    period: 5,
},
{
    symbol: "Sr",
    number: 38,
    name: "Estroncio",
    weight: "87.62",
    type: "Metal-alcalinoterreo",
    curiosity: "El estroncio se utiliza en fuegos artificiales para producir llamas rojas brillantes.",
    state: "Sólido",
    group: 2,
    period: 5,
},
{
    symbol: "Y",
    number: 39,
    name: "Itrio",
    weight: "88.906",
    type: "Metal-de-transicion",
    curiosity: "El itrio se utiliza en la fabricación de pantallas de televisión y en láseres.",
    state: "Sólido",
    group: 3,
    period: 5,
},
{
    symbol: "Zr",
    number: 40,
    name: "Circonio",
    weight: "91.224",
    type: "Metal-de-transicion",
    curiosity: "El circonio se utiliza en la fabricación de joyas y en aplicaciones nucleares.",
    state: "Sólido",
    group: 4,
    period: 5,
},
  
  {
    symbol: "Yb",
    number: 70,
    name: "Iterbio",
    weight: "173.05",
    curiosity: "  El iterbio se utiliza en la fabricación de láseres y en la producción de imanes."  ,
    type: "Lantanido",
    state: "Sólido",
    group: 16,
    period: "LANTANIDO",
  },
  {
    symbol: "Lu",
    number: 71,
    name: "Lutecio",
    weight: "174.97",
    type: "Lantanido",
    curiosity: "  El lutecio se utiliza en la fabricación de láseres y en la producción de imanes."  ,
    state: "Sólido",
    group: 17,
    period: "LANTANIDO",

  },{
    symbol: "Nb",
    number: 41,
    name: "Niobio",
    weight: "92.906",
    type: "metal-de-transicion",
    curiosity: "El niobio se utiliza en aleaciones de acero y en la fabricación de superconductores.",
    state: "Sólido",
    group: 5,
    period: 5,
},
{
    symbol: "Mo",
    number: 42,
    name: "Molibdeno",
    weight: "95.95",
    type: "metal-de-transicion",
    curiosity: "El molibdeno se utiliza en la fabricación de acero y en la producción de aleaciones resistentes al calor.",
    state: "Sólido",
    group: 6,
    period: 5,
},
{
    symbol: "Tc",
    number: 43,
    name: "Tecnecio",
    weight: "98",
    type: "metal-de-transicion",
    curiosity: "El tecnecio se utiliza en medicina nuclear para la obtención de imágenes médicas y en tratamientos de radioterapia.",
    state: "Sólido",
    group: 7,
    period: 5,
},
{
    symbol: "Ru",
    number: 44,
    name: "Rutenio",
    weight: "101.07",
    type: "metal-de-transicion",
    curiosity: "El rutenio se utiliza en la fabricación de contactos eléctricos y en la producción de aleaciones especiales.",
    state: "Sólido",
    group: 8,
    period: 5,
},
{
    symbol: "Rh",
    number: 45,
    name: "Rodio",
    weight: "102.91",
    type: "metal-de-transicion",
    curiosity: "El rodio se utiliza en la fabricación de catalizadores para automóviles y en joyería.",
    state: "Sólido",
    group: 9,
    period: 5,
},
{
    symbol: "Pd",
    number: 46,
    name: "Paladio",
    weight: "106.42",
    type: "metal-de-transicion",
    curiosity: "El paladio se utiliza en la fabricación de catalizadores y en joyería.",
    state: "Sólido",
    group: 10,
    period: 5,
},
{
    symbol: "Ag",
    number: 47,
    name: "Plata",
    weight: "107.87",
    type: "metal-de-transicion",
    curiosity: "La plata es un excelente conductor de electricidad y se utiliza en joyería y monedas.",
    state: "Sólido",
    group: 11,
    period: 5,
},
{
    symbol: "Cd",
    number: 48,
    name: "Cadmio",
    weight: "112.41",
    type: "metal-de-transicion",
    curiosity: "El cadmio se utiliza en baterías recargables y en la fabricación de pigmentos.",
    state: "Sólido",
    group: 12,
    period: 5,
},
{
    symbol: "In",
    number: 49,
    name: "Indio",
    weight: "114.82",
    type: "metal-pobre",
    curiosity: "El indio se utiliza en la fabricación de pantallas táctiles y en aleaciones especiales.",
    state: "Sólido",
    group: 13,
    period: 5,
},
{
    symbol: "Sn",
    number: 50,
    name: "Estaño",
    weight: "118.71",
    type: "metal-pobre",
    curiosity: "El estaño se utiliza en la fabricación de latas de alimentos y en soldaduras.",
    state: "Sólido",
    group: 14,
    period: 5,
},
{
    symbol: "Sb",
    number: 51,
    name: "Antimonio",
    weight: "121.76",
    type: "metaloide",
    curiosity: "El antimonio se utiliza en la fabricación de aleaciones y en productos químicos.",
    state: "Sólido",
    group: 15,
    period: 5,
},
{
    symbol: "Te",
    number: 52,
    name: "Telurio",
    weight: "127.60",
    type: "metaloide",
    curiosity: "El telurio se utiliza en la fabricación de aleaciones y en la producción de semiconductores.",
    state: "Sólido",
    group: 16,
    period: 5,
},
{
    symbol: "I",
    number: 53,
    name: "Yodo",
    weight: "126.90",
    type: "halogeno",
    curiosity: "El yodo se utiliza en medicina para desinfectar heridas y en la producción de hormonas tiroideas.",
    state: "Sólido",
    group: 17,
    period: 5,
},
{
    symbol: "Xe",
    number: 54,
    name: "Xenón",
    weight: "131.29",
    type: "gas-noble",
    curiosity: "El xenón se utiliza en lámparas de alta intensidad y en la producción de anestésicos.",
    state: "Gas",
    group: 18,
    period: 5,
},
{
    symbol: "Cs",
    number: 55,
    name: "Cesio",
    weight: "132.91",
    type: "metal-alcalino",
    curiosity: "El cesio se utiliza en relojes atómicos y en la fabricación de lámparas de vapor de cesio.",
    state: "Sólido",
    group: 1,
    period: 6,
},
{
    symbol: "Ba",
    number: 56,
    name: "Bario",
    weight: "137.33",
    type: "metal-alcalinoterreo",
    curiosity: "El bario se utiliza en la fabricación de fuegos artificiales y en la producción de radiografías.",
    state: "Sólido",
    group: 2,
    period: 6,
},
{
    symbol: "La",
    number: 57,
    name: "Lantano",
    weight: "138.91",
    type: "lantanido",
    curiosity: "El lantano se utiliza en la fabricación de lentes de cámara y en la producción de imanes.",
    state: "Sólido",
    group: 3,
    period:  "LANTANIDO",
},
{
    symbol: "Ce",
    number: 58,
    name: "Cerio",
    weight: "140.12",
    type: "lantanido",
    curiosity: "El cerio se utiliza en la fabricación de catalizadores y en la producción de vidrio.",
    state: "Sólido",
    group: 4,
    period: "LANTANIDO",
},
{
    symbol: "Pr",
    number: 59,
    name: "Praseodimio",
    weight: "140.91",
    type: "lantanido",
    curiosity: "El praseodimio se utiliza en la fabricación de imanes y en la producción de aleaciones especiales.",
    state: "Sólido",
    group: 5,
    period: "LANTANIDO",
},
{
    symbol: "Nd",
    number: 60,
    name: "Neodimio",
    weight: "144.24",
    type: "lantanido",
    curiosity: "El neodimio se utiliza en la fabricación de imanes potentes y en la producción de láseres.",
    state: "Sólido",
    group: 6,
    period: "LANTANIDO",
},
{
    symbol: "Pm",
    number: 61,
    name: "Prometio",
    weight: "145",
    type: "lantanido",
    curiosity: "El prometio es radiactivo y se utiliza en fuentes de luz y en la producción de energía nuclear.",
    state: "Sólido",
    group: 7,
    period: "LANTANIDO",
},
{
    symbol: "Sm",
    number: 62,
    name: "Samario",
    weight: "150.36",
    type: "lantanido",
    curiosity: "El samario se utiliza en la fabricación de imanes y en la producción de láseres.",
    state: "Sólido",
    group: 8,
    period: "LANTANIDO",
},
{
    symbol: "Eu",
    number: 63,
    name: "Europio",
    weight: "151.96",
    type: "lantanido",
    curiosity: "El europio se utiliza en la fabricación de pantallas de televisión y en la producción de láseres.",
    state: "Sólido",
    group: 9,
    period: "LANTANIDO",
},
{
    symbol: "Gd",
    number: 64,
    name: "Gadolinio",
    weight: "157.25",
    type: "lantanido",
    curiosity: "El gadolinio se utiliza en la fabricación de imanes y en la producción de contrastes para resonancia magnética.",
    state: "Sólido",
    group: 10,
    period: "LANTANIDO",
},
{
    symbol: "Tb",
    number: 65,
    name: "Terbio",
    weight: "158.93",
    type: "lantanido",
    curiosity: "El terbio se utiliza en la fabricación de imanes y en la producción de láseres.",
    state: "Sólido",
    group: 11,
    period: "LANTANIDO",
},
{
    symbol: "Dy",
    number: 66,
    name: "Disprosio",
    weight: "162.50",
    type: "lantanido",
    curiosity: "El disprosio se utiliza en la fabricación de imanes y en la producción de láseres.",
    state: "Sólido",
    group: 12,
    period: "LANTANIDO",
},
{
    symbol: "Ho",
    number: 67,
    name: "Holmio",
    weight: "164.93",
    type: "lantanido",
    curiosity: "El holmio se utiliza en la fabricación de láseres y en la producción de imanes.",
    state: "Sólido",
    group: 13,
    period: "LANTANIDO",
},
{
    symbol: "Er",
    number: 68,
    name: "Erbio",
    weight: "167.26",
    type: "lantanido",
    curiosity: "El erbio se utiliza en la fabricación de láseres y en la producción de imanes.",
    state: "Sólido",
    group: 14,
    period: "LANTANIDO",
},
{
    symbol: "Tm",
    number: 69,
    name: "Tulio",
    weight: "168.93",
    type: "lantanido",
    curiosity: "El tulio se utiliza en la fabricación de láseres y en la producción de imanes.",
    state: "Sólido",
    group: 15,
    period: "LANTANIDO",
},
{
  symbol: "Hf",
  number: 72,
  name: "Hafnio",
  weight: "178.49",
  type: "metal-de-transicion",
  curiosity: "El hafnio se utiliza en la fabricación de reactores nucleares y en la producción de aleaciones especiales.",
  state: "Sólido",
  group: 4,
  period: 6,
},
{
  symbol: "Ta",
  number: 73,
  name: "Tántalo",
  weight: "180.95",
  type: "metal-de-transicion",
  curiosity: "El tántalo se utiliza en la fabricación de condensadores y en la producción de aleaciones especiales.",
  state: "Sólido",
  group: 5,
  period: 6,
},
{
  symbol: "W",
  number: 74,
  name: "Wolframio",
  weight: "183.84",
  type: "metal-de-transicion",
  curiosity: "El wolframio se utiliza en la fabricación de filamentos de bombillas y en la producción de aleaciones resistentes al calor.",
  state: "Sólido",
  group: 6,
  period: 6,
},
{
  symbol: "Re",
  number: 75,
  name: "Renio",
  weight: "186.21",
  type: "metal-de-transicion",
  curiosity: "El renio se utiliza en la fabricación de aleaciones especiales y en la producción de catalizadores.",
  state: "Sólido",
  group: 7,
  period: 6,
},
{
  symbol: "Os",
  number: 76,
  name: "Osmio",
  weight: "190.23",
  type: "metal-de-transicion",
  curiosity: "El osmio es el metal más denso y se utiliza en la fabricación de puntas de pluma y en la producción de aleaciones especiales.",
  state: "Sólido",
  group: 8,
  period: 6,
},
{
  symbol: "Ir",
  number: 77,
  name: "Iridio",
  weight: "192.22",
  type: "metal-de-transicion",
  curiosity: "El iridio se utiliza en la fabricación de contactos eléctricos y en la producción de aleaciones especiales.",
  state: "Sólido",
  group: 9,
  period: 6,
},
{
  symbol: "Pt",
  number: 78,
  name: "Platino",
  weight: "195.08",
  type: "metal-de-transicion",
  curiosity: "El platino se utiliza en la fabricación de joyería y en la producción de catalizadores.",
  state: "Sólido",
  group: 10,
  period: 6,
},
{
  symbol: "Au",
  number: 79,
  name: "Oro",
  weight: "196.97",
  type: "metal-de-transicion",
  curiosity: "El oro es un metal precioso utilizado en joyería y como reserva de valor.",
  state: "Sólido",
  group: 11,
  period: 6,
},
{
  symbol: "Hg",
  number: 80,
  name: "Mercurio",
  weight: "200.59",
  type: "metal-de-transicion",
  curiosity: "El mercurio es el único metal que es líquido a temperatura ambiente y se utiliza en termómetros y en la producción de amalgamas dentales.",
  state: "Líquido",
  group: 12,
  period: 6,
},
{
  symbol: "Tl",
  number: 81,
  name: "Talio",
  weight: "204.38",
  type: "metal-depost-transicion",
  curiosity: "El talio se utiliza en la fabricación de semiconductores y en la producción de aleaciones especiales.",
  state: "Sólido",
  group: 13,
  period: 6,
},
{
  symbol: "Pb",
  number: 82,
  name: "Plomo",
  weight: "207.2",
  type: "metal-depost-transicion",
  curiosity: "El plomo se utiliza en la fabricación de baterías y en la protección contra radiación.",
  state: "Sólido",
  group: 14,
  period: 6,
},
{
  symbol: "Bi",
  number: 83,
  name: "Bismuto",
  weight: "208.98",
  type: "metal-depost-transicion",
  curiosity: "El bismuto se utiliza en la fabricación de aleaciones y en productos farmacéuticos.",
  state: "Sólido",
  group: 15,
  period: 6,
},
{
  symbol: "Po",
  number: 84,
  name: "Polonio",
  weight: "209",
  type: "metal-depost-transicion",
  curiosity: "El polonio es radiactivo y se utiliza en la fabricación de dispositivos de detección de radiación.",
  state: "Sólido",
  group: 16,
  period: 6,
},
{
  symbol: "At",
  number: 85,
  name: "Astato",
  weight: "210",
  type: "halogeno",
  curiosity: "El astato es un elemento radiactivo extremadamente raro y se utiliza en investigación científica.",
  state: "Sólido",
  group: 17,
  period: 6,
},
{
  symbol: "Rn",
  number: 86,
  name: "Radón",
  weight: "222",
  type: "gas-noble",
  curiosity: "El radón es un gas radiactivo que se forma naturalmente y se encuentra en algunos lugares subterráneos.",
  state: "Gas",
  group: 18,
  period: 6,
},
{
  symbol: "Fr",
  number: 87,
  name: "Francio",
  weight: "223",
  type: "metal-alcalino",
  curiosity: "El francio es uno de los elementos más raros y radiactivos, y se descompone rápidamente.",
  state: "Sólido",
  group: 1,
  period: 7,
},
{
  symbol: "Ra",
  number: 88,
  name: "Radio",
  weight: "226",
  type: "metal-alcalinoterreo",
  curiosity: "El radio es radiactivo y se utiliza en tratamientos médicos y en la producción de energía nuclear.",
  state: "Sólido",
  group: 2,
  period: 7,
},
{
  symbol: "Ac",
  number: 89,
  name: "Actinio",
  weight: "227",
  type: "actinido",
  curiosity: "El actinio es radiactivo y se utiliza en la producción de energía nuclear y en investigación científica.",
  state: "Sólido",
  group: 3,
  period: "ACTINIDO",
},
{
  symbol: "Th",
  number: 90,
  name: "Torio",
  weight: "232.04",
  type: "actinido",
  curiosity: "El torio es un elemento radiactivo que se utiliza en la producción de energía nuclear y en investigación científica.",
  state: "Sólido",
  group: 3,
  period: "ACTINIDO",
},
{
  symbol: "Pa",
  number: 91,
  name: "Protactinio",
  weight: "231.04",
  type: "actinido",
  curiosity: "El protactinio es radiactivo y se utiliza en investigación científica y en la producción de energía nuclear.",
  state: "Sólido",
  group: 3,
  period: "ACTINIDO",
},
{
  symbol: "U",
  number: 92,
  name: "Uranio",
  weight: "238.03",
  type: "actinido",
  curiosity: "El uranio es un elemento radiactivo utilizado como combustible en reactores nucleares y en la fabricación de armas nucleares.",
  state: "Sólido",
  group: 3,
  period: "ACTINIDO",
},
{
  symbol: "Np",
  number: 93,
  name: "Neptunio",
  weight: "237",
  type: "actinido",
  curiosity: "El neptunio es un elemento radiactivo que se utiliza en investigación científica y en la producción de energía nuclear.",
  state: "Sólido",
  group: 3,
  period: "ACTINIDO",
},
{
  symbol: "Pu",
  number: 94,
  name: "Plutonio",
  weight: "244",
  type: "actinido",
  curiosity: "El plutonio es un elemento radiactivo utilizado en reactores nucleares y en la fabricación de armas nucleares.",
  state: "Sólido",
  group: 3,
  period: "ACTINIDO",
},
{
  symbol: "Am",
  number: 95,
  name: "Americio",
  weight: "243",
  type: "actinido",
  curiosity: "El americio se utiliza en detectores de humo y en la fabricación de láseres.",
  state: "Sólido",
  group: 3,
  period: "ACTINIDO",
},
{
  symbol: "Cm",
  number: 96,
  name: "Curio",
  weight: "247",
  type: "actinido",
  curiosity: "El curio es un elemento radiactivo que se utiliza en investigación científica y en la producción de energía nuclear.",
  state: "Sólido",
  group: 3,
  period: "ACTINIDO",
},
{
  symbol: "Bk",
  number: 97,
  name: "Berkelio",
  weight: "247",
  type: "actinido",
  curiosity: "El berkelio es un elemento radiactivo que se utiliza en investigación científica y en la producción de energía nuclear.",
  state: "Sólido",
  group: 3,
  period: "ACTINIDO",
},
{
  symbol: "Cf",
  number: 98,
  name: "Californio",
  weight: "251",
  type: "actinido",
  curiosity: "El californio es un elemento radiactivo que se utiliza en investigación científica y en la producción de energía nuclear.",
  state: "Sólido",
  group: 3,
  period: "ACTINIDO",
},
{
  symbol: "Es",
  number: 99,
  name: "Einstenio",
  weight: "252",
  type: "actinido",
  curiosity: "El einstenio es un elemento radiactivo que se utiliza en investigación científica y en la producción de energía nuclear.",
  state: "Sólido",
  group: 3,
  period: "ACTINIDO",
},
{
  symbol: "Fm",
  number: 100,
  name: "Fermio",
  weight: "257",
  type: "actinido",
  curiosity: "El fermio es un elemento radiactivo que se utiliza en investigación científica y en la producción de energía nuclear.",
  state: "Sólido",
  group: 3,
  period: "ACTINIDO",
},
{
  symbol: "Md",
  number: 101,
  name: "Mendelevio",
  weight: "258",
  type: "actinido",
  curiosity: "El mendelevio es un elemento radiactivo que se utiliza en investigación científica y en la producción de energía nuclear.",
  state: "Sólido",
  group: 3,
  period: "ACTINIDO",
},
{
  symbol: "No",
  number: 102,
  name: "Nobelio",
  weight: "259",
  type: "actinido",
  curiosity: "El nobelio es un elemento radiactivo que se utiliza en investigación científica y en la producción de energía nuclear.",
  state: "Sólido",
  group: 3,
  period: "ACTINIDO",
},
{
  symbol: "Lr",
  number: 103,
  name: "Lawrencio",
  weight: "262",
  type: "actinido",
  curiosity: "El lawrencio es un elemento radiactivo que se utiliza en investigación científica y en la producción de energía nuclear.",
  state: "Sólido",
  group: 3,
  period: "ACTINIDO",
},
{
  symbol: "Rf",
  number: 104,
  name: "Rutherfordio",
  weight: "267",
  type: "metal-de-transicion",
  curiosity: "El rutherfordio es un elemento sintético que se utiliza en investigación científica y en la producción de energía nuclear.",
  state: "Sólido",
  group: 4,
  period: 7,
},
{
  symbol: "Db",
  number: 105,
  name: "Dubnio",
  weight: "270",
  type: "metal-de-transicion",
  curiosity: "El dubnio es un elemento sintético que se utiliza en investigación científica y en la producción de energía nuclear.",
  state: "Sólido",
  group: 5,
  period: 7,
},
{
  symbol: "Sg",
  number: 106,
  name: "Seaborgio",
  weight: "271",
  type: "metal-de-transicion",
  curiosity: "El seaborgio es un elemento sintético que se utiliza en investigación científica y en la producción de energía nuclear.",
  state: "Sólido",
  group: 6,
  period: 7,
},
{
  symbol: "Bh",
  number: 107,
  name: "Bohrio",
  weight: "270",
  type: "metal-de-transicion",
  curiosity: "El bohrio es un elemento sintético que se utiliza en investigación científica y en la producción de energía nuclear.",
  state: "Sólido",
  group: 7,
  period: 7,
},
{
  symbol: "Hs",
  number: 108,
  name: "Hassio",
  weight: "277",
  type: "metal-de-transicion",
  curiosity: "El hassio es un elemento sintético que se utiliza en investigación científica y en la producción de energía nuclear.",
  state: "Sólido",
  group: 8,
  period: 7,
},
{
  symbol: "Mt",
  number: 109,
  name: "Meitnerio",
  weight: "278",
  type: "metal-de-transicion",
  curiosity: "El meitnerio es un elemento sintético que se utiliza en investigación científica y en la producción de energía nuclear.",
  state: "Sólido",
  group: 9,
  period: 7,
},
{
  symbol: "Ds",
  number: 110,
  name: "Darmstadtio",
  weight: "281",
  type: "metal-de-transicion",
  curiosity: "El darmstadtio es un elemento sintético que se utiliza en investigación científica y en la producción de energía nuclear.",
  state: "Sólido",
  group: 10,
  period: 7,
},
{
  symbol: "Rg",
  number: 111,
  name: "Roentgenio",
  weight: "282",
  type: "metal-de-transicion",
  curiosity: "El roentgenio es un elemento sintético que se utiliza en investigación científica y en la producción de energía nuclear.",
  state: "Sólido",
  group: 11,
  period: 7,
},
{
  symbol: "Cn",
  number: 112,
  name: "Copernicio",
  weight: "285",
  type: "metal-de-transicion",
  curiosity: "El copernicio es un elemento sintético que se utiliza en investigación científica y en la producción de energía nuclear.",
  state: "Sólido",
  group: 12,
  period: 7,
},
{
  symbol: "Nh",
  number: 113,
  name: "Nihonio",
  weight: "286",
  type: "metal-depost-transicion",
  curiosity: "El nihonio es un elemento sintético que se utiliza en investigación científica y en la producción de energía nuclear.",
  state: "Sólido",
  group: 13,
  period: 7,
},
{
  symbol: "Fl",
  number: 114,
  name: "Flerovio",
  weight: "289",
  type: "metal-depost-transicion",
  curiosity: "El flerovio es un elemento sintético que se utiliza en investigación científica y en la producción de energía nuclear.",
  state: "Sólido",
  group: 14,
  period: 7,
},
{
  symbol: "Mc",
  number: 115,
  name: "Moscovio",
  weight: "290",
  type: "metal-depost-transicion",
  curiosity: "El moscovio es un elemento sintético que se utiliza en investigación científica y en la producción de energía nuclear.",
  state: "Sólido",
  group: 15,
  period: 7,
},
{
  symbol: "Lv",
  number: 116,
  name: "Livermorio",
  weight: "293",
  type: "metal-depost-transicion",
  curiosity: "El livermorio es un elemento sintético que se utiliza en investigación científica y en la producción de energía nuclear.",
  state: "Sólido",
  group: 16,
  period: 7,
},
{
  symbol: "Ts",
  number: 117,
  name: "Tenesino",
  weight: "294",
  type: "halogeno",
  curiosity: "El tenesino es un elemento sintético que se utiliza en investigación científica y en la producción de energía nuclear.",
  state: "Sólido",
  group: 17,
  period: 7,
},
{
  symbol: "Og",
  number: 118,
  name: "Oganesón",
  weight: "294",
  type: "gas-noble",
  curiosity: "El oganesón es un elemento sintético que se utiliza en investigación científica y en la producción de energía nuclear.",
  state: "Gas",
  group: 18,
  period: 7,
},
  
];

 


  const elementPositions = {
    1: { column: 1, row: 1 }, // H
    2: { column: 18, row: 1 }, // He

    3: { column: 1, row: 2 }, // Li
    4: { column: 2, row: 2 }, // Be
    5: { column: 13, row: 2 }, // B
    6: { column: 14, row: 2 }, // C
    7: { column: 15, row: 2 }, // N
    8: { column: 16, row: 2 }, // O
    9: { column: 17, row: 2 }, // F
    10: { column: 18, row: 2 }, // Ne

    11: { column: 1, row: 3 }, // Na
    12: { column: 2, row: 3 }, // Mg
    13: { column: 13, row: 3 }, // Al
    14: { column: 14, row: 3 }, // Si
    15: { column: 15, row: 3 }, // P
    16: { column: 16, row: 3 }, // S
    17: { column: 17, row: 3 }, // Cl
    18: { column: 18, row: 3 }, // Ar

    19: { column: 1, row: 4 }, // K
    20: { column: 2, row: 4 }, // Ca
    21: { column: 3, row: 4 }, // Sc
    22: { column: 4, row: 4 }, // Ti
    23: { column: 5, row: 4 }, // V
    24: { column: 6, row: 4 }, // Cr
    25: { column: 7, row: 4 }, // Mn
    26: { column: 8, row: 4 }, // Fe
    27: { column: 9, row: 4 }, // Co
    28: { column: 10, row: 4 }, // Ni
    29: { column: 11, row: 4 }, // Cu
    30: { column: 12, row: 4 }, // Zn
    31: { column: 13, row: 4 }, // Ga
    32: { column: 14, row: 4 }, // Ge
    33: { column: 15, row: 4 }, // As
    34: { column: 16, row: 4 }, // Se
    35: { column: 17, row: 4 }, // Br
    36: { column: 18, row: 4 }, // Kr

    37: { column: 1, row: 5 }, // Rb
    38: { column: 2, row: 5 }, // Sr
    39: { column: 3, row: 5 }, // Y
    40: { column: 4, row: 5 }, // Zr
    41: { column: 5, row: 5 }, // Nb
    42: { column: 6, row: 5 }, // Mo
    43: { column: 7, row: 5 }, // Tc
    44: { column: 8, row: 5 }, // Ru
    45: { column: 9, row: 5 }, // Rh
    46: { column: 10, row: 5 }, // Pd
    47: { column: 11, row: 5 }, // Ag
    48: { column: 12, row: 5 }, // Cd
    49: { column: 13, row: 5 }, // In
    50: { column: 14, row: 5 }, // Sn
    51: { column: 15, row: 5 }, // Sb
    52: { column: 16, row: 5 }, // Te
    53: { column: 17, row: 5 }, // I
    54: { column: 18, row: 5 }, // Xe

    55: { column: 1, row: 6 }, // Cs
    56: { column: 2, row: 6 }, // Ba
    57: { column: 3, row: 8 }, // La
    58: { column: 4, row: 8 }, // Ce
    59: { column: 5, row: 8 }, // Pr
    60: { column: 6, row: 8 }, // Nd
    61: { column: 7, row: 8 }, // Pm
    62: { column: 8, row: 8 }, // Sm
    63: { column: 9, row: 8 }, // Eu
    64: { column: 10, row: 8 }, // Gd
    65: { column: 11, row: 8 }, // Tb
    66: { column: 12, row: 8 }, // Dy
    67: { column: 13, row: 8 }, // Ho
    68: { column: 14, row: 8 }, // Er
    69: { column: 15, row: 8 }, // Tm
    70: { column: 16, row: 8 }, // Yb
    71: { column: 17, row: 8 }, // Lu
    72: { column: 4, row: 6 }, // Hf
    73: { column: 5, row: 6 }, // Ta
    74: { column: 6, row: 6 }, // W
    75: { column: 7, row: 6 }, // Re
    76: { column: 8, row: 6 }, // Os
    77: { column: 9, row: 6 }, // Ir
    78: { column: 10, row: 6 }, // Pt
    79: { column: 11, row: 6 }, // Au
    80: { column: 12, row: 6 }, // Hg
    81: { column: 13, row: 6 }, // Tl
    82: { column: 14, row: 6 }, // Pb
    83: { column: 15, row: 6 }, // Bi
    84: { column: 16, row: 6 }, // Po
    85: { column: 17, row: 6 }, // At
    86: { column: 18, row: 6 }, // Rn

    87: { column: 1, row: 7 }, // Fr
    88: { column: 2, row: 7 }, // Ra
    89: { column: 3, row: 9 }, // Ac
    90: { column: 4, row: 9 }, // Th
    91: { column: 5, row: 9 }, // Pa
    92: { column: 6, row: 9 }, // U
    93: { column: 7, row: 9 }, // Np
    94: { column: 8, row: 9 }, // Pu
    95: { column: 9, row: 9 }, // Am
    96: { column: 10, row: 9 }, // Cm
    97: { column: 11, row: 9 }, // Bk
    98: { column: 12, row: 9 }, // Cf
    99: { column: 13, row: 9 }, // Es
    100: { column: 14, row: 9 }, // Fm
    101: { column: 15, row: 9 }, // Md
    102: { column: 16, row: 9 }, // No
    103: { column: 17, row: 9 }, // Lr
    104: { column: 4, row: 7 }, // Rf (Rutherfordio)
    105: { column: 5, row: 7 }, // Db (Dubnio)
    106: { column: 6, row: 7 }, // Sg (Seaborgio)
    107: { column: 7, row: 7 }, // Bh (Bohrio)
    108: { column: 8, row: 7 }, // Hs (Hassio)
    109: { column: 9, row: 7 }, // Mt (Meitnerio)
    110: { column: 10, row: 7 }, // Ds (Darmstadtio)
    111: { column: 11, row: 7 }, // Rg (Roentgenio)
    112: { column: 12, row: 7 }, // Cn (Copernicio)
    113: { column: 13, row: 7 }, // Nh (Nihonio)
    114: { column: 14, row: 7 }, // Fl (Flerovio)
    115: { column: 15, row: 7 }, // Mc (Moscovio)
    116: { column: 16, row: 7 }, // Lv (Livermorio)
    117: { column: 17, row: 7 }, // Ts (Tenesino)
    118: { column: 18, row: 7 }, // Og (Oganesón)
  };
  const elementosDestacados = [
    {
      symbol: "H",
      name: "Hidrógeno",
      description: "El hidrógeno es el elemento más abundante en el universo y representa aproximadamente el 75% de su masa elemental.",
    },
    {
      symbol: "O",
      name: "Oxígeno",
      description: "El oxígeno es vital para la respiración y constituye aproximadamente el 21% del aire.",
    },
    {
      symbol: "Fe",
      name: "Hierro",
      description: "El hierro es esencial para la hemoglobina en la sangre y es el metal más utilizado en la industria.",
    },
    {
      symbol: "Au",
      name: "Oro",
      description: "El oro es un metal precioso utilizado en joyería y como reserva de valor.",
    },
    {
      symbol: "C",
      name: "Carbono",
      description: "El carbono es la base de la vida en la Tierra y forma compuestos como el grafito y los diamantes.",
    },
  ];
  function cambiarElementoDelDia() {
    const elementoDia = document.querySelector(".elemento-dia");
    const randomIndex = Math.floor(Math.random() * elementosDestacados.length);
    const elemento = elementosDestacados[randomIndex];
  
    // Actualiza el contenido de la sección
    elementoDia.innerHTML = `
      <h2>Elemento del dia: ${elemento.name} (${elemento.symbol})</h2>
      <p>${elemento.description}</p>
    `;
     // Cambia cada 24 horas (86400000 ms)
  }
  setInterval(cambiarElementoDelDia, 8); // Cambia cada 24 horas (86400000 ms)
  
  // Llama a la función al cargar la página
  document.addEventListener("DOMContentLoaded", cambiarElementoDelDia);

  function generatePeriodicTable() {
    if (!periodicTable) return;
    periodicTable.innerHTML = "";

    PeriodicTable.forEach((element) => {
      const elementDiv = document.createElement("div");
      elementDiv.className = `element ${element.type
        .toLowerCase()
        .replace(/\s+/g, "-")}`;

      if (elementPositions[element.number]) {
        elementDiv.style.gridColumn = elementPositions[element.number].column;
        elementDiv.style.gridRow = elementPositions[element.number].row;
      }

      elementDiv.innerHTML = `
      <div class="symbol">${element.symbol}</div>
    `;

      elementDiv.addEventListener("click", function () {
        if (modal) {
          modal.style.display = "flex";
          modalTitle.textContent = element.name;
          modalSymbol.textContent = element.symbol;
          modalNumber.textContent = element.number;
          modalWeight.textContent = element.weight;
          modalCuriosity.textContent = element.curiosity;
          modalType.textContent = element.type ;
          modalGroup.textContent = element.group ;
          modalPeriod.textContent = element.period ;
          modalState.textContent = element.state ;
        }
      });

      periodicTable.appendChild(elementDiv);
    });
  }
  
  function createPages() {
    if (!pagesContainer) return;
    pagesContainer.innerHTML = "";
    pages = [];

    for (let i = 0; i < PeriodicTable.length; i += elementsPerPage) {
      const page = document.createElement("div");
      page.className = "page";
      if (pages.length === 0) page.classList.add("active");

      PeriodicTable.slice(i, i + elementsPerPage).forEach((element) => {
        const elementDiv = document.createElement("div");

        // Asignar la clase del tipo de elemento correctamente
        elementDiv.className = `element ${element.type
          .toLowerCase()
          .replace(/\s+/g, "-")}`;

        elementDiv.innerHTML = `
        <div class="symbol">${element.symbol}</div>
      `;

        elementDiv.addEventListener("click", function () {
          if (modal) {
            modal.style.display = "flex";
            modalTitle.textContent = element.name;
            modalSymbol.textContent = element.symbol;
            modalNumber.textContent = element.number;
            modalWeight.textContent = element.weight;
            modalType.textContent = element.type;
            modalCuriosity.textContent = element.curiosity;
            modalType.textContent = element.type ;
          modalGroup.textContent = element.group ;
          modalPeriod.textContent = element.period ;
          modalState.textContent = element.state ;
          
          }
        });

        page.appendChild(elementDiv);
      });

      pages.push(page);
      pagesContainer.appendChild(page);
    }
  }

  function updatePagination() {
    pages.forEach((page, index) => {
      page.classList.toggle("active", index === currentPage);
    });
    if (prevButton && nextButton) {
      prevButton.disabled = currentPage === 0;
      nextButton.disabled = currentPage === pages.length - 1;
    }
  }

  if (prevButton) {
    prevButton.addEventListener("click", function () {
      if (currentPage > 0) {
        currentPage--;
        updatePagination();
      }
    });
  }

  if (nextButton) {
    nextButton.addEventListener("click", function () {
      if (currentPage < pages.length - 1) {
        currentPage++;
        updatePagination();
      }
    });
  }


  function checkScreenSize() {
    if (window.innerWidth < 768) {
      if (periodicTable) periodicTable.style.display = "none";
      if (pagesContainer) pagesContainer.style.display = "block";
      createPages();
      updatePagination();
    } else {
      if (periodicTable) periodicTable.style.display = "grid";
      if (pagesContainer) pagesContainer.style.display = "none";
      generatePeriodicTable();
    }
  }

  if (closeModal) {
    closeModal.addEventListener("click", function () {
      if (modal) modal.style.display = "none";
    });
  }

  window.addEventListener("click", function (event) {
    if (modal && event.target === modal) {
      modal.style.display = "none";
    }
  });

  checkScreenSize();
  window.addEventListener("resize", checkScreenSize);
});
