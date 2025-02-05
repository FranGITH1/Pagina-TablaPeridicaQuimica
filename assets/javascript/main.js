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
  const closeModal = document.querySelector(".close");

  let currentPage = 0;
  const elementsPerPage = 20;
  let pages = [];



const PeriodicTable = [
  
    { symbol: "H", number: 1, name: "Hidrógeno", weight: "1.008", type: "No-metal" },
    { symbol: "He", number: 2, name: "Helio", weight: "4.0026", type: "Gas-noble" },
    { symbol: "Li", number: 3, name: "Litio", weight: "6.94", type: "Metal-alcalino" },
    { symbol: "Be", number: 4, name: "Berilio", weight: "9.0122", type: "Metal-alcalinoterreo" },
    { symbol: "B", number: 5, name: "Boro", weight: "10.81", type: "Metaloide" },
    { symbol: "C", number: 6, name: "Carbono", weight: "12.011", type: "No-metal" },
    { symbol: "N", number: 7, name: "Nitrógeno", weight: "14.007", type: "No-metal" },
    { symbol: "O", number: 8, name: "Oxígeno", weight: "15.999", type: "No-metal" },
    { symbol: "F", number: 9, name: "Flúor", weight: "18.998", type: "Halogeno" },
    { symbol: "Ne", number: 10, name: "Neón", weight: "20.180", type: "Gas-noble" },
    { symbol: "Na", number: 11, name: "Sodio", weight: "22.990", type: "Metal-alcalino" },
    { symbol: "Mg", number: 12, name: "Magnesio", weight: "24.305", type: "Metal-alcalinoterreo" },
    { symbol: "Al", number: 13, name: "Aluminio", weight: "26.982", type: "Metal-de transicion" },
    { symbol: "Si", number: 14, name: "Silicio", weight: "28.085", type: "Metaloide" },
    { symbol: "P", number: 15, name: "Fósforo", weight: "30.974", type: "No-metal" },
    { symbol: "S", number: 16, name: "Azufre", weight: "32.06", type: "No-metal" },
    { symbol: "Cl", number: 17, name: "Cloro", weight: "35.45", type: "Halogeno" },
    { symbol: "Ar", number: 18, name: "Argón", weight: "39.948", type: "Gas-noble" },
    { symbol: "K", number: 19, name: "Potasio", weight: "39.098", type: "Metal-alcalino" },
    { symbol: "Ca", number: 20, name: "Calcio", weight: "40.078", type: "Metal-alcalinoterreo" },
    { symbol: "Sc", number: 21, name: "Escandio", weight: "44.956", type: "Metal-de-transicion" },
    { symbol: "Ti", number: 22, name: "Titanio", weight: "47.867", type: "Metal-de-transicion" },
    { symbol: "V", number: 23, name: "Vanadio", weight: "50.942", type: "Metal-de-transicion" },
    { symbol: "Cr", number: 24, name: "Cromo", weight: "51.996", type: "Metal-de-transicion" },
    { symbol: "Mn", number: 25, name: "Manganeso", weight: "54.938", type: "Metal-de-transicion" },
    { symbol: "Fe", number: 26, name: "Hierro", weight: "55.845", type: "Metal-de-transicion" },
    { symbol: "Co", number: 27, name: "Cobalto", weight: "58.933", type: "Metal-de-transicion" },
    { symbol: "Ni", number: 28, name: "Níquel", weight: "58.693", type: "Metal-de-transicion" },
    { symbol: "Cu", number: 29, name: "Cobre", weight: "63.546", type: "Metal-de-transicion" },
    { symbol: "Zn", number: 30, name: "Zinc", weight: "65.38", type: "Metal-de-transicion" },
    { symbol: "Ga", number: 31, name: "Galio", weight: "69.723", type: "Metal-de-transicion" },
    { symbol: "Ge", number: 32, name: "Germanio", weight: "72.63", type: "Metaloide" },
    { symbol: "As", number: 33, name: "Arsénico", weight: "74.922", type: "Metaloide" },
    { symbol: "Se", number: 34, name: "Selenio", weight: "78.971", type: "No-metal" },
    { symbol: "Br", number: 35, name: "Bromo", weight: "79.904", type: "Halogeno" },
    { symbol: "Kr", number: 36, name: "Kriptón", weight: "83.798", type: "Gas-noble" },
    { symbol: "Rb", number: 37, name: "Rubidio", weight: "85.468", type: "Metal-alcalino" },
    { symbol: "Sr", number: 38, name: "Estroncio", weight: "87.62", type: "Metal-alcalinoterreo" },
    { symbol: "Y", number: 39, name: "Itrio", weight: "88.906", type: "Metal-de-transicion" },
    { symbol: "Zr", number: 40, name: "Circonio", weight: "91.224", type: "Metal-de-transicion" },
    { symbol: "Nb", number: 41, name: "Niobio", weight: "92.906", type: "Metal-de-transicion" },
    { symbol: "Mo", number: 42, name: "Molibdeno", weight: "95.95", type: "Metal-de-transicion" },
    { symbol: "Tc", number: 43, name: "Tecnecio", weight: "98", type: "Metal-de-transicion" },
    { symbol: "Ru", number: 44, name: "Rutenio", weight: "101.07", type: "Metal-de transicion" },
    { symbol: "Rh", number: 45, name: "Rodio", weight: "102.91", type: "Metal-de-transicion" },
    { symbol: "Pd", number: 46, name: "Paladio", weight: "106.42", type: "Metal-de-transicion" },
    { symbol: "Ag", number: 47, name: "Plata", weight: "107.87", type: "Metal-de-transicion" },
    { symbol: "Cd", number: 48, name: "Cadmio", weight: "112.41", type: "Metal-de-transicion" },
    { symbol: "In", number: 49, name: "Indio", weight: "114.82", type: "Metal-de-transicion" },
    { symbol: "Sn", number: 50, name: "Estaño", weight: "118.71", type: "Metal-de-transicion" },
    { symbol: "Sb", number: 51, name: "Antimonio", weight: "121.76", type: "Metaloide" },
    { symbol: "Te", number: 52, name: "Telurio", weight: "127.60", type: "Metaloide" },
    { symbol: "I", number: 53, name: "Yodo", weight: "126.90", type: "Halogeno" },
    { symbol: "Xe", number: 54, name: "Xenón", weight: "131.29", type: "Gas-noble" },
   { symbol: "Cs", number: 55, name: "Cesio", weight: "132.91", type: "Metal-alcalino" },
  { symbol: "Ba", number: 56, name: "Bario", weight: "137.33", type: "Metal-alcalinoterreo" },
  { symbol: "La", number: 57, name: "Lantano", weight: "138.91", type: "Lantanido" },
  { symbol: "Ce", number: 58, name: "Cerio", weight: "140.12", type: "Lantanido" },
  { symbol: "Pr", number: 59, name: "Praseodimio", weight: "140.91", type: "Lantanido" },
  { symbol: "Nd", number: 60, name: "Neodimio", weight: "144.24", type: "Lantanido" },
  { symbol: "Pm", number: 61, name: "Prometio", weight: "145", type: "Lantanido" },
  { symbol: "Sm", number: 62, name: "Samario", weight: "150.36", type: "Lantanido" },
  { symbol: "Eu", number: 63, name: "Europio", weight: "151.96", type: "Lantanido" },
  { symbol: "Gd", number: 64, name: "Gadolinio", weight: "157.25", type: "Lantanido" },
  { symbol: "Tb", number: 65, name: "Terbio", weight: "158.93", type: "Lantanido" },
  { symbol: "Dy", number: 66, name: "Disprosio", weight: "162.50", type: "Lantanido" },
  { symbol: "Ho", number: 67, name: "Holmio", weight: "164.93", type: "Lantanido" },
  { symbol: "Er", number: 68, name: "Erbio", weight: "167.26", type: "Lantanido" },
  { symbol: "Tm", number: 69, name: "Tulio", weight: "168.93", type: "Lantanido" },
  { symbol: "Yb", number: 70, name: "Iterbio", weight: "173.05", type: "Lantanido" },
  { symbol: "Lu", number: 71, name: "Lutecio", weight: "174.97", type: "Lantanido" },
  { symbol: "Hf", number: 72, name: "Hafnio", weight: "178.49", type: "Metal-de-transicion" },
  { symbol: "Ta", number: 73, name: "Tántalo", weight: "180.95", type: "Metal-de-transicion" },
  { symbol: "W", number: 74, name: "Wolframio", weight: "183.84", type: "Metal-de-transicion" },
  { symbol: "Re", number: 75, name: "Renio", weight: "186.21", type: "Metal-de-transicion" },
  { symbol: "Os", number: 76, name: "Osmio", weight: "190.23", type: "Metal-de-transicion" },
  { symbol: "Ir", number: 77, name: "Iridio", weight: "192.22", type: "Metal-de-transicion" },
  { symbol: "Pt", number: 78, name: "Platino", weight: "195.08", type: "Metal-de-transicion" },
  { symbol: "Au", number: 79, name: "Oro", weight: "196.97", type: "Metal-de-transicion" },
  { symbol: "Hg", number: 80, name: "Mercurio", weight: "200.59", type: "Metal-de-transicion" },
  { symbol: "Tl", number: 81, name: "Talio", weight: "204.38", type: "Metal-depost-transicion" },
  { symbol: "Pb", number: 82, name: "Plomo", weight: "207.2", type: "Metal-depost-transicion" },
  { symbol: "Bi", number: 83, name: "Bismuto", weight: "208.98", type: "Metal-depost-transicion" },
  { symbol: "Po", number: 84, name: "Polonio", weight: "209", type: "Metal-depost-transicion" },
  { symbol: "At", number: 85, name: "Astato", weight: "210", type: "Halogeno" },
  { symbol: "Rn", number: 86, name: "Radón", weight: "222", type: "Gas-noble" },
  { symbol: "Fr", number: 87, name: "Francio", weight: "223", type: "Metal-alcalino" },
  { symbol: "Ra", number: 88, name: "Radio", weight: "226", type: "Metal-alcalinoterreo" },
  { symbol: "Ac", number: 89, name: "Actinio", weight: "227", type: "Actinido" },
  { symbol: "Th", number: 90, name: "Torio", weight: "232.04", type: "Actinido" },
  { symbol: "Pa", number: 91, name: "Protactinio", weight: "231.04", type: "Actinido" },
  { symbol: "U", number: 92, name: "Uranio", weight: "238.03", type: "Actinido" },
  { symbol: "Np", number: 93, name: "Neptunio", weight: "237", type: "Actinido" },
  { symbol: "Pu", number: 94, name: "Plutonio", weight: "244", type: "Actinido" },
  { symbol: "Am", number: 95, name: "Americio", weight: "243", type: "Actinido" },
  { symbol: "Cm", number: 96, name: "Curio", weight: "247", type: "Actinido" },
  { symbol: "Bk", number: 97, name: "Berkelio", weight: "247", type: "Actinido" },
  { symbol: "Cf", number: 98, name: "Californio", weight: "251", type: "Actinido" },
  { symbol: "Es", number: 99, name: "Einstenio", weight: "252", type: "Actinido" },
  { symbol: "Fm", number: 100, name: "Fermio", weight: "257", type: "Actinido" },
  { symbol: "Md", number: 101, name: "Mendelevio", weight: "258", type: "Actinido" },
  { symbol: "No", number: 102, name: "Nobelio", weight: "259", type: "Actinido" },
  { symbol: "Lr", number: 103, name: "Lawrencio", weight: "262", type: "Actinido" },
  { symbol: "Rf", number: 104, name: "Rutherfordio", weight: "267", type: "Metal-de-transicion" },
  { symbol: "Db", number: 105, name: "Dubnio", weight: "270", type: "Metal-de-transicion" },
  { symbol: "Sg", number: 106, name: "Seaborgio", weight: "271", type: "Metal-de-transicion" },
  { symbol: "Bh", number: 107, name: "Bohrio", weight: "270", type: "Metal-de-transicion" },
  { symbol: "Hs", number: 108, name: "Hassio", weight: "277", type: "Metal-de-transicion" },
  { symbol: "Mt", number: 109, name: "Meitnerio", weight: "278", type: "Metal-de-transicion" },
  { symbol: "Ds", number: 110, name: "Darmstadtio", weight: "281", type: "Metal-de-transicion" },
  { symbol: "Rg", number: 111, name: "Roentgenio", weight: "282", type: "Metal-de-transicion" },
  { symbol: "Cn", number: 112, name: "Copernicio", weight: "285", type: "Metal-de-transicion" },
  { symbol: "Nh", number: 113, name: "Nihonio", weight: "286", type: "Metal-depost-transicion" },
  { symbol: "Fl", number: 114, name: "Flerovio", weight: "289", type: "Metal-depost-transicion" },
  { symbol: "Mc", number: 115, name: "Moscovio", weight: "290", type: "Metal-depost-transicion" },
  { symbol: "Lv", number: 116, name: "Livermorio", weight: "293", type: "Metal-depost-transicion" },
  { symbol: "Ts", number: 117, name: "Tenesino", weight: "294", type: "Halogeno" },
  { symbol: "Og", number: 118, name: "Oganesón", weight: "294", type: "Gas-noble" }
  // Add the remaining elements here...
];

