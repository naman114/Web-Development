window.addEventListener("load", () => {
  const canvas = document.querySelector("#canvas");
  const ctx = canvas.getContext("2d");

  // Resizing
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  //   Variables
  let drawing = false;

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
    ctx.lineCap = "round";
    ctx.lineTo(e.pageX, e.pageY);
    ctx.stroke();

    // Reduces pixelation
    ctx.beginPath();
    ctx.moveTo(e.pageX, e.pageY);
  }
  // EventListeners
  canvas.addEventListener("mousedown", startDraw);
  canvas.addEventListener("mouseup", endDraw);
  canvas.addEventListener("mousemove", draw);

  //   Resizing
  // https://stackoverflow.com/questions/11179274/html-canvas-drawing-disappear-on-resizing

  // Temporary canvas to store the current state
  let inMemCanvas = document.createElement("canvas");
  let inMemCtx = inMemCanvas.getContext("2d");

  window.addEventListener("resize", () => {
    //   Store the current state of the canvas
    inMemCanvas.width = canvas.width;
    inMemCanvas.height = canvas.height;
    inMemCtx.drawImage(canvas, 0, 0);

    // Reset the canvas dimensions
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    // Redraw the temporary canvas
    ctx.drawImage(inMemCanvas, 0, 0);
  });
});
