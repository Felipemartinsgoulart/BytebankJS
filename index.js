const conta2 = new ContaCorrente();
conta2.cliente = null;
conta2.cliente.nome = "Alice";
//conta2.cliente.cpf = 88822233309;
conta2.agencia = 102;

let valor = 200;
contaCorrenteRicardo.transferir(valor, conta2);

console.log(conta2);