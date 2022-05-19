// 矩形
function draw() {
  const canvas = document.getElementById('tutorial')
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d')
    // ctx.fillRect(25, 25, 100, 100);
    // ctx.clearRect(45, 45, 60, 60);
    // ctx.strokeRect(50, 50, 50, 50);
    
    // 第二种矩形方法
    // ctx.rect(25, 25, 100, 100)
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

// 多个圆
function drawMoreCircle() {
  const canvas = document.getElementById('circle')
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d')

    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 3; j++) {
        ctx.beginPath()
        let x = 25 + j * 50
        let y = 25 + i * 50
        let radius = 20
        let startAngle = 0
        let endAngle = Math.PI + (Math.PI * j) / 2
        let anticlockwise = i % 2 == 0 ? false : true // true顺
        ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise)

        if (i > 1) {
          ctx.fill()
        } else {
          ctx.stroke()
        }
      }
    }
  }
}

// 二次贝塞尔曲线
function drawQuadratic() {
  const canvas = document.getElementById('tutorial')
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d')

    ctx.beginPath()
    ctx.moveTo(75, 25)
    ctx.quadraticCurveTo(25, 25, 25, 62.5);
    ctx.quadraticCurveTo(25, 100, 50, 100);
    ctx.quadraticCurveTo(50, 120, 30, 125);
    ctx.quadraticCurveTo(60, 120, 65, 100);
    ctx.quadraticCurveTo(125, 100, 125, 62.5);
    ctx.quadraticCurveTo(125, 25, 75, 25);
    ctx.stroke()
  }
}

// Path2D
function drawPath2D() {
  const canvas = document.getElementById('tutorial')
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d')

    const rectangle = new Path2D()
    rectangle.rect(10, 10, 50, 50)

    const circle = new Path2D()
    circle.moveTo(125, 35)
    circle.arc(100, 35, 25, 0, Math.PI * 2)

    ctx.stroke(rectangle)
    ctx.fill(circle)
  }
}

// SVG Path
function drawSvgPath() {
  const canvas = document.getElementById('tutorial')
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d')

    const p = new Path2D('M10 10 h 80 v 80 h -80 Z')
    ctx.fill(p)
  }
}

// draw()
// drawTriangle()
// drawFace()
// drawTwoTriangle()
// drawMoreCircle()
// drawQuadratic()
// drawPath2D()
drawSvgPath()