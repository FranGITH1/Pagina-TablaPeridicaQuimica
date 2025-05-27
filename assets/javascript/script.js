import { PeriodicTable } from './Elementos.js';

// 🎵 Cargar sonidos
const correctSound = new Audio("../assets/audio/correct.mp3");
const wrongSound = new Audio("../assets/audio/wrong.mp3");

let current = {};
let score = 0;
let playerName = ""; // Nombre del jugador
const scoreboard = []; // Lista de puntajes

const symbolDiv = document.getElementById("symbol");
const optionsDiv = document.getElementById("options");
const scoreP = document.getElementById("score");
const nameForm = document.getElementById("name-form");
const playerNameInput = document.getElementById("player-name");
const scoreboardContainer = document.getElementById("scoreboard-container");
const scoreboardTable = document.getElementById("scoreboard").querySelector("tbody");

// Mezclar elementos de un array
function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

// Obtener un elemento aleatorio de la tabla periódica
function getRandomElement() {
  return PeriodicTable[Math.floor(Math.random() * PeriodicTable.length)];
}

// Actualizar la scoreboard
function updateScoreboard() {
  scoreboardTable.innerHTML = ""; // Limpiar la tabla
  scoreboard.forEach(entry => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${entry.name}</td><td>${entry.score}</td>`;
    scoreboardTable.appendChild(row);
  });
}

// Crear una nueva pregunta
function newQuestion() {
  optionsDiv.innerHTML = "";
  current = getRandomElement();
  symbolDiv.textContent = current.symbol;

  let options = [current];
  while (options.length < 4) {
    const rand = getRandomElement();
    if (!options.find(e => e.name === rand.name)) {
      options.push(rand);
    }
  }

  shuffleArray(options).forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt.name;
    btn.className = "option-btn";
    btn.onclick = () => {
      if (opt.name === current.name) {
        correctSound.play();
        score++;
        scoreP.textContent = `Puntos: ${score}`;
      } else {
        wrongSound.play();
        // Guardar el puntaje en la scoreboard
        scoreboard.push({ name: playerName, score });
        updateScoreboard();
        score = 0;
        scoreP.textContent = `Puntos: 0`;
      }
      setTimeout(newQuestion, 500);
    };
    optionsDiv.appendChild(btn);
  });
}

// Manejar el formulario de nombre
nameForm.onsubmit = (e) => {
  e.preventDefault();
  playerName = playerNameInput.value.trim();
  if (playerName) {
    document.getElementById("name-container").style.display = "none";
    scoreboardContainer.style.display = "block";
    newQuestion();
  }
};