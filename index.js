class Cliente {
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    saldo;
    sacar(valor){
        if (this.saldo >= valor){
            this.saldo -= valor;
        }
    }
}

const contaCorrenteFelipe = new ContaCorrente();

constaCorrenteFelipe.saldo =  0;
contaCorrenteFelipe.agencia = 1001;

const cliente1 = new Cliente();
cliente1.nome = "Felipe";
cliente1.cpf = 6106184604;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 920010861086;

let valorSacado = 200;

if(contaCorrenteFelipe.saldo>= valorSacado){
    contaCorrenteFelipe.saldo -= valorSacado;
}

console.log(cliente2);
console.log(cliente1);  