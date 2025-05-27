import { PeriodicTable } from './Elementos.js';

// 🎵 Cargar sonidos
const correctSound = new Audio("../assets/audio/correct.mp3");
const wrongSound = new Audio("../assets/audio/wrong.mp3");

let current = {};
let score = 0;
let correctAnswers = 0; // Contador de aciertos consecutivos
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

// Actualizar la tabla de scoreboard
function updateScoreboard() {
  scoreboardTable.innerHTML = ""; // Limpiar la tabla
  scoreboard.forEach(entry => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${entry.name}</td><td>${entry.score}</td>`;
    scoreboardTable.appendChild(row);
  });
}

// Reiniciar el juego
function resetGame() {
  alert(`¡Juego terminado! Tu puntaje final es: ${score}`);
  correctAnswers = 0; // Reinicia los aciertos
  score = 0; // Reinicia el puntaje
  scoreP.textContent = `Puntos: 0`;
  newQuestion(); // Genera una nueva pregunta
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
        correctAnswers++;
        scoreP.textContent = `Puntos: ${score}`;
        if (correctAnswers === 5) {
          resetGame(); // Reinicia el juego si alcanza 5 aciertos
        } else {
          setTimeout(newQuestion, 500);
        }
      } else {
        wrongSound.play();
        scoreboard.push({ name: playerName, score });
        updateScoreboard();
        resetGame(); // Reinicia el juego si se equivoca
      }
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