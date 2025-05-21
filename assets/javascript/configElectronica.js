import { PeriodicTable } from './Elementos.js';
import { calcularConfiguracionElectronica } from './elemento.js';


document.addEventListener("DOMContentLoaded", () => {
  const simbolo = document.getElementById("simbolo");
  const configElectronica = document.getElementById("configElectronica");
  const valencia = document.getElementById("valencia");
  const botonAnterior = document.getElementById("anterior");
  const botonSiguiente = document.getElementById("siguiente");
  const inputBuscarNumero = document.getElementById("buscar-numero");
  const buscarBoton = document.getElementById("buscar-boton");


  let currentElementIndex = 0;

  const displayElementInfo = (index) => {
    const element = PeriodicTable[index];

    if (!element) {
      console.error("Elemento no encontrado");
      simbolo.textContent = "N/A";
      configElectronica.textContent = "N/A";
      valencia.textContent = "N/A";
      return;
    }

    const { configuracion, electronesDeValencia } = calcularConfiguracionElectronica(element.number);

    simbolo.textContent = element.symbol;
    configElectronica.innerHTML = configuracion;
    valencia.textContent = electronesDeValencia;
  };

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

  // Mostrar el primer elemento al cargar la página
  displayElementInfo(currentElementIndex);
});
