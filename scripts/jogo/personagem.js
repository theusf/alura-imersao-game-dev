class Personagem extends Animacao{
  
  constructor(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite){
    super(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite)
  
    this.yInicial = height - this.altura
    this.y = this.yInicial
    
    this.velocidadeDoPulo = 0;
    this.gravidade = 3;
    
    this.qtdPulos;
  }

  pula() {
    if (this.qtdPulos < 2) 
      this.velocidadeDoPulo = - 30;
    this.qtdPulos++;
    //console.log(this.qtdPulos)
  }

  
  aplicaGravidade() {
    this.y = this.y + this.velocidadeDoPulo;
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;
    
    if (this.y > this.yInicial){
      this.y = this.yInicial;
    }
    
    if (this.y === this.yInicial) {
      this.qtdPulos=0;
    }
    
    console.log(this.y + ' e ' + this.yInicial)
  }
  
  estaColidindo(inimigo) {
      const precisao_hitBox = 0.7;
    
      noFill();
    
      rect( this.x,
                     this.y,
                     this.largura * precisao_hitBox,
                     this.altura * precisao_hitBox)
    
          rect( inimigo.x,
                      inimigo.y,
                      inimigo.largura * precisao_hitBox,
                      inimigo.altura * precisao_hitBox)
    
      const colisao = collideRectRect(
                      this.x,
                     this.y,
                     this.largura,
                     this.altura,
                      inimigo.x,
                      inimigo.y,
                      inimigo.largura,
                      inimigo.altura
                     );
    
    return colisao;
  }
  
}