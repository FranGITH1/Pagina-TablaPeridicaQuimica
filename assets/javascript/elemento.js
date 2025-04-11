import { PeriodicTable } from './Elementos.js';

document.addEventListener("DOMContentLoaded", function () {
  // Obtén el contenedor de las secciones
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

  const buscarNumero = document.getElementById("buscar-numero");
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
    estado.textContent = element.state || "Desconocido";
    grupo.textContent = element.group || "Desconocido";
    periodo.textContent = element.period || "Desconocido";
    electronegatividad.textContent = element.electronegativity || "Desconocido";
    usos.textContent = element.curiosity || "Sin información";
    simboloGrande.textContent = element.symbol;
    numeroAtomicoGrande.textContent = `Número atómico: ${element.number}`;
    masaGrande.textContent = `Masa: ${element.weight} u`;
  }

  // Función para buscar por número atómico
  buscarBoton.addEventListener("click", function () {
    const numeroAtomico = parseInt(buscarNumero.value);

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