 class Aluno {
    #cpf = "000.000.00-00"
    #nomeDaMae = "Maria"
    #nomeDoPai = "Joao"
    #endereco = "Casa da mãe Joana"


    constructor (nome, matricula, email, anoDeNascimento) {
        this.nome = nome;
        this.matricula = matricula;
        this.email = email;
        this.anoDeNascimento = anoDeNascimento; 
    }

    getCPF() {
        return this.#cpf;
    }

    getNomeDaMae() {
        return this.#nomeDaMae;
    }

    getNomeDoPai() {
        return this.#nomeDoPai;
    }

    #calcularIdade() {
        const anoAtual = new Date().getFullYear();
        return anoAtual - this.anoDeNascimento;
    }

    getIdade() {
        return this.#calcularIdade();
    }

 }

 const aluno1 = new Aluno("Pedro", 1234, "@gmail.com", 2006);
 console.log(`Nome: ${aluno1.getNome()}, idade `)
 console.log(aluno1.getIdade())