export class ContaCorrente {
    agencia;
    _saldo = 0;

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
        return;
    }//Permite sacar somente se tiver saldo
    depositar(valor) {
        if (valor <= 0) {
            return;
        }
        this._saldo += valor;
    }//Permite despositar somente valores maiores que 0
    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}

