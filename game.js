let boardPoints = [];

const cellData = [
  {
    type: "start",
    icon: "🚩",
    tag: "Inicio",
    title: "Inicio del PEI",
    task: "Presenta brevemente a tu institución educativa imaginaria.",
    help: "Puedes mencionar su nombre, qué tipo de institución es y qué quiere lograr."
  },

  // 🟨 PREGUNTAS
  {
    type: "question",
    icon: "❓",
    tag: "Pregunta",
    title: "¿Qué significa PEI?",
    task: "Responde: ¿Qué significa PEI?",
    help: "PEI significa Proyecto Educativo Institucional."
  },
  {
    type: "question",
    icon: "❓",
    tag: "Pregunta",
    title: "Misión institucional",
    task: "Responde: ¿Cuál es la función de la misión institucional?",
    help: "La misión institucional explica la razón de ser de la institución: qué hace, para quién lo hace y con qué propósito."
  },
  {
    type: "question",
    icon: "❓",
    tag: "Pregunta",
    title: "Participantes del PEI",
    task: "Responde: ¿Quiénes participan en la elaboración del PEI?",
    help: "Participan directivos, docentes, estudiantes, familias y otros miembros de la comunidad educativa."
  },

  // ⭐ RETOS
  {
    type: "challenge",
    icon: "⭐",
    tag: "Reto",
    title: "Valores educativos",
    task: "Reto: menciona 5 valores educativos.",
    help: "Ejemplos: respeto, responsabilidad, solidaridad, justicia, honestidad, inclusión, compromiso y empatía."
  },
  {
    type: "challenge",
    icon: "⏱️",
    tag: "Reto",
    title: "Visión rápida",
    task: "Reto: crea una visión institucional en 15 segundos.",
    help: "La visión debe expresar cómo quiere verse la institución en el futuro."
  },
  {
    type: "challenge",
    icon: "🤝",
    tag: "Reto",
    title: "Convivencia escolar",
    task: "Reto: da una idea para mejorar la convivencia escolar.",
    help: "Puedes proponer campañas de respeto, normas de convivencia, mediación escolar o actividades grupales."
  },

  // 🎁 BONUS
  {
    type: "bonus",
    icon: "🎁",
    tag: "Bonus",
    title: "Rendimiento mejorado",
    task: "Tu institución mejoró el rendimiento académico. Al tocar “Cumplido”, avanzas 2 espacios.",
    help: "El avance se aplicará automáticamente después de cumplir la casilla.",
    effect: { move: 2 }
  },
  {
    type: "bonus",
    icon: "🎁",
    tag: "Bonus",
    title: "Propuesta aprobada",
    task: "La comunidad educativa aprobó tu propuesta. Al tocar “Cumplido”, avanzas 3 espacios.",
    help: "El avance se aplicará automáticamente después de cumplir la casilla.",
    effect: { move: 3 }
  },
  {
    type: "bonus",
    icon: "🎲",
    tag: "Bonus",
    title: "Integración lograda",
    task: "Lograste integrar a padres y docentes. Al tocar “Cumplido”, tiras otra vez.",
    help: "Después de cumplir, el turno seguirá siendo tuyo para lanzar nuevamente.",
    effect: { reroll: true }
  },

  // 🚫 WARNING / RETROCESO
  {
    type: "back",
    icon: "🚫",
    tag: "Warning",
    title: "Sin diagnóstico",
    task: "No realizaron el diagnóstico institucional. Al tocar “Cumplido”, retrocedes 2 espacios.",
    help: "El diagnóstico institucional permite conocer la realidad, necesidades y problemas de la institución.",
    effect: { move: -2 }
  },
  {
    type: "back",
    icon: "🚫",
    tag: "Warning",
    title: "Faltó trabajo en equipo",
    task: "Faltó trabajo en equipo. Al tocar “Cumplido”, pierdes un turno.",
    help: "El PEI necesita participación y trabajo colaborativo.",
    effect: { skipTurn: true }
  },
  {
    type: "back",
    icon: "🚫",
    tag: "Warning",
    title: "Objetivos incumplidos",
    task: "La institución no cumplió sus objetivos. Al tocar “Cumplido”, retrocedes 3 espacios.",
    help: "Los objetivos deben ser claros, alcanzables y evaluados constantemente.",
    effect: { move: -3 }
  },

  // ❓ SORPRESA
  {
    type: "surprise",
    icon: "❓",
    tag: "Sorpresa",
    title: "Cambio inesperado",
    task: "Sorpresa: intercambia lugar con otro jugador.",
    help: "Al tocar “Cumplido”, cambiarás posición con otro jugador elegido automáticamente.",
    effect: { swap: true }
  },
  {
    type: "surprise",
    icon: "🎲",
    tag: "Sorpresa",
    title: "Dado inquieto",
    task: "Sorpresa: lanza el dado nuevamente.",
    help: "Después de cumplir, el turno seguirá siendo tuyo para lanzar otra vez.",
    effect: { reroll: true }
  },
  {
    type: "surprise",
    icon: "🧠",
    tag: "Sorpresa",
    title: "Todos participan",
    task: "Sorpresa: todos responden una pregunta. Cada jugador debe decir algo relacionado con el PEI.",
    help: "Pueden responder sobre misión, visión, valores, objetivos, diagnóstico o convivencia.",
    effect: { allAnswer: true }
  },

  // Repetición equilibrada para que el tablero tenga más recorrido
  {
    type: "question",
    icon: "❓",
    tag: "Pregunta",
    title: "Función de la misión",
    task: "Responde nuevamente: ¿Cuál es la función de la misión institucional?",
    help: "La misión orienta las acciones presentes de la institución educativa."
  },
  {
    type: "challenge",
    icon: "⭐",
    tag: "Reto",
    title: "Valores educativos",
    task: "Reto: menciona 5 valores educativos sin repetir los que dijo otro jugador.",
    help: "Ejemplos: respeto, solidaridad, responsabilidad, inclusión, justicia, honestidad, empatía."
  },
  {
    type: "bonus",
    icon: "🎁",
    tag: "Bonus",
    title: "Mejora académica",
    task: "Tu institución mejoró el rendimiento académico. Al tocar “Cumplido”, avanzas 2 espacios.",
    help: "El avance se aplicará automáticamente después de cumplir la casilla.",
    effect: { move: 2 }
  },
  {
    type: "back",
    icon: "🚫",
    tag: "Warning",
    title: "Sin diagnóstico",
    task: "No realizaron el diagnóstico institucional. Al tocar “Cumplido”, retrocedes 2 espacios.",
    help: "Sin diagnóstico, la institución no identifica bien sus necesidades.",
    effect: { move: -2 }
  },
  {
    type: "question",
    icon: "❓",
    tag: "Pregunta",
    title: "Elaboración del PEI",
    task: "Responde: ¿Quiénes participan en la elaboración del PEI?",
    help: "Participan los miembros de la comunidad educativa: directivos, docentes, estudiantes y familias."
  },
  {
    type: "challenge",
    icon: "⏱️",
    tag: "Reto",
    title: "Visión en 15 segundos",
    task: "Reto: crea una visión institucional en 15 segundos.",
    help: "Debe mostrar el futuro deseado de la institución."
  },
  {
    type: "surprise",
    icon: "❓",
    tag: "Sorpresa",
    title: "Todos responden",
    task: "Sorpresa: todos responden una pregunta sobre el PEI.",
    help: "Cada jugador debe aportar una idea: misión, visión, valores, diagnóstico, objetivos o convivencia.",
    effect: { allAnswer: true }
  },
  {
    type: "bonus",
    icon: "🎁",
    tag: "Bonus",
    title: "Propuesta aprobada",
    task: "La comunidad educativa aprobó tu propuesta. Al tocar “Cumplido”, avanzas 3 espacios.",
    help: "El avance se aplicará automáticamente después de cumplir la casilla.",
    effect: { move: 3 }
  },
  {
    type: "back",
    icon: "🚫",
    tag: "Warning",
    title: "Trabajo en equipo bajo",
    task: "Faltó trabajo en equipo. Al tocar “Cumplido”, pierdes un turno.",
    help: "El trabajo en equipo es necesario para construir un PEI participativo.",
    effect: { skipTurn: true }
  },
  {
    type: "challenge",
    icon: "🤝",
    tag: "Reto",
    title: "Mejorar convivencia",
    task: "Reto: da una idea para mejorar la convivencia escolar.",
    help: "Ejemplos: acuerdos de aula, campañas de respeto, mediación de conflictos o actividades cooperativas."
  },
  {
    type: "surprise",
    icon: "🎲",
    tag: "Sorpresa",
    title: "Otra oportunidad",
    task: "Sorpresa: lanza el dado nuevamente.",
    help: "Después de cumplir, podrás lanzar otra vez.",
    effect: { reroll: true }
  },
  {
    type: "back",
    icon: "🚫",
    tag: "Warning",
    title: "Objetivos no cumplidos",
    task: "La institución no cumplió sus objetivos. Al tocar “Cumplido”, retrocedes 3 espacios.",
    help: "Los objetivos deben ser revisados, evaluados y mejorados.",
    effect: { move: -3 }
  },
  {
    type: "surprise",
    icon: "🔀",
    tag: "Sorpresa",
    title: "Intercambio sorpresa",
    task: "Sorpresa: intercambia lugar con otro jugador.",
    help: "Al tocar “Cumplido”, cambiarás posición con otro jugador elegido automáticamente.",
    effect: { swap: true }
  },
  {
    type: "meta",
    icon: "🏆",
    tag: "Meta",
    title: "Institución Exitosa",
    task: "¡Llegaste a la meta! Explica una idea importante que aprendiste sobre el PEI.",
    help: "El PEI permite organizar la identidad, misión, visión, valores, objetivos y acciones de una institución educativa."
  }
];

