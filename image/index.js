function drawImage() {
  const canvas = document.getElementById('tutorial')
  console.log('in here now')
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d')
    
    const img = new Image()
    img.onload = function () {
      ctx.drawImage(img, 0, 0);
      ctx.beginPath();
      ctx.moveTo(30,96);
      ctx.lineTo(70,66);
      ctx.lineTo(103,76);
      ctx.lineTo(170,15);

      ctx.stroke();
    }

    img.src = 'https://mdn.mozillademos.org/files/5395/backdrop.png';
  }
}

function drawScalingImage() {
  const canvas = document.getElementById('tutorial')
  console.log('in here now')
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d')
    
    const img = new Image()
    img.onload = function () {
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 3; j++) {
          ctx.drawImage(img, j*50, i*38, 50, 38)
        }
      }
    }

    img.src = 'https://mdn.mozillademos.org/files/5397/rhino.jpg';
  }
}

// drawImage()
drawScalingImage()