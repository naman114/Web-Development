window.addEventListener("load", () => {
  /* CANVAS */
  const canvas = document.querySelector("#canvas");
  const ctx = canvas.getContext("2d");

  // Resizing
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  //   Variables
  let drawing = false;
  let curStrokeStyle = "#000000";

  //   Functions
  function startDraw(e) {
    drawing = true;

    // Clicks will now give dots
    draw(e);
  }
  function endDraw(e) {
    drawing = false;

    // Lifting the pen
    ctx.beginPath();
  }
  function draw(e) {
    if (!drawing) return;

    ctx.lineWidth = 10;
    ctx.strokeStyle = curStrokeStyle;
    ctx.lineCap = "round";

    let coord = getMousePos(canvas, e);
    ctx.lineTo(coord.x, coord.y);
    ctx.stroke();

    // Reduces pixelation
    ctx.beginPath();
    ctx.moveTo(coord.x, coord.y);
  }
  // EventListeners
  canvas.addEventListener("mousedown", startDraw);
  canvas.addEventListener("mouseup", endDraw);
  canvas.addEventListener("mousemove", draw);

  //   Resizing
  //   https://stackoverflow.com/questions/11179274/html-canvas-drawing-disappear-on-resizing
  //   https://stackoverflow.com/questions/4938346/canvas-width-and-height-in-html5

  // Temporary canvas to store the current state
  let inMemCanvas = document.createElement("canvas");
  let inMemCtx = inMemCanvas.getContext("2d");

  window.addEventListener("resize", () => {
    // Store the current state of the canvas into the temporary canvas
    inMemCanvas.width = canvas.width;
    inMemCanvas.height = canvas.height;
    inMemCtx.drawImage(canvas, 0, 0);

    // Reset the canvas dimensions
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    // Redraw the temporary canvas
    ctx.drawImage(inMemCanvas, 0, 0);
  });

  /* TOOLBAR */
  let penIcon = document.querySelector(".icon-pen");
  let eraserIcon = document.querySelector(".icon-erase");
  let eraseAllIcon = document.querySelector(".icon-erase-all");
  let selectIcon = document.querySelector(".icon-select");
  let matrixIcon = document.querySelector(".icon-matrix");
  let graphIcon = document.querySelector(".icon-graph");
  let textboxIcon = document.querySelector(".icon-textbox");
  let settingsIcon = document.querySelector(".icon-settings");

  penIcon.addEventListener("click", (e) => {
    UpdateIcons(e);
    curStrokeStyle = "#000000";
  });
  eraserIcon.addEventListener("click", (e) => {
    UpdateIcons(e);
    curStrokeStyle = "lightgray";
  });
  eraseAllIcon.addEventListener("click", (e) => {
    UpdateIcons(e);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  });
  selectIcon.addEventListener("click", (e) => {
    UpdateIcons(e);
  });
  matrixIcon.addEventListener("click", (e) => {
    UpdateIcons(e);
  });
  graphIcon.addEventListener("click", (e) => {
    UpdateIcons(e);
  });
  textboxIcon.addEventListener("click", (e) => {
    UpdateIcons(e);
  });
  settingsIcon.addEventListener("click", (e) => {
    // console.log(e.currentTarget);
    UpdateIcons(e);
  });
});

function UpdateIcons(e) {
  let selectedIcon = document.querySelector(".toolbar-icon.selected");
  selectedIcon.classList.remove("selected");
  e.currentTarget.classList.add("selected");

  // let selectedSvg = document.querySelector(".svg-icon.selected");
  // let temp = selectedSvg.src;
  // selectedSvg.src = selectedSvg.alt;
  // selectedSvg.alt = temp;
  // selectedSvg.classList.remove("selected");

  // let targetSvg = document.getElementsByClassName(
  //   e.explicitOriginalTarget.classList[1]
  // );
  // console.log(targetSvg[0]);
  // temp = targetSvg.src;
  // targetSvg.src = targetSvg.alt;
  // targetSvg.alt = temp;
  // targetSvg[0].classList.add("selected");
}

function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top,
  };
}