const colors = ["#2563eb", "#ef4444", "#16a34a", "#f59e0b", "#7c3aed", "#0891b2"];

let players = [];
let currentPlayerIndex = 0;
let phase = "setup"; // setup | waitingRoll | waitingDone | finished
let currentCellIndex = 0;
let rolledValue = null;

const setupScreen = document.getElementById("setupScreen");
const gameScreen = document.getElementById("gameScreen");
const playerCount = document.getElementById("playerCount");
const namesBox = document.getElementById("namesBox");
const startGameBtn = document.getElementById("startGameBtn");

const cellsLayer = document.getElementById("cellsLayer");
const pawnsLayer = document.getElementById("pawnsLayer");
const currentPlayerEl = document.getElementById("currentPlayer");
const phaseText = document.getElementById("phaseText");
const rollBtn = document.getElementById("rollBtn");
const diceValue = document.getElementById("diceValue");
const diceResult = document.getElementById("diceResult");
const diceHelp = document.getElementById("diceHelp");
const taskType = document.getElementById("taskType");
const taskTitle = document.getElementById("taskTitle");
const taskText = document.getElementById("taskText");
const answerText = document.getElementById("answerText");
const showAnswerBtn = document.getElementById("showAnswerBtn");
const doneBtn = document.getElementById("doneBtn");
const playersList = document.getElementById("playersList");
const toast = document.getElementById("toast");
const winnerModal = document.getElementById("winnerModal");
const winnerMessage = document.getElementById("winnerMessage");

