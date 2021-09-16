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
});

window.addEventListener("resize", () => {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
});
