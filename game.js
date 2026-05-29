let boardPoints = [];

const cellData = [
  {type:"start", icon:"🚩", tag:"Inicio", title:"Identidad institucional", task:"Presenta brevemente qué hace única a una institución educativa.", help:"La identidad institucional incluye historia, cultura, principios, valores y forma de actuar."},
  {type:"question", icon:"❓", tag:"Pregunta", title:"¿Qué significa PEI?", task:"Responde: ¿qué significa PEI?", help:"PEI significa Proyecto Educativo Institucional."},
  {type:"mission", icon:"🎯", tag:"Misión", title:"Misión", task:"Explica qué es la misión institucional.", help:"La misión explica la razón de ser de la institución: qué hace, para quién y con qué propósito."},
  {type:"question", icon:"💬", tag:"Pregunta", title:"Explica la misión", task:"Da un ejemplo corto de misión institucional.", help:"Ejemplo: Formar estudiantes íntegros mediante una educación participativa, inclusiva y de calidad."},
  {type:"bonus", icon:"⭐", tag:"Bonus", title:"Trabajo claro", task:"Bonificación: si explicas con claridad, avanza 1 espacio al tocar cumplido.", help:"El avance se aplicará automáticamente al tocar Cumplido.", effect:{move:1}},
  {type:"vision", icon:"👁️", tag:"Visión", title:"Visión", task:"Explica qué es la visión educativa.", help:"La visión describe hacia dónde quiere llegar la institución en el futuro."},
  {type:"question", icon:"❓", tag:"Pregunta", title:"Tres valores", task:"Menciona tres valores institucionales.", help:"Ejemplos: respeto, responsabilidad, solidaridad, honestidad, inclusión, compromiso."},
  {type:"challenge", icon:"⚡", tag:"Reto", title:"Trabajo en equipo", task:"Reto: todos deben decir una palabra relacionada con trabajo en equipo.", help:"La idea es mostrar que el PEI se construye de forma participativa."},
  {type:"challenge", icon:"🙋", tag:"Reto", title:"Participación activa", task:"Reto: da un ejemplo de participación activa dentro de una institución.", help:"Ejemplos: proponer ideas, participar en reuniones, colaborar en proyectos o actividades."},
  {type:"objectives", icon:"🎯", tag:"Objetivo", title:"Objetivos", task:"Explica para qué sirven los objetivos institucionales.", help:"Sirven para orientar acciones concretas y medir avances."},
  {type:"question", icon:"❓", tag:"Pregunta", title:"Objetivo institucional", task:"Crea un objetivo institucional en una sola frase.", help:"Ejemplo: Fortalecer la calidad educativa mediante estrategias participativas e innovadoras."},
  {type:"gestion", icon:"🏛️", tag:"Gestión", title:"Gestión institucional", task:"Explica qué es gestión institucional.", help:"Es la organización de recursos, normas y personas para cumplir las metas institucionales."},
  {type:"challenge", icon:"⚡", tag:"Reto", title:"Comunicación", task:"Reto: representa una situación donde la comunicación mejora la convivencia escolar.", help:"Ejemplo: escuchar ambas partes de un conflicto y llegar a un acuerdo."},
  {type:"bonus", icon:"⭐", tag:"Bonus", title:"Acuerdo logrado", task:"Bonificación: por construir acuerdos, avanza 2 espacios al tocar cumplido.", help:"El avance se aplicará automáticamente al tocar Cumplido.", effect:{move:2}},
  {type:"values", icon:"💚", tag:"Valores", title:"Valores", task:"Explica por qué los valores son importantes en el PEI.", help:"Los valores orientan la convivencia, la cultura institucional y las decisiones."},
  {type:"back", icon:"↩️", tag:"Retroceso", title:"Faltó escucha", task:"Retroceso: explica por qué escuchar es importante. Al tocar cumplido retrocedes 1 espacio.", help:"La escucha activa permite construir acuerdos y respetar distintas opiniones.", effect:{move:-1}},
  {type:"question", icon:"❓", tag:"Pregunta", title:"Valores institucionales", task:"Menciona cinco valores que podría tener una institución educativa.", help:"Respeto, equidad, responsabilidad, inclusión, justicia, honestidad y solidaridad."},
  {type:"challenge", icon:"🤝", tag:"Reto", title:"Convivencia", task:"Reto: crea una norma de convivencia para el aula.", help:"Ejemplo: respetar turnos de palabra y resolver conflictos con diálogo."},
  {type:"back", icon:"↩️", tag:"Retroceso", title:"Acuerdo incumplido", task:"Retroceso: di qué pasa cuando una institución no cumple sus acuerdos.", help:"Se debilita la confianza, la organización y la convivencia.", effect:{move:-1}},
  {type:"question", icon:"❓", tag:"Pregunta", title:"Logro de objetivos", task:"Explica cómo se logran los objetivos del PEI.", help:"Con planificación, participación, seguimiento, evaluación y mejora continua."},
  {type:"bonus", icon:"⭐", tag:"Bonus", title:"Respuesta clara", task:"Bonificación: si respondes de forma clara, avanza 1 espacio al tocar cumplido.", help:"El avance se aplicará automáticamente al tocar Cumplido.", effect:{move:1}},
  {type:"gestion", icon:"📊", tag:"Gestión", title:"Evaluación", task:"Explica por qué se evalúa el PEI.", help:"Para identificar avances, dificultades y oportunidades de mejora."},
  {type:"challenge", icon:"⚡", tag:"Reto", title:"Solución de problemas", task:"Reto: propone una solución para mejorar la participación estudiantil.", help:"Crear encuestas, comités, espacios de opinión o proyectos colaborativos."},
  {type:"challenge", icon:"📖", tag:"Reto", title:"Aprendizaje significativo", task:"Explica cómo este juego ayuda al aprendizaje significativo.", help:"Relaciona conceptos con acciones, preguntas, retos y experiencias participativas."},
  {type:"question", icon:"❓", tag:"Pregunta", title:"Importancia del PEI", task:"Responde: ¿por qué es importante el PEI?", help:"Porque orienta el rumbo de la institución y organiza su identidad, metas y acciones."},
  {type:"bonus", icon:"⭐", tag:"Bonus", title:"Participación destacada", task:"Bonificación: avanza 2 espacios al tocar cumplido.", help:"El avance se aplicará automáticamente al tocar Cumplido.", effect:{move:2}},
  {type:"challenge", icon:"👥", tag:"Reto", title:"Compromiso", task:"Reto: menciona una acción que demuestre compromiso institucional.", help:"Cumplir acuerdos, participar, cuidar espacios y aportar ideas."},
  {type:"back", icon:"↩️", tag:"Retroceso", title:"Faltó organización", task:"Retroceso: menciona cómo mejorar la organización. Al tocar cumplido retrocedes 1 espacio.", help:"Se puede mejorar con roles claros, planificación y seguimiento.", effect:{move:-1}},
  {type:"vision", icon:"✅", tag:"Cierre", title:"Construcción del PEI", task:"Responde: ¿quiénes participan en la construcción del PEI?", help:"Participan directivos, docentes, estudiantes, familias y comunidad educativa."},
  {type:"meta", icon:"🏆", tag:"Meta", title:"Institución Exitosa", task:"¡Llegaste a la meta! Explica una idea que rescatas del juego.", help:"El PEI se construye con identidad, misión, visión, valores, objetivos y gestión institucional."}
];