function calculateBoardPoints() {
  const path = document.getElementById("mainRoadPath");
  const board = document.getElementById("board");

  if (!path || !board) return;

  const total = path.getTotalLength();
  const svgBox = { w: 1120, h: 560 };

  const startOffset = total * 0.015;
  const endOffset = total * 0.985;

  boardPoints = cellData.map((_, index) => {
    const t = index / (cellData.length - 1);
    const length = startOffset + (endOffset - startOffset) * t;
    const p = path.getPointAtLength(length);

    return [
      (p.x / svgBox.w) * 100,
      (p.y / svgBox.h) * 100
    ];
  });
}

function buildNameFields() {
  const count = Number(playerCount.value);
  namesBox.innerHTML = "";

  for (let i = 0; i < count; i++) {
    const field = document.createElement("label");
    field.className = "name-field";
    field.innerHTML = `
      <span>Jugador ${i + 1}</span>
      <input id="playerName${i}" maxlength="18" value="Jugador ${i + 1}" />
    `;
    namesBox.appendChild(field);
  }
}

function startGame() {
  const count = Number(playerCount.value);
  players = [];

  for (let i = 0; i < count; i++) {
    const input = document.getElementById(`playerName${i}`);
    const name = input.value.trim() || `Jugador ${i + 1}`;

    players.push({
      name,
      color: colors[i % colors.length],
      position: 0,
      skipNextTurn: false
    });
  }

  currentPlayerIndex = 0;
  phase = "waitingRoll";
  currentCellIndex = 0;
  rolledValue = null;

  setupScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");

  calculateBoardPoints();
  renderBoard();
  renderPawns();
  renderPlayersList();
  updateTurnPanel();
  showIntroTask();
}

