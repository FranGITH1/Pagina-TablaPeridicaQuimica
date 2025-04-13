import { PeriodicTable } from './Elementos.js';
import { calcularConfiguracionElectronica } from './elemento.js';

document.addEventListener("DOMContentLoaded", function () {
  const simbolo = document.getElementById("simbolo");
  const configElectronica = document.getElementById("configElectronica");
  const valencia = document.getElementById("valencia");
  const botonAnterior = document.getElementById("anterior");
  const botonSiguiente = document.getElementById("siguiente");

  let currentElementIndex = 0;

  function displayElementInfo(index) {
    const element = PeriodicTable[index];

    if (!element) {
      console.error("Elemento no encontrado");
      simbolo.textContent = "N/A";
      configElectronica.textContent = "N/A";
      valencia.textContent = "N/A";
      return;
    }

    const {configuracion,electronesDeValencia} = calcularConfiguracionElectronica(element.number);

    simbolo.textContent = element.symbol;
    configElectronica.innerHTML = ` ${configuracion}`;
    valencia.textContent = `${electronesDeValencia}` ;
  }

  botonAnterior.addEventListener("click", function () {
    if (currentElementIndex > 0) {
      currentElementIndex--;
      displayElementInfo(currentElementIndex);
    }
  });

  botonSiguiente.addEventListener("click", function () {
    if (currentElementIndex < PeriodicTable.length - 1) {
      currentElementIndex++;
      displayElementInfo(currentElementIndex);
    }
  });

  displayElementInfo(currentElementIndex);
});