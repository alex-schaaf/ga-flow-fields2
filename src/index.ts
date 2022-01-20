const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const strokeLength = 20;

const count = 20000;
for (let n = 0; n < count; n++) {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height;

  let value = getValue(x, y);
  ctx.save();
  ctx.translate(x, y);
  render(value);
  ctx.restore();
}

function getValue(x: number, y: number): number {
  return (Math.sin(x * 0.01) + Math.sin(y * 0.01)) * 1 * Math.PI * 2;
}

function render(value: number) {
  ctx.rotate(value);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(strokeLength, 1);
  ctx.stroke();
}
