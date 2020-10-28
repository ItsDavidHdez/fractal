const canvas = document.getElementById("canvas");
const button = document.getElementsByClassName("button");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const dimention = canvas.getContext("2d");

const maxLevel = 5;
const branches = 2;
const sides = Math.floor(Math.random() * 10 + 3);
const spread = Math.random() * 48 + 0.51;

dimention.translate(canvas.width / 2, canvas.height / 2);

const angle = Math.PI * 2 * spread;

const drawLine = (level) => {
  if (level > maxLevel) return;

  dimention.strokeStyle = "#FFF";
  dimention.lineWidth = 2;
  dimention.beginPath();
  dimention.moveTo(0, 0);
  dimention.lineTo(150, 0);
  dimention.stroke();

  for (let i = 1; i < branches + 1; i++) {
    dimention.save();
    dimention.translate((150 * i) / (branches + 1), 0);
    dimention.scale(0.5, 0.5);
    dimention.save();

    dimention.rotate(angle);
    drawLine(level + 1);
    dimention.restore();
    dimention.save();

    dimention.rotate(-angle);
    drawLine(level + 1);
    dimention.restore();

    dimention.restore();
  }
};

for (let i = 0; i < 5; i++) {
  drawLine(0);
  dimention.rotate((Math.PI * 2) / 5);
}
