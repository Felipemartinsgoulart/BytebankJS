import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    static numeroDeContas = 0;
    agencia;
    _cliente;
    _saldo = 0;

    constructor(cliente, agencia) {
        this.cliente = cliente;
        this.agencia = agencia;
        this.numeroDeContas += 1;
    }

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
        
    }
    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    //Método Sacar
    sacar(valor) {
        if (this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }
    //Método Depositar
    depositar(valor){
        if(valor <= 0){
            return;
        }
        this._saldo += valor;
    }
    //Método transferir
    transferir (valor, conta){
        conta.cidade = "São Paulo";
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado); 
    }
    
}