function renderBoard() {
  if (!boardPoints.length) calculateBoardPoints();

  cellsLayer.innerHTML = "";

  cellData.forEach((cell, index) => {
    const point = boardPoints[index];

    if (!point) return;

    const el = document.createElement("button");
    el.className = `cell ${cell.type}` + (index === players[currentPlayerIndex]?.position ? " current-cell" : "");
    el.style.left = point[0] + "%";
    el.style.top = point[1] + "%";
    el.title = `${index + 1}. ${cell.title}`;

    el.innerHTML = `
      <div class="cell-num">${index + 1}</div>
      <div class="cell-icon">${cell.icon}</div>
      <div class="cell-tag">${cell.tag}</div>
    `;

    el.addEventListener("click", () => showCellPreview(index));
    cellsLayer.appendChild(el);
  });
}

function renderPawns() {
  if (!boardPoints.length) calculateBoardPoints();

  pawnsLayer.innerHTML = "";

  players.forEach((player, index) => {
    const point = boardPoints[player.position];

    if (!point) return;

    const offset = getPawnOffset(index);

    const pawn = document.createElement("div");
    pawn.className = "pawn";
    pawn.style.left = `calc(${point[0]}% + ${offset.x}px)`;
    pawn.style.top = `calc(${point[1]}% + ${offset.y}px)`;

    pawn.innerHTML = `
      <div class="pawn-body" style="background:${player.color}">
        ${index + 1}
      </div>
    `;

    pawnsLayer.appendChild(pawn);
  });
}

function getPawnOffset(index) {
  const spread = [
    { x: 0, y: 0 },
    { x: -16, y: 0 },
    { x: 16, y: 0 },
    { x: -12, y: -14 },
    { x: 12, y: -14 },
    { x: 0, y: 14 }
  ];

  return spread[index] || { x: 0, y: 0 };
}

function renderPlayersList() {
  playersList.innerHTML = "";

  players.forEach((player, index) => {
    const row = document.createElement("div");
    row.className = "player-row" + (index === currentPlayerIndex ? " active" : "");

    row.innerHTML = `
      <div class="player-token" style="background:${player.color}"></div>
      <div>
        <div>${player.name}</div>
        <div class="player-meta">
          Casilla ${player.position + 1}
          ${player.skipNextTurn ? " · pierde próximo turno" : ""}
        </div>
      </div>
      <div>${index === currentPlayerIndex ? "🎲" : ""}</div>
    `;

    playersList.appendChild(row);
  });
}

function updateTurnPanel() {
  const player = players[currentPlayerIndex];
  currentPlayerEl.textContent = player.name;

  if (phase === "waitingRoll") {
    phaseText.textContent = "Debe lanzar el dado.";
    rollBtn.disabled = false;
    doneBtn.disabled = true;
    diceHelp.textContent = "Después de lanzar, deberá cumplir la casilla.";
  }

  if (phase === "waitingDone") {
    phaseText.textContent = "Debe cumplir la casilla antes de pasar turno.";
    rollBtn.disabled = true;
    doneBtn.disabled = false;
    diceHelp.textContent = "Toca “Cumplido” cuando complete la pregunta, reto o acción.";
  }

  if (phase === "finished") {
    phaseText.textContent = "La partida terminó.";
    rollBtn.disabled = true;
    doneBtn.disabled = true;
  }

  renderBoard();
  renderPlayersList();
}

function showIntroTask() {
  taskType.textContent = "Inicio";
  taskType.style.background = "#16a34a";
  taskTitle.textContent = "Partida lista";
  taskText.textContent = "El jugador en turno debe lanzar el dado. Después de caer en una casilla, debe cumplir la actividad para pasar el turno.";
  answerText.textContent = "Regla central: lanzar → caer en casilla → cumplir → tocar Cumplido → siguiente jugador.";
  answerText.classList.add("hidden");
  diceResult.textContent = "Dado listo";
  diceValue.textContent = "🎲";
}

function showCellPreview(index) {
  const cell = cellData[index];

  taskType.textContent = cell.tag;
  taskType.style.background = typeColor(cell.type);
  taskTitle.textContent = `${index + 1}. ${cell.title}`;
  taskText.textContent = cell.task;
  answerText.textContent = "Ayuda: " + cell.help;
  answerText.classList.add("hidden");
}

function rollDice() {
  if (phase !== "waitingRoll") {
    showToast("Primero se debe cumplir la casilla actual.");
    return;
  }

  const player = players[currentPlayerIndex];

  if (player.skipNextTurn) {
    player.skipNextTurn = false;
    showToast(`${player.name} perdió este turno por warning.`);
    nextTurn();
    return;
  }

  const value = Math.floor(Math.random() * 6) + 1;
  rolledValue = value;

  diceValue.textContent = value;
  rollBtn.classList.remove("roll");
  void rollBtn.offsetWidth;
  rollBtn.classList.add("roll");

  diceResult.textContent = `${player.name} sacó ${value}`;

  const newPosition = Math.min(cellData.length - 1, player.position + value);
  player.position = newPosition;
  currentCellIndex = newPosition;

  renderBoard();
  renderPawns();
  renderPlayersList();

  showCellPreview(newPosition);

  if (newPosition === cellData.length - 1) {
    phase = "waitingDone";
    doneBtn.textContent = "🏆 Finalizar";
  } else {
    doneBtn.textContent = "✅ Cumplido";
    phase = "waitingDone";
  }

  updateTurnPanel();
}

function completeTask() {
  if (phase !== "waitingDone") return;

  const player = players[currentPlayerIndex];
  let cell = cellData[player.position];

  if (player.position === cellData.length - 1) {
    finishGame(player);
    return;
  }

  if (cell.effect) {
    const shouldStayInTurn = applyCellEffect(player, cell);

    renderBoard();
    renderPawns();
    renderPlayersList();

    if (player.position === cellData.length - 1) {
      showCellPreview(player.position);
      phase = "waitingDone";
      doneBtn.textContent = "🏆 Finalizar";
      updateTurnPanel();
      return;
    }

    if (shouldStayInTurn) {
      phase = "waitingRoll";
      rolledValue = null;
      diceValue.textContent = "🎲";
      diceResult.textContent = "Dado listo";
      doneBtn.textContent = "✅ Cumplido";
      showIntroTask();
      updateTurnPanel();
      return;
    }
  }

  nextTurn();
}

