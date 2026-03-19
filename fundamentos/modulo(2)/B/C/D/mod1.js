module.exports = class cachorro{
    constructor(nome){
        this.nome = nome;
    }

    latir() {
        console.log(`esse ${this.nome} está latindo au aua`)
    }
}