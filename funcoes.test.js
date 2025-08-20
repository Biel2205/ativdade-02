const funcoes = require('./funcoes')

test('ehPar deve retornar true para números pares e false para ímpares', function () {
  expect(funcoes.ehPar(4)).toBe(true);
  expect(funcoes.ehPar(5)).toBe(false);
});

test('temMaisDeCincoLetras deve retornar true para palavras longas e false para curtas', function () {
  expect(funcoes.temMaisDeCincoLetras("computador")).toBe(true);
  expect(funcoes.temMaisDeCincoLetras("casa")).toBe(false);
});

test('verificarIdade deve retornar maior de idade ou menor de idade', function () {
  expect(funcoes.verificarIdade(18)).toBe("maior de idade");
  expect(funcoes.verificarIdade(15)).toBe("menor de idade");
});

test('somar deve calcular corretamente a soma', function () {
  expect(funcoes.somar(5, 3)).toBe(8);
});

test('nomeComecaComA deve verificar se o nome começa com A ou a', function () {
  expect(funcoes.nomeComecaComA("Amanda")).toBe(true);
  expect(funcoes.nomeComecaComA("amigo")).toBe(true);
  expect(funcoes.nomeComecaComA("Pedro")).toBe(false);
});

test('campoVazio deve identificar string vazia', function () {
  expect(funcoes.campoVazio("")).toBe(true);
  expect(funcoes.campoVazio("teste")).toBe(false);
});

test('senhaValida deve validar tamanho mínimo de senha', function () {
  expect(funcoes.senhaValida("123456")).toBe(true);
  expect(funcoes.senhaValida("123")).toBe(false);
});

test('tipoNumero deve identificar positivo, negativo ou zero', function () {
  expect(funcoes.tipoNumero(10)).toBe("positivo");
  expect(funcoes.tipoNumero(-5)).toBe("negativo");
  expect(funcoes.tipoNumero(0)).toBe("zero");
});

test('multiplicar deve calcular corretamente o produto', function () {
  expect(funcoes.multiplicar(3, 4)).toBe(12);
});

test('emailValido deve verificar se contém @', function () {
  expect(funcoes.emailValido("teste@email.com")).toBe(true);
  expect(funcoes.emailValido("teste.com")).toBe(false);
});

test('podeVotar deve validar idade mínima de 16 anos', function () {
  expect(funcoes.podeVotar(16)).toBe(true);
  expect(funcoes.podeVotar(15)).toBe(false);
});

test('estaMaiusculo deve retornar true para texto todo em maiúsculo', function () {
  expect(funcoes.estaMaiusculo("OLA")).toBe(true);
  expect(funcoes.estaMaiusculo("Ola")).toBe(false);
});

test('passou deve retornar true para notas >= 7', function () {
  expect(funcoes.passou(7)).toBe(true);
  expect(funcoes.passou(10)).toBe(true);
  expect(funcoes.passou(6)).toBe(false);
});

test('entreDezEVinte deve validar se número está entre 10 e 20', function () {
  expect(funcoes.entreDezEVinte(10)).toBe(true);
  expect(funcoes.entreDezEVinte(15)).toBe(true);
  expect(funcoes.entreDezEVinte(20)).toBe(true);
  expect(funcoes.entreDezEVinte(9)).toBe(false);
  expect(funcoes.entreDezEVinte(21)).toBe(false);
});

test('nomeNaLista deve verificar se nome existe na lista fixa', function () {
  expect(funcoes.nomeNaLista("João")).toBe(true);
  expect(funcoes.nomeNaLista("Maria")).toBe(true);
  expect(funcoes.nomeNaLista("Pedro")).toBe(true);
  expect(funcoes.nomeNaLista("Carlos")).toBe(false);
});