const colors = ["#2563eb","#ef4444","#16a34a","#f59e0b","#7c3aed","#0891b2"];

function calculateBoardPoints(){
  const path = document.getElementById("mainRoadPath");
  const board = document.getElementById("board");
  if(!path || !board) return;

  const total = path.getTotalLength();
  const svgBox = { w: 1120, h: 560 };

  // Margen inicial/final para que la primera y la última casilla no queden pegadas al borde.
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

function buildNameFields(){
  const count = Number(playerCount.value);
  namesBox.innerHTML = "";
  for(let i=0;i<count;i++){
    const field = document.createElement("label");
    field.className = "name-field";
    field.innerHTML = `
      <span>Jugador ${i+1}</span>
      <input id="playerName${i}" maxlength="18" value="Jugador ${i+1}" />
    `;
    namesBox.appendChild(field);
  }
}

function startGame(){
  const count = Number(playerCount.value);
  players = [];
  for(let i=0;i<count;i++){
    const input = document.getElementById(`playerName${i}`);
    const name = input.value.trim() || `Jugador ${i+1}`;
    players.push({
      name,
      color: colors[i % colors.length],
      position: 0
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
  renderBoard();
  renderPawns();
  renderPlayersList();
  updateTurnPanel();
  showIntroTask();
}

function renderBoard(){
  cellsLayer.innerHTML = "";
  cellData.forEach((cell, index)=>{
    const point = boardPoints[index];
    const el = document.createElement("button");
    el.className = `cell ${cell.type}` + (index === players[currentPlayerIndex]?.position ? " current-cell" : "");
    el.style.left = point[0] + "%";
    el.style.top = point[1] + "%";
    el.title = `${index+1}. ${cell.title}`;
    el.innerHTML = `
      <div class="cell-num">${index+1}</div>
      <div class="cell-icon">${cell.icon}</div>
      <div class="cell-tag">${cell.tag}</div>
    `;
    el.addEventListener("click",()=>showCellPreview(index));
    cellsLayer.appendChild(el);
  });
}

function renderPawns(){
  if(!boardPoints.length) calculateBoardPoints();
  pawnsLayer.innerHTML = "";
  players.forEach((player, index)=>{
    const point = boardPoints[player.position];
    const offset = getPawnOffset(index, players.length);
    const pawn = document.createElement("div");
    pawn.className = "pawn";
    pawn.style.left = `calc(${point[0]}% + ${offset.x}px)`;
    pawn.style.top = `calc(${point[1]}% + ${offset.y}px)`;
    pawn.innerHTML = `<div class="pawn-body" style="background:${player.color}">${index+1}</div>`;
    pawnsLayer.appendChild(pawn);
  });
}

function getPawnOffset(index, total){
  const spread = [
    {x:0,y:0},
    {x:-16,y:0},{x:16,y:0},
    {x:-12,y:-14},{x:12,y:-14},{x:0,y:14}
  ];
  return spread[index] || {x:0,y:0};
}

function renderPlayersList(){
  playersList.innerHTML = "";
  players.forEach((player,index)=>{
    const row = document.createElement("div");
    row.className = "player-row" + (index === currentPlayerIndex ? " active" : "");
    row.innerHTML = `
      <div class="player-token" style="background:${player.color}"></div>
      <div>
        <div>${player.name}</div>
        <div class="player-meta">Casilla ${player.position+1}</div>
      </div>
      <div>${index === currentPlayerIndex ? "🎲" : ""}</div>
    `;
    playersList.appendChild(row);
  });
}

function updateTurnPanel(){
  const player = players[currentPlayerIndex];
  currentPlayerEl.textContent = player.name;

  if(phase === "waitingRoll"){
    phaseText.textContent = "Debe lanzar el dado.";
    rollBtn.disabled = false;
    doneBtn.disabled = true;
    diceHelp.textContent = "Después de lanzar, deberá cumplir la casilla.";
  }

  if(phase === "waitingDone"){
    phaseText.textContent = "Debe cumplir la casilla antes de pasar turno.";
    rollBtn.disabled = true;
    doneBtn.disabled = false;
    diceHelp.textContent = "Toca “Cumplido” cuando complete la pregunta, reto o acción.";
  }

  if(phase === "finished"){
    phaseText.textContent = "La partida terminó.";
    rollBtn.disabled = true;
    doneBtn.disabled = true;
  }

  renderPlayersList();
}

function showIntroTask(){
  taskType.textContent = "Inicio";
  taskType.style.background = "#16a34a";
  taskTitle.textContent = "Partida lista";
  taskText.textContent = "El primer jugador debe lanzar el dado. Después de caer en una casilla, debe cumplir la actividad para pasar el turno.";
  answerText.textContent = "Regla central: lanzar → caer en casilla → cumplir → tocar Cumplido → siguiente jugador.";
  answerText.classList.add("hidden");
  diceResult.textContent = "Dado listo";
  diceValue.textContent = "🎲";
}

function showCellPreview(index){
  const cell = cellData[index];
  taskType.textContent = cell.tag;
  taskType.style.background = typeColor(cell.type);
  taskTitle.textContent = `${index+1}. ${cell.title}`;
  taskText.textContent = cell.task;
  answerText.textContent = "Ayuda: " + cell.help;
  answerText.classList.add("hidden");
}

function rollDice(){
  if(phase !== "waitingRoll"){
    showToast("Primero se debe cumplir la casilla actual.");
    return;
  }

  const value = Math.floor(Math.random()*6)+1;
  rolledValue = value;
  diceValue.textContent = value;
  rollBtn.classList.remove("roll");
  void rollBtn.offsetWidth;
  rollBtn.classList.add("roll");
  diceResult.textContent = `${players[currentPlayerIndex].name} sacó ${value}`;

  const player = players[currentPlayerIndex];
  const newPosition = Math.min(cellData.length - 1, player.position + value);
  player.position = newPosition;
  currentCellIndex = newPosition;
  renderPawns();
  renderPlayersList();

  const cell = cellData[newPosition];
  showCellPreview(newPosition);

  if(newPosition === cellData.length - 1){
    phase = "waitingDone";
    doneBtn.textContent = "🏆 Finalizar";
  } else {
    doneBtn.textContent = "✅ Cumplido";
    phase = "waitingDone";
  }

  updateTurnPanel();
}

function completeTask(){
  if(phase !== "waitingDone") return;

  const player = players[currentPlayerIndex];
  let cell = cellData[player.position];

  if(player.position === cellData.length - 1){
    finishGame(player);
    return;
  }

  if(cell.effect && cell.effect.move){
    const old = player.position;
    player.position = clamp(player.position + cell.effect.move, 0, cellData.length - 1);
    renderBoard();
    renderPawns();
    const direction = cell.effect.move > 0 ? "avanzó" : "retrocedió";
    showToast(`${player.name} ${direction} por efecto de la casilla.`);
    if(player.position === cellData.length - 1){
      showCellPreview(player.position);
      phase = "waitingDone";
      doneBtn.textContent = "🏆 Finalizar";
      updateTurnPanel();
      return;
    }
  }

  nextTurn();
}

function nextTurn(){
  currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
  phase = "waitingRoll";
  rolledValue = null;
  diceValue.textContent = "🎲";
  diceResult.textContent = "Dado listo";
  doneBtn.textContent = "✅ Cumplido";
  updateTurnPanel();
  showIntroTask();
}

function finishGame(player){
  phase = "finished";
  updateTurnPanel();
  winnerMessage.textContent = `${player.name} llegó a la meta y alcanzó la Institución Exitosa.`;
  winnerModal.classList.remove("hidden");
  launchConfetti();
}

function typeColor(type){
  const map = {
    start:"#16a34a", question:"#1d4ed8", mission:"#ea580c", vision:"#0f766e",
    values:"#15803d", challenge:"#dc2626", bonus:"#f59e0b", back:"#b91c1c",
    objectives:"#ca8a04", gestion:"#6d28d9", meta:"#f59e0b"
  };
  return map[type] || "#64748b";
}

function clamp(n,min,max){return Math.max(min,Math.min(max,n));}

function showToast(message){
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(()=>toast.classList.remove("show"),1800);
}

function launchConfetti(){
  for(let i=0;i<120;i++){
    const piece = document.createElement("div");
    piece.style.position = "fixed";
    piece.style.left = Math.random()*100 + "vw";
    piece.style.top = "-20px";
    piece.style.width = "10px";
    piece.style.height = "16px";
    piece.style.borderRadius = "3px";
    piece.style.background = colors[i % colors.length];
    piece.style.zIndex = "120";
    piece.style.pointerEvents = "none";
    piece.style.animation = `fall ${1.6 + Math.random()*1.2}s linear forwards`;
    piece.style.transform = `rotate(${Math.random()*360}deg)`;
    document.body.appendChild(piece);
    setTimeout(()=>piece.remove(),3000);
  }

  const style = document.createElement("style");
  style.textContent = `@keyframes fall{to{transform:translateY(110vh) rotate(720deg);opacity:.2}}`;
  document.head.appendChild(style);
  setTimeout(()=>style.remove(),3200);
}

function newGame(){
  winnerModal.classList.add("hidden");
  gameScreen.classList.add("hidden");
  setupScreen.classList.remove("hidden");
  phase = "setup";
}

function toggleFullscreen(){
  if(!document.fullscreenElement){
    document.documentElement.requestFullscreen?.();
  }else{
    document.exitFullscreen?.();
  }
}

playerCount.addEventListener("change", buildNameFields);
startGameBtn.addEventListener("click", startGame);
rollBtn.addEventListener("click", rollDice);
doneBtn.addEventListener("click", completeTask);
showAnswerBtn.addEventListener("click",()=>answerText.classList.toggle("hidden"));
document.getElementById("newGameBtn").addEventListener("click", newGame);
document.getElementById("finishBtn").addEventListener("click", newGame);
document.getElementById("fullscreenBtn").addEventListener("click", toggleFullscreen);

buildNameFields();


window.addEventListener("resize", () => {
  if(phase !== "setup"){
    calculateBoardPoints();
    renderBoard();
    renderPawns();
  }
});