const elementPositions = {
  1: { column: 1, row: 1 },  // H
  2: { column: 18, row: 1 }, // He

  3: { column: 1, row: 2 },  // Li
  4: { column: 2, row: 2 },  // Be
  5: { column: 13, row: 2 }, // B
  6: { column: 14, row: 2 }, // C
  7: { column: 15, row: 2 }, // N
  8: { column: 16, row: 2 }, // O
  9: { column: 17, row: 2 }, // F
  10: { column: 18, row: 2 }, // Ne

  11: { column: 1, row: 3 },  // Na
  12: { column: 2, row: 3 },  // Mg
  13: { column: 13, row: 3 }, // Al
  14: { column: 14, row: 3 }, // Si
  15: { column: 15, row: 3 }, // P
  16: { column: 16, row: 3 }, // S
  17: { column: 17, row: 3 }, // Cl
  18: { column: 18, row: 3 }, // Ar

  19: { column: 1, row: 4 },  // K
  20: { column: 2, row: 4 },  // Ca
  21: { column: 3, row: 4 },  // Sc
  22: { column: 4, row: 4 },  // Ti
  23: { column: 5, row: 4 },  // V
  24: { column: 6, row: 4 },  // Cr
  25: { column: 7, row: 4 },  // Mn
  26: { column: 8, row: 4 },  // Fe
  27: { column: 9, row: 4 },  // Co
  28: { column: 10, row: 4 }, // Ni
  29: { column: 11, row: 4 }, // Cu
  30: { column: 12, row: 4 }, // Zn
  31: { column: 13, row: 4 }, // Ga
  32: { column: 14, row: 4 }, // Ge
  33: { column: 15, row: 4 }, // As
  34: { column: 16, row: 4 }, // Se
  35: { column: 17, row: 4 }, // Br
  36: { column: 18, row: 4 }, // Kr

  37: { column: 1, row: 5 },  // Rb
  38: { column: 2, row: 5 },  // Sr
  39: { column: 3, row: 5 },  // Y
  40: { column: 4, row: 5 },  // Zr
  41: { column: 5, row: 5 },  // Nb
  42: { column: 6, row: 5 },  // Mo
  43: { column: 7, row: 5 },  // Tc
  44: { column: 8, row: 5 },  // Ru
  45: { column: 9, row: 5 },  // Rh
  46: { column: 10, row: 5 }, // Pd
  47: { column: 11, row: 5 }, // Ag
  48: { column: 12, row: 5 }, // Cd
  49: { column: 13, row: 5 }, // In
  50: { column: 14, row: 5 }, // Sn
  51: { column: 15, row: 5 }, // Sb
  52: { column: 16, row: 5 }, // Te
  53: { column: 17, row: 5 }, // I
  54: { column: 18, row: 5 }, // Xe

  55: { column: 1, row: 6 },  // Cs
  56: { column: 2, row: 6 },  // Ba
  57: { column: 3, row: 8 },  // La
  58: { column: 4, row: 8 },  // Ce
  59: { column: 5, row: 8 },  // Pr
  60: { column: 6, row: 8 },  // Nd
  61: { column: 7, row: 8 },  // Pm
  62: { column: 8, row: 8 },  // Sm
  63: { column: 9, row: 8 },  // Eu
  64: { column: 10, row: 8 }, // Gd
  65: { column: 11, row: 8 }, // Tb
  66: { column: 12, row: 8 }, // Dy
  67: { column: 13, row: 8 }, // Ho
  68: { column: 14, row: 8 }, // Er
  69: { column: 15, row: 8 }, // Tm
  70: { column: 16, row: 8 }, // Yb
  71: { column: 17, row: 8 }, // Lu
  72: { column: 4, row: 6 },  // Hf
  73: { column: 5, row: 6 },  // Ta
  74: { column: 6, row: 6 },  // W
  75: { column: 7, row: 6 },  // Re
  76: { column: 8, row: 6 },  // Os
  77: { column: 9, row: 6 },  // Ir
  78: { column: 10, row: 6 }, // Pt
  79: { column: 11, row: 6 }, // Au
  80: { column: 12, row: 6 }, // Hg
  81: { column: 13, row: 6 }, // Tl
  82: { column: 14, row: 6 }, // Pb
  83: { column: 15, row: 6 }, // Bi
  84: { column: 16, row: 6 }, // Po
  85: { column: 17, row: 6 }, // At
  86: { column: 18, row: 6 }, // Rn

  87: { column: 1, row: 7 },  // Fr
  88: { column: 2, row: 7 },  // Ra
  89: { column: 3, row: 9 },  // Ac
  90: { column: 4, row: 9 },  // Th
  91: { column: 5, row: 9 },  // Pa
  92: { column: 6, row: 9 },  // U
  93: { column: 7, row: 9 },  // Np
  94: { column: 8, row: 9 },  // Pu
  95: { column: 9, row: 9 },  // Am
  96: { column: 10, row: 9 }, // Cm
  97: { column: 11, row: 9 }, // Bk
  98: { column: 12, row: 9 }, // Cf
  99: { column: 13, row: 9 }, // Es
  100: { column: 14, row: 9 }, // Fm
  101: { column: 15, row: 9 }, // Md
  102: { column: 16, row: 9 }, // No
  103: { column: 17, row: 9 }, // Lr
  104: { column: 4, row: 7 },  // Rf (Rutherfordio)
 105: { column: 5, row: 7 },  // Db (Dubnio)
 106: { column: 6, row: 7 },  // Sg (Seaborgio)
107: { column: 7, row: 7 },  // Bh (Bohrio)
108: { column: 8, row: 7 },  // Hs (Hassio)
109: { column: 9, row: 7 },  // Mt (Meitnerio)
110: { column: 10, row: 7 }, // Ds (Darmstadtio)
111: { column: 11, row: 7 }, // Rg (Roentgenio)
112: { column: 12, row: 7 }, // Cn (Copernicio)
113: { column: 13, row: 7 }, // Nh (Nihonio)
114: { column: 14, row: 7 }, // Fl (Flerovio)
115: { column: 15, row: 7 }, // Mc (Moscovio)
116: { column: 16, row: 7 }, // Lv (Livermorio)
117: { column: 17, row: 7 }, // Ts (Tenesino)
118: { column: 18, row: 7 }  // Og (Oganesón)

};




function generatePeriodicTable() {
  if (!periodicTable) return;
  periodicTable.innerHTML = "";

  PeriodicTable.forEach(element => {
    const elementDiv = document.createElement("div");
    elementDiv.className = `element ${element.type.toLowerCase().replace(/\s+/g, '-')}`;

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
    
        // Agregar el tipo de elemento
        modalType.textContent = element.type || "Desconocido";
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

    PeriodicTable.slice(i, i + elementsPerPage).forEach(element => {
      const elementDiv = document.createElement("div");
      
      // Asignar la clase del tipo de elemento correctamente
      elementDiv.className = `element ${element.type.toLowerCase().replace(/\s+/g, '-')}`;

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

document.addEventListener("DOMContentLoaded", function () {
  let lastScrollTop = 0;
  const header = document.querySelector("header");

  window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY;

    if (scrollTop > lastScrollTop) {
      // Ocultar header cuando el usuario baja
      header.classList.add("hidden");
    } else {
      // Mostrar header cuando el usuario sube
      header.classList.remove("hidden");
    }

    lastScrollTop = scrollTop;
  });
});


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
