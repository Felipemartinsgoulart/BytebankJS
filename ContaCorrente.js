
export class ContaCorrente {
    agencia;
    _saldo = 0;

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
}