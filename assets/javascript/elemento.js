// Importar tabla periódica
import { PeriodicTable } from './Elementos.js';

document.addEventListener("DOMContentLoaded", () => {
  // Elementos del DOM
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

  let currentElementIndex = 0;

  // Mostrar información del elemento
  function displayElementInfo(index) {
    const element = PeriodicTable[index];

    if (!element) {
      nombreElemento.textContent = "Elemento no encontrado";
      console.error("Elemento no encontrado");
      return;
    }

    nombreElemento.textContent = element.name ;
    simbolo.textContent = element.symbol ;
    estado.textContent = element.state ;
    grupo.textContent = element.group ;
    periodo.textContent = element.period ;
    electronegatividad.textContent = element.electronegativity ;
    usos.textContent = element.curiosity ;
    simboloGrande.textContent = element.symbol ;
    numeroAtomicoGrande.textContent = `Número atómico: ${element.number}`;
    masaGrande.textContent = `Masa: ${element.weight} u`;
  }

  // Buscar por número atómico
  function buscarElemento() {
    const numero = parseInt(inputBuscarNumero.value);
    if (isNaN(numero) || numero < 1) {
      alert("Por favor, ingresa un número atómico válido.");
      return;
    }

    const index = PeriodicTable.findIndex(el => el.number === numero);
    if (index === -1) {
      alert("Elemento no encontrado.");
    } else {
      currentElementIndex = index;
      displayElementInfo(index);
    }
  }

  // Eventos
  buscarBoton.addEventListener("click", buscarElemento);

  inputBuscarNumero.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      buscarElemento();
    }
  });

  botonAnterior.addEventListener("click", () => {
    if (currentElementIndex > 0) {
      currentElementIndex--;
      displayElementInfo(currentElementIndex);
    }
  });

  botonSiguiente.addEventListener("click", () => {
    if (currentElementIndex < PeriodicTable.length - 1) {
      currentElementIndex++;
      displayElementInfo(currentElementIndex);
    }
  });

  // Mostrar primer elemento al cargar
  displayElementInfo(currentElementIndex);
});

// ---------------------------------------------
// Función de configuración electrónica
// ---------------------------------------------
export function calcularConfiguracionElectronica(numeroAtomico) {
  const orbitales = [
    { nivel: "1s", max: 2 }, { nivel: "2s", max: 2 }, { nivel: "2p", max: 6 },
    { nivel: "3s", max: 2 }, { nivel: "3p", max: 6 }, { nivel: "4s", max: 2 },
    { nivel: "3d", max: 10 }, { nivel: "4p", max: 6 }, { nivel: "5s", max: 2 },
    { nivel: "4d", max: 10 }, { nivel: "5p", max: 6 }, { nivel: "6s", max: 2 },
    { nivel: "4f", max: 14 }, { nivel: "5d", max: 10 }, { nivel: "6p", max: 6 },
    { nivel: "7s", max: 2 }, { nivel: "5f", max: 14 }, { nivel: "6d", max: 10 },
    { nivel: "7p", max: 6 }
  ];

  let configuracion = "";
  let electrones = numeroAtomico;
  const niveles = {};

  for (const orb of orbitales) {
    if (electrones <= 0) break;
    const usados = Math.min(electrones, orb.max);
    configuracion += `${orb.nivel}<sup>${usados}</sup> `;
    electrones -= usados;

    const n = parseInt(orb.nivel[0]);
    niveles[n] = (niveles[n] || 0) + usados;
  }

  const nivelMasAlto = Math.max(...Object.keys(niveles).map(Number));
  const electronesValencia = niveles[nivelMasAlto];

  return {
    configuracion: configuracion.trim(),
    electronesDeValencia: electronesValencia
  };
}
