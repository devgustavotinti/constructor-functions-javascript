function Carro(marca, preço) {
  this.marca = marca
  this.preco = preço
}

const honda = new Carro('honda', 3000)
const fiat = new Carro('fiat', 3000)


function Carro2(marca, precoInicial) {
  const taxa = 1.2
  const precoFinal = precoInicial * taxa
  this.marca = marca
  this.preco = precoFinal
}

const mazda = new Carro2('Madza', 5000)