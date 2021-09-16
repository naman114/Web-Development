window.addEventListener("load", () => {
  const canvas = document.querySelector("#canvas");
  const ctx = canvas.getContext("2d");

  // Resizing
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  // Shapes
  //   ctx.fillRect(20, 20, 100, 100);
  //   ctx.strokeStyle = "red";
  //   ctx.lineWidth = 10;
  //   ctx.strokeRect(20, 20, 100, 100);

  //   Lines (Pentagon)
  ctx.beginPath();
  ctx.moveTo(150, 150);
  ctx.lineTo(250, 150);
  ctx.lineTo(250, 250);
  ctx.lineTo(200, 300);
  ctx.lineTo(150, 250);
  //   ctx.lineTo(150, 150);
  ctx.closePath();
  ctx.stroke();
});

window.addEventListener("resize", () => {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
});
