function drawHelloworld() {
  const canvas = document.getElementById('tutorial')
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d')
    
    ctx.font = "20px serif"
    ctx.fillText("Hello, World!", 10, 50);
  }
}

function drawHelloworldStroke() {
  const canvas = document.getElementById('tutorial')
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d')
    
    ctx.font = "20px serif"
    ctx.strokeText("Hello, World!", 10, 50);
  }
}

// baseline
function drawBaseline() {
  const canvas = document.getElementById('tutorial')
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d')
    
    ctx.font = "20px serif"
    ctx.textBaseline = 'bottom';
    ctx.strokeText("Hello, World!", 0, 50);
  }
}

// measureText
function drawMeasureText() {
  const canvas = document.getElementById('tutorial')
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d')
    
    const text = ctx.measureText('foo')
    console.log('text: ', text)
  }
}

// drawHelloworld()
// drawHelloworldStroke()
// drawBaseline()
drawMeasureText()