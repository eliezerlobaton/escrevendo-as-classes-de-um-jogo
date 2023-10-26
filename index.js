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
        ataque = 'magia';
        break;
      case 'guerreiro':
        ataque = 'uma espada';
        break;
      case 'monge':
        ataque = 'artes marciais';
        break;
      case 'ninja':
        ataque = 'um shuriken';
        break;
      default:
        ataque = 'um ataque misterioso';
    }
    return `O ${this.tipo} ${this.nome} atacou usando ${ataque}`;
  }
}

function lutar() {
  const nomeHero1 = document.getElementById('hero1-name').value;
  const idadeHero1 = document.getElementById('hero1-age').value;
  const tipoHero1 = document.getElementById('hero1-type').value;

  const nomeHero2 = document.getElementById('hero2-name').value;
  const idadeHero2 = document.getElementById('hero2-age').value;
  const tipoHero2 = document.getElementById('hero2-type').value;

  const hero1 = new Hero(nomeHero1, idadeHero1, tipoHero1);
  const hero2 = new Hero(nomeHero2, idadeHero2, tipoHero2);

  const resultadoHero1 = hero1.atacar();
  const resultadoHero2 = hero2.atacar();

  const output = document.getElementById('output');
  output.innerHTML = `<p>${resultadoHero1}</p><p>${resultadoHero2}</p>`;
}