function applyCellEffect(player, cell) {
  if (cell.effect.move) {
    const movement = cell.effect.move;
    const oldPosition = player.position;

    player.position = clamp(player.position + movement, 0, cellData.length - 1);

    if (movement > 0) {
      showToast(`${player.name} avanza ${movement} espacio${movement > 1 ? "s" : ""}.`);
    } else {
      showToast(`${player.name} retrocede ${Math.abs(movement)} espacio${Math.abs(movement) > 1 ? "s" : ""}.`);
    }

    showCellPreview(player.position);
  }

  if (cell.effect.skipTurn) {
    player.skipNextTurn = true;
    showToast(`${player.name} pierde su próximo turno.`);
  }

  if (cell.effect.reroll) {
    showToast(`${player.name} puede lanzar otra vez.`);
    return true;
  }

  if (cell.effect.swap) {
    swapWithRandomPlayer(player);
  }

  if (cell.effect.allAnswer) {
    showToast("Todos deben responder una pregunta antes de continuar.");
  }

  return false;
}

function swapWithRandomPlayer(player) {
  if (players.length < 2) {
    showToast("No hay otro jugador para intercambiar.");
    return;
  }

  const currentIndex = players.indexOf(player);
  const possiblePlayers = players
    .map((p, index) => ({ player: p, index }))
    .filter(item => item.index !== currentIndex);

  const selected = possiblePlayers[Math.floor(Math.random() * possiblePlayers.length)];

  const tempPosition = player.position;
  player.position = selected.player.position;
  selected.player.position = tempPosition;

  showToast(`${player.name} intercambió lugar con ${selected.player.name}.`);
}

function nextTurn() {
  currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
  phase = "waitingRoll";
  rolledValue = null;

  diceValue.textContent = "🎲";
  diceResult.textContent = "Dado listo";
  doneBtn.textContent = "✅ Cumplido";

  updateTurnPanel();
  showIntroTask();
}

function finishGame(player) {
  phase = "finished";
  updateTurnPanel();

  winnerMessage.textContent = `${player.name} llegó a la meta y alcanzó la Institución Exitosa.`;
  winnerModal.classList.remove("hidden");

  launchConfetti();
}

function typeColor(type) {
  const map = {
    start: "#16a34a",
    question: "#1d4ed8",
    mission: "#ea580c",
    vision: "#0f766e",
    values: "#15803d",
    challenge: "#dc2626",
    bonus: "#f59e0b",
    back: "#b91c1c",
    objectives: "#ca8a04",
    gestion: "#6d28d9",
    surprise: "#9333ea",
    meta: "#f59e0b"
  };

  return map[type] || "#64748b";
}

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}

function launchConfetti() {
  for (let i = 0; i < 120; i++) {
    const piece = document.createElement("div");

    piece.style.position = "fixed";
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.top = "-20px";
    piece.style.width = "10px";
    piece.style.height = "16px";
    piece.style.borderRadius = "3px";
    piece.style.background = colors[i % colors.length];
    piece.style.zIndex = "120";
    piece.style.pointerEvents = "none";
    piece.style.animation = `fall ${1.6 + Math.random() * 1.2}s linear forwards`;
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;

    document.body.appendChild(piece);

    setTimeout(() => {
      piece.remove();
    }, 3000);
  }

  const style = document.createElement("style");
  style.textContent = `
    @keyframes fall {
      to {
        transform: translateY(110vh) rotate(720deg);
        opacity: .2;
      }
    }
  `;

  document.head.appendChild(style);

  setTimeout(() => {
    style.remove();
  }, 3200);
}

function newGame() {
  winnerModal.classList.add("hidden");
  gameScreen.classList.add("hidden");
  setupScreen.classList.remove("hidden");
  phase = "setup";
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen?.();
  } else {
    document.exitFullscreen?.();
  }
}

playerCount.addEventListener("change", buildNameFields);
startGameBtn.addEventListener("click", startGame);
rollBtn.addEventListener("click", rollDice);
doneBtn.addEventListener("click", completeTask);
showAnswerBtn.addEventListener("click", () => answerText.classList.toggle("hidden"));

document.getElementById("newGameBtn").addEventListener("click", newGame);
document.getElementById("finishBtn").addEventListener("click", newGame);
document.getElementById("fullscreenBtn").addEventListener("click", toggleFullscreen);

window.addEventListener("resize", () => {
  if (phase !== "setup") {
    calculateBoardPoints();
    renderBoard();
    renderPawns();
  }
});

buildNameFields();
