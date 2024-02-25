
/* Cada circulo es una persona en un territorio, el movimiento del cada uno exagerbandoce genera roces, y crea espacios.
aparecen opciones, caminos, formas nuevas.
*/

let canvasWidth = window.innerWidth
let canvasHeight = window.innerHeight
let totalCircles = 10
let dimension = 0
let margin = 40
let dimensionModulator = .25 // para hacerlo mas pequeno moverse entre 1.0 y 0, y para hacerlo mas grande 1.0 >
let frequence = .01
let colors = ["#ffd60a", "#ffc300", "#003566", "#001d3d" ]
let x,y

function setup() {
  createCanvas(canvasWidth,canvasHeight);
  dimension = (width-2*margin)/totalCircles
  angleMode(DEGREES)
}

function draw() {
  background(0)
  noFill()
  stroke(colors[0])
  dimensionModulator = sin(frequence * frameCount) * 10
  for(let i = 0; i < totalCircles; i++) {
    for(let j = 0 ; j < totalCircles; j++) {
      x = margin + dimension/2 + i*dimension
      y = margin+dimension/2+j*dimension
      circle(x, y, dimensionModulator * dimension)
    }

  }
}