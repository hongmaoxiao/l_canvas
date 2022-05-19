// 矩形
function draw() {
  const canvas = document.getElementById('tutorial')
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d')
    ctx.fillRect(25, 25, 100, 100);
    ctx.clearRect(45, 45, 60, 60);
    ctx.strokeRect(50, 50, 50, 50);
  }
}

// 三角形
function drawTriangle() {
  const canvas = document.getElementById('tutorial')
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d')

    ctx.beginPath();
    ctx.moveTo(75, 50);
    ctx.lineTo(100, 75);
    ctx.lineTo(100, 25);
    ctx.fill();
  }
}

// 画笑脸
function drawFace() {
  const canvas = document.getElementById('tutorial')
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d')

    ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true) // 圆
    ctx.moveTo(110, 75);
    ctx.arc(75, 75, 35, 0, Math.PI, false) // 口(顺时针)
    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true) // 左眼
    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true) // 右眼
    ctx.stroke();
  }
}

// 两个三角形
function drawTwoTriangle() {
  const canvas = document.getElementById('tutorial')
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d')

    // 填充三角形
    ctx.beginPath();
    ctx.moveTo(25, 25);
    ctx.lineTo(105, 25);
    ctx.lineTo(25, 105);
    ctx.fill();

    // 描边三角形
    ctx.beginPath()
    ctx.moveTo(125, 125)
    ctx.lineTo(125, 45)
    ctx.lineTo(45, 125)
    ctx.closePath();
    ctx.stroke()
  }
}

// draw()
// drawTriangle()
// drawFace()
drawTwoTriangle()