// modelo.js

class Atleta {
  constructor (nome, altura) {
    this.__nome = nome
    this.__altura = altura
  }

  get nome () {
    return this.__nome
  }

  get altura () {
    return this.__altura
  }
}

class Equipe {
  constructor (nome) {
    this.__nome = nome
    this.__atletas = []
  }

  adicione (atleta) {
    this.__atletas.push(atleta)
  }

  get nome () {
    return this.__nome
  }

  get atletas () {
    return this.__atletas
  }

  encontreAtletasComAlturmaMinima (alturaMinima) {
    let maiorQue = altura => a => a.__altura >= altura

    const ret = this.__atletas.filter(maiorQue(alturaMinima))

    return ret
  }
}

export {Atleta, Equipe}
