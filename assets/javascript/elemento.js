import PeriodicTable from "./main.js";

function mostrarElemento(elemento) {
  const modalTitle = document.getElementById("modal-title");
  const modalSymbol = document.getElementById("modal-symbol");
  const modalNumber = document.getElementById("modal-number");
  const modalWeight = document.getElementById("modal-weight");
  const modalType = document.getElementById("modal-type");
  const modalCuriosity = document.getElementById("modal-curiosity");

  const simboloGrande = document.getElementById("modal-symbol");
  const numeroAtomicoGrande = document.getElementById("modal-number");
  const masaGrande = document.getElementById("modal-weight");

            modalTitle.textContent = modal.name;
            modalSymbol.textContent = modal.symbol;
            modalNumber.textContent = modal.number;
            modalWeight.textContent = modal.weight;
            modalType.textContent = modal.type;
            modalCuriosity.textContent = modal.curiosity;

  simboloGrande.textContent = modal.symbol;
  numeroAtomicoGrande.textContent = `Número atómico: ${modal.number}`;
  masaGrande.textContent = `Masa: ${modal.weight} u`;
}

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const nombreElemento = params.get("elemento");

  const elemento = elementos.find((el) => el.nombre === nombreElemento);

  if (elemento) {
    mostrarElemento(elemento);
  } else {
    alert("Elemento no encontrado");
  }
});