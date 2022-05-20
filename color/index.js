function draw() {
  const canvas = document.getElementById("tutorial");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 6; j++) {
        ctx.fillStyle =
          "rgb(" +
          Math.floor(255 - 42.5 * i) +
          "," +
          Math.floor(255 - 42.5 * j) +
          ",0)";

        ctx.fillRect(j * 25, i * 25, 25, 25);
      }
    }
  }
}

function drawCircle() {
  const canvas = document.getElementById("tutorial");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 6; j++) {
        ctx.strokeStyle =
          "rgb(" +
          Math.floor(255 - 42.5 * i) +
          "," +
          Math.floor(255 - 42.5 * j) +
          ",0)";

        ctx.beginPath();
        ctx.arc(12.5 + j * 25, 12.5 + i * 25, 10, 0, Math.PI * 2, true);
        ctx.stroke();
      }
    }
  }
}

// 画透明度
function drawTransparency() {
  const canvas = document.getElementById("tutorial");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    // 画背景
    ctx.fillStyle = "#FD0";
    ctx.fillRect(0, 0, 75, 75);
    ctx.fillStyle = "#6C0";
    ctx.fillRect(75, 0, 75, 75);
    ctx.fillStyle = "#09F";
    ctx.fillRect(0, 75, 75, 75);
    ctx.fillStyle = "#F30";
    ctx.fillRect(75, 75, 75, 75);
    ctx.fillStyle = "#FFF";

    // 设置透明度值
    ctx.globalAlpha = 0.2;

    // 画半透明圆
    for (let i = 0; i < 7; i++) {
      ctx.beginPath();
      ctx.arc(75, 75, 10 + 10 * i, 0, Math.PI * 2, true);
      ctx.fill();
    }
  }
}

// rgba
function drawRgba() {
  const canvas = document.getElementById("tutorial");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    // 画背景
    ctx.fillStyle = "rgb(255,221,0)";
    ctx.fillRect(0, 0, 150, 37.5);
    ctx.fillStyle = "rgb(102,204,0)";
    ctx.fillRect(0, 37.5, 150, 37.5);
    ctx.fillStyle = "rgb(0,153,255)";
    ctx.fillRect(0, 75, 150, 37.5);
    ctx.fillStyle = "rgb(255,51,0)";
    ctx.fillRect(0, 112.5, 150, 37.5);

    // 设置透明度值
    ctx.globalAlpha = 0.2;

    // 画半透明圆
    for (let i = 0; i < 10; i++) {
      ctx.fillStyle = "rgba(255,255,255," + (i + 1) / 10 + ")";
      for (let j = 0; j < 4; j++) {
        ctx.fillRect(5 + i * 14, 5 + j * 37.5, 14, 27.5);
      }
    }
  }
}

// 线条属性
function drawLineWidth() {
  const canvas = document.getElementById("tutorial");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    for (let i = 0; i < 10; i++) {
      ctx.lineWidth = i + 1;
      ctx.beginPath();
      ctx.moveTo(5 + i * 14, 5);
      ctx.lineTo(5 + i * 14, 140);
      ctx.stroke();
    }
  }
}

// lineCap
function drawLineCap() {
  const canvas = document.getElementById("tutorial");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");

    const lineCap = ["butt", "round", "square"];
    // 创建路径
    ctx.strokeStyle = "#09f";
    ctx.beginPath();
    ctx.moveTo(10, 10);
    ctx.lineTo(140, 10);
    ctx.moveTo(10, 140);
    ctx.lineTo(140, 140);
    ctx.stroke();

    // 画线条
    ctx.strokeStyle = "black";
    for (let i = 0; i < lineCap.length; i++) {
      const cap = lineCap[i];
      ctx.lineWidth = 15;

      ctx.beginPath();
      ctx.lineCap = cap;
      ctx.moveTo(25 + i * 50, 10);
      ctx.lineTo(25 + i * 50, 140);
      ctx.stroke();
    }
  }
}

// lineJoin
function drawLineJoin() {
  const canvas = document.getElementById("tutorial");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");

    const lineJoin = ["round", "bevel", "miter"];

    ctx.lineWidth = 10;
    for (let i = 0; i < lineJoin.length; i++) {
      ctx.lineJoin = lineJoin[i];

      ctx.beginPath();
      ctx.moveTo(-5, 5 + i * 40);
      ctx.lineTo(35, 45 + i * 40);
      ctx.lineTo(75, 5 + i * 40);
      ctx.lineTo(115, 45 + i * 40);
      ctx.lineTo(155, 5 + i * 40);
      ctx.stroke();
    }
  }
}

// lineDash
function drawLineDash() {
  const canvas = document.getElementById("tutorial");
  let ctx;
  let offset = 0;

  if (canvas.getContext) {
    ctx = canvas.getContext("2d");
  }

  function drawDashRect(offset) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.setLineDash([4, 2]);
    ctx.lineDashOffset = -offset;

    ctx.strokeRect(10, 10, 100, 100);
  }

  function march() {
    offset++;

    if (offset > 16) {
      offset = 0;
    }

    drawDashRect(offset);
    setTimeout(march, 20);
  }

  march();
}

// Gradients
function drawGradients() {
  const canvas = document.getElementById("tutorial");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");

    lineargradient = ctx.createLinearGradient(0, 0, 150, 150);
    lineargradient.addColorStop(0, "white");
    lineargradient.addColorStop(1, "black");
  }
}

// createLinearGradient
function drawCreateLinearGradient() {
  const canvas = document.getElementById("tutorial");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");

    // Create gradients
    const lingrad = ctx.createLinearGradient(0, 0, 0, 150);
    lingrad.addColorStop(0, "#00ABEB");
    lingrad.addColorStop(0.5, "#fff");
    lingrad.addColorStop(0.5, "#26C000");
    lingrad.addColorStop(1, "#fff");

    const lingrad2 = ctx.createLinearGradient(0, 50, 0, 95);
    lingrad2.addColorStop(0.5, "#000");
    lingrad2.addColorStop(1, "rgba(0,0,0,0)");

    // assign gradients to fill and stroke styles
    ctx.fillStyle = lingrad;
    ctx.strokeStyle = lingrad2;

    // draw shapes
    ctx.fillRect(10, 10, 130, 130);
    ctx.strokeRect(50, 50, 50, 50);
  }
}

// draw()
// drawCircle()
// drawTransparency()
// drawRgba()
// drawLineWidth()
// drawLineCap()
// drawLineJoin()
// drawLineDash()
// drawGradients()
drawCreateLinearGradient()