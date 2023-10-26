class Hero {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;
    switch (this.tipo) {
      case 'mago':
        ataque = 'usou magia';
        break;
      case 'guerreiro':
        ataque = 'usou espada';
        break;
      case 'monge':
        ataque = 'usou artes marciais';
        break;
      case 'ninja':
        ataque = 'usou shuriken';
        break;
      default:
        ataque = 'usou um ataque misterioso';
    }
    return `O ${this.tipo} atacou usando ${ataque}`;
  }
}

function atacar() {
  const nome = document.getElementById('hero-name').value;
  const idade = document.getElementById('hero-age').value;
  const tipo = document.getElementById('hero-type').value;

  const hero = new Hero(nome, idade, tipo);
  const resultado = hero.atacar();

  const output = document.getElementById('output');
  output.textContent = resultado;
}


