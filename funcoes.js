function ehPar(numero) {
  return numero % 2 === 0;
}

function temMaisDeCincoLetras(palavra) {
  return palavra.length > 5;
}

function verificarIdade(idade) {
  return idade >= 18 ? "maior de idade" : "menor de idade";
}

function somar(a, b) {
  return a + b;
}

function nomeComecaComA(nome) {
  return nome[0].toUpperCase() === 'A';
}

function campoVazio(texto) {
  return texto === "";
}

function senhaValida(senha) {
  return senha.length >= 6;
}

function tipoNumero(n) {
  if (n > 0) return "positivo";
  
  if (n < 0) return "negativo";

  return "zero";
}

function multiplicar(x, y) {
  return x * y;
}

function emailValido(email) {
  return email.includes("@");
}

function podeVotar(idade) {
  return idade >= 16;
}

function estaMaiusculo(palavra) {
  return palavra === palavra.toUpperCase();
}

function passou(nota) {
  return nota >= 7;
}

function entreDezEVinte(num) {
  return num >= 10 && num <= 20;
}

function nomeNaLista(nome) {
  const lista = ['João', 'Maria', 'Pedro'];
  return lista.includes(nome);
}

module.exports = {
  ehPar,
  temMaisDeCincoLetras,
  verificarIdade,
  somar,
  nomeComecaComA,
  campoVazio,
  senhaValida,
  tipoNumero,
  multiplicar,
  emailValido,
  podeVotar,
  estaMaiusculo,
  passou,
  entreDezEVinte,
  nomeNaLista
}