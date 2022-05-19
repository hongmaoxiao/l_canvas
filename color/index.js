function draw() {
  const canvas = document.getElementById('tutorial')
  if (canvas.getContext) {
  const ctx = canvas.getContext('2d')
   for (let i = 0; i < 6; i++) {
     for (let j = 0; j < 6; j++) {
       ctx.fillStyle = 'rgb(' + Math.floor(255 - 42.5 * i) + ','
       + Math.floor(255 - 42.5 * j) + ',0)';

       ctx.fillRect(j * 25, i * 25, 25, 25);
     }
   }
  }
}

function drawCircle() {
  const canvas = document.getElementById('tutorial')
  if (canvas.getContext) {
  const ctx = canvas.getContext('2d')
   for (let i = 0; i < 6; i++) {
     for (let j = 0; j < 6; j++) {
       ctx.strokeStyle = 'rgb(' + Math.floor(255 - 42.5 * i) + ','
       + Math.floor(255 - 42.5 * j) + ',0)';

       ctx.beginPath();
       ctx.arc(12.5 + j * 25, 12.5 + i * 25, 10, 0, Math.PI * 2, true);
       ctx.stroke();
     }
   }
  }
}

// draw()
drawCircle()