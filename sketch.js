let imagemCenario;
let imagemPersonagem;
let cenario;
let somDojOgo;
let personagem;

const altura_personagem = 135

function preload() {
  imagemCenario  = loadImage('imagens/cenario/floresta.png')
  imagemPersonagem = loadImage('imagens/personagem/correndo.png')
  somDoJogo = loadSound('sons/trilha_jogo.mp3')
}

function setup() {
  
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 1);
  personagem = new Personagem(imagemPersonagem);
  
  console.log(width)
  somDoJogo.loop()
  frameRate(40)
  
}

function draw() {
  cenario.exibe();
  cenario.move();
  
  personagem.exibe();
  

}
