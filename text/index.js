function drawHelloworld() {
  const canvas = document.getElementById('tutorial')
  console.log('in here now')
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d')
    
    ctx.font = "20px serif"
    ctx.fillText("Hello, World!", 10, 50);
  }
}

drawHelloworld()