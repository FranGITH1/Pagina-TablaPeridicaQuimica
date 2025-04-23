import { PeriodicTable } from './Elementos.js';

document.addEventListener("DOMContentLoaded", function () {
  const nombreElemento = document.getElementById("nombre-elemento");
  const simbolo = document.getElementById("simbolo");
  const estado = document.getElementById("estado");
  const grupo = document.getElementById("grupo");
  const periodo = document.getElementById("periodo");
  const electronegatividad = document.getElementById("electronegatividad");
  const usos = document.getElementById("usos");
  const simboloGrande = document.getElementById("simbolo-grande");
  const numeroAtomicoGrande = document.getElementById("numero-atomico-grande");
  const masaGrande = document.getElementById("masa-grande");

  const botonAnterior = document.getElementById("anterior");
  const botonSiguiente = document.getElementById("siguiente");

  const inputBuscarNumero = document.getElementById("buscar-numero");
  const buscarBoton = document.getElementById("buscar-boton");

  let currentElementIndex = 0; // Índice del elemento actual

  // Función para mostrar la información del elemento
  function displayElementInfo(index) {
    const element = PeriodicTable[index];

    if (!element) {
      console.error('Elemento no encontrado');
      nombreElemento.textContent = "Elemento no encontrado";
      return;
    }
    
    // Actualiza las secciones del HTML con la información del elemento
    nombreElemento.textContent = element.name;
    simbolo.textContent = element.symbol;
    estado.textContent = element.state;
    grupo.textContent = element.group;
    periodo.textContent = element.period;
    electronegatividad.textContent = element.electronegativity;
    usos.textContent = element.curiosity;
    simboloGrande.textContent = element.symbol;
    numeroAtomicoGrande.textContent = `Número atómico: ${element.number}`;
    masaGrande.textContent = `Masa: ${element.weight} u`;
  }

  // Función para buscar un elemento por número atómico
  function buscarElemento() {
    const numeroAtomico = parseInt(inputBuscarNumero.value);

    if (isNaN(numeroAtomico) || numeroAtomico < 1 || numeroAtomico > PeriodicTable.length) {
      alert("Por favor, ingresa un número atómico válido (1-118).");
      return;
    }

    const elementIndex = PeriodicTable.findIndex(el => el.number === numeroAtomico);
    if (elementIndex !== -1) {
      currentElementIndex = elementIndex;
      displayElementInfo(currentElementIndex);
    } else {
      alert("Elemento no encontrado.");
    }
  }

  // Evento para buscar al hacer clic en el botón
  buscarBoton.addEventListener("click", buscarElemento);

  // Evento para buscar al presionar Enter en el campo de entrada
  inputBuscarNumero.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault(); // Evita el comportamiento predeterminado del Enter
      buscarElemento(); // Llama a la función de búsqueda
    }
  });

  // Función para manejar el botón "Anterior"
  botonAnterior.addEventListener("click", function () {
    if (currentElementIndex > 0) {
      currentElementIndex--; // Retrocede al elemento anterior
      displayElementInfo(currentElementIndex);
    }
  });

  // Función para manejar el botón "Siguiente"
  botonSiguiente.addEventListener("click", function () {
    if (currentElementIndex < PeriodicTable.length - 1) {
      currentElementIndex++; // Avanza al siguiente elemento
      displayElementInfo(currentElementIndex);
    }
  });

  // Muestra el primer elemento al cargar la página
  displayElementInfo(currentElementIndex);
});

export function calcularConfiguracionElectronica(numeroAtomico) {
  const orbitales = [
    { nivel: "1s", maxElectrones: 2 },
    { nivel: "2s", maxElectrones: 2 },
    { nivel: "2p", maxElectrones: 6 },
    { nivel: "3s", maxElectrones: 2 },
    { nivel: "3p", maxElectrones: 6 },
    { nivel: "4s", maxElectrones: 2 },
    { nivel: "3d", maxElectrones: 10 },
    { nivel: "4p", maxElectrones: 6 },
    { nivel: "5s", maxElectrones: 2 },
    { nivel: "4d", maxElectrones: 10 },
    { nivel: "5p", maxElectrones: 6 },
    { nivel: "6s", maxElectrones: 2 },
    { nivel: "4f", maxElectrones: 14 },
    { nivel: "5d", maxElectrones: 10 },
    { nivel: "6p", maxElectrones: 6 },
    { nivel: "7s", maxElectrones: 2 },
    { nivel: "5f", maxElectrones: 14 },
    { nivel: "6d", maxElectrones: 10 },
    { nivel: "7p", maxElectrones: 6 },
  ];

  let configuracion = "";
  let electronesRestantes = numeroAtomico;
  const niveles = {}; // Niveles de energía

  for (const orbital of orbitales) {
    if (electronesRestantes <= 0) break;

    const electronesEnOrbital = Math.min(electronesRestantes, orbital.maxElectrones);
    configuracion += `${orbital.nivel}<sup>${electronesEnOrbital}</sup> `;
    electronesRestantes -= electronesEnOrbital;

    const nivelPrincipal = parseInt(orbital.nivel[0]);
    if (!niveles[nivelPrincipal]) {
      niveles[nivelPrincipal] = 0;
    }
    niveles[nivelPrincipal] += electronesEnOrbital;

  }

  const nivelMasAlto = Math.max(...Object.keys(niveles).map(Number));
  const electronesDeValencia = niveles[nivelMasAlto];
  

  return { 
    configuracion : configuracion.trim(),
  electronesDeValencia: electronesDeValencia,
};
}