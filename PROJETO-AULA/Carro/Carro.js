 class Carro {
    
    #chassi = "";
    #ano = "";

    constructor(placa, marca, nome) {
        this.placa = "BR1092"; //placa
        this.marca = "Volkswagen"; // marca
        this.nome = "Jetta"; // nome
    }

    getNome() {
        return this.nome;
    }

    #getChassi() {
        return this.#chassi;
    }

    carro1 = new Carro() //ou passar os parametros na criação ("123456", "volkswagen", "jetta")
 }