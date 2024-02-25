
let canvasWidth = 800//window.innerWidth
let canvasHeight = 800// window.innerHeight
let totalCircles = 10
let dimension = 0
let margin = 40
let dimensionModulator = .25 // para hacerlo mas pequeno moverse entre 1.0 y 0, y para hacerlo mas grande 1.0 >

function setup() {
  createCanvas(canvasWidth,canvasHeight);
  dimension = (width-2*margin)/totalCircles
  angleMode(DEGREES)
}

function draw() {
  background(0)
  noFill()
  stroke(255)
  dimensionModulator = sin(frameCount)
  for(let i = 0; i < totalCircles; i++) {
    for(let j = 0 ; j < totalCircles; j++) {
      circle(margin + dimension/2 + i*dimension, margin+dimension/2+j*dimension, dimensionModulator * dimension)
    }

  }
}