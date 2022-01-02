// criando a classe dos jogadores com suas posiveis ações

class jogador {
  nome;
  saldo = 1045;

  constructor(nome) {
    this.nome = nome;
  }

  //depositar valor na conta

  depositar(valor) {
    if (valor < 0) {
      alert("não é possivel efetuar transações com valores negativo");
      return;
    }
    if (this.saldo <= 0) {
      alert("este jogador esta fora");
      return;
    } else {
      this.saldo += valor;
    }
  }

  //transação valida

  //retirar valor da conta

  sacar(valor) {
    if (valor < 0) {
      alert("não é possivel efetuar transações com valores negativo");
      return;
    }

    if (this.saldo <= 0) {
      alert("este jogador esta fora");
      return;
    }

    if (this.saldo < valor) {
      alert("saldo insuficiente,escolha um valor menor");
      return;
    } else {
      this.saldo -= valor;
      return valor;
    }
  }

  //tranferir

  transferir(jogador, valor) {
    if (jogador.saldo <= 0) {
      alert("jogador fora, a conta ja está desativada");
      return;
    } else if (this.saldo < valor) {
      alert("saldo insuficiente,escolha um valor menor");
      return;
    } else {
      this.sacar(valor);
      jogador.depositar(valor);
    }
  }
}

// criando jogadores

var contador = 1;
var conta = [];

var btnAdicionar = document.querySelector("#adicionar-jogador");
btnAdicionar.addEventListener("click", function () {
  event.preventDefault();

  let nomeJogadortxt = document.querySelector("#nome");
  let nomeJogador = nomeJogadortxt.value;
  let jogadorCriado = new jogador(nomeJogador);
  conta[contador] = jogadorCriado;
  let jogadoresCriados = document.querySelector("#jogadores");
  jogadoresCriados.innerHTML += `conta${contador}: ${conta[contador].nome},Saldo inicial R$: ${conta[contador].saldo}<br>`;
  contador++;
});

//var status =  document.querySelector("#statusDoJogo")

// ação de Deposito no jogo

var botaoDeDeposito = document.querySelector("#btnDepositar");
botaoDeDeposito.addEventListener("click", function () {
  event.preventDefault();

  var valorinputDeposito = document.querySelector("#inputDeposito");
  var depositoDigitado = Number(valorinputDeposito.value);
  var inputContaDeposito = document.querySelector("#inputContaDeposito");
  var nContaDep = inputContaDeposito.value;
  var ultimamovimentacao = document.querySelector("#ultimaMovimentacao");
  conta[nContaDep].depositar(depositoDigitado);
  ultimamovimentacao.innerHTML = `Depósito de R$${depositoDigitado} para ${conta[nContaDep].nome} `;

  atualizarStatus();
});

// ação de saque no jogo
var botaoDeSaque = document.querySelector("#btnSacar");
botaoDeSaque.addEventListener("click", function () {
  event.preventDefault();

  var valorinputsaque = document.querySelector("#inputSaque");
  var saqueDigitado = Number(valorinputsaque.value);
  var inputContaSaque = document.querySelector("#inputContaSaque");
  var nContaSaq = inputContaSaque.value;
  var ultimamovimentacao = document.querySelector("#ultimaMovimentacao");
  conta[nContaSaq].sacar(saqueDigitado);
  ultimamovimentacao.innerHTML = `Retirada de R$${saqueDigitado} de ${conta[nContaSaq].nome} `;

  atualizarStatus();
});

// ação de tranferencia no jogo
var btnTransferir = document.querySelector("#btnTransferir");
btnTransferir.addEventListener("click", function () {
  event.preventDefault();

  var valorinputTranferencia = document.querySelector(
    "#inputValorDaTransferencia"
  );
  var tranferenciaDigitada = Number(valorinputTranferencia.value);
  var inputContaEmissora = document.querySelector("#inputContaEmissora");
  var nContaEmissora = inputContaEmissora.value;
  var inputContaReceptora = document.querySelector("#inputContaReceptora");
  var nContaReceptora = inputContaReceptora.value;
  var ultimamovimentacao = document.querySelector("#ultimaMovimentacao");
  conta[nContaEmissora].transferir(
    conta[nContaReceptora],
    tranferenciaDigitada
  );
  ultimamovimentacao.innerHTML = `Transferência de R$ ${tranferenciaDigitada} de ${conta[nContaEmissora].nome} para ${conta[nContaReceptora].nome}`;

  atualizarStatus();
});

function atualizarStatus() {
  var status = document.querySelector("#statusDoJogo");
  status.innerHTML = "";
  for (let i = 1; i <= contador; i++) {
    status.innerHTML += `Saldo de ${conta[i].nome} R$ ${conta[i].saldo}<br>`;

    if (conta[i].saldo <= 0) {
      status.innerHTML += `${conta[i].nome} Quebrou e está fora<br>`;
    }
  }
}